# El Nour School Management System

This document describes the El Nour School management system dashboard implementation with mock authentication and professor management.

## Features Implemented

### 1. Mock Authentication
- **Credentials**:
  - Username: `admin`
  - Password: `admin123`
- Login page redirects to dashboard after successful authentication
- Session management using NextAuth

### 2. Dashboard
- Protected route that requires authentication
- Sidebar navigation with links to:
  - Overview
  - Professors list
  - Add Professor
- Logout functionality with user info display

### 3. Professor Management

#### Create Professor Page
- Form fields:
  - Full Name (required)
  - Email Address (required)
  - Department (required)
  - Specialization (required)
  - Phone Number (optional)
  - User Type: Professor (auto-assigned)
- Form validation
- Success/error toast notifications
- Server actions for data handling

#### Professors List Page
- Table view of all professors
- Display: Name, Email, Department, Specialization, User Type
- Delete functionality
- Empty state with call-to-action
- Real-time updates after create/delete operations

## Routes

| Route | Description |
|-------|-------------|
| `/signin` | Login page with mock credentials |
| `/dashboard` | Dashboard overview page |
| `/dashboard/professors` | List all professors |
| `/dashboard/professors/create` | Create new professor |

## Technologies Used

- **Next.js 15** with App Router
- **NextAuth** for authentication
- **Server Actions** for professor CRUD operations
- **React Hot Toast** for notifications
- **TailwindCSS** for styling (matching existing design system)

## Testing the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3001/signin`

3. Login with:
   - Username: `admin`
   - Password: `admin123`

4. You'll be redirected to the dashboard

5. Test professor creation:
   - Click "Add Professor" in sidebar or dashboard card
   - Fill in the form
   - Submit to create a professor
   - View the professor in the professors list

## File Structure

```
src/
├── app/
│   ├── (dashboard)/
│   │   ├── layout.tsx           # Dashboard layout with sidebar
│   │   ├── dashboard/
│   │   │   ├── page.tsx         # Dashboard overview
│   │   │   └── professors/
│   │   │       ├── page.tsx     # Professors list
│   │   │       └── create/
│   │   │           └── page.tsx # Create professor form
│   ├── actions/
│   │   └── professor.actions.ts # Server actions for professors
│   └── api/
│       └── auth/
│           └── [...nextauth]/
│               └── route.js     # NextAuth configuration
└── components/
    └── Auth/
        └── SignIn/
            └── index.tsx        # Sign in component (updated)
```

## Branding Updates

All content has been updated to reflect El Nour School:
- Page titles and metadata
- Header logo with school icon
- Dashboard welcome messages
- Footer content
- Home page hero and features

## Notes

- Professor data is stored in-memory (resets on server restart)
- For production, integrate with a real database
- The design follows the existing project's style guide with rounded corners, primary color scheme, and dark mode support
- All branding now reflects El Nour School management system theme
