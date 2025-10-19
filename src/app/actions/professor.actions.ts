"use server";

import { revalidatePath } from "next/cache";
import { connect } from "../../../models/mongodb";
import Professor from "../../../models/professor.model";

export async function createProfessor(formData: FormData) {
  try {
    await connect();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const department = formData.get("department") as string;
    const specialization = formData.get("specialization") as string;
    const phone = formData.get("phone") as string;

    // Validation
    if (!name || !email || !department || !specialization) {
      return {
        success: false,
        message: "Please fill in all required fields",
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address",
      };
    }

    // Check if email already exists
    const existingProfessor = await Professor.findOne({ email: email.toLowerCase() });
    if (existingProfessor) {
      return {
        success: false,
        message: "A professor with this email already exists",
      };
    }

    // Create new professor
    const newProfessor = await Professor.create({
      name,
      email: email.toLowerCase(),
      department,
      specialization,
      phone: phone || "",
      userType: "professor",
    });

    revalidatePath("/dashboard/professors");

    return {
      success: true,
      message: "Professor created successfully!",
      data: {
        id: newProfessor._id.toString(),
        name: newProfessor.name,
        email: newProfessor.email,
        department: newProfessor.department,
        specialization: newProfessor.specialization,
        phone: newProfessor.phone,
        userType: newProfessor.userType,
        createdAt: newProfessor.createdAt.toISOString(),
      },
    };
  } catch (error: any) {
    console.error("Error creating professor:", error);

    // Handle duplicate email error from MongoDB
    if (error.code === 11000) {
      return {
        success: false,
        message: "A professor with this email already exists",
      };
    }

    return {
      success: false,
      message: "An error occurred while creating the professor",
    };
  }
}

export async function getProfessors() {
  try {
    await connect();

    const professors = await Professor.find({})
      .sort({ createdAt: -1 }) // Sort by newest first
      .lean(); // Convert to plain JavaScript objects

    return {
      success: true,
      data: professors.map((prof: any) => ({
        id: prof._id.toString(),
        name: prof.name,
        email: prof.email,
        department: prof.department,
        specialization: prof.specialization,
        phone: prof.phone || "",
        userType: prof.userType,
        createdAt: prof.createdAt.toISOString(),
      })),
    };
  } catch (error) {
    console.error("Error fetching professors:", error);
    return {
      success: false,
      message: "An error occurred while fetching professors",
      data: [],
    };
  }
}

export async function deleteProfessor(id: string) {
  try {
    await connect();

    const deletedProfessor = await Professor.findByIdAndDelete(id);

    if (!deletedProfessor) {
      return {
        success: false,
        message: "Professor not found",
      };
    }

    revalidatePath("/dashboard/professors");

    return {
      success: true,
      message: "Professor deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting professor:", error);
    return {
      success: false,
      message: "An error occurred while deleting the professor",
    };
  }
}
