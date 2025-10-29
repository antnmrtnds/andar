'use client'

import React, { useState, useRef, useEffect } from 'react'
import { MapPin, Search, Menu, X } from 'lucide-react'
import styles from './PropertiesHeader.module.css'

interface PropertiesHeaderProps {
  title?: string
}

type PropertyType = 'Todos' | 'Apartamentos' | 'Vilas' | 'Penthouses'
type NumberOption = 1 | 2 | 3 | 4 | '5+' | null

export const PropertiesHeader: React.FC<PropertiesHeaderProps> = ({ 
  title = 'Andar'
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Property Type Filter
  const [isPropertyTypeOpen, setIsPropertyTypeOpen] = useState(false)
  const [selectedPropertyType, setSelectedPropertyType] = useState<PropertyType>('Todos')
  
  // Quartos (Bedrooms) Filter
  const [isQuartosOpen, setIsQuartosOpen] = useState(false)
  const [selectedQuartos, setSelectedQuartos] = useState<NumberOption>(null)
  
  // WC's (Bathrooms) Filter
  const [isWcsOpen, setIsWcsOpen] = useState(false)
  const [selectedWcs, setSelectedWcs] = useState<NumberOption>(null)
  
  // Estacionamento (Parking) Filter
  const [isEstacionamentoOpen, setIsEstacionamentoOpen] = useState(false)
  const [selectedEstacionamento, setSelectedEstacionamento] = useState<NumberOption>(null)
  
  // Preço (Price) Filter
  const [isPrecoOpen, setIsPrecoOpen] = useState(false)
  const [precoMin, setPrecoMin] = useState('')
  const [precoMax, setPrecoMax] = useState('')
  
  // Refs for dropdown menus
  const propertyTypeRef = useRef<HTMLDivElement>(null)
  const quartosRef = useRef<HTMLDivElement>(null)
  const wcsRef = useRef<HTMLDivElement>(null)
  const estacionamentoRef = useRef<HTMLDivElement>(null)
  const precoRef = useRef<HTMLDivElement>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Search query:', searchQuery)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Property Type Handlers
  const togglePropertyType = () => {
    setIsPropertyTypeOpen(!isPropertyTypeOpen)
  }

  const handlePropertyTypeSelect = (type: PropertyType) => {
    setSelectedPropertyType(type)
  }

  const handlePropertyTypeApply = () => {
    setIsPropertyTypeOpen(false)
    console.log('Property Type filter applied:', selectedPropertyType)
  }

  const handlePropertyTypeClear = () => {
    setSelectedPropertyType('Todos')
  }

  // Quartos Handlers
  const handleQuartosSelect = (num: NumberOption) => {
    setSelectedQuartos(num)
  }

  const handleQuartosApply = () => {
    setIsQuartosOpen(false)
    console.log('Quartos filter applied:', selectedQuartos)
  }

  const handleQuartosClear = () => {
    setSelectedQuartos(null)
  }

  // WC's Handlers
  const handleWcsSelect = (num: NumberOption) => {
    setSelectedWcs(num)
  }

  const handleWcsApply = () => {
    setIsWcsOpen(false)
    console.log('WCs filter applied:', selectedWcs)
  }

  const handleWcsClear = () => {
    setSelectedWcs(null)
  }

  // Estacionamento Handlers
  const handleEstacionamentoSelect = (num: NumberOption) => {
    setSelectedEstacionamento(num)
  }

  const handleEstacionamentoApply = () => {
    setIsEstacionamentoOpen(false)
    console.log('Estacionamento filter applied:', selectedEstacionamento)
  }

  const handleEstacionamentoClear = () => {
    setSelectedEstacionamento(null)
  }

  // Preço Handlers
  const handlePrecoApply = () => {
    setIsPrecoOpen(false)
    console.log('Preço filter applied:', { min: precoMin, max: precoMax })
  }

  const handlePrecoClear = () => {
    setPrecoMin('')
    setPrecoMax('')
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (propertyTypeRef.current && !propertyTypeRef.current.contains(event.target as Node)) {
        setIsPropertyTypeOpen(false)
      }
      if (quartosRef.current && !quartosRef.current.contains(event.target as Node)) {
        setIsQuartosOpen(false)
      }
      if (wcsRef.current && !wcsRef.current.contains(event.target as Node)) {
        setIsWcsOpen(false)
      }
      if (estacionamentoRef.current && !estacionamentoRef.current.contains(event.target as Node)) {
        setIsEstacionamentoOpen(false)
      }
      if (precoRef.current && !precoRef.current.contains(event.target as Node)) {
        setIsPrecoOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

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
            {/* Tipo de Propriedade */}
            <div className={styles.filterButtonWrapper} ref={propertyTypeRef}>
              <button 
                className={`${styles.filterButton} ${isPropertyTypeOpen ? styles.filterButtonActive : ''}`}
                onClick={togglePropertyType}
              >
                Tipo de Propriedade
              </button>
              {isPropertyTypeOpen && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownContent}>
                    <div className={styles.dropdownTopSection}>
                      <div className={styles.dropdownTitle}>
                        <p className={styles.dropdownTitleText}>Tipo de Propriedade</p>
                        <button 
                          className={styles.closeButton}
                          onClick={() => setIsPropertyTypeOpen(false)}
                          aria-label="Close"
                        >
                          <X size={24} strokeWidth={2} color="#303030" />
                        </button>
                      </div>
                      <div className={styles.propertyTypes}>
                        {(['Todos', 'Apartamentos', 'Vilas', 'Penthouses'] as PropertyType[]).map((type) => (
                          <button
                            key={type}
                            className={`${styles.propertyTypeButton} ${
                              selectedPropertyType === type ? styles.propertyTypeButtonActive : ''
                            }`}
                            onClick={() => handlePropertyTypeSelect(type)}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className={styles.dropdownSeparator} />
                    <div className={styles.dropdownBottomSection}>
                      <button 
                        className={styles.clearButton}
                        onClick={handlePropertyTypeClear}
                      >
                        Apagar
                      </button>
                      <button 
                        className={styles.applyButton}
                        onClick={handlePropertyTypeApply}
                      >
                        Aplicar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quartos */}
            <div className={styles.filterButtonWrapper} ref={quartosRef}>
              <button 
                className={`${styles.filterButton} ${isQuartosOpen ? styles.filterButtonActive : ''}`}
                onClick={() => setIsQuartosOpen(!isQuartosOpen)}
              >
                Quartos
              </button>
              {isQuartosOpen && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownContent}>
                    <div className={styles.dropdownTopSection}>
                      <div className={styles.dropdownTitle}>
                        <p className={styles.dropdownTitleText}>Quartos</p>
                        <button 
                          className={styles.closeButton}
                          onClick={() => setIsQuartosOpen(false)}
                          aria-label="Close"
                        >
                          <X size={24} strokeWidth={2} color="#303030" />
                        </button>
                      </div>
                      <div className={styles.numberOptions}>
                        {([1, 2, 3, 4, '5+'] as NumberOption[]).map((num) => (
                          <button
                            key={num}
                            className={`${styles.numberButton} ${
                              selectedQuartos === num ? styles.numberButtonActive : ''
                            }`}
                            onClick={() => handleQuartosSelect(num)}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className={styles.dropdownSeparator} />
                    <div className={styles.dropdownBottomSection}>
                      <button 
                        className={styles.clearButton}
                        onClick={handleQuartosClear}
                      >
                        Apagar
                      </button>
                      <button 
                        className={styles.applyButton}
                        onClick={handleQuartosApply}
                      >
                        Aplicar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* WC's */}
            <div className={styles.filterButtonWrapper} ref={wcsRef}>
              <button 
                className={`${styles.filterButton} ${isWcsOpen ? styles.filterButtonActive : ''}`}
                onClick={() => setIsWcsOpen(!isWcsOpen)}
              >
                WC's
              </button>
              {isWcsOpen && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownContent}>
                    <div className={styles.dropdownTopSection}>
                      <div className={styles.dropdownTitle}>
                        <p className={styles.dropdownTitleText}>WC's</p>
                        <button 
                          className={styles.closeButton}
                          onClick={() => setIsWcsOpen(false)}
                          aria-label="Close"
                        >
                          <X size={24} strokeWidth={2} color="#303030" />
                        </button>
                      </div>
                      <div className={styles.numberOptions}>
                        {([1, 2, 3, 4, '5+'] as NumberOption[]).map((num) => (
                          <button
                            key={num}
                            className={`${styles.numberButton} ${
                              selectedWcs === num ? styles.numberButtonActive : ''
                            }`}
                            onClick={() => handleWcsSelect(num)}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className={styles.dropdownSeparator} />
                    <div className={styles.dropdownBottomSection}>
                      <button 
                        className={styles.clearButton}
                        onClick={handleWcsClear}
                      >
                        Apagar
                      </button>
                      <button 
                        className={styles.applyButton}
                        onClick={handleWcsApply}
                      >
                        Aplicar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Estacionamento */}
            <div className={styles.filterButtonWrapper} ref={estacionamentoRef}>
              <button 
                className={`${styles.filterButton} ${isEstacionamentoOpen ? styles.filterButtonActive : ''}`}
                onClick={() => setIsEstacionamentoOpen(!isEstacionamentoOpen)}
              >
                Estacionamento
              </button>
              {isEstacionamentoOpen && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownContent}>
                    <div className={styles.dropdownTopSection}>
                      <div className={styles.dropdownTitle}>
                        <p className={styles.dropdownTitleText}>Estacionamento</p>
                        <button 
                          className={styles.closeButton}
                          onClick={() => setIsEstacionamentoOpen(false)}
                          aria-label="Close"
                        >
                          <X size={24} strokeWidth={2} color="#303030" />
                        </button>
                      </div>
                      <div className={styles.numberOptions}>
                        {([1, 2, 3, 4, '5+'] as NumberOption[]).map((num) => (
                          <button
                            key={num}
                            className={`${styles.numberButton} ${
                              selectedEstacionamento === num ? styles.numberButtonActive : ''
                            }`}
                            onClick={() => handleEstacionamentoSelect(num)}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className={styles.dropdownSeparator} />
                    <div className={styles.dropdownBottomSection}>
                      <button 
                        className={styles.clearButton}
                        onClick={handleEstacionamentoClear}
                      >
                        Apagar
                      </button>
                      <button 
                        className={styles.applyButton}
                        onClick={handleEstacionamentoApply}
                      >
                        Aplicar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Preço */}
            <div className={styles.filterButtonWrapper} ref={precoRef}>
              <button 
                className={`${styles.filterButton} ${isPrecoOpen ? styles.filterButtonActive : ''}`}
                onClick={() => setIsPrecoOpen(!isPrecoOpen)}
              >
                Preço
              </button>
              {isPrecoOpen && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownContent}>
                    <div className={styles.dropdownTopSection}>
                      <div className={styles.dropdownTitle}>
                        <p className={styles.dropdownTitleText}>Preço</p>
                        <button 
                          className={styles.closeButton}
                          onClick={() => setIsPrecoOpen(false)}
                          aria-label="Close"
                        >
                          <X size={24} strokeWidth={2} color="#303030" />
                        </button>
                      </div>
                      <div className={styles.priceInputs}>
                        <div className={styles.priceInputGroup}>
                          <label className={styles.priceLabel}>Mín</label>
                          <input
                            type="text"
                            className={styles.priceInput}
                            placeholder="Valor"
                            value={precoMin}
                            onChange={(e) => setPrecoMin(e.target.value)}
                          />
                        </div>
                        <span className={styles.priceSeparator}>-</span>
                        <div className={styles.priceInputGroup}>
                          <label className={styles.priceLabel}>Máx</label>
                          <input
                            type="text"
                            className={styles.priceInput}
                            placeholder="Valor"
                            value={precoMax}
                            onChange={(e) => setPrecoMax(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.dropdownSeparator} />
                    <div className={styles.dropdownBottomSection}>
                      <button 
                        className={styles.clearButton}
                        onClick={handlePrecoClear}
                      >
                        Apagar
                      </button>
                      <button 
                        className={styles.applyButton}
                        onClick={handlePrecoApply}
                      >
                        Aplicar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
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

