'use client'

import React from 'react'
import styles from './Stats.module.css'

export interface StatItem {
  percentage: string
  title: string
  description: string
  progressValue: number // 0-100
}

export interface StatsProps {
  title?: string
  totalHouseholds?: string
  householdsLabel?: string
  stats?: StatItem[]
  disclaimer?: {
    title: string
    description: string
  }
}

const defaultStats: StatItem[] = [
  {
    percentage: '77.1%',
    title: 'Início de Carreira',
    description: 'Idades entre 25–34 anos – Jovens adultos qualificados, maioritariamente millennials, no início do percurso profissional, incluindo trabalhadores especializados e jovens quadros.',
    progressValue: 77.1
  },
  {
    percentage: '22.6%',
    title: 'Jovens Profissionais',
    description: 'Idades abaixo dos 35 anos – Profissionais de sucesso, focados na carreira, financeiramente estáveis e, em grande parte, sem filhos.',
    progressValue: 22.6
  },
  {
    percentage: '0.2%',
    title: 'Famílias Estabelecidas',
    description: 'Idades entre 35–54 anos – Famílias de classe média/alta com filhos em idade escolar, normalmente em profissões de colarinho branco.',
    progressValue: 0.2
  }
]

const defaultDisclaimer = {
  title: 'Sobre estes dados',
  description: 'As estatísticas acima foram obtidas a partir dos dados demográficos Mosaic, propriedade com direitos reservados da Experian Australia Pty Limited (ou dos seus licenciadores).'
}

export const Stats: React.FC<StatsProps> = ({
  title = 'Dados demográficos de Aveiro',
  totalHouseholds = '28,000',
  householdsLabel = 'Agregados Familiares',
  stats = defaultStats,
  disclaimer = defaultDisclaimer
}) => {
  return (
    <div className={styles.container}>
      {/* Title */}
      <p className={styles.title}>{title}</p>
      
      {/* Total Households Highlight */}
      <div className={styles.highlight}>
        <span className={styles.highlightNumber}>{totalHouseholds}</span>
        <span className={styles.highlightLabel}> {householdsLabel}</span>
      </div>
      
      {/* Stats List */}
      <div className={styles.statsList}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            {/* Percentage */}
            <p className={styles.percentage}>{stat.percentage}</p>
            
            {/* Progress Bar */}
            <div className={styles.progressBarContainer}>
              <div 
                className={styles.progressBar}
                style={{ width: `${stat.progressValue}%` }}
              />
            </div>
            
            {/* Stat Info */}
            <div className={styles.statInfo}>
              <p className={styles.statTitle}>{stat.title}</p>
              <p className={styles.statDescription}>{stat.description}</p>
            </div>
          </div>
        ))}
        
        {/* Disclaimer */}
        {disclaimer && (
          <div className={styles.disclaimer}>
            <p className={styles.disclaimerTitle}>{disclaimer.title}</p>
            <p className={styles.disclaimerText}>{disclaimer.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

