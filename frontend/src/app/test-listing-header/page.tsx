'use client'

import React from 'react'
import { ListingHeader } from '@/components/ListingHeader'
import styles from './page.module.css'

export default function TestListingHeaderPage() {
  return (
    <div className={styles.page}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Default Listing Header</h2>
        <ListingHeader />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Custom Property</h2>
        <ListingHeader
          propertyName="Vista Mar Residences"
          address="Avenida da Liberdade 123, Lisboa 1250-096"
          isVerified={true}
          verificationText="Verificado"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Lisboa', href: '/propriedades/centro/lisboa' },
            { label: 'Avenida da Liberdade', href: '/propriedades/centro/lisboa/avenida' },
            { label: 'Vista Mar Residences' },
          ]}
          onSave={() => alert('Saved!')}
          onShare={() => alert('Shared!')}
        />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Without Verification Badge</h2>
        <ListingHeader
          propertyName="Porto Luxury Apartments"
          address="Rua de Santa Catarina 456, Porto 4000-443"
          isVerified={false}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Porto', href: '/propriedades/norte/porto' },
            { label: 'Porto Luxury Apartments' },
          ]}
        />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Algarve Property</h2>
        <ListingHeader
          propertyName="Algarve Beach Villas"
          address="Praia da Rocha, Portimão, Faro 8500-801"
          isVerified={true}
          verificationText="Projeto verificado pelo promotor"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Faro', href: '/propriedades/sul/faro' },
            { label: 'Portimão', href: '/propriedades/sul/faro/portimao' },
            { label: 'Algarve Beach Villas' },
          ]}
          saveText="Save"
          shareText="Share"
        />
      </div>

      <div className={styles.demoInfo}>
        <h3>Component Features:</h3>
        <ul>
          <li>✅ Breadcrumb navigation with clickable links</li>
          <li>✅ Property name with optional verification badge</li>
          <li>✅ Address display</li>
          <li>✅ Save and Share action buttons</li>
          <li>✅ Fully customizable via props</li>
          <li>✅ Responsive design (desktop, tablet, mobile)</li>
          <li>✅ TypeScript support</li>
          <li>✅ CSS Modules (no Tailwind)</li>
          <li>✅ Matches Figma design tokens</li>
        </ul>

        <h3>Usage:</h3>
        <pre className={styles.codeBlock}>
{`import { ListingHeader } from '@/components/ListingHeader'

export default function PropertyPage() {
  return (
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
      onSave={() => console.log('Saved')}
      onShare={() => console.log('Shared')}
    />
  )
}`}
        </pre>
      </div>
    </div>
  )
}

