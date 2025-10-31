import React from 'react';
import styles from './ListingImageGrid.module.css';

interface ListingImageGridProps {
  images: string[];
}

export const ListingImageGrid: React.FC<ListingImageGridProps> = ({ images }) => {
  // Ensure we have at least 5 images, or repeat/fill with placeholders
  const displayImages = [...images];
  while (displayImages.length < 5) {
    displayImages.push(images[0] || 'https://via.placeholder.com/800x600?text=No+Image');
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftImage}>
        <div className={styles.imageWrapper}>
          <img 
            src={displayImages[0]} 
            alt="Property main view" 
            className={styles.image}
          />
        </div>
      </div>
      
      <div className={styles.rightImages}>
        <div className={styles.topRow}>
          <div className={styles.smallImageWrapper}>
            <div className={styles.imageContainer}>
              <img 
                src={displayImages[1]} 
                alt="Property view 2" 
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.smallImageWrapper}>
            <div className={styles.imageContainer}>
              <img 
                src={displayImages[2]} 
                alt="Property view 3" 
                className={styles.image}
              />
            </div>
          </div>
        </div>
        
        <div className={styles.bottomRow}>
          <div className={styles.smallImageWrapper}>
            <div className={styles.imageContainer}>
              <img 
                src={displayImages[3]} 
                alt="Property view 4" 
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.smallImageWrapper}>
            <div className={styles.imageContainer}>
              <img 
                src={displayImages[4]} 
                alt="Property view 5" 
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

