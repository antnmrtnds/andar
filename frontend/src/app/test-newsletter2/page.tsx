import React from 'react';
import Newsletter2 from '@/components/Newsletter2';

export default function TestNewsletter2Page() {
  const customCitiesData = [
    {
      name: 'North Region',
      locations: [
        'Porto',
        'Braga',
        'Vila Nova de Gaia',
        'Guimarães',
        'Matosinhos',
        'Gondomar',
      ]
    },
    {
      name: 'Center Region',
      locations: [
        'Coimbra',
        'Aveiro',
        'Leiria',
        'Viseu',
        'Castelo Branco',
        'Guarda',
      ]
    },
    {
      name: 'Lisbon Region',
      locations: [
        'Lisboa',
        'Cascais',
        'Sintra',
        'Oeiras',
        'Almada',
        'Loures',
      ]
    },
    {
      name: 'South Region',
      locations: [
        'Faro',
        'Portimão',
        'Lagos',
        'Albufeira',
        'Olhão',
        'Tavira',
      ]
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', paddingBottom: '80px' }}>
      {/* Default Newsletter2 */}
      <div>
        <h2 style={{ textAlign: 'center', padding: '40px 0 20px', fontSize: '32px', fontWeight: 500 }}>
          Newsletter 2 - Default (Portuguese Cities)
        </h2>
        <Newsletter2 />
      </div>

      {/* Custom Cities Data */}
      <div>
        <h2 style={{ textAlign: 'center', padding: '40px 0 20px', fontSize: '32px', fontWeight: 500 }}>
          Newsletter 2 - Custom (Regions)
        </h2>
        <Newsletter2 citiesData={customCitiesData} />
      </div>
    </div>
  );
}

