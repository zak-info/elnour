"use client";

import { createProfessor } from "@/app/actions/professor.actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function CreateProfessorPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await createProfessor(formData);

      if (result.success) {
        toast.success(result.message || "Professor created successfully!");
        setTimeout(() => {
          router.push("/dashboard/professors");
        }, 1500);
      } else {
        toast.error(result.message || "Failed to create professor");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Toaster position="top-center" />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Add New Professor - El Nour School
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Create a new professor account for El Nour School faculty
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter professor's full name"
                className="w-full rounded-2xl border border-black/10 dark:border-white/20 bg-transparent px-5 py-3 text-base text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="professor@example.com"
                className="w-full rounded-2xl border border-black/10 dark:border-white/20 bg-transparent px-5 py-3 text-base text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
              />
            </div>

            {/* Department Field */}
            <div>
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Department <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="department"
                name="department"
                required
                placeholder="e.g., Computer Science"
                className="w-full rounded-2xl border border-black/10 dark:border-white/20 bg-transparent px-5 py-3 text-base text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
              />
            </div>

            {/* Specialization Field */}
            <div>
              <label
                htmlFor="specialization"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Specialization <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                required
                placeholder="e.g., Machine Learning, Web Development"
                className="w-full rounded-2xl border border-black/10 dark:border-white/20 bg-transparent px-5 py-3 text-base text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-2xl border border-black/10 dark:border-white/20 bg-transparent px-5 py-3 text-base text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
              />
            </div>

            {/* User Type Display */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                User Type
              </label>
              <div className="w-full rounded-2xl border border-black/10 dark:border-white/20 bg-gray-50 dark:bg-gray-900/50 px-5 py-3 text-base text-gray-600 dark:text-gray-400">
                Professor (Automatically assigned)
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 cursor-pointer rounded-2xl border border-primary bg-primary hover:bg-transparent hover:text-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating..." : "Create Professor"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/dashboard/professors")}
              className="flex-1 cursor-pointer rounded-2xl border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 px-5 py-3 text-base text-gray-700 dark:text-gray-300 transition duration-300 ease-in-out"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
