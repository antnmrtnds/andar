'use client';

import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.linksSection}>
          <a href="/cookies" className={styles.link}>
            Política de cookies
          </a>
          <a href="/about" className={styles.link}>
            Sobre nós
          </a>
          <a href="/privacy" className={styles.link}>
            Privacidade
          </a>
          <a href="/terms" className={styles.link}>
            Condições gerais
          </a>
        </div>
        
        <div className={styles.copyright}>
          © {currentYear} Andar Ltd. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

