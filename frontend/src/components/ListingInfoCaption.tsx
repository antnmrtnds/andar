'use client';

import React from 'react';
import { BedDouble, Bath, CarFront, LampDesk } from 'lucide-react';
import styles from './ListingInfoCaption.module.css';

interface CompanyInfo {
  name: string;
  role: string;
  logoUrl: string;
}

interface ListingInfoCaptionProps {
  address: string;
  priceFrom: number;
  bedrooms: string;
  bathrooms: string;
  parking: string;
  office: string;
  displayLocationTitle?: string;
  displayLocationAddress?: string;
  onScheduleVisit?: () => void;
  onViewMap?: () => void;
  propertyType?: string;
  unitsCount?: string;
  onViewUnits?: () => void;
  developer?: CompanyInfo;
  architect?: CompanyInfo;
  constructor?: CompanyInfo;
}

export const ListingInfoCaption: React.FC<ListingInfoCaptionProps> = ({
  address,
  priceFrom,
  bedrooms,
  bathrooms,
  parking,
  office,
  displayLocationTitle = 'Localização do Andar Modelo',
  displayLocationAddress,
  onScheduleVisit,
  onViewMap,
  propertyType = 'Apartamentos',
  unitsCount,
  onViewUnits,
  developer,
  architect,
  constructor,
}) => {
  const formatPrice = (price: number) => {
    return `Desde €${price.toLocaleString('pt-PT')}`;
  };

  return (
    <div className={styles.container}>
      {/* Left side - Property Info */}
      <div className={styles.info}>
        {/* Top Section */}
        <div className={styles.topSection}>
          {/* Address & Price */}
          <div className={styles.addressPrice}>
            <p className={styles.address}>{address}</p>
            <p className={styles.price}>{formatPrice(priceFrom)}</p>
          </div>

          {/* Property Features */}
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <BedDouble size={20} color="var(--dark-gray)" />
              </div>
              <p className={styles.featureText}>{bedrooms}</p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Bath size={20} color="var(--dark-gray)" />
              </div>
              <p className={styles.featureText}>{bathrooms}</p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <CarFront size={20} color="var(--dark-gray)" />
              </div>
              <p className={styles.featureText}>{parking}</p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <LampDesk size={20} color="var(--dark-gray)" />
              </div>
              <p className={styles.featureText}>{office}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          {/* Display Location */}
          {displayLocationAddress && (
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>{displayLocationTitle}</p>
              <p className={styles.infoValue}>{displayLocationAddress}</p>
              {onScheduleVisit && (
                <button className={styles.linkButton} onClick={onScheduleVisit}>
                  Agendar Visita
                </button>
              )}
              {onViewMap && (
                <button className={styles.linkButton} onClick={onViewMap}>
                  Ver Mapa
                </button>
              )}
            </div>
          )}

          {/* Property Type */}
          <div className={styles.infoBlock}>
            <p className={styles.infoLabel}>Tipo</p>
            <p className={styles.infoValue}>{propertyType}</p>
          </div>

          {/* Units */}
          {unitsCount && (
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Unidades</p>
              <p className={styles.infoValue}>{unitsCount}</p>
              {onViewUnits && (
                <button className={styles.linkButton} onClick={onViewUnits}>
                  Ver unidades disponíveis
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right side - Companies */}
      <div className={styles.companies}>
        {developer && (
          <div className={styles.company}>
            <div className={styles.companyInfo}>
              <p className={styles.companyName}>{developer.name}</p>
              <p className={styles.companyRole}>{developer.role}</p>
            </div>
            <div className={styles.companyLogo}>
              <img src={developer.logoUrl} alt={developer.name} />
            </div>
          </div>
        )}

        {architect && (
          <div className={styles.company}>
            <div className={styles.companyInfo}>
              <p className={styles.companyName}>{architect.name}</p>
              <p className={styles.companyRole}>{architect.role}</p>
            </div>
            <div className={styles.companyLogo}>
              <img src={architect.logoUrl} alt={architect.name} />
            </div>
          </div>
        )}

        {constructor && (
          <div className={styles.company}>
            <div className={styles.companyInfo}>
              <p className={styles.companyName}>{constructor.name}</p>
              <p className={styles.companyRole}>{constructor.role}</p>
            </div>
            <div className={styles.companyLogo}>
              <img src={constructor.logoUrl} alt={constructor.name} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

