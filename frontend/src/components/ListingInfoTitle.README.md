# ListingInfoTitle Component

A simple, styled title component for listing information sections.

## Overview

The `ListingInfoTitle` component is a reusable title header designed for property listing pages. It provides consistent styling and spacing for section titles.

## Usage

```tsx
import { ListingInfoTitle } from './components/ListingInfoTitle';

function MyPage() {
  return (
    <ListingInfoTitle title="Sobre o Myst" />
  );
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | The title text to display |

## Example

```tsx
<ListingInfoTitle title="Sobre o Myst" />
```

This will render a heading with the text "Sobre o Myst" styled according to the design system.

## Styling

The component uses CSS Modules for styling and follows the project's design system:

- **Font**: Uses `var(--font-family-work-sans)` from the global CSS variables
- **Font Weight**: 500 (Medium)
- **Font Size**: 32px
- **Line Height**: 24px
- **Color**: `var(--dark-gray)` (#484848)
- **Padding**: 32px top padding
- **Display**: Flexbox with 10px gap

## Design System

The component adheres to the project's design tokens defined in `globals.css`:
- Font family: Work Sans
- Color: Dark gray (#484848)
- Consistent spacing with other listing components

## Notes

- The component renders an `h2` element for proper semantic HTML
- The title text preserves whitespace using `white-space: pre`
- Padding is applied only to the top to maintain consistent spacing with other sections

