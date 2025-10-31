'use client';

import React, { useState } from 'react';
import { Menu, Search, SlidersHorizontal } from 'lucide-react';
import styles from './Hero.module.css';

// Modern luxury apartment building - high quality
const imgHeroDesktop = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80";

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const locations = [
    'Aveiro', 'Lisboa', 'Porto', 'Braga', 'Algarve', 'Leiria', 'Gaia'
  ];

  const handleLocationClick = (location: string) => {
    setSearchQuery(location);
    setSelectedLocation(location);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (!e.target.value) {
      setSelectedLocation(null);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  const handleFilterClick = () => {
    console.log('Open filters');
  };

  return (
    <div className={`${styles.hero} ${className || ''}`}>
      {/* Background Image */}
      {!imageError && (
        <img 
          alt="" 
          className={styles.heroBackground} 
          src={imgHeroDesktop}
          onError={() => setImageError(true)}
        />
      )}
      {imageError && <div className={styles.heroBackgroundFallback} />}

      {/* Header Section */}
      <div className={styles.header}>
        <p className={styles.logo}>Andar</p>
        <div className={styles.menu}>
          <button className={styles.menuButton}>
            Empreendimentos
          </button>
          <button className={styles.menuButton}>
            Notícias & Novidades
          </button>
          <button className={styles.menuButton}>
            Profissionais
          </button>
        </div>
        {/* Mobile Hamburger Menu */}
        <button className={styles.hamburgerButton}>
          <Menu size={24} color="white" />
        </button>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>
            O Portal da nova construção em Portugal
          </h1>
          <div className={styles.locationTags}>
            {locations.map((location) => (
              <div
                key={location}
                className={`${styles.locationTag} ${
                  selectedLocation === location ? styles.locationTagActive : ''
                }`}
                onClick={() => handleLocationClick(location)}
              >
                {location}
              </div>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <form className={styles.searchContainer} onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Procure por bairro ou empreendimento"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className={styles.searchActions}>
            <button
              type="button"
              className={styles.filterButton}
              onClick={handleFilterClick}
            >
              <span>filtros</span>
            </button>
            <button
              type="submit"
              className={styles.searchButton}
              aria-label="Search"
            >
              <Search size={16} color="white" strokeWidth={2.5} />
            </button>
          </div>
        </form>
      </div>

      {/* Featured Property */}
      <div className={styles.featuredProperty}>
        <p>Aurora - Flower Towers</p>
        <p>Leça da Palmeira, Porto</p>
      </div>
    </div>
  );
};

export default Hero;

