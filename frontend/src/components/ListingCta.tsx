import React from 'react';
import styles from './ListingCta.module.css';

interface ListingCtaProps {
  phoneNumber?: string;
  onMoreInfo?: () => void;
  onCall?: () => void;
  onDownloadBrochure?: () => void;
  moreInfoText?: string;
  brochureText?: string;
}

export const ListingCta: React.FC<ListingCtaProps> = ({
  phoneNumber = '+351 999 999...',
  onMoreInfo,
  onCall,
  onDownloadBrochure,
  moreInfoText = 'Mais informações',
  brochureText = 'Brochura',
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftActions}>
        <button 
          className={styles.moreInfoButton}
          onClick={onMoreInfo}
          aria-label="More information"
        >
          {moreInfoText}
        </button>
        <button 
          className={styles.callButton}
          onClick={onCall}
          aria-label={`Call ${phoneNumber}`}
        >
          {phoneNumber}
        </button>
      </div>
      
      <button 
        className={styles.brochureButton}
        onClick={onDownloadBrochure}
        aria-label="Download brochure"
      >
        {brochureText}
      </button>
    </div>
  );
};

