# Newsletter2 Component

A responsive newsletter subscription component with an interactive tabbed cities menu for the real estate platform.

## Features

- **Responsive Design**: Fully responsive with optimized layouts for desktop, tablet, and mobile
- **Email Subscription**: Newsletter signup form with email validation
- **Interactive Tabs**: Horizontal city tabs that switch between different location lists
- **Dynamic Content**: Click a city tab to see its sublocations
- **Social Media Links**: Facebook and Instagram icons
- **Figma Design Tokens**: Uses CSS variables for consistent theming
- **Hover Effects**: Interactive hover states on tabs and location items

## Usage

### Basic Usage

```tsx
import Newsletter2 from '@/components/Newsletter2';

export default function Page() {
  return <Newsletter2 />;
}
```

### With Custom Cities Data

```tsx
import Newsletter2 from '@/components/Newsletter2';

export default function Page() {
  const citiesData = [
    {
      name: 'Lisboa',
      locations: [
        'Alcântara',
        'Alvalade',
        'Belém',
        'Parque das Nações',
        'Benfica',
      ]
    },
    {
      name: 'Porto',
      locations: [
        'Boavista',
        'Foz do Douro',
        'Matosinhos',
        'Vila Nova de Gaia',
      ]
    },
    {
      name: 'Faro',
      locations: [
        'Albufeira',
        'Lagos',
        'Portimão',
        'Vilamoura',
      ]
    },
  ];

  return <Newsletter2 citiesData={citiesData} />;
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the component |
| `citiesData` | `CityData[]` | Array of 6 Portuguese cities with their locations | Array of city objects, each containing `name` (string) and `locations` (string[]) |

### CityData Type

```typescript
interface CityData {
  name: string;        // City or region name
  locations: string[]; // Array of sublocation names
}
```

## Layout Breakpoints

### Desktop (> 1024px)
- Two-column layout
- Left: Newsletter signup form, social icons, powered by text
- Right: Horizontal city tabs with 4-column locations grid below
- Left content wraps naturally with maintained padding
- Active tab has blue underline indicator

### Tablet (769px - 1024px)
- Vertical stacking
- Newsletter signup section at top
- City tabs section at bottom with 3-column locations grid
- Scrollable locations area with max height

### Mobile (≤ 768px)
- Vertical stacking
- Newsletter signup section at top with adjusted padding
- City tabs wrap to multiple rows
- Single column locations list with scrolling
- Reduced tab font size for better fit

## Design Tokens Used

The component uses the following CSS variables (Figma tokens):

### Colors
- `--really-light-gray`: Background color (#f4f4f4)
- `--white`: White color for borders and inputs (#ffffff)
- `--button-blue`: Primary blue color for buttons and city name (#407cff)
- `--medium-gray`: Placeholder text color (#898989)
- `--extra-light-gray`: Border color (#e3e3e3)
- `--color-text-body-light`: Light text color for locations (#919191)
- `--color-text-headings-highlight`: Highlight color (#407cff)

### Typography
- `--font-family-work-sans`: Work Sans font family
- `--fontsize-body-sm`: 12px
- `--fontsize-body-md`: 16px
- `--fontsize-body-medium`: 14px
- `--fontsize-headings-h3`: 20px
- `--fontweight-regular`: 400
- `--fontweight-medium`: 500
- `--line-height-body-sm`: 20px
- `--line-height-headings-h3`: 24px

### Spacing & Effects
- `--scroll-edge-effect-blur-radius`: Border radius (10px)

## Assets

The component uses the following assets from Figma:
- Search/magnifying glass icon (submit button)
- Facebook icon
- Instagram icon (composite of 3 SVGs)

**Note**: These assets are currently loaded from the Figma localhost server. For production use, download these assets and place them in the `public` folder, then update the image paths in `Newsletter2.tsx`.

## Test Pages

- `/test-newsletter2` - Multiple variations of the Newsletter2 component
- `/newsletters` - Comparison of Newsletter and Newsletter2 components

## Accessibility

- Form includes proper labels
- Submit button has `aria-label` for screen readers
- All images have alt text (currently empty, should be updated for production)
- Keyboard navigation supported

## Interaction Behavior

1. **Tab Selection**: Click any city tab to view its locations
2. **Active State**: Selected tab shows in blue with an underline indicator
3. **Hover Effects**: Tabs and location items change color on hover
4. **Initial State**: First city in the array is selected by default
5. **Content Switching**: Locations grid updates instantly when changing tabs

## Default Cities

The component comes with 6 default Portuguese cities:
- **Lisboa**: 15 neighborhoods
- **Porto**: 10 neighborhoods  
- **Aveiro**: 8 neighborhoods
- **Braga**: 6 neighborhoods
- **Coimbra**: 5 neighborhoods
- **Faro**: 8 Algarve locations

## Customization Notes

- **Text Wrapping**: Left side content wraps naturally while maintaining side padding
- **Tabbed Interface**: Horizontal tabs for easy navigation between cities
- **Border Width**: Left section border set to 4px for cleaner appearance
- **Font Sizes**: Uses 14px for body text, 20px for headings
- **Grid Layout**: 4 columns on desktop, 3 on tablet, 1 on mobile
- **Blue Underline**: Active tab has a 2px blue border below it

## Future Enhancements

- [ ] Add email validation feedback
- [ ] Integrate with backend API for newsletter subscriptions
- [ ] Add loading states and transitions
- [ ] Add success/error messages
- [ ] Make location items clickable links that filter properties by city
- [ ] Add social media links functionality
- [ ] Download and host Figma assets locally
- [ ] Add proper alt text to images
- [ ] Add newsletter preferences (frequency, city filters)
- [ ] Add URL query parameter support for pre-selecting city
- [ ] Add keyboard navigation (arrow keys) for tabs

