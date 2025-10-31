# Listing Information Components Summary

This document provides an overview of the Listing Information section components created from the Figma design.

## Components Overview

### 1. ListingInfoTitle
**File**: `ListingInfoTitle.tsx` + `ListingInfoTitle.module.css`

A simple title component that displays the main heading for the listing information section (e.g., "Sobre o Myst").

**Props**:
- `title`: string - The title text to display

**Features**:
- Clean, semantic HTML with h2 heading
- Consistent styling with design system
- 32px font size with medium weight

---

### 2. ListingInfoCaption
**File**: `ListingInfoCaption.tsx` + `ListingInfoCaption.module.css`

A comprehensive information display component that shows all key property details in a two-column layout.

**Props**:
- `address`: string - Property address
- `priceFrom`: number - Starting price
- `bedrooms`: string - Bedroom count/range
- `bathrooms`: string - Bathroom count/range
- `parking`: string - Parking spaces count/range
- `office`: string - Office space count
- `displayLocationTitle?`: string - Display location title
- `displayLocationAddress?`: string - Display location address
- `onScheduleVisit?`: () => void - Schedule visit callback
- `onViewMap?`: () => void - View map callback
- `propertyType?`: string - Property type (default: "Apartamentos")
- `unitsCount?`: string - Number of units
- `onViewUnits?`: () => void - View units callback
- `developer?`: CompanyInfo - Developer information
- `architect?`: CompanyInfo - Architect information
- `constructor?`: CompanyInfo - Constructor information

**Layout**:
```
+------------------------------------------+
|  LEFT SIDE (Info)    |  RIGHT SIDE       |
|  - Address & Price   |  - Developer      |
|  - Features (icons)  |  - Architect      |
|  - Display Location  |  - Constructor    |
|  - Property Type     |                   |
|  - Units             |                   |
+------------------------------------------+
```

**Features**:
- Two-column responsive layout
- Property features with Lucide icons (bed, bath, car, lamp)
- Interactive links for scheduling visits and viewing maps
- Company information with logos
- Automatic price formatting with Portuguese locale
- Fully responsive design

---

## Design System Integration

Both components follow the project's design system:

### CSS Variables Used
- `--dark-gray` (#484848) - Primary text
- `--medium-gray` (#898989) - Secondary text
- `--button-blue` (#407cff) - Interactive elements
- `--font-family-work-sans` - Primary font
- `--fontsize-body-md` (16px) - Body text
- `--fontsize-headings-h3` (20px) - Company names

### Icons
Using Lucide React:
- `BedDouble` - Bedrooms
- `Bath` - Bathrooms
- `CarFront` - Parking
- `LampDesk` - Office space

---

## Usage Example

```tsx
import { ListingInfoTitle, ListingInfoCaption } from './components/ListingInfo';

function ListingPage() {
  return (
    <div>
      <ListingInfoTitle title="Sobre o Myst" />
      
      <ListingInfoCaption
        address="88 Rua Cónego Maio, Santa Joana, Aveiro 3810"
        priceFrom={250000}
        bedrooms="3-4"
        bathrooms="3-5"
        parking="1-5"
        office="1"
        displayLocationAddress="93 Rua do Amanhecer, São Bernardo, Aveiro, 3810"
        onScheduleVisit={() => {/* handle visit */}}
        onViewMap={() => {/* handle map */}}
        unitsCount="16 unidades"
        onViewUnits={() => {/* handle units */}}
        developer={{
          name: 'Ascend',
          role: 'Promotor',
          logoUrl: '/images/developer-logo.png'
        }}
        architect={{
          name: 'Company',
          role: 'Arquiteto',
          logoUrl: '/images/architect-logo.png'
        }}
        constructor={{
          name: 'Buildwell',
          role: 'Construtora',
          logoUrl: '/images/constructor-logo.png'
        }}
      />
    </div>
  );
}
```

---

## Testing Page

A test page has been created at `/test-listing-info` to demonstrate the components with sample data.

**File**: `app/test-listing-info/page.tsx`

To view the components in action:
1. Run the development server: `npm run dev`
2. Navigate to: `http://localhost:3000/test-listing-info`

---

## Responsive Breakpoints

### ListingInfoCaption
- **1024px**: Two-column layout stacks vertically, features wrap
- **768px**: Reduced spacing and padding
- **480px**: Full mobile layout, vertical feature list

### ListingInfoTitle
- Maintains consistent styling across all breakpoints
- Responsive font sizing could be added if needed

---

## File Structure

```
frontend/src/components/
├── ListingInfoTitle.tsx              # Title component
├── ListingInfoTitle.module.css       # Title styles
├── ListingInfoTitle.README.md        # Title documentation
├── ListingInfoCaption.tsx            # Caption component
├── ListingInfoCaption.module.css     # Caption styles
├── ListingInfoCaption.README.md      # Caption documentation
├── ListingInfo.tsx                   # Export file
└── LISTING_INFO_SUMMARY.md          # This file

frontend/src/app/test-listing-info/
├── page.tsx                          # Test page
└── page.module.css                   # Test page styles
```

---

## Next Steps

To complete the listing information section, you might want to add:

1. **Text Section Component** - Long-form description and bullet points
2. **Units Section Component** - Available units with images and CTAs
3. **FAQ Section Component** - Frequently asked questions
4. **Container Component** - Wrapper that combines all sections

These additional components can be found in the original Figma design under node-id=297-4124.

---

## Notes

- All components use TypeScript for type safety
- CSS Modules ensure style encapsulation
- Optional props allow flexible usage
- All interactive elements have proper callbacks
- Components follow existing project patterns (PropertyCard, ListingHeader, etc.)
- Fully compatible with Next.js 14 App Router

