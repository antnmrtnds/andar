# ListingHeader Component - Quick Summary

## ✅ What Was Created

A property detail page header component for displaying property information with navigation and actions.

### **ListingHeader** Component
- **Files**: `ListingHeader.tsx`, `ListingHeader.module.css`
- **Purpose**: Property detail page header with breadcrumbs, title, address, and action buttons
- **Features**: 
  - Breadcrumb navigation with chevron separators
  - Property name (H1 heading)
  - Optional verification badge with blue checkmark icon
  - Property address
  - Save button (bookmark icon)
  - Share button (upload icon)
  - Fully responsive design

---

## 🎨 Design Match

Based on Figma design: [Node 286:12248](https://www.figma.com/design/dlMcXVuGIQvwSMC7uq7dGh/A---D?node-id=286-12248)

---

## 🚀 Quick Start

```tsx
import { ListingHeader } from '@/components/ListingHeader'

export default function PropertyPage() {
  return (
    <ListingHeader
      propertyName="Myst"
      address="88 Rua Cónego Maio, Santa Joana, Aveiro 3810"
      isVerified={true}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Aveiro', href: '/propriedades/centro/aveiro' },
        { label: 'Santa Joana' },
        { label: 'Myst' }
      ]}
      onSave={() => console.log('Saved')}
      onShare={() => console.log('Shared')}
    />
  )
}
```

---

## 🧪 Demo & Testing

**Demo Page**: `/test-listing-header`

The demo page includes:
- Default example with Myst property
- Custom property examples (Lisboa, Porto, Algarve)
- Version without verification badge
- Component features list
- Usage code example

To view: Run your dev server and navigate to `http://localhost:3000/test-listing-header`

---

## 📱 Responsive Design

- **Desktop (>1200px)**: Full layout with 200px horizontal padding
- **Tablet (768-1200px)**: Reduced padding, adjusted font sizes
- **Mobile (<768px)**: Stacked layout, actions below property info
- **Small Mobile (<480px)**: Minimal padding, compact typography

---

## 🎯 Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `propertyName` | `string` | `'Myst'` | Property name/title |
| `address` | `string` | Default address | Property address |
| `isVerified` | `boolean` | `true` | Show verification badge |
| `verificationText` | `string` | `'Projeto verificado...'` | Badge text |
| `breadcrumbs` | `BreadcrumbItem[]` | Default | Navigation items |
| `onSave` | `() => void` | `undefined` | Save button handler |
| `onShare` | `() => void` | `undefined` | Share button handler |
| `saveText` | `string` | `'Guardar'` | Save button text |
| `shareText` | `string` | `'Partilhar'` | Share button text |

---

## 🎨 Visual Components

1. **Breadcrumb Navigation**
   - Gray text (#919191)
   - Chevron separators
   - Clickable links (except current page)
   - Hover states

2. **Property Name**
   - 32px font size (desktop)
   - Medium weight (500)
   - Dark gray color (#484848)

3. **Verification Badge**
   - Blue checkmark icon (#407cff)
   - Blue text (#407cff)
   - Displays next to property name

4. **Address**
   - 16px font size
   - Regular weight (400)
   - Dark gray color

5. **Action Buttons**
   - Bookmark icon (Save)
   - Upload icon (Share)
   - Hover opacity effect
   - Clickable with handlers

---

## 📁 File Structure

```
frontend/src/
├── components/
│   ├── ListingHeader.tsx                  # Component
│   ├── ListingHeader.module.css           # Styles
│   ├── ListingHeader.README.md            # Full docs
│   └── LISTING_HEADER_SUMMARY.md          # This file
│
└── app/
    └── test-listing-header/
        ├── page.tsx                       # Demo page
        └── page.module.css                # Demo styles
```

---

## 💡 Usage Tips

1. **For property detail pages**: Place at the top of the page
2. **Breadcrumbs**: Generate dynamically from URL/route
3. **Save/Share handlers**: Integrate with your favorites/sharing system
4. **Verification badge**: Only show for verified properties
5. **Styling**: Uses design tokens from `globals.css`

---

## 🔄 Common Use Cases

### Dynamic Breadcrumbs

```tsx
const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: region, href: `/propriedades/${region}` },
  { label: city, href: `/propriedades/${region}/${city}` },
  { label: propertyName }
]
```

### Save to Favorites

```tsx
const handleSave = async () => {
  await addToFavorites(propertyId)
  toast.success('Saved to favorites!')
}
```

### Share Property

```tsx
const handleShare = async () => {
  if (navigator.share) {
    await navigator.share({
      title: propertyName,
      url: window.location.href
    })
  } else {
    await navigator.clipboard.writeText(window.location.href)
    toast.success('Link copied!')
  }
}
```

---

## ✨ Features

✅ Breadcrumb navigation  
✅ Property name (H1)  
✅ Verification badge (optional)  
✅ Address display  
✅ Save button  
✅ Share button  
✅ Fully customizable  
✅ TypeScript support  
✅ Responsive design  
✅ CSS Modules  
✅ Design tokens  
✅ Accessible (ARIA labels)  
✅ No linter errors  

---

## 🚨 Notes

- Uses `lucide-react` icons (already installed)
- Background color: `#f0f0f0`
- Uses standard `<a>` tags for navigation (can be replaced with Next.js `<Link>`)
- Default handlers log to console if not provided
- Matches Figma design tokens exactly

---

**Created**: October 31, 2024  
**Status**: ✅ Complete & Ready to Use  
**Demo**: http://localhost:3000/test-listing-header

