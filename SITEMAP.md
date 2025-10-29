# Site Map - Real Estate Platform

This document outlines the hierarchical structure of the property search pages.

## URL Structure

The site follows a three-level hierarchy: **Zonas → Regiões → Localidades**

### Main Properties Page
- `/propriedades` - All properties in Portugal

### Level 1: Zonas (Zones)
- `/propriedades/norte` - Properties in the North Zone
- `/propriedades/centro` - Properties in the Central Zone
- `/propriedades/sul` - Properties in the South Zone

### Level 2: Regiões (Regions) - Nested under Zones

#### Norte Zone
- `/propriedades/norte/porto` - Properties in Porto Region

#### Centro Zone
- `/propriedades/centro/lisboa` - Properties in Lisbon Region
- `/propriedades/centro/aveiro` - Properties in Aveiro Region

#### Sul Zone
- `/propriedades/sul/faro` - Properties in Faro Region

### Level 3: Localidades (Localities) - Nested under Regions

#### Lisboa Region (Centro Zone)
- `/propriedades/centro/lisboa/cascais` - Properties in Cascais

#### Faro Region (Sul Zone)
- `/propriedades/sul/faro/albufeira` - Properties in Albufeira
- `/propriedades/sul/faro/lagos` - Properties in Lagos
- `/propriedades/sul/faro/tavira` - Properties in Tavira

## PropertiesHeader Component

All properties pages use the `PropertiesHeader` component which includes:
- Search bar with filtering functionality
- Navigation menu (Empreendimentos, Notícias & Novidades, Profissionais)
- Filter buttons (Tipo de Propriedade, Quartos, WC's, Estacionamento, Preço)
- "Ver Mapa" link

The header accepts a `title` prop to customize the page title:

```tsx
import { PropertiesHeader } from '@/components/PropertiesHeader';

<PropertiesHeader title="Lisboa" />
```

## Adding New Locations

To add new locations, follow this hierarchical structure:

1. **New Zone**: Create `frontend/src/app/propriedades/[zone-name]/page.tsx`
2. **New Region**: Create `frontend/src/app/propriedades/[zone-name]/[region-name]/page.tsx`
3. **New Locality**: Create `frontend/src/app/propriedades/[zone-name]/[region-name]/[locality-name]/page.tsx`

Each page should include the `PropertiesHeader` component with an appropriate title.

All pages are currently templates ready for implementation.

