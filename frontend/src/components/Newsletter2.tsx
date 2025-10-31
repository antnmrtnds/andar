'use client';

import React, { useState } from 'react';
import { Send, Facebook, Instagram } from 'lucide-react';
import styles from './Newsletter2.module.css';

interface CityData {
  name: string;
  locations: string[];
}

interface Newsletter2Props {
  className?: string;
  citiesData?: CityData[];
}

const defaultCitiesData: CityData[] = [
  {
    name: 'Lisboa',
    locations: [
      'Alcântara',
      'Alvalade',
      'Areeiro',
      'Belém',
      'Benfica',
      'Campo de Ourique',
      'Carnide',
      'Estrela',
      'Lumiar',
      'Marvila',
      'Parque das Nações',
      'Penha de França',
      'Santa Maria Maior',
      'Santo António',
      'São Vicente',
    ]
  },
  {
    name: 'Porto',
    locations: [
      'Boavista',
      'Foz do Douro',
      'Matosinhos',
      'Vila Nova de Gaia',
      'Maia',
      'Gondomar',
      'Póvoa de Varzim',
      'Santo Tirso',
      'Valongo',
      'Trofa',
    ]
  },
  {
    name: 'Aveiro',
    locations: [
      'Santa Joana',
      'Águeda',
      'Aveiro Centro',
      'Esgueira',
      'Costa Nova',
      'Ílhavo',
      'Gafanha da Nazaré',
      'São Jacinto',
    ]
  },
  {
    name: 'Braga',
    locations: [
      'Braga Centro',
      'Guimarães',
      'Barcelos',
      'Famalicão',
      'Esposende',
      'Vizela',
    ]
  },
  {
    name: 'Coimbra',
    locations: [
      'Coimbra Centro',
      'Figueira da Foz',
      'Cantanhede',
      'Montemor-o-Velho',
      'Condeixa',
    ]
  },
  {
    name: 'Faro',
    locations: [
      'Albufeira',
      'Lagos',
      'Portimão',
      'Loulé',
      'Tavira',
      'Olhão',
      'Vilamoura',
      'Quarteira',
    ]
  },
];

export const Newsletter2: React.FC<Newsletter2Props> = ({ 
  className,
  citiesData = defaultCitiesData,
}) => {
  const [email, setEmail] = useState('');
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    // TODO: Implement newsletter signup logic
    setEmail('');
  };

  return (
    <div className={`${styles.newsletter} ${className || ''}`}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.leftContent}>
          {/* Top Section */}
          <div className={styles.topSection}>
            <div className={styles.ctaSection}>
              <div className={styles.copyText}>
                <p className={styles.smallText}>
                  Receba notificação quando aparecer novos empreendimentos.
                </p>
                <p className={styles.mediumText}>
                  Todas as listagens na sua inbox
                </p>
              </div>
              
              <form className={styles.searchBar} onSubmit={handleSubmit}>
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
              </form>
            </div>
            
            <div className={styles.spacer} />
          </div>
          
          {/* Bottom Section */}
          <div className={styles.bottomSection}>
            <div className={styles.socialIcons}>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.iconWrapper}
                aria-label="Facebook"
              >
                <Facebook size={24} color="var(--dark-gray)" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.iconWrapper}
                aria-label="Instagram"
              >
                <Instagram size={24} color="var(--dark-gray)" />
              </a>
            </div>
            
            <p className={styles.poweredBy}>
              powered by Viriato e Viriato, SA.
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className={styles.rightSection}>
        {/* Cities Tabs */}
        <div className={styles.citiesTabs}>
          {citiesData.map((cityData, index) => (
            <button
              key={index}
              className={`${styles.cityTab} ${selectedCityIndex === index ? styles.cityTabActive : ''}`}
              onClick={() => setSelectedCityIndex(index)}
            >
              {cityData.name}
            </button>
          ))}
        </div>
        
        {/* Locations Grid */}
        <div className={styles.locationsGrid}>
          {citiesData[selectedCityIndex].locations.map((location, index) => (
            <p key={index} className={styles.locationItem}>
              {location}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsletter2;

