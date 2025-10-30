'use client'

import React from 'react'
import { X } from 'lucide-react'
import styles from './NumberDropdown.module.css'

export type NumberOption = 1 | 2 | 3 | 4 | '5+' | null

interface NumberDropdownProps {
  isOpen: boolean
  selectedNumber: NumberOption
  title: string
  onClose: () => void
  onSelect: (num: NumberOption) => void
  onApply: () => void
  onClear: () => void
}

export const NumberDropdown: React.FC<NumberDropdownProps> = ({
  isOpen,
  selectedNumber,
  title,
  onClose,
  onSelect,
  onApply,
  onClear,
}) => {
  if (!isOpen) return null

  const numbers: NumberOption[] = [1, 2, 3, 4, '5+']

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownContent}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.titleRow}>
            <p className={styles.title}>{title}</p>
            <button 
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close"
            >
              <X size={24} strokeWidth={2} color="#303030" />
            </button>
          </div>
          <div className={styles.options}>
            {numbers.map((num) => (
              <button
                key={num}
                className={`${styles.optionButton} ${
                  selectedNumber === num ? styles.optionButtonActive : ''
                }`}
                onClick={() => onSelect(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
        
        {/* Separator */}
        <div className={styles.separator} />
        
        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <button 
            className={styles.clearButton}
            onClick={onClear}
          >
            Apagar
          </button>
          <button 
            className={styles.applyButton}
            onClick={onApply}
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  )
}

