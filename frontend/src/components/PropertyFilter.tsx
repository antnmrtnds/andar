'use client';

import React, { useState } from 'react';
import styles from './PropertyFilter.module.css';

interface PropertyFilterProps {
  className?: string;
}

export const PropertyFilter: React.FC<PropertyFilterProps> = ({ className }) => {
  const [selectedFilter, setSelectedFilter] = useState('AVR');

  const filters = ['Todos', 'AVR', 'POR', 'BRG', 'ALG', 'LEI', 'LIS'];

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>Destaques de Outubro para investir</h2>
        <div className={styles.filterBar}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterButton} ${
                selectedFilter === filter ? styles.active : ''
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;

