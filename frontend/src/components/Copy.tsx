import React from 'react';
import styles from './Copy.module.css';

interface CopyProps {
  className?: string;
}

export const Copy: React.FC<CopyProps> = ({ className }) => {
  return (
    <div className={`${styles.copy} ${className || ''}`}>
      <p className={styles.text}>
        Onde investidores encontram novos apartamentos e empreendimentos à venda em Portugal.
      </p>
    </div>
  );
};

export default Copy;

