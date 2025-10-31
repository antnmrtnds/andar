'use client'

import React from 'react'
import { ChevronRight, Bookmark, Upload, CheckCircle2 } from 'lucide-react'
import styles from './ListingHeader.module.css'

interface BreadcrumbItem {
  label: string
  href?: string
}

export interface ListingHeaderProps {
  /** Property name/title */
  propertyName?: string
  /** Property address */
  address?: string
  /** Whether the property is verified */
  isVerified?: boolean
  /** Verification text */
  verificationText?: string
  /** Breadcrumb navigation items */
  breadcrumbs?: BreadcrumbItem[]
  /** Handler for save button click */
  onSave?: () => void
  /** Handler for share button click */
  onShare?: () => void
  /** Text for save button */
  saveText?: string
  /** Text for share button */
  shareText?: string
}

export const ListingHeader: React.FC<ListingHeaderProps> = ({
  propertyName = 'Myst',
  address = '88 Rua Cónego Maio, Santa Joana, Aveiro 3810',
  isVerified = true,
  verificationText = 'Projeto verificado pelo promotor',
  breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Aveiro', href: '/propriedades/centro/aveiro' },
    { label: 'Santa Joana', href: '/propriedades/centro/aveiro/santa-joana' },
    { label: 'Myst' },
  ],
  onSave,
  onShare,
  saveText = 'Guardar',
  shareText = 'Partilhar',
}) => {
  const handleSaveClick = () => {
    if (onSave) {
      onSave()
    } else {
      console.log('Save clicked')
    }
  }

  const handleShareClick = () => {
    if (onShare) {
      onShare()
    } else {
      console.log('Share clicked')
    }
  }

  return (
    <div className={styles.container}>
      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={index}>
            {item.href ? (
              <a href={item.href} className={styles.breadcrumbLink}>
                {item.label}
              </a>
            ) : (
              <span className={styles.breadcrumbCurrent}>{item.label}</span>
            )}
            {index < breadcrumbs.length - 1 && (
              <ChevronRight className={styles.breadcrumbIcon} size={16} />
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Property Name, Address & Actions */}
      <div className={styles.contentWrapper}>
        {/* Left: Name and Address */}
        <div className={styles.propertyInfo}>
          {/* Property Name with Verification Badge */}
          <div className={styles.propertyNameRow}>
            <h1 className={styles.propertyName}>{propertyName}</h1>
            {isVerified && (
              <div className={styles.verificationBadge}>
                <CheckCircle2 className={styles.verificationIcon} size={16} />
                <span className={styles.verificationText}>{verificationText}</span>
              </div>
            )}
          </div>

          {/* Property Address */}
          <p className={styles.address}>{address}</p>
        </div>

        {/* Right: Action Buttons */}
        <div className={styles.actions}>
          <button 
            className={styles.actionButton}
            onClick={handleSaveClick}
            aria-label={saveText}
          >
            <Bookmark className={styles.actionIcon} size={20} />
            <span className={styles.actionText}>{saveText}</span>
          </button>

          <button 
            className={styles.actionButton}
            onClick={handleShareClick}
            aria-label={shareText}
          >
            <Upload className={styles.actionIcon} size={20} />
            <span className={styles.actionText}>{shareText}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

