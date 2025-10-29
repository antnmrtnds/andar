'use client'

import React from 'react'
import { AboutLocation, AboutLocationProps } from './AboutLocation'
import { Stats, StatsProps } from './Stats'
import styles from './AboutWithStats.module.css'

export interface AboutWithStatsProps {
  aboutProps?: AboutLocationProps
  statsProps?: StatsProps
}

export const AboutWithStats: React.FC<AboutWithStatsProps> = ({
  aboutProps,
  statsProps
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Text Content Section */}
        <div className={styles.textSection}>
          <AboutLocation {...aboutProps} />
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <Stats {...statsProps} />
        </div>
      </div>
    </div>
  )
}

