'use client'

import React from 'react'
import styles from './AboutLocation.module.css'

export interface AboutSection {
  subtitle: string
  paragraphs: string[]
}

export interface AboutLocationProps {
  title?: string
  introduction?: string
  sections?: AboutSection[]
}

const defaultSections: AboutSection[] = [
  {
    subtitle: 'O coração da região Centro.',
    paragraphs: [
      'Aveiro pulsa entre tradição e modernidade. O ambiente seguro, os habitantes acolhedores, as avenidas amplas, os canais com moliceiros e o estilo de vida descontraído criam um cenário ideal para viver, trabalhar ou investir. A cidade oferece apartamentos de luxo e terrenos para construção que atraem tanto residentes como investidores nacionais e estrangeiros que procuram qualidade, proximidade ao mar e um ritmo de vida equilibrado.'
    ]
  },
  {
    subtitle: 'Quem vive ao lado? Uma cidade para profissionais, estudantes e famílias.',
    paragraphs: [
      'Aveiro tem um perfil demográfico diverso e internacional. A Universidade de Aveiro — uma das mais prestigiadas do país — atrai estudantes e investigadores de todo o mundo. Ao mesmo tempo, o crescimento de empresas ligadas à tecnologia, ao turismo, à indústria e aos serviços faz da cidade um ponto de encontro de profissionais qualificados e empreendedores.',
      'Aqui encontramos jovens compradores, famílias à procura de mais espaço e conforto, e também compradores experientes que procuram uma vida mais tranquila, sem abdicar de bons acessos e de uma localização estratégica entre Porto e Coimbra. O investimento estrangeiro tem crescido e o mercado imobiliário continua sólido e atrativo.'
    ]
  },
  {
    subtitle: 'Cultura cosmopolita e estilo de vida vibrante.',
    paragraphs: [
      'Quem escolhe viver em Aveiro beneficia de um estilo de vida ímpar: gastronomia de excelência, esplanadas soalheiras, cafés históricos, ciclovias, museus, eventos culturais, zonas comerciais modernas e praias apaixonantes como a da Barra e da Costa Nova. É uma cidade ativa, com agenda cheia — mas que nunca perde o seu espírito leve, seguro e relaxante.',
      'Nos fins de semana, a Praça do Peixe, a ria e as praias próximas tornam-se pontos de encontro naturais. A cidade recebe cada vez mais visitantes que, muitas vezes, acabam por ficar — encantados pelo ambiente, pela localização e pela qualidade de vida.'
    ]
  },
  {
    subtitle: 'Os números do investimento em Aveiro.',
    paragraphs: [
      'Quer para viver, quer para investir, Aveiro destaca-se pelo excelente equilíbrio entre qualidade e valorização. A procura imobiliária permanece em alta, impulsionada pelo crescimento populacional, pela presença universitária, pela indústria tecnológica e pela notoriedade turística.',
      'Mesmo com o aumento de novos empreendimentos, a oferta continua abaixo da procura — um cenário ideal para investidores que procuram estabilidade e potencial de valorização futura.'
    ]
  }
]

export const AboutLocation: React.FC<AboutLocationProps> = ({
  title = 'Sobre Aveiro 3800',
  introduction = 'Conhecida como a "Veneza Portuguesa", Aveiro é uma cidade em crescimento contínuo, marcada pela sua forte ligação à Ria, pela arquitetura Arte Nova, pelo desenvolvimento universitário e pela sua atmosfera tranquila e cosmopolita. Ao longo das últimas décadas, Aveiro afirmou-se como um dos polos urbanos mais dinâmicos do país, combinando qualidade de vida, inovação e forte valorização imobiliária.',
  sections = defaultSections
}) => {
  return (
    <div className={styles.container}>
      {/* Main Title */}
      <div className={styles.titleSection}>
        <h1 className={styles.mainTitle}>{title}</h1>
      </div>

      {/* Introduction */}
      <div className={styles.introSection}>
        <p className={styles.introduction}>{introduction}</p>
      </div>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.subtitle}>{section.subtitle}</h2>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  )
}

