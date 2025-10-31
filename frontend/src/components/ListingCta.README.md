# ListingCta Component

A call-to-action (CTA) bar component designed to be displayed below the property listing image grid. This component provides quick access to key property actions including requesting more information, calling the property contact, and downloading the property brochure.

![Figma Design](https://www.figma.com/design/dlMcXVuGIQvwSMC7uq7dGh/A---D?node-id=297-4123)

## Features

- ✅ **Primary Action Button** - Blue "Mais informações" (More Information) button
- ✅ **Phone Contact** - Blue bordered button displaying contact phone number
- ✅ **Brochure Download** - Gray bordered button for downloading property brochure
- ✅ **Fully Responsive** - Adapts to desktop, tablet, and mobile screens
- ✅ **Interactive States** - Hover and active states for all buttons
- ✅ **TypeScript Support** - Full type safety with TypeScript
- ✅ **CSS Modules** - Scoped styling without Tailwind
- ✅ **Accessible** - Proper ARIA labels and semantic HTML

## Design Specifications

Based on Figma design node: `297:4123`

- **Width**: Full width with max-width of 1440px
- **Height**: 96px
- **Background**: Light gray (#f0f0f0)
- **Padding**: 200px horizontal (responsive)
- **Button Colors**:
  - Primary: Blue (#407cff)
  - Call: Blue border (#407cff)
  - Brochure: Gray border (#898989)

## Usage

### Basic Usage

```typescript
import { ListingCta } from '@/components/ListingCta'

export default function PropertyPage() {
  return (
    <>
      <ListingHeader {...headerProps} />
      <ListingImageGrid images={propertyImages} />
      
      {/* CTA bar below image grid */}
      <ListingCta
        phoneNumber="+351 999 999 999"
        onMoreInfo={() => handleMoreInfo()}
        onCall={() => handleCall()}
        onDownloadBrochure={() => handleBrochureDownload()}
      />
    </>
  )
}
```

### With Custom Text

```typescript
<ListingCta
  phoneNumber="+351 912 345 678"
  moreInfoText="Request Details"
  brochureText="Download PDF"
  onMoreInfo={() => openContactForm()}
  onCall={() => window.location.href = 'tel:+351912345678'}
  onDownloadBrochure={() => downloadPDF()}
/>
```

### With Real Phone Link

```typescript
<ListingCta
  phoneNumber="+351 999 999 999"
  onCall={() => {
    // Opens native phone dialer
    window.location.href = 'tel:+351999999999'
  }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `phoneNumber` | `string` | `'+351 999 999...'` | No | Phone number to display on call button |
| `onMoreInfo` | `() => void` | `undefined` | No | Callback when "More Information" button is clicked |
| `onCall` | `() => void` | `undefined` | No | Callback when phone button is clicked |
| `onDownloadBrochure` | `() => void` | `undefined` | No | Callback when brochure button is clicked |
| `moreInfoText` | `string` | `'Mais informações'` | No | Text for the primary action button |
| `brochureText` | `string` | `'Brochura'` | No | Text for the brochure download button |

## Responsive Behavior

### Desktop (> 1440px)
- Full width with 200px horizontal padding
- Buttons displayed in horizontal layout
- Primary and call buttons grouped on the left
- Brochure button positioned on the right

### Tablet (768px - 1024px)
- Reduced horizontal padding (40px-100px)
- Maintains horizontal layout
- Buttons scale appropriately

### Mobile (< 768px)
- Vertical stack layout
- Full-width buttons
- Increased vertical spacing
- Each button takes full width for easy tapping

## Example Integration with Full Listing Page

```typescript
'use client'

import { ListingHeader } from '@/components/ListingHeader'
import { ListingImageGrid } from '@/components/ListingImageGrid'
import { ListingCta } from '@/components/ListingCta'

export default function PropertyDetailPage({ property }) {
  const handleMoreInfo = () => {
    // Open contact form modal or navigate to contact page
    console.log('Opening contact form...')
  }

  const handleCall = () => {
    // Initiate phone call
    window.location.href = `tel:${property.contactPhone}`
  }

  const handleBrochureDownload = () => {
    // Download or open brochure PDF
    window.open(property.brochureUrl, '_blank')
  }

  return (
    <div>
      <ListingHeader
        propertyName={property.name}
        address={property.address}
        isVerified={property.verified}
        breadcrumbs={property.breadcrumbs}
      />
      
      <ListingImageGrid images={property.images} />
      
      <ListingCta
        phoneNumber={property.contactPhone}
        onMoreInfo={handleMoreInfo}
        onCall={handleCall}
        onDownloadBrochure={handleBrochureDownload}
      />
      
      {/* Rest of property details */}
    </div>
  )
}
```

## Styling

The component uses CSS Modules for scoped styling. Key classes:

- `.container` - Main CTA bar container
- `.leftActions` - Left-side button group
- `.moreInfoButton` - Primary blue button
- `.callButton` - Phone number button with blue border
- `.brochureButton` - Brochure download button with gray border

## Accessibility

- All buttons include `aria-label` attributes
- Semantic HTML button elements
- Keyboard navigable
- Proper focus states
- Screen reader friendly text

## Demo

To see the component in action, visit: `/test-listing-cta`

This demo page shows:
- Full listing page layout with header, image grid, and CTA
- Interactive button functionality
- Component documentation
- Props reference table
- Usage examples

## File Structure

```
frontend/src/components/
├── ListingCta.tsx           # Component implementation
├── ListingCta.module.css    # Component styles
└── ListingCta.README.md     # This documentation
```

## Related Components

- `ListingHeader` - Property header with breadcrumbs and actions
- `ListingImageGrid` - Property image gallery (sits above this component)
- `PropertyCard` - Property card for listings pages

## Notes

- This component is designed to be full-width and should be placed directly after the `ListingImageGrid` component
- The component automatically handles responsive layouts
- Phone number formatting is the responsibility of the parent component
- Button click handlers are optional - buttons will still render without them

