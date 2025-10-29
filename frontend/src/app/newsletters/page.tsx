import React from 'react';
import Newsletter from '@/components/Newsletter';
import Newsletter2 from '@/components/Newsletter2';

export default function NewslettersPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', paddingBottom: '80px' }}>
      <div>
        <h2 style={{ textAlign: 'center', padding: '40px 0 20px', fontSize: '32px', fontWeight: 500 }}>
          Newsletter Component 1
        </h2>
        <Newsletter />
      </div>
      
      <div>
        <h2 style={{ textAlign: 'center', padding: '40px 0 20px', fontSize: '32px', fontWeight: 500 }}>
          Newsletter Component 2
        </h2>
        <Newsletter2 />
      </div>
    </div>
  );
}

