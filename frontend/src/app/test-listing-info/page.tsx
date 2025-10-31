'use client';

import React from 'react';
import { ListingInfoTitle } from '../../components/ListingInfoTitle';
import { ListingInfoCaption } from '../../components/ListingInfoCaption';
import styles from './page.module.css';

export default function TestListingInfo() {
  const handleScheduleVisit = () => {
    console.log('Schedule visit clicked');
    alert('Agendar Visita');
  };

  const handleViewMap = () => {
    console.log('View map clicked');
    alert('Ver Mapa');
  };

  const handleViewUnits = () => {
    console.log('View units clicked');
    alert('Ver unidades disponíveis');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ListingInfoTitle title="Sobre o Myst" />
        
        <ListingInfoCaption
          address="88 Rua Cónego Maio, Santa Joana, Aveiro 3810"
          priceFrom={250000}
          bedrooms="3-4"
          bathrooms="3-5"
          parking="1-5"
          office="1"
          displayLocationTitle="Localização do Andar Modelo"
          displayLocationAddress="93 Rua do Amanhecer, São Bernardo, Aveiro, 3810"
          onScheduleVisit={handleScheduleVisit}
          onViewMap={handleViewMap}
          propertyType="Apartamentos"
          unitsCount="16 unidades"
          onViewUnits={handleViewUnits}
          developer={{
            name: 'Ascend',
            role: 'Promotor',
            logoUrl: 'https://via.placeholder.com/60x50?text=Ascend'
          }}
          architect={{
            name: 'Company',
            role: 'Arquiteto',
            logoUrl: 'https://via.placeholder.com/60x50?text=Company'
          }}
          constructor={{
            name: 'Buildwell',
            role: 'Construtora',
            logoUrl: 'https://via.placeholder.com/60x50?text=Buildwell'
          }}
        />
      </div>
    </div>
  );
}

