# Real Estate Investment Platform - Project Structure

## Complete Directory Tree

```
real-estate-investment-platform/
│
├── frontend/                              # Next.js Frontend Application
│   ├── public/                            # Static assets
│   ├── src/
│   │   ├── app/                          # Next.js 14 App Router
│   │   │   ├── layout.tsx               # Root layout component
│   │   │   ├── page.tsx                 # Homepage
│   │   │   └── globals.css              # Global styles
│   │   │
│   │   ├── lib/                         # Utility libraries
│   │   │   ├── api.ts                   # Axios API client for backend
│   │   │   └── supabase/                # Supabase configuration
│   │   │       ├── client.ts            # Browser-side Supabase client
│   │   │       └── server.ts            # Server-side Supabase client
│   │   │
│   │   └── types/                       # TypeScript type definitions
│   │       └── property.ts              # Property, Developer, Investment types
│   │
│   ├── .env.example                     # Environment variables template
│   ├── .eslintrc.json                   # ESLint configuration
│   ├── next-env.d.ts                    # Next.js TypeScript declarations
│   ├── next.config.js                   # Next.js configuration
│   ├── package.json                     # Frontend dependencies
│   └── tsconfig.json                    # TypeScript configuration
│
├── backend/                              # Express.js Backend Application
│   ├── src/
│   │   ├── config/                      # Configuration files
│   │   │   └── supabase.ts             # Supabase client setup
│   │   │
│   │   ├── controllers/                 # Route controllers
│   │   │   ├── propertyController.ts   # Property CRUD operations
│   │   │   ├── developerController.ts  # Developer CRUD operations
│   │   │   └── investmentController.ts # Investment CRUD operations
│   │   │
│   │   ├── middleware/                  # Express middleware
│   │   │   ├── auth.ts                 # Authentication middleware
│   │   │   └── errorHandler.ts         # Error handling middleware
│   │   │
│   │   ├── routes/                      # API route definitions
│   │   │   ├── propertyRoutes.ts       # /api/properties routes
│   │   │   ├── developerRoutes.ts      # /api/developers routes
│   │   │   └── investmentRoutes.ts     # /api/investments routes
│   │   │
│   │   ├── types/                       # TypeScript types
│   │   │   └── index.ts                # Shared backend types
│   │   │
│   │   └── server.ts                    # Express server entry point
│   │
│   ├── .env.example                     # Environment variables template
│   ├── package.json                     # Backend dependencies
│   └── tsconfig.json                    # TypeScript configuration
│
├── database/                             # Database schema and docs
│   ├── schema.sql                       # Complete Supabase schema
│   └── README.md                        # Database documentation
│
├── .env.example                         # Root environment variables
├── .gitignore                           # Git ignore rules
├── .prettierrc                          # Prettier code formatting config
├── package.json                         # Root package.json (monorepo)
├── PROJECT_STRUCTURE.md                 # This file
├── README.md                            # Main project documentation
└── SETUP.md                             # Setup instructions

```

## Key Files Explained

### Frontend

#### `frontend/src/app/layout.tsx`
Root layout component that wraps all pages. Contains the HTML document structure and metadata.

#### `frontend/src/app/page.tsx`
Homepage component - the main landing page of the application.

#### `frontend/src/lib/supabase/client.ts`
Browser-side Supabase client for client components and browser operations.

#### `frontend/src/lib/supabase/server.ts`
Server-side Supabase client for server components and API routes. Handles cookies for authentication.

#### `frontend/src/lib/api.ts`
Axios client configured for communicating with the Express backend. Includes request/response interceptors for authentication.

#### `frontend/src/types/property.ts`
TypeScript interfaces for Property, Developer, and Investment entities used throughout the frontend.

### Backend

#### `backend/src/server.ts`
Main Express server file. Sets up middleware, routes, and starts the server.

#### `backend/src/config/supabase.ts`
Supabase client configuration using the service role key for full database access.

#### `backend/src/controllers/`
Controller classes that handle business logic for each resource:
- **propertyController.ts** - Property CRUD and queries
- **developerController.ts** - Developer management
- **investmentController.ts** - Investment tracking

#### `backend/src/routes/`
Express route definitions that map URLs to controller methods.

#### `backend/src/middleware/auth.ts`
Authentication middleware that verifies JWT tokens and attaches user info to requests.

#### `backend/src/middleware/errorHandler.ts`
Centralized error handling with custom AppError class and async handler wrapper.

### Database

#### `database/schema.sql`
Complete PostgreSQL schema including:
- 7 main tables (users, developers, properties, property_features, investments, favorites, inquiries)
- Indexes for performance
- Row Level Security (RLS) policies
- Triggers for automatic timestamp updates
- Sample documentation and queries

### Configuration Files

#### `.env.example`
Template for environment variables. Copy to `.env` and fill in actual values.

#### `package.json` (root)
Monorepo configuration using npm workspaces. Includes scripts to run both frontend and backend.

#### `tsconfig.json`
TypeScript configuration for both frontend and backend with appropriate compiler options.

#### `.prettierrc`
Code formatting rules for consistent code style across the project.

## Technology Stack

### Frontend Technologies
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Supabase SSR** - Authentication and data fetching
- **Axios** - HTTP client

### Backend Technologies
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Supabase** - Database client
- **Helmet** - Security headers
- **Morgan** - Request logging
- **CORS** - Cross-origin resource sharing

### Database
- **Supabase (PostgreSQL)** - Database with auth, storage, and real-time features

## API Structure

### Properties API
```
GET    /api/properties              # Get all properties
GET    /api/properties/:id          # Get single property
POST   /api/properties              # Create property
PUT    /api/properties/:id          # Update property
DELETE /api/properties/:id          # Delete property
GET    /api/properties/status/:status # Get by status
```

### Developers API
```
GET    /api/developers              # Get all developers
GET    /api/developers/:id          # Get single developer
POST   /api/developers              # Create developer
PUT    /api/developers/:id          # Update developer
DELETE /api/developers/:id          # Delete developer
```

### Investments API
```
GET    /api/investments             # Get all investments
GET    /api/investments/:id         # Get single investment
POST   /api/investments             # Create investment
PUT    /api/investments/:id         # Update investment
DELETE /api/investments/:id         # Delete investment
GET    /api/investments/user/:userId # Get by user
```

## Future Folder Structure

As the application grows, you may want to add:

```
frontend/src/
├── components/          # Reusable React components
│   ├── common/         # Buttons, inputs, cards, etc.
│   ├── layout/         # Header, footer, sidebar
│   └── property/       # Property-specific components
├── hooks/              # Custom React hooks
├── contexts/           # React contexts
├── utils/              # Helper functions
└── styles/             # Additional styling

backend/src/
├── services/           # Business logic layer
├── models/             # Database models/schemas
├── utils/              # Helper functions
├── validators/         # Input validation
└── tests/              # Unit and integration tests
```

## Development Workflow

1. **Start both servers**: `npm run dev` from root
2. **Frontend runs on**: http://localhost:3000
3. **Backend runs on**: http://localhost:5000
4. **Hot reload enabled** for both frontend and backend
5. **Database changes** require running new SQL in Supabase

## Build and Deploy

### Frontend (Vercel)
```bash
cd frontend
npm run build
vercel deploy
```

### Backend (Railway, Heroku, etc.)
```bash
cd backend
npm run build
# Deploy according to your hosting provider
```

## Additional Resources

- **README.md** - Project overview and quick start
- **SETUP.md** - Detailed setup instructions
- **database/README.md** - Database schema documentation

