'use client';

import React from 'react';
import { ListingInfoTitle } from '../../components/ListingInfoTitle';
import { ListingInfoCaption } from '../../components/ListingInfoCaption';
import { ListingDescription } from '../../components/ListingDescription';
import { ListingUnits } from '../../components/ListingUnits';
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

  const handleViewFloorPlan = (unitId: string) => {
    console.log('View floor plan clicked for unit:', unitId);
    alert(`Ver planta para unidade: ${unitId}`);
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

        <ListingDescription
          title="Últimas Unidades do Promotor | Mudança em breve"
          paragraphs={[
            'No coração de Santa Joana, um dos bairros mais tranquilos e desejados de Aveiro, o Myst apresenta um conjunto exclusivo de 16 apartamentos, desenhados para quem valoriza bem-estar, privacidade e um estilo de vida contemporâneo a poucos minutos do centro.',
            'Com uma arquitetura minimalista e linhas puras, o Myst foi concebido para potenciar a luz natural, o conforto térmico e a eficiência do espaço, criando ambientes amplos e harmoniosos. As generosas envidraçadas, a relação franca com as varandas e a orientação cuidadosamente estudada asseguram ventilação cruzada, luminosidade constante e um quotidiano mais leve e saudável.',
            'Inspirada na estética clean e intemporal, a materialidade do edifício combina betão, metal e pedra, criando uma presença sofisticada e urbana, sem abdicar de uma ligação orgânica ao bairro envolvente — feito de ruas serenas, espaços verdes e a atmosfera familiar que caracteriza Santa Joana.',
            'Pensado para proprietários exigentes, o Myst é ideal para quem procura um apartamento de elevado padrão em Aveiro, seja como residência principal ou como investimento seguro num dos mercados mais sólidos e procurados do país.'
          ]}
          highlightsTitle="Destaques do Empreendimento"
          highlights={[
            'Últimas unidades do promotor',
            'Em construção – mude-se em breve',
            'Cozinhas com bancadas em pedra e eletrodomésticos de gama elevada',
            'Pavimento em madeira nobre',
            'Grandes varandas e zonas sociais voltadas a sul/poente',
            'Vidros duplos e isolamento acústico e térmico reforçado',
            'Pré-instalação para carregamento de viaturas elétricas (EV)',
            'Elevada eficiência energética',
            'Proximidade a escolas, comércio, transportes e zonas verdes',
            'Garagem e arrecadação',
            'Garantia de construção de 10 anos'
          ]}
        />

        <ListingUnits
          title="Apartamentos em planta à venda no Myst, Santa Joana, Aveiro"
          units={[
            {
              id: '1',
              type: 'Apartamento',
              title: 'Apartamento de luxo T2 virado para norte',
              bedrooms: 3,
              bathrooms: 3,
              parking: 1,
              office: 1,
              price: 250000,
              imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop'
            },
            {
              id: '2',
              type: 'Apartamento',
              title: 'Apartamento de luxo T3 virado para sul',
              bedrooms: 3,
              bathrooms: 2,
              parking: 2,
              office: 1,
              price: 280000,
              imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop'
            },
            {
              id: '3',
              type: 'Apartamento',
              title: 'Apartamento de luxo T4 com terraço',
              bedrooms: 4,
              bathrooms: 3,
              parking: 2,
              office: 1,
              price: 320000,
              imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop'
            }
          ]}
          onViewFloorPlan={handleViewFloorPlan}
          ctaText="Planta"
        />
      </div>
    </div>
  );
}

