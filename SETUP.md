# Setup Guide

This guide will walk you through setting up the Real Estate Investment Platform from scratch.

## Step 1: Install Dependencies

Install all dependencies for the monorepo:

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

cd ..
```

## Step 2: Set Up Supabase

### 2.1 Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in/sign up
2. Click "New Project"
3. Fill in your project details:
   - Name: Real Estate Investment Platform
   - Database Password: (choose a strong password)
   - Region: (choose closest to your users)
4. Wait for the project to be created (takes ~2 minutes)

### 2.2 Get Your API Keys

1. Go to Project Settings > API
2. Copy the following:
   - Project URL (e.g., `https://xxxxx.supabase.co`)
   - `anon` `public` key
   - `service_role` `secret` key (keep this secure!)

### 2.3 Set Up the Database

1. Go to SQL Editor in your Supabase dashboard
2. Open the file `database/schema.sql` in your project
3. Copy all the contents
4. Paste into the SQL Editor
5. Click "Run" to execute
6. Verify tables were created in the Table Editor

## Step 3: Configure Environment Variables

### 3.1 Root Environment Variables

Copy the example file and edit:
```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
BACKEND_PORT=5000
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 3.2 Frontend Environment Variables

```bash
cd frontend
cp .env.example .env
```

Edit `frontend/.env`:
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 3.3 Backend Environment Variables

```bash
cd ../backend
cp .env.example .env
```

Edit `backend/.env`:
```
SUPABASE_URL=your-project-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

## Step 4: Update Next.js Config

Edit `frontend/next.config.js` and update the image domains:

```javascript
images: {
  domains: ['your-project-id.supabase.co'],
},
```

Replace `your-project-id` with your actual Supabase project ID from the URL.

## Step 5: Run the Application

From the root directory:

```bash
# Run both frontend and backend
npm run dev
```

Or run them separately:

```bash
# Terminal 1 - Frontend
npm run dev:frontend

# Terminal 2 - Backend
npm run dev:backend
```

The applications will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Step 6: Test the Setup

### 6.1 Test Backend

Visit http://localhost:5000/health in your browser. You should see:
```json
{
  "status": "OK",
  "timestamp": "2024-..."
}
```

### 6.2 Test Frontend

Visit http://localhost:3000. You should see the homepage with "Real Estate Investment Platform".

### 6.3 Test Supabase Connection

Try accessing http://localhost:5000/api/properties. You should get an empty array:
```json
{
  "data": [],
  "count": 0
}
```

## Step 7: Enable Authentication (Optional)

### 7.1 Enable Email Authentication

1. Go to Authentication > Providers in Supabase
2. Enable Email provider
3. Configure email templates if needed

### 7.2 Configure OAuth (Optional)

Enable providers like Google, GitHub, etc. in Authentication > Providers

## Common Issues

### Issue: "Missing Supabase environment variables"

**Solution:** Make sure you've created all `.env` files and added the correct Supabase credentials.

### Issue: Port already in use

**Solution:** 
```bash
# Check what's using the port
lsof -i :3000  # or :5000

# Kill the process
kill -9 <PID>
```

### Issue: CORS errors

**Solution:** Make sure the `FRONTEND_URL` in backend `.env` matches your frontend URL.

### Issue: Database tables not found

**Solution:** Run the schema.sql file again in Supabase SQL Editor.

## Next Steps

Now that your project is set up, you can:

1. Create your first developer in the Supabase Table Editor
2. Add some test properties
3. Test the API endpoints
4. Start building the UI components

For more information, see the main README.md file.

## Development Workflow

```bash
# Start development
npm run dev

# Build for production
npm run build

# Run frontend only
npm run dev:frontend

# Run backend only
npm run dev:backend
```

## Useful Commands

```bash
# View frontend logs
cd frontend && npm run dev

# View backend logs
cd backend && npm run dev

# Clear Next.js cache
cd frontend && rm -rf .next

# Reinstall dependencies
rm -rf node_modules frontend/node_modules backend/node_modules
npm install
cd frontend && npm install
cd ../backend && npm install
```

## Production Deployment

See README.md for deployment instructions to Vercel (frontend) and Railway/Heroku (backend).

