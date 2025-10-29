# About Location Components

A set of reusable components for displaying location information with demographic statistics and rich text content, based on the Figma design.

## Components Overview

### 1. **AboutLocation** - Rich text content component
### 2. **Stats** - Demographic statistics with progress bars
### 3. **AboutWithStats** - Combined layout (text + stats side by side)

## Features

- 📊 Display demographic statistics with visual progress bars
- 📝 Rich text content with customizable sections
- 🎨 Fully styled with CSS Modules matching the project's design system
- 📱 Responsive design for mobile, tablet, and desktop
- ⚡ Fully customizable data and labels
- 🔧 TypeScript support with full type definitions
- 🎯 Can be used individually or combined

---

## Component 1: AboutLocation

Displays rich text content about a location with title, introduction, and multiple sections.

### Basic Usage

```tsx
import { AboutLocation } from '@/components/AboutLocation'

export default function MyPage() {
  return <AboutLocation />
}
```

### Custom Content

```tsx
import { AboutLocation } from '@/components/AboutLocation'

export default function MyPage() {
  return (
    <AboutLocation
      title="Sobre Lisboa 1000"
      introduction="Lisboa, capital de Portugal, é uma cidade vibrante..."
      sections={[
        {
          subtitle: 'Capital de oportunidades.',
          paragraphs: [
            'Lisboa é o centro económico, cultural e político...'
          ]
        },
        {
          subtitle: 'Um mosaico de culturas.',
          paragraphs: [
            'A capital portuguesa é um caldeirão de culturas...',
            'O mercado de trabalho diversificado...'
          ]
        }
      ]}
    />
  )
}
```

### AboutLocation Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Sobre Aveiro 3800'` | Main title |
| `introduction` | `string` | Default Aveiro intro | Introduction paragraph |
| `sections` | `AboutSection[]` | Default sections | Array of content sections |

### AboutSection Type

| Property | Type | Description |
|----------|------|-------------|
| `subtitle` | `string` | Section subtitle (20px) |
| `paragraphs` | `string[]` | Array of paragraph texts |

---

## Component 2: Stats

Displays demographic statistics with progress bars.

### Basic Usage (Default Data)

```tsx
import { Stats } from '@/components/Stats'

export default function MyPage() {
  return <Stats />
}
```

### Custom Data

```tsx
import { Stats } from '@/components/Stats'

export default function MyPage() {
  return (
    <Stats
      title="Dados demográficos de Lisboa"
      totalHouseholds="350,000"
      householdsLabel="Agregados Familiares"
      stats={[
        {
          percentage: '45.2%',
          title: 'Profissionais Seniores',
          description: 'Idades entre 35–50 anos...',
          progressValue: 45.2
        }
      ]}
      disclaimer={{
        title: 'Sobre estes dados',
        description: 'As estatísticas foram obtidas...'
      }}
    />
  )
}
```

### Stats Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Dados demográficos de Aveiro'` | Main title of the stats section |
| `totalHouseholds` | `string` | `'28,000'` | Total number of households to display |
| `householdsLabel` | `string` | `'Agregados Familiares'` | Label for the households count |
| `stats` | `StatItem[]` | Default Aveiro data | Array of statistical items to display |
| `disclaimer` | `{ title: string, description: string }` | Default disclaimer | Disclaimer text at the bottom |

### StatItem Type

| Property | Type | Description |
|----------|------|-------------|
| `percentage` | `string` | Percentage to display (e.g., "77.1%") |
| `title` | `string` | Title of the stat item |
| `description` | `string` | Detailed description of the stat |
| `progressValue` | `number` | Numeric value (0-100) for the progress bar width |

---

## Component 3: AboutWithStats

Combined layout that displays AboutLocation and Stats side by side (responsive - stacks on mobile).

### Basic Usage

```tsx
import { AboutWithStats } from '@/components/AboutWithStats'

export default function MyPage() {
  return <AboutWithStats />
}
```

### Custom Content

```tsx
import { AboutWithStats } from '@/components/AboutWithStats'

export default function MyPage() {
  return (
    <AboutWithStats
      aboutProps={{
        title: 'Sobre Lisboa 1000',
        introduction: 'Lisboa, capital de Portugal...',
        sections: [...]
      }}
      statsProps={{
        title: 'Dados demográficos de Lisboa',
        totalHouseholds: '350,000',
        stats: [...]
      }}
    />
  )
}
```

### AboutWithStats Props

| Prop | Type | Description |
|------|------|-------------|
| `aboutProps` | `AboutLocationProps` | Props to pass to AboutLocation component |
| `statsProps` | `StatsProps` | Props to pass to Stats component |

---

## Default Data

### AboutLocation - Default Aveiro Content

- Title: "Sobre Aveiro 3800"
- Introduction about Aveiro as "Veneza Portuguesa"
- 4 sections covering:
  - O coração da região Centro
  - Demographics and residents
  - Cosmopolitan culture
  - Investment numbers

### Stats - Default Aveiro Demographics

- **28,000** Agregados Familiares
- **77.1%** - Início de Carreira (Career Starters, ages 25-34)
- **22.6%** - Jovens Profissionais (Young Professionals, under 35)
- **0.2%** - Famílias Estabelecidas (Established Families, ages 35-54)

---

## Styling

All components use CSS Modules with design tokens from `globals.css`:

- Background: `var(--really-light-gray)` (#f4f4f4) for Stats
- Progress bar color: `var(--button-blue)` (#407cff)
- Text color: `var(--dark-gray)` (#484848)
- Font family: `var(--font-family-inter)`
- Typography scales: h1 (40px), h3 (20px), body-sm (12px)

---

## Responsive Breakpoints

### AboutWithStats Layout
- **Desktop** (>768px): Side by side with 64px gap
- **Tablet/Mobile** (≤768px): Stacked vertically

### Individual Components
- **Desktop**: Full dimensions as designed
- **Tablet** (≤768px): Adjusted spacing and font sizes
- **Mobile** (≤480px): Optimized for small screens

---

## Demo Page

Visit `/test-stats` to see all components in action with multiple examples:
- Full combined layout (AboutWithStats)
- Individual components (AboutLocation, Stats)
- Custom examples with Lisboa data

---

## Files Structure

```
frontend/src/components/
├── AboutLocation.tsx          # Text content component
├── AboutLocation.module.css   # Text content styles
├── Stats.tsx                  # Statistics component
├── Stats.module.css           # Statistics styles
├── AboutWithStats.tsx         # Combined layout
├── AboutWithStats.module.css  # Combined layout styles
└── Stats.README.md            # This documentation

frontend/src/app/test-stats/
├── page.tsx                   # Demo page
└── page.module.css            # Demo styles
```

---

## Design Reference

Based on Figma design: [A---D](https://www.figma.com/design/dlMcXVuGIQvwSMC7uq7dGh/A---D?node-id=75-3819)

- Text section: [Node 75:3684](https://www.figma.com/design/dlMcXVuGIQvwSMC7uq7dGh/A---D?node-id=75-3684)
- Stats section: [Node 75:3699](https://www.figma.com/design/dlMcXVuGIQvwSMC7uq7dGh/A---D?node-id=75-3819)

