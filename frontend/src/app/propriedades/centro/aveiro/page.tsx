import { PropertiesHeader } from '@/components/PropertiesHeader';
import { ResultsHeader } from '@/components/ResultsHeader';
import { AboutWithStats } from '@/components/AboutWithStats';
import { Newsletter2 } from '@/components/Newsletter2';
import { PropertyList } from '@/components/PropertyList';
import Footer from '@/components/Footer';
import { Property } from '@/types/property';

// Mock properties for Aveiro
const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Aveiro Prime Residences',
    description: 'Apartamentos modernos com vista para a Ria de Aveiro',
    address: 'Rua Dr. Manuel das Neves, 45',
    city: 'Aveiro',
    state: 'Aveiro',
    postcode: '3800-208',
    country: 'Portugal',
    price: 245000,
    bedrooms: 2,
    bathrooms: 2,
    parking_spaces: 1,
    property_type: 'apartment',
    status: 'under_construction',
    completion_date: '2025-06-30',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop'
    ],
    developer_id: 'dev-1',
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-10-20T14:30:00Z'
  },
  {
    id: '2',
    title: 'Quinta da Ria',
    description: 'Vilas de luxo com jardim privado',
    address: 'Avenida Artur Ravara, 123',
    city: 'Aveiro',
    state: 'Aveiro',
    postcode: '3810-092',
    country: 'Portugal',
    price: 485000,
    bedrooms: 4,
    bathrooms: 3,
    parking_spaces: 2,
    property_type: 'villa',
    status: 'off_the_plan',
    completion_date: '2026-03-31',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
    ],
    developer_id: 'dev-2',
    created_at: '2024-02-10T09:00:00Z',
    updated_at: '2024-10-22T11:15:00Z'
  },
  {
    id: '3',
    title: 'Residencial Costa Nova',
    description: 'Apartamentos T1 e T2 próximos da praia',
    address: 'Rua da Praia, 67',
    city: 'Aveiro',
    state: 'Aveiro',
    postcode: '3830-453',
    country: 'Portugal',
    price: 195000,
    bedrooms: 1,
    bathrooms: 1,
    parking_spaces: 1,
    property_type: 'apartment',
    status: 'under_construction',
    completion_date: '2025-09-30',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    ],
    developer_id: 'dev-3',
    created_at: '2024-03-05T14:00:00Z',
    updated_at: '2024-10-25T16:45:00Z'
  },
  {
    id: '4',
    title: 'Aveiro Central Plaza',
    description: 'Penthouses de luxo no centro da cidade',
    address: 'Praça da República, 8',
    city: 'Aveiro',
    state: 'Aveiro',
    postcode: '3800-154',
    country: 'Portugal',
    price: 650000,
    bedrooms: 3,
    bathrooms: 3,
    parking_spaces: 2,
    property_type: 'apartment',
    status: 'completed',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop'
    ],
    developer_id: 'dev-1',
    created_at: '2024-01-20T10:30:00Z',
    updated_at: '2024-10-28T09:20:00Z'
  },
  {
    id: '5',
    title: 'Jardins de São Bernardo',
    description: 'Moradias em banda com acabamentos premium',
    address: 'Rua de São Bernardo, 234',
    city: 'Aveiro',
    state: 'Aveiro',
    postcode: '3810-193',
    country: 'Portugal',
    price: 375000,
    bedrooms: 3,
    bathrooms: 2,
    parking_spaces: 2,
    property_type: 'townhouse',
    status: 'under_construction',
    completion_date: '2025-12-31',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop'
    ],
    developer_id: 'dev-2',
    created_at: '2024-02-28T15:00:00Z',
    updated_at: '2024-10-29T12:00:00Z'
  },
  {
    id: '6',
    title: 'Vista Ria Luxury',
    description: 'Apartamentos T3 com terraço panorâmico',
    address: 'Cais dos Mercantéis, 12',
    city: 'Aveiro',
    state: 'Aveiro',
    postcode: '3800-188',
    country: 'Portugal',
    price: 425000,
    bedrooms: 3,
    bathrooms: 2,
    parking_spaces: 2,
    property_type: 'apartment',
    status: 'off_the_plan',
    completion_date: '2026-06-30',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566752229-250ed79470c8?w=800&h=600&fit=crop'
    ],
    developer_id: 'dev-3',
    created_at: '2024-03-15T11:30:00Z',
    updated_at: '2024-10-30T10:15:00Z'
  },
  {
    id: '7',
    title: 'Residencial Barra Beach',
    description: 'Apartamentos junto à praia da Barra',
    address: 'Avenida da Barra, 89',
    city: 'Aveiro',
    state: 'Aveiro',
    postcode: '3830-772',
    country: 'Portugal',
    price: 285000,
    bedrooms: 2,
    bathrooms: 2,
    parking_spaces: 1,
    property_type: 'apartment',
    status: 'under_construction',
    completion_date: '2025-08-31',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop'
    ],
    developer_id: 'dev-1',
    created_at: '2024-04-01T09:00:00Z',
    updated_at: '2024-10-30T14:30:00Z'
  },
  {
    id: '8',
    title: 'Quinta do Crasto',
    description: 'Vilas independentes com piscina privada',
    address: 'Rua do Crasto, 156',
    city: 'Aveiro',
    state: 'Aveiro',
    postcode: '3810-064',
    country: 'Portugal',
    price: 595000,
    bedrooms: 4,
    bathrooms: 4,
    parking_spaces: 3,
    property_type: 'villa',
    status: 'off_the_plan',
    completion_date: '2026-09-30',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop'
    ],
    developer_id: 'dev-2',
    created_at: '2024-04-15T13:00:00Z',
    updated_at: '2024-10-30T16:00:00Z'
  }
];

export default function AveiroPage() {
  return (
    <div>
      <PropertiesHeader />
      <ResultsHeader 
        title="Empreendimentos e propriedades à venda em Aveiro"
        resultsCount={mockProperties.length}
      />
      <PropertyList properties={mockProperties} />
      <AboutWithStats />
      <Newsletter2 />
      <Footer />
    </div>
  );
}

