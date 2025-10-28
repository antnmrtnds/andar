'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Newsletter.module.css';

const imgNewsletter = "http://localhost:3845/assets/aa54c2991bd98102f305f4d8b643dc1040a07497.png";

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
          <div className={styles.inputContainer}>
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
              <ArrowRight size={20} color="white" strokeWidth={2.5} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

