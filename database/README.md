# Database Schema Documentation

## Overview

This directory contains the database schema for the Real Estate Investment Platform. The database is hosted on Supabase (PostgreSQL) and includes tables for managing users, properties, developers, investments, and related data.

## Setup Instructions

1. **Create a Supabase Project:**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Wait for the project to be provisioned

2. **Run the Schema:**
   - Navigate to your project's SQL Editor in the Supabase dashboard
   - Copy the entire contents of `schema.sql`
   - Paste and execute the SQL

3. **Verify Tables:**
   - Go to the Table Editor
   - Confirm all tables are created successfully

## Database Tables

### Core Tables

#### `users`
Extends Supabase auth.users with additional profile information.
- `id` - UUID (Primary Key, references auth.users)
- `email` - User's email address
- `full_name` - User's full name
- `phone` - Contact phone number
- `avatar_url` - Profile picture URL
- `role` - User role (investor, developer, admin)

#### `developers`
Information about property developers.
- `id` - UUID (Primary Key)
- `name` - Developer name
- `description` - Company description
- `logo` - Company logo URL
- `website` - Company website
- `email` - Contact email
- `phone` - Contact phone
- `abn` - Australian Business Number

#### `properties`
Real estate properties and developments.
- `id` - UUID (Primary Key)
- `title` - Property title
- `description` - Property description
- `address`, `city`, `state`, `postcode`, `country` - Location details
- `price` - Property price
- `bedrooms`, `bathrooms`, `parking_spaces` - Property features
- `property_type` - apartment, house, townhouse, villa
- `status` - off_the_plan, under_construction, completed
- `completion_date` - Expected completion date
- `images` - Array of image URLs
- `floor_plan` - Floor plan image URL
- `land_size`, `building_size` - Size measurements
- `developer_id` - Reference to developer
- `is_featured` - Featured property flag

#### `property_features`
Additional features for properties (e.g., pool, gym, parking).
- `id` - UUID (Primary Key)
- `property_id` - Reference to property
- `feature_name` - Feature name
- `feature_value` - Feature value

#### `investments`
User investment records.
- `id` - UUID (Primary Key)
- `user_id` - Reference to user
- `property_id` - Reference to property
- `investment_amount` - Investment amount
- `investment_date` - Date of investment
- `status` - pending, approved, rejected, completed, cancelled
- `notes` - Additional notes

#### `favorites`
User's saved/favorite properties.
- `id` - UUID (Primary Key)
- `user_id` - Reference to user
- `property_id` - Reference to property

#### `inquiries`
Property inquiry messages from users.
- `id` - UUID (Primary Key)
- `user_id` - Reference to user
- `property_id` - Reference to property
- `message` - Inquiry message
- `email`, `phone` - Contact information
- `status` - new, in_progress, responded, closed

## Indexes

Indexes are created on frequently queried columns for optimal performance:
- Property developer, status, city, and price
- Investment user and property IDs
- Favorites user ID
- Inquiry user and property IDs

## Row Level Security (RLS)

All tables have Row Level Security enabled with the following policies:

### Users
- Users can view and update their own profile
- Admins can view all profiles

### Properties
- Everyone can view properties
- Developers can create and manage their own properties

### Developers
- Everyone can view developer information

### Investments
- Users can view, create, and update their own investments

### Favorites
- Users can manage their own favorites

### Inquiries
- Users can view and create their own inquiries

## Triggers

`updated_at` triggers automatically update the `updated_at` timestamp on record modifications for:
- users
- developers
- properties
- investments
- inquiries

## Sample Queries

### Get all off-the-plan apartments in Sydney
```sql
SELECT * FROM properties
WHERE status = 'off_the_plan'
  AND property_type = 'apartment'
  AND city = 'Sydney'
ORDER BY created_at DESC;
```

### Get a developer's properties
```sql
SELECT p.*, d.name as developer_name
FROM properties p
JOIN developers d ON p.developer_id = d.id
WHERE d.id = 'developer-uuid-here';
```

### Get user's investments with property details
```sql
SELECT i.*, p.title, p.address, p.price
FROM investments i
JOIN properties p ON i.property_id = p.id
WHERE i.user_id = 'user-uuid-here'
ORDER BY i.investment_date DESC;
```

## Migration Notes

- Always backup data before running migrations
- Test migrations in a development environment first
- Review RLS policies for security implications
- Update API types after schema changes

## Future Enhancements

Potential future additions:
- Property documents table (contracts, inspection reports)
- Property images table (separate from array)
- Reviews and ratings system
- Payment tracking
- Analytics and reporting tables
- Property viewing appointments
- Chat/messaging system

