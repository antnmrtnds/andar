'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import styles from './Newsletter.module.css';

// Modern architectural building with newsletter theme
const imgNewsletter = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80";

interface NewsletterProps {
  className?: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [imageError, setImageError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    // TODO: Implement newsletter signup logic
    setEmail('');
  };

  return (
    <div className={`${styles.newsletter} ${className || ''}`}>
      <div className={styles.backgroundContainer}>
        {!imageError && (
          <img 
            alt="" 
            className={styles.backgroundImage} 
            src={imgNewsletter}
            onError={() => setImageError(true)}
          />
        )}
        {imageError && <div className={styles.backgroundFallback} />}
      </div>
      
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h2 className={styles.heading}>
            Ofertas de compra e incentivos para a sua próxima casa
          </h2>
          <p className={styles.description}>
            Subsídios para investimento imobiliário, descontos e ofertas de liquidação em bairros altamente valorizados de Sydney, Melbourne, Brisbane e outros.
          </p>
        </div>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className={styles.formLabel}>
            Receba todas as ofertas no seu email
          </p>
          <div className={styles.searchBar}>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                className={styles.input}
                placeholder="Escreva o seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className={styles.submitButton}
                aria-label="Subscribe"
              >
                <Send size={20} color="white" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

