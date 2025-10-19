import mongoose from "mongoose";

const ProfessorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true,
    },
    specialization: {
      type: String,
      required: [true, "Specialization is required"],
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    userType: {
      type: String,
      default: "professor",
      enum: ["professor", "admin", "student"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Create index on email for faster lookups
ProfessorSchema.index({ email: 1 });

// Export the model
const Professor =
  mongoose.models.Professor || mongoose.model("Professor", ProfessorSchema);

export default Professor;
