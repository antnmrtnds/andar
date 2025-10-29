'use client'

import React, { useState } from 'react'
import { MapPin, Search, Menu } from 'lucide-react'
import styles from './PropertiesHeader.module.css'

interface PropertiesHeaderProps {
  title?: string
}

export const PropertiesHeader: React.FC<PropertiesHeaderProps> = ({ 
  title = 'Andar'
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Search query:', searchQuery)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={styles.header}>
      <div className={styles.desktop}>
        {/* Top Header Section */}
        <div className={styles.headerTop}>
          <div className={styles.titleAndSearch}>
            <p className={styles.title}>{title}</p>
            <form onSubmit={handleSearch} className={styles.searchBarContainer}>
              <div className={styles.searchBar}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Procure por bairro ou empreendimento"
                  className={styles.searchInput}
                />
                <div className={styles.searchActions}>
                  <div className={styles.filtrosButton}>
                    <p className={styles.filtrosText}>filtros</p>
                  </div>
                  <button type="submit" className={styles.searchButton}>
                    <Search size={14} strokeWidth={2.5} color="white" />
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Desktop Navigation Menu */}
          <nav className={styles.headerMenu}>
            <a href="/empreendimentos" className={styles.menuButton}>
              Empreendimentos
            </a>
            <a href="/newsletters" className={styles.menuButton}>
              Notícias & Novidades
            </a>
            <a href="/profissionais" className={styles.menuButton}>
              Profissionais
            </a>
          </nav>
          {/* Hamburger Menu Button */}
          <button 
            className={styles.hamburgerButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu size={24} color="var(--dark-gray)" />
          </button>
        </div>

        {/* Filter Bar Section */}
        <div className={styles.filterBar}>
          <div className={styles.filterButtons}>
            <button className={styles.filterButton}>
              Tipo de Propriedade
            </button>
            <button className={styles.filterButton}>
              Quartos
            </button>
            <button className={styles.filterButton}>
              WC's
            </button>
            <button className={styles.filterButton}>
              Estacionamento
            </button>
            <button className={styles.filterButton}>
              Preço
            </button>
          </div>
          <a href="/mapa" className={styles.verMapa}>
            <MapPin size={16} />
            <span>Ver Mapa</span>
          </a>
        </div>
      </div>
    </div>
  )
}

