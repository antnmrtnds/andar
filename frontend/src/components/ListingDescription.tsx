import React from 'react';
import styles from './ListingDescription.module.css';

interface ListingDescriptionProps {
  title: string;
  paragraphs: string[];
  highlightsTitle?: string;
  highlights?: string[];
}

export const ListingDescription: React.FC<ListingDescriptionProps> = ({
  title,
  paragraphs,
  highlightsTitle = 'Destaques do Empreendimento',
  highlights = [],
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}

        {highlights.length > 0 && (
          <>
            <p className={styles.highlightsTitle}>{highlightsTitle}</p>
            
            <ul className={styles.highlightsList}>
              {highlights.map((highlight, index) => (
                <li key={index} className={styles.highlightItem}>
                  {highlight}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

