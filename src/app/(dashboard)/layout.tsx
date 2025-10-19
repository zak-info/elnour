"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/signin');
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 min-h-screen shadow-lg flex flex-col">
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              El Nour School
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Management System</p>
            <nav className="space-y-2">
              <Link
                href="/dashboard"
                className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Overview
              </Link>
              <Link
                href="/dashboard/professors"
                className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Professors
              </Link>
              <Link
                href="/dashboard/professors/create"
                className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Add Professor
              </Link>
            </nav>
          </div>

          {/* User Info and Logout */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="mb-3">
              <p className="text-sm text-gray-600 dark:text-gray-400">Logged in as</p>
              <p className="font-medium text-gray-900 dark:text-white">{session?.user?.name}</p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
