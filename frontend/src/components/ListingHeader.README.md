# ListingHeader Component

A property detail page header component displaying breadcrumb navigation, property name with verification badge, address, and action buttons.

## 📸 Preview

Based on Figma design: [Node 286:12248](https://www.figma.com/design/dlMcXVuGIQvwSMC7uq7dGh/A---D?node-id=286-12248)

## 🚀 Quick Start

```tsx
import { ListingHeader } from '@/components/ListingHeader'

export default function PropertyDetailPage() {
  return (
    <ListingHeader
      propertyName="Myst"
      address="88 Rua Cónego Maio, Santa Joana, Aveiro 3810"
      isVerified={true}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Aveiro', href: '/propriedades/centro/aveiro' },
        { label: 'Santa Joana', href: '/propriedades/centro/aveiro/santa-joana' },
        { label: 'Myst' }
      ]}
      onSave={() => console.log('Property saved')}
      onShare={() => console.log('Property shared')}
    />
  )
}
```

## 📋 Props

### `ListingHeaderProps`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `propertyName` | `string` | `'Myst'` | The name/title of the property |
| `address` | `string` | `'88 Rua Cónego Maio...'` | Full property address |
| `isVerified` | `boolean` | `true` | Whether to show verification badge |
| `verificationText` | `string` | `'Projeto verificado pelo promotor'` | Text for verification badge |
| `breadcrumbs` | `BreadcrumbItem[]` | Default breadcrumbs | Navigation breadcrumb items |
| `onSave` | `() => void` | `undefined` | Handler for save button click |
| `onShare` | `() => void` | `undefined` | Handler for share button click |
| `saveText` | `string` | `'Guardar'` | Text for save button |
| `shareText` | `string` | `'Partilhar'` | Text for share button |

### `BreadcrumbItem`

| Property | Type | Description |
|----------|------|-------------|
| `label` | `string` | Display text for breadcrumb |
| `href` | `string?` | Optional link URL (omit for current page) |

## 📖 Usage Examples

### Default Usage

```tsx
<ListingHeader />
```

### Custom Property

```tsx
<ListingHeader
  propertyName="Vista Mar Residences"
  address="Avenida da Liberdade 123, Lisboa 1250-096"
  isVerified={true}
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Lisboa', href: '/propriedades/centro/lisboa' },
    { label: 'Vista Mar Residences' }
  ]}
/>
```

### Without Verification Badge

```tsx
<ListingHeader
  propertyName="Porto Luxury Apartments"
  address="Rua de Santa Catarina 456, Porto 4000-443"
  isVerified={false}
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Porto', href: '/propriedades/norte/porto' },
    { label: 'Porto Luxury Apartments' }
  ]}
/>
```

### With Custom Handlers

```tsx
<ListingHeader
  propertyName="Algarve Beach Villas"
  address="Praia da Rocha, Portimão, Faro 8500-801"
  onSave={handleSaveProperty}
  onShare={handleShareProperty}
/>
```

### English Version

```tsx
<ListingHeader
  propertyName="Modern Apartment"
  address="Main Street 123, Lisbon"
  verificationText="Verified by developer"
  saveText="Save"
  shareText="Share"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Lisbon', href: '/properties/lisbon' },
    { label: 'Modern Apartment' }
  ]}
/>
```

## 🎨 Styling

The component uses CSS Modules and follows the project's design tokens from `globals.css`:

- Background: `#f0f0f0`
- Text colors: `--dark-gray`, `--color-text-body-light`
- Accent color: `--button-blue` (for verification badge)
- Font: `--font-family-inter`
- Typography sizes match Figma design system

## 📱 Responsive Behavior

### Desktop (>1200px)
- Full horizontal padding (200px)
- All elements displayed inline
- Large property name (32px)

### Tablet (768px - 1200px)
- Reduced padding (100px → 60px)
- Slightly smaller property name (28px)

### Mobile (<768px)
- Minimal padding (24px)
- Stacked layout (actions below property info)
- Smaller text sizes
- Breadcrumbs remain horizontal with wrapping

### Small Mobile (<480px)
- Further reduced padding (16px)
- Compact typography
- Optimized touch targets

## 🔧 Customization

### Dynamic Breadcrumbs

Generate breadcrumbs from URL or route:

```tsx
function generateBreadcrumbs(pathname: string) {
  const parts = pathname.split('/').filter(Boolean)
  return parts.map((part, index) => ({
    label: part.charAt(0).toUpperCase() + part.slice(1),
    href: index < parts.length - 1 ? `/${parts.slice(0, index + 1).join('/')}` : undefined
  }))
}

const breadcrumbs = generateBreadcrumbs(window.location.pathname)
```

### Save/Share Integration

```tsx
const handleSave = async () => {
  try {
    await savePropertyToFavorites(propertyId)
    toast.success('Property saved!')
  } catch (error) {
    toast.error('Failed to save property')
  }
}

const handleShare = async () => {
  if (navigator.share) {
    await navigator.share({
      title: propertyName,
      text: address,
      url: window.location.href
    })
  } else {
    // Fallback: Copy link to clipboard
    await navigator.clipboard.writeText(window.location.href)
    toast.success('Link copied!')
  }
}

<ListingHeader
  onSave={handleSave}
  onShare={handleShare}
/>
```

## 🧪 Demo

View the component in action at: `/test-listing-header`

Run your dev server and navigate to `http://localhost:3000/test-listing-header`

## ⚙️ Technical Details

- **Framework**: React 18+ with Next.js 14
- **TypeScript**: Fully typed with exported interfaces
- **Styling**: CSS Modules (no Tailwind)
- **Icons**: Lucide React (already in project dependencies)
- **Client Component**: Uses `'use client'` directive for interactivity

## 🎯 Features

✅ Breadcrumb navigation with clickable links  
✅ Property name with optional verification badge  
✅ Address display  
✅ Save and Share action buttons  
✅ Fully customizable via props  
✅ Responsive design (desktop, tablet, mobile)  
✅ TypeScript support  
✅ CSS Modules (no Tailwind)  
✅ Matches Figma design tokens  
✅ Accessible (ARIA labels, semantic HTML)  
✅ Hover and active states  
✅ No linter errors  

## 📦 Files

```
frontend/src/
├── components/
│   ├── ListingHeader.tsx              # Component implementation
│   ├── ListingHeader.module.css       # Component styles
│   └── ListingHeader.README.md        # This file
│
└── app/
    └── test-listing-header/
        ├── page.tsx                   # Demo page
        └── page.module.css            # Demo styles
```

## 🔄 Integration with Property Pages

Integrate into individual property detail pages:

```tsx
// app/propriedades/[region]/[city]/[property]/page.tsx

import { ListingHeader } from '@/components/ListingHeader'
import { getProperty } from '@/lib/api'

export default async function PropertyDetailPage({ 
  params 
}: { 
  params: { region: string; city: string; property: string } 
}) {
  const property = await getProperty(params.property)

  return (
    <>
      <ListingHeader
        propertyName={property.name}
        address={property.address}
        isVerified={property.isVerified}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: params.region, href: `/propriedades/${params.region}` },
          { label: params.city, href: `/propriedades/${params.region}/${params.city}` },
          { label: property.name }
        ]}
      />
      
      {/* Rest of property detail page */}
    </>
  )
}
```

## 🚨 Notes

- The component uses `lucide-react` icons which are already installed in your project
- Default values match the Figma design example
- Breadcrumb navigation uses standard `<a>` tags - replace with Next.js `<Link>` if needed
- Save and Share handlers are optional - component logs to console if not provided

---

**Created**: October 31, 2024  
**Based on**: Figma Design Node 286:12248  
**Status**: ✅ Complete & Ready to Use

