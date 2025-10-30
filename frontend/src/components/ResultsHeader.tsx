import React from 'react'
import styles from './ResultsHeader.module.css'

interface ResultsHeaderProps {
  title: string
  resultsCount: number
}

export const ResultsHeader: React.FC<ResultsHeaderProps> = ({ 
  title, 
  resultsCount 
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.resultsCount}>
        {resultsCount} {resultsCount === 1 ? 'resultado encontrado' : 'resultados encontrados'}
      </p>
    </div>
  )
}

