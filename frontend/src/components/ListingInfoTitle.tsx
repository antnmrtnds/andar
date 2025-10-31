import React from 'react';
import styles from './ListingInfoTitle.module.css';

interface ListingInfoTitleProps {
  title: string;
}

export const ListingInfoTitle: React.FC<ListingInfoTitleProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

