# ListingUnits Component

A comprehensive component for displaying available units/apartments in a property listing with images, details, and call-to-action buttons.

## Overview

The `ListingUnits` component displays a list of available units with a title, unit images, property details (bedrooms, bathrooms, parking, office), prices, and floor plan CTA buttons.

## Usage

```tsx
import { ListingUnits } from './components/ListingUnits';

function ListingPage() {
  const handleViewFloorPlan = (unitId: string) => {
    console.log('View floor plan for:', unitId);
    // Navigate to floor plan or open modal
  };

  return (
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
        },
        {
          id: '2',
          type: 'Apartamento',
          title: 'Apartamento de luxo T3 virado para sul',
          bedrooms: 3,
          bathrooms: 2,
          parking: 2,
          office: 1,
          price: 280000,
          imageUrl: '/images/unit-2.jpg'
        }
      ]}
      onViewFloorPlan={handleViewFloorPlan}
      ctaText="Planta"
    />
  );
}
```

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | The section title (e.g., "Apartamentos em planta à venda no Myst") |
| `units` | `Unit[]` | Array of unit objects to display |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onViewFloorPlan` | `(unitId: string) => void` | `undefined` | Callback when a unit's CTA button is clicked |
| `ctaText` | `string` | `'Planta'` | Text to display on the CTA button |

## Unit Type

```typescript
interface Unit {
  id: string;           // Unique identifier
  type: string;         // Unit type (e.g., "Apartamento")
  title: string;        // Unit title/description
  bedrooms: number;     // Number of bedrooms
  bathrooms: number;    // Number of bathrooms
  parking: number;      // Number of parking spaces
  office: number;       // Number of office spaces
  price: number;        // Unit price in euros
  imageUrl: string;     // URL to unit image
}
```

## Features

- **Section Title**: Large 32px heading for the units section
- **Unit Cards**: Horizontal layout with image, details, and CTA
- **Property Features**: Icons for bedrooms, bathrooms, parking, and office
- **Price Display**: Formatted in Portuguese locale with euro symbol
- **Interactive CTA**: Button for viewing floor plans with callback
- **Responsive Design**: Adapts to mobile with vertical card layout
- **Image Display**: 240x160px images with object-fit cover

## Layout Structure

Each unit card follows this structure:

```
+-------------------------------------------------------+
|  [Image]  | Type                              [Button] |
|           | Title                                       |
|           | 🛏️ 3  🛁 3  🚗 1  💡 1                     |
|           | €250,000                                    |
+-------------------------------------------------------+
```

## Styling

The component uses CSS Modules and follows the project's design system:

### CSS Variables Used
- `--dark-gray` (#484848) - Primary text
- `--color-text-body-light` (#919191) - Secondary text and icons
- `--button-blue` (#407cff) - CTA button background
- `--white` (#FFFFFF) - Button text
- `--font-family-work-sans` - Font family
- `--fontsize-headings-h3` (20px) - Unit details font size

### Typography
- **Title**: 32px, medium weight (500)
- **Unit Type**: 20px, medium weight (500), light gray
- **Unit Title**: 20px, medium weight (500), dark gray
- **Features & Price**: 20px, normal weight (400), light gray
- **Button**: 20px, semibold (600), white

## Responsive Design

### Desktop (> 1024px)
- Horizontal card layout
- 240px × 160px images
- 32px gap between cards
- Side-by-side info and button

### Tablet (768px - 1024px)
- Horizontal layout maintained
- 200px × 133px images
- 28px title font size
- Reduced gaps

### Mobile (< 768px)
- **Vertical card layout**
- Full-width images (200px height)
- Stacked info and button
- Full-width CTA buttons
- 24px title font size

### Small Mobile (< 480px)
- 20px title font size
- 180px image height
- 16px feature text
- 18px button text

## Icons

Uses Lucide React icons:
- `BedDouble` - Bedrooms
- `Bath` - Bathrooms
- `CarFront` - Parking spaces
- `LampDesk` - Office spaces

All icons are 20px with light gray color (`--color-text-body-light`).

## Accessibility

- Uses semantic HTML (`h2` for title, `button` for CTA)
- Proper button focus states
- Alt text on images
- Keyboard navigable buttons
- Touch-friendly tap targets (minimum 44px on mobile)

## Interactive States

### CTA Button
- **Default**: Blue background (#407cff)
- **Hover**: Darker blue (#3066dd)
- **Active**: Even darker blue (#2557c4)
- **Transition**: 0.2s ease on background color

## Notes

- All prices are formatted using Portuguese locale (`pt-PT`)
- Images should be optimized for web (recommended: 400x300px minimum)
- The component automatically handles empty unit arrays
- Unit cards have consistent spacing regardless of content length
- Works well with any number of units (1 to many)

## Example with Multiple Units

```tsx
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
    },
    {
      id: '2',
      type: 'Apartamento',
      title: 'Apartamento de luxo T3 virado para sul',
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      office: 1,
      price: 280000,
      imageUrl: '/images/unit-2.jpg'
    },
    {
      id: '3',
      type: 'Apartamento',
      title: 'Apartamento de luxo T4 com terraço',
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      office: 1,
      price: 320000,
      imageUrl: '/images/unit-3.jpg'
    }
  ]}
  onViewFloorPlan={(unitId) => {
    // Handle floor plan view
    router.push(`/units/${unitId}/floor-plan`);
  }}
/>
```

## Integration Tips

1. **Data Fetching**: Fetch unit data from your API/database
2. **Images**: Use optimized images (Next.js Image component compatible)
3. **Navigation**: Use the callback to navigate to floor plan pages
4. **Filtering**: Combine with filter components to show specific units
5. **Loading States**: Add loading skeletons while fetching data
6. **Empty State**: Show message when no units are available

## Performance

- Images are loaded lazily by default (browser native)
- Minimal re-renders with proper key props
- CSS Modules ensure scoped, optimized styles
- No external dependencies except Lucide React (already in project)

