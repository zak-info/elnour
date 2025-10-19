# El Nour School Management System

This project has been adapted for **El Nour School** - a school management system for managing professors, students, and courses.

## What Was Changed

### ✅ Content Updates (Text Only)
All references have been updated from "Homely" to "El Nour School":
- Page titles and metadata
- Footer copyright text
- Dashboard welcome messages
- Professor management labels
- Alt text for images

### ✅ New Features Added

#### 1. Mock Authentication
- **Login Credentials**:
  - Username: `admin`
  - Password: `admin123`
- Configured in `/src/app/api/auth/[...nextauth]/route.js`
- Redirects to dashboard after successful login

#### 2. Dashboard System
- **Route**: `/dashboard`
- **Features**:
  - Welcome message with user's name
  - Quick access cards for professor management
  - Sidebar navigation
  - User info display
  - Logout functionality
- **Protected**: Requires authentication

#### 3. Professor Management

##### Create Professor (`/dashboard/professors/create`)
**Form Fields**:
- Full Name (required)
- Email (required, validated)
- Department (required)
- Specialization (required)
- Phone (optional)
- User Type: Professor (auto-assigned)

**Features**:
- Form validation
- Email uniqueness check
- Toast notifications
- Server-side processing

##### Professors List (`/dashboard/professors`)
**Features**:
- Table view of all professors
- Display: Name, Email, Department, Specialization, User Type
- Delete functionality
- Empty state with CTA
- Real-time updates

#### 4. Server Actions
**File**: `/src/app/actions/professor.actions.ts`

Functions:
- `createProfessor()` - Create new professor
- `getProfessors()` - Fetch all professors
- `deleteProfessor()` - Delete professor by ID

**Storage**: In-memory (resets on restart)

## What Stayed the Same

### ✅ Original Design & Style
- All original Homely template styling preserved
- Same components (Hero, Services, Properties, etc.)
- Same layout structure
- Same color scheme and design system
- Original header/footer design
- All animations and transitions

### ✅ Original Homepage
- Original Hero section
- Original Services component
- Original Properties listings
- Original Testimonials
- Original Blog section
- Original FAQ section
- Original GetInTouch section

## Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Access at: **http://localhost:3001**

### 2. Login to Dashboard
1. Go to `/signin`
2. Enter:
   - Username: `admin`
   - Password: `admin123`
3. Click "Sign In"
4. Redirected to `/dashboard`

### 3. Manage Professors
1. Click "Add Professor" or navigate to `/dashboard/professors/create`
2. Fill in the form
3. Submit to create
4. View all professors at `/dashboard/professors`
5. Delete professors as needed

## Project Structure

### New Files Created
```
src/
├── app/
│   ├── (dashboard)/
│   │   ├── layout.tsx                    # Dashboard layout
│   │   └── dashboard/
│   │       ├── page.tsx                  # Dashboard home
│   │       └── professors/
│   │           ├── page.tsx              # Professors list
│   │           └── create/
│   │               └── page.tsx          # Create professor
│   └── actions/
│       └── professor.actions.ts          # Server actions
```

### Modified Files
```
src/
├── app/
│   ├── layout.tsx                        # Updated metadata
│   └── (site)/(auth)/signin/page.tsx     # Updated title
└── components/
    ├── Auth/SignIn/index.tsx             # Added dashboard redirect
    └── Layout/
        ├── Header/BrandLogo/Logo.tsx     # Updated alt text
        └── Footer/index.tsx              # Updated copyright text
```

## Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Original homepage (unchanged design) |
| `/signin` | Public | Login page |
| `/dashboard` | Protected | Dashboard overview |
| `/dashboard/professors` | Protected | Professors list |
| `/dashboard/professors/create` | Protected | Create professor form |

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Authentication**: NextAuth v4
- **Styling**: TailwindCSS 4
- **State**: React Hooks + Server Actions
- **Notifications**: React Hot Toast
- **Icons**: Iconify + Heroicons

## Key Features

✅ **Original Design Preserved**
- All Homely template styling kept intact
- Same visual appearance
- Same user experience on public pages

✅ **New Dashboard Added**
- Clean admin interface
- Professor management
- Protected authentication
- Modern design matching original style

✅ **Text Content Updated**
- "Homely" → "El Nour School"
- Real estate references → School references
- All metadata updated

## Development Notes

### In-Memory Storage
- Professors stored in array
- Data resets on server restart
- Perfect for development/testing

### To Add Database:
1. Install Prisma/Mongoose
2. Update `professor.actions.ts`
3. Replace array with DB queries
4. Keep same function signatures

## Environment Variables

Create `.env.local` (if not exists):
```env
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your-secret-here
```

## Testing Checklist

- [x] Original homepage loads with all sections
- [x] Design matches original Homely template
- [x] Login works (admin/admin123)
- [x] Dashboard displays after login
- [x] Create professor form validates
- [x] Professor list shows created items
- [x] Delete professor works
- [x] Logout redirects to signin
- [x] All text references El Nour School
- [x] Dark mode works
- [x] Responsive design intact

## Summary

This project maintains the **entire original Homely template design** while:
1. Adding a complete dashboard system for El Nour School
2. Updating text content to reference "El Nour School"
3. Implementing professor management functionality
4. Keeping all original components and styling

**The homepage and all public pages look exactly like the original template**, just with updated text for El Nour School.

---

**Version**: 1.0.0
**Last Updated**: October 19, 2025
**Status**: ✅ Ready for Development
