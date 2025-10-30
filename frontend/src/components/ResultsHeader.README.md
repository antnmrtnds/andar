# ResultsHeader Component

## Overview
The `ResultsHeader` component displays a title and results count for property listings. It appears below the main properties header and filters, before the property grid.

## Design
Based on Figma design: [Menu Component](https://www.figma.com/design/dlMcXVuGIQvwSMC7uq7dGh/A---D?node-id=282-12243)

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | The main heading text (e.g., "Empreendimentos e propriedades à venda em Aveiro") |
| `resultsCount` | `number` | Yes | The number of results found |

## Usage Example

```tsx
import { ResultsHeader } from '@/components/ResultsHeader'

export default function PropertyPage() {
  return (
    <div>
      <ResultsHeader 
        title="Empreendimentos e propriedades à venda em Aveiro"
        resultsCount={23}
      />
    </div>
  )
}
```

## Styling
- Title: 24px, medium weight, black (#000000)
- Results count: 16px, medium weight, dark gray (#303030)
- Spacing: 24px gap between title and count
- Padding: 40px vertical, 200px horizontal (responsive)

## Responsive Behavior
- **Desktop (> 1024px)**: Full padding (200px horizontal)
- **Tablet (768px - 1024px)**: Reduced padding (100px horizontal)
- **Mobile (< 768px)**: Minimal padding (24px horizontal), smaller font sizes
- **Small Mobile (< 480px)**: Extra minimal padding (16px horizontal)

## Notes
- The component automatically handles singular/plural for results count ("resultado encontrado" vs "resultados encontrados")
- Uses Inter font family to match the design system
- Maximum width of 1440px with auto centering

