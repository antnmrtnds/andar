'use client'

import React from 'react'
import { ListingHeader } from '@/components/ListingHeader'
import { ListingImageGrid } from '@/components/ListingImageGrid'
import { ListingCta } from '@/components/ListingCta'
import styles from './page.module.css'

// Mock property images
const mockImages = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop',
]

export default function TestListingCtaPage() {
  return (
    <div className={styles.page}>
      <div className={styles.listingContainer}>
        <h1 className={styles.pageTitle}>Listing CTA Component Demo</h1>
        
        {/* Listing Header */}
        <ListingHeader
          propertyName="Myst"
          address="88 Rua Cónego Maio, Santa Joana, Aveiro 3810"
          isVerified={true}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Aveiro', href: '/propriedades/centro/aveiro' },
            { label: 'Santa Joana' },
            { label: 'Myst' }
          ]}
          onSave={() => alert('Property saved!')}
          onShare={() => alert('Property shared!')}
        />
        
        {/* Image Grid */}
        <div className={styles.imageGridSection}>
          <ListingImageGrid images={mockImages} />
        </div>
        
        {/* CTA Component - sits below the image grid */}
        <ListingCta
          phoneNumber="+351 999 999 999"
          onMoreInfo={() => alert('More information requested')}
          onCall={() => alert('Initiating call...')}
          onDownloadBrochure={() => alert('Downloading brochure...')}
        />
      </div>

      {/* Component Documentation */}
      <div className={styles.demoInfo}>
        <h2>Component Features:</h2>
        <ul>
          <li>✅ Full-width CTA bar with light gray background</li>
          <li>✅ Primary blue "Mais informações" button</li>
          <li>✅ Phone number button with blue border</li>
          <li>✅ Brochure download button with gray border</li>
          <li>✅ Responsive design (stacks vertically on mobile)</li>
          <li>✅ Hover and active states for all buttons</li>
          <li>✅ Customizable text and phone number</li>
          <li>✅ TypeScript support with full type safety</li>
          <li>✅ CSS Modules (no Tailwind)</li>
          <li>✅ Matches Figma design specifications</li>
        </ul>

        <h2>Props:</h2>
        <table className={styles.propsTable}>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>phoneNumber</code></td>
              <td>string</td>
              <td>'+351 999 999...'</td>
              <td>Phone number to display</td>
            </tr>
            <tr>
              <td><code>onMoreInfo</code></td>
              <td>() =&gt; void</td>
              <td>undefined</td>
              <td>Callback for "More Info" button</td>
            </tr>
            <tr>
              <td><code>onCall</code></td>
              <td>() =&gt; void</td>
              <td>undefined</td>
              <td>Callback for phone button</td>
            </tr>
            <tr>
              <td><code>onDownloadBrochure</code></td>
              <td>() =&gt; void</td>
              <td>undefined</td>
              <td>Callback for brochure button</td>
            </tr>
            <tr>
              <td><code>moreInfoText</code></td>
              <td>string</td>
              <td>'Mais informações'</td>
              <td>Text for the primary button</td>
            </tr>
            <tr>
              <td><code>brochureText</code></td>
              <td>string</td>
              <td>'Brochura'</td>
              <td>Text for the brochure button</td>
            </tr>
          </tbody>
        </table>

        <h2>Usage Example:</h2>
        <pre className={styles.codeBlock}>
{`import { ListingCta } from '@/components/ListingCta'

export default function PropertyPage() {
  return (
    <>
      {/* Your property header and image grid */}
      
      <ListingCta
        phoneNumber="+351 999 999 999"
        onMoreInfo={() => handleMoreInfo()}
        onCall={() => window.location.href = 'tel:+351999999999'}
        onDownloadBrochure={() => downloadBrochure()}
      />
    </>
  )
}`}
        </pre>
      </div>
    </div>
  )
}

