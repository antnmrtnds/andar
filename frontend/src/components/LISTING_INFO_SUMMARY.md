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

---

### 3. ListingDescription
**File**: `ListingDescription.tsx` + `ListingDescription.module.css`

A text content component for displaying detailed property descriptions with highlights.

**Props**:
- `title`: string - Main title/heading
- `paragraphs`: string[] - Array of paragraph text
- `highlightsTitle?`: string - Title for highlights section (default: "Destaques do Empreendimento")
- `highlights?`: string[] - Array of highlight items for bulleted list

**Features**:
- Large prominent title (32px)
- Multiple paragraphs with proper spacing
- Optional bulleted highlights list
- Max-width 1040px for readability
- Fully responsive text sizing
- Clean typography

---

### 4. ListingUnits
**File**: `ListingUnits.tsx` + `ListingUnits.module.css`

A component for displaying available units/apartments with images, details, and CTAs.

**Props**:
- `title`: string - Section title
- `units`: Unit[] - Array of unit objects
- `onViewFloorPlan?`: (unitId: string) => void - Floor plan callback
- `ctaText?`: string - Button text (default: "Planta")

**Unit Type**:
- `id`, `type`, `title`, `bedrooms`, `bathrooms`, `parking`, `office`, `price`, `imageUrl`

**Features**:
- Unit cards with horizontal layout (image + details + CTA)
- Property features with Lucide icons
- Portuguese locale price formatting
- Interactive CTA buttons with hover states
- Responsive mobile layout (vertical cards)
- 240x160px unit images

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
import { ListingInfoTitle, ListingInfoCaption, ListingDescription, ListingUnits } from './components/ListingInfo';

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

      <ListingDescription
        title="Últimas Unidades do Promotor | Mudança em breve"
        paragraphs={[
          'No coração de Santa Joana, um dos bairros mais tranquilos e desejados de Aveiro...',
          'Com uma arquitetura minimalista e linhas puras...',
          'Inspirada na estética clean e intemporal...',
          'Pensado para proprietários exigentes...'
        ]}
        highlightsTitle="Destaques do Empreendimento"
        highlights={[
          'Últimas unidades do promotor',
          'Em construção – mude-se em breve',
          'Cozinhas com bancadas em pedra e eletrodomésticos de gama elevada',
          'Pavimento em madeira nobre',
          'Grandes varandas e zonas sociais voltadas a sul/poente'
        ]}
      />

      <ListingUnits
        title="Apartamentos em planta à venda no Myst, Santa Joana, Aveiro"
        units={[
          {
            id: '1',
            type: 'Apartamento',
            title: 'Apartamento de luxo T2 virado para norte',
            bedrooms: 3,
            bathrooms: 3,
            parking: 1,
            office: 1,
            price: 250000,
            imageUrl: '/images/unit-1.jpg'
          }
        ]}
        onViewFloorPlan={(unitId) => console.log('View:', unitId)}
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

### ListingDescription
- **1024px**: Full width content
- **768px**: 48px top padding, 28px title, 14px body text
- **480px**: 32px top padding, 24px title, improved line heights

### ListingUnits
- **1024px**: Horizontal cards, 200x133px images
- **768px**: Vertical card layout, full-width images, stacked info/button
- **480px**: 180px image height, reduced font sizes, full-width buttons

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
├── ListingDescription.tsx            # Description component
├── ListingDescription.module.css     # Description styles
├── ListingDescription.README.md      # Description documentation
├── ListingUnits.tsx                  # Units component
├── ListingUnits.module.css           # Units styles
├── ListingUnits.README.md            # Units documentation
├── ListingInfo.tsx                   # Export file
└── LISTING_INFO_SUMMARY.md          # This file

frontend/src/app/test-listing-info/
├── page.tsx                          # Test page
└── page.module.css                   # Test page styles
```

---

## Next Steps

To complete the listing information section, you might want to add:

1. ✅ **Text Section Component** - Long-form description and bullet points (ListingDescription)
2. ✅ **Units Section Component** - Available units with images and CTAs (ListingUnits)
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

