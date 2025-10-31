# ListingInfoCaption Component

A comprehensive information display component for property listings that shows property details, features, and company information.

## Overview

The `ListingInfoCaption` component displays key property information including address, pricing, features (bedrooms, bathrooms, parking, office space), location details, and associated companies (developer, architect, constructor).

## Usage

```tsx
import { ListingInfoCaption } from './components/ListingInfoCaption';

function MyPage() {
  return (
    <ListingInfoCaption
      address="88 Rua Cónego Maio, Santa Joana, Aveiro 3810"
      priceFrom={250000}
      bedrooms="3-4"
      bathrooms="3-5"
      parking="1-5"
      office="1"
      displayLocationTitle="Localização do Andar Modelo"
      displayLocationAddress="93 Rua do Amanhecer, São Bernardo, Aveiro, 3810"
      onScheduleVisit={() => console.log('Schedule visit')}
      onViewMap={() => console.log('View map')}
      propertyType="Apartamentos"
      unitsCount="16 unidades"
      onViewUnits={() => console.log('View units')}
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
  );
}
```

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `address` | `string` | The property address |
| `priceFrom` | `number` | Starting price for the property |
| `bedrooms` | `string` | Number or range of bedrooms (e.g., "3" or "3-4") |
| `bathrooms` | `string` | Number or range of bathrooms (e.g., "3" or "3-5") |
| `parking` | `string` | Number or range of parking spaces (e.g., "1" or "1-5") |
| `office` | `string` | Number of office spaces |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `displayLocationTitle` | `string` | `'Localização do Andar Modelo'` | Title for the display location section |
| `displayLocationAddress` | `string` | `undefined` | Address of the model apartment/display location |
| `onScheduleVisit` | `() => void` | `undefined` | Callback when "Agendar Visita" is clicked |
| `onViewMap` | `() => void` | `undefined` | Callback when "Ver Mapa" is clicked |
| `propertyType` | `string` | `'Apartamentos'` | Type of property |
| `unitsCount` | `string` | `undefined` | Number of units (e.g., "16 unidades") |
| `onViewUnits` | `() => void` | `undefined` | Callback when "Ver unidades disponíveis" is clicked |
| `developer` | `CompanyInfo` | `undefined` | Developer company information |
| `architect` | `CompanyInfo` | `undefined` | Architect company information |
| `constructor` | `CompanyInfo` | `undefined` | Constructor company information |

### CompanyInfo Type

```typescript
interface CompanyInfo {
  name: string;      // Company name
  role: string;      // Company role (e.g., "Promotor", "Arquiteto", "Construtora")
  logoUrl: string;   // URL to company logo
}
```

## Features

- **Property Details**: Displays address and starting price
- **Visual Features**: Shows bedrooms, bathrooms, parking, and office spaces with icons
- **Location Information**: Optional display location with links to schedule visits and view map
- **Property Type**: Shows the type of property
- **Units Information**: Optional unit count with link to view available units
- **Company Information**: Displays developer, architect, and constructor with logos

## Styling

The component uses CSS Modules for styling and follows the project's design system with CSS variables defined in `globals.css`. Key variables include:

- `--dark-gray`: Text color for labels and primary text
- `--medium-gray`: Text color for secondary text
- `--button-blue`: Color for interactive links
- `--font-family-work-sans`: Primary font family
- `--fontsize-body-md`: Base font size (16px)
- `--fontsize-headings-h3`: Company name font size (20px)

## Responsive Design

The component is fully responsive with breakpoints at:
- **1024px**: Stacks info and companies sections vertically, wraps features
- **768px**: Reduces spacing and icon sizes
- **480px**: Full mobile layout with vertical feature list

## Icons

Uses Lucide React icons:
- `BedDouble` for bedrooms
- `Bath` for bathrooms
- `CarFront` for parking
- `LampDesk` for office space

## Notes

- All callbacks are optional and buttons will only render if the respective callback is provided
- The component automatically formats the price with Portuguese locale formatting
- Company sections only render if company data is provided
- The display location section only renders if `displayLocationAddress` is provided

