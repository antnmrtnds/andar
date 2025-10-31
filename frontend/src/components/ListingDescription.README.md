# ListingDescription Component

A comprehensive text content component for displaying detailed property descriptions with highlights.

## Overview

The `ListingDescription` component displays the main descriptive content for a property listing, including a title, multiple paragraphs of text, and an optional bulleted list of highlights or features.

## Usage

```tsx
import { ListingDescription } from './components/ListingDescription';

function ListingPage() {
  return (
    <ListingDescription
      title="Últimas Unidades do Promotor | Mudança em breve"
      paragraphs={[
        'No coração de Santa Joana, um dos bairros mais tranquilos e desejados de Aveiro, o Myst apresenta um conjunto exclusivo de 16 apartamentos, desenhados para quem valoriza bem-estar, privacidade e um estilo de vida contemporâneo a poucos minutos do centro.',
        'Com uma arquitetura minimalista e linhas puras, o Myst foi concebido para potenciar a luz natural, o conforto térmico e a eficiência do espaço, criando ambientes amplos e harmoniosos.',
        'Pensado para proprietários exigentes, o Myst é ideal para quem procura um apartamento de elevado padrão em Aveiro.'
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
  );
}
```

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | The main title/heading for the description section |
| `paragraphs` | `string[]` | Array of paragraph text content |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `highlightsTitle` | `string` | `'Destaques do Empreendimento'` | Title for the highlights section |
| `highlights` | `string[]` | `[]` | Array of highlight items to display as a bulleted list |

## Features

- **Large Title**: Prominent 32px title with medium weight
- **Body Text**: Multiple paragraphs with proper spacing (12px font, 20px line height)
- **Highlights List**: Optional bulleted list for key features
- **Responsive Design**: Adapts text sizes and spacing for different screen sizes
- **Flexible Content**: Accepts any number of paragraphs and highlights
- **Max Width**: Content is constrained to 1040px for optimal readability

## Styling

The component uses CSS Modules and follows the project's design system:

### CSS Variables Used
- `--dark-gray` (#484848) - Text color
- `--font-family-work-sans` - Font family

### Typography
- **Title**: 32px, medium weight (500)
- **Body Text**: 12px (responsive up to 14px on mobile)
- **Line Height**: 20px for body, 32px for list items
- **List Style**: Disc bullets with 24px left padding

## Responsive Design

The component adapts at these breakpoints:

### Desktop (> 1024px)
- Full 1040px max-width
- 32px title font size
- 12px body text

### Tablet (768px - 1024px)
- Full width
- 28px title font size
- 14px body text

### Mobile (< 768px)
- 48px top padding (reduced from 64px)
- 28px title font size
- 14px body text
- 28px list item line height

### Small Mobile (< 480px)
- 32px top padding
- 24px title font size
- 14px body text
- 22px paragraph line height
- 26px list item line height

## Content Guidelines

### Title
- Use a concise, descriptive title that captures the essence of the description
- Recommended length: 1-2 lines
- Example: "Últimas Unidades do Promotor | Mudança em breve"

### Paragraphs
- Each paragraph should be 2-5 sentences
- Recommended: 3-5 paragraphs for optimal readability
- Use clear, engaging language
- Break up long text into multiple paragraphs

### Highlights
- Use 5-15 bullet points for best results
- Keep each item concise (1-2 lines)
- Start with the most important features
- Use parallel structure for consistency

## Example with Full Content

```tsx
<ListingDescription
  title="Últimas Unidades do Promotor | Mudança em breve"
  paragraphs={[
    'No coração de Santa Joana, um dos bairros mais tranquilos e desejados de Aveiro, o Myst apresenta um conjunto exclusivo de 16 apartamentos, desenhados para quem valoriza bem-estar, privacidade e um estilo de vida contemporâneo a poucos minutos do centro.',
    'Com uma arquitetura minimalista e linhas puras, o Myst foi concebido para potenciar a luz natural, o conforto térmico e a eficiência do espaço, criando ambientes amplos e harmoniosos. As generosas envidraçadas, a relação franca com as varandas e a orientação cuidadosamente estudada asseguram ventilação cruzada, luminosidade constante e um quotidiano mais leve e saudável.',
    'Inspirada na estética clean e intemporal, a materialidade do edifício combina betão, metal e pedra, criando uma presença sofisticada e urbana, sem abdicar de uma ligação orgânica ao bairro envolvente — feito de ruas serenas, espaços verdes e a atmosfera familiar que caracteriza Santa Joana.',
    'Pensado para proprietários exigentes, o Myst é ideal para quem procura um apartamento de elevado padrão em Aveiro, seja como residência principal ou como investimento seguro num dos mercados mais sólidos e procurados do país.'
  ]}
  highlightsTitle="Destaques do Empreendimento"
  highlights={[
    'Últimas unidades do promotor',
    'Em construção – mude-se em breve',
    'Cozinhas com bancadas em pedra e eletrodomésticos de gama elevada',
    'Pavimento em madeira nobre',
    'Grandes varandas e zonas sociais voltadas a sul/poente',
    'Vidros duplos e isolamento acústico e térmico reforçado',
    'Pré-instalação para carregamento de viaturas elétricas (EV)',
    'Elevada eficiência energética',
    'Proximidade a escolas, comércio, transportes e zonas verdes',
    'Garagem e arrecadação',
    'Garantia de construção de 10 anos'
  ]}
/>
```

## Accessibility

- Uses semantic HTML (`h2` for title, `ul`/`li` for lists)
- Proper heading hierarchy
- Text maintains sufficient contrast with background
- Responsive text sizing for readability

## Notes

- The highlights section only renders if the `highlights` array has items
- Paragraphs automatically wrap and maintain proper spacing
- Empty paragraphs are handled gracefully
- Content is optimized for SEO with semantic HTML structure
- Text is preserved with `white-space: pre-wrap` for natural line breaks

