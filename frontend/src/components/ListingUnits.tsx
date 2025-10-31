'use client';

import React from 'react';
import { BedDouble, Bath, CarFront, LampDesk } from 'lucide-react';
import styles from './ListingUnits.module.css';

export interface Unit {
  id: string;
  type: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  office: number;
  price: number;
  imageUrl: string;
}

interface ListingUnitsProps {
  title: string;
  units: Unit[];
  onViewFloorPlan?: (unitId: string) => void;
  ctaText?: string;
}

export const ListingUnits: React.FC<ListingUnitsProps> = ({
  title,
  units,
  onViewFloorPlan,
  ctaText = 'Planta',
}) => {
  const formatPrice = (price: number) => {
    return `€${price.toLocaleString('pt-PT')}`;
  };

  const handleCtaClick = (unitId: string) => {
    if (onViewFloorPlan) {
      onViewFloorPlan(unitId);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={styles.unitsList}>
        {units.map((unit) => (
          <div key={unit.id} className={styles.unitCard}>
            <div className={styles.imageContainer}>
              <img 
                src={unit.imageUrl} 
                alt={unit.title}
                className={styles.image}
              />
            </div>

            <div className={styles.unitInfo}>
              <div className={styles.infoContent}>
                <div className={styles.topSection}>
                  <p className={styles.unitTitle}>{unit.title}</p>

                  <div className={styles.features}>
                    <div className={styles.feature}>
                      <div className={styles.featureIcon}>
                        <BedDouble size={20} color="var(--color-text-body-light)" />
                      </div>
                      <p className={styles.featureText}>{unit.bedrooms}</p>
                    </div>

                    <div className={styles.feature}>
                      <div className={styles.featureIcon}>
                        <Bath size={20} color="var(--color-text-body-light)" />
                      </div>
                      <p className={styles.featureText}>{unit.bathrooms}</p>
                    </div>

                    <div className={styles.feature}>
                      <div className={styles.featureIcon}>
                        <CarFront size={20} color="var(--color-text-body-light)" />
                      </div>
                      <p className={styles.featureText}>{unit.parking}</p>
                    </div>

                    <div className={styles.feature}>
                      <div className={styles.featureIcon}>
                        <LampDesk size={20} color="var(--color-text-body-light)" />
                      </div>
                      <p className={styles.featureText}>{unit.office}</p>
                    </div>
                  </div>
                </div>

                <p className={styles.price}>Desde €{unit.price.toLocaleString('pt-PT')}</p>
              </div>
            </div>

            <button 
              className={styles.ctaButton}
              onClick={() => handleCtaClick(unit.id)}
            >
              {ctaText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

