'use client'

import React from 'react'
import { Stats } from '@/components/Stats'
import { AboutLocation } from '@/components/AboutLocation'
import { AboutWithStats } from '@/components/AboutWithStats'
import styles from './page.module.css'

export default function TestStatsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>About Location Components Demo</h1>
        
        {/* Full Combined Component - Default Aveiro */}
        <div className={styles.fullWidthSection}>
          <h2 className={styles.sectionTitle}>Full Layout - About Aveiro with Stats</h2>
          <AboutWithStats />
        </div>

        <div className={styles.divider} />

        {/* Individual Components */}
        <h1 className={styles.pageTitle}>Individual Components</h1>

        {/* AboutLocation Component */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>AboutLocation Component - Default Aveiro</h2>
          <AboutLocation />
        </div>
        
        {/* Stats Component */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Stats Component - Default Aveiro Demographics</h2>
          <Stats />
        </div>

        <div className={styles.divider} />

        {/* Custom Examples */}
        <h1 className={styles.pageTitle}>Custom Examples</h1>

        {/* Custom Lisboa */}
        <div className={styles.fullWidthSection}>
          <h2 className={styles.sectionTitle}>Custom - Lisboa</h2>
          <AboutWithStats
            aboutProps={{
              title: 'Sobre Lisboa 1000',
              introduction: 'Lisboa, capital de Portugal, é uma cidade vibrante que combina história milenar com modernidade cosmopolita. Entre os seus icónicos bairros históricos e as zonas empresariais modernas, Lisboa destaca-se como um dos destinos mais procurados da Europa para viver, trabalhar e investir.',
              sections: [
                {
                  subtitle: 'Capital de oportunidades.',
                  paragraphs: [
                    'Lisboa é o centro económico, cultural e político de Portugal. Com excelentes infraestruturas, transporte público eficiente e proximidade ao aeroporto internacional, a cidade atrai empresas multinacionais, startups e profissionais de todo o mundo.'
                  ]
                },
                {
                  subtitle: 'Um mosaico de culturas e profissionais.',
                  paragraphs: [
                    'A capital portuguesa é um caldeirão de culturas, onde se misturam profissionais qualificados, empreendedores, estudantes internacionais e famílias estabelecidas. O mercado de trabalho diversificado e as oportunidades em tecnologia, turismo e serviços fazem de Lisboa um polo de atração de talento.'
                  ]
                }
              ]
            }}
            statsProps={{
              title: 'Dados demográficos de Lisboa',
              totalHouseholds: '350,000',
              householdsLabel: 'Agregados Familiares',
              stats: [
                {
                  percentage: '45.2%',
                  title: 'Profissionais Seniores',
                  description: 'Idades entre 35–50 anos – Profissionais estabelecidos com carreiras consolidadas e rendimentos elevados.',
                  progressValue: 45.2
                },
                {
                  percentage: '35.8%',
                  title: 'Jovens Urbanos',
                  description: 'Idades entre 25–34 anos – Jovens profissionais atraídos pela vida urbana e oportunidades de carreira.',
                  progressValue: 35.8
                },
                {
                  percentage: '19.0%',
                  title: 'Famílias com Crianças',
                  description: 'Idades entre 30–45 anos – Famílias estabelecidas procurando qualidade de vida e boas escolas.',
                  progressValue: 19.0
                }
              ]
            }}
          />
        </div>
      </div>
    </div>
  )
}

