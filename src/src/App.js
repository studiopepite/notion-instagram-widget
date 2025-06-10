import React, { useEffect, useState } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const mockData = [
      { id: '1', image: 'https://via.placeholder.com/300.png?text=Post+1', caption: 'Premier post', date: '2025-06-10' },
      { id: '2', image: 'https://via.placeholder.com/300.png?text=Post+2', caption: 'Deuxième post', date: '2025-06-11' },
      { id: '3', image: 'https://via.placeholder.com/300.png?text=Post+3', caption: 'Troisième post', date: '2025-06-12' }
    ];
    setPosts(mockData);
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 16, padding: 16 }}>
      {posts.map(p => (
        <div key={p.id} style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.1)', backgroundColor: 'white' }}>
          <img src={p.image} alt={p.caption} style={{ width: '100%', display: 'block' }} />
          <div style={{ padding: 10 }}>
            <strong>{p.caption}</strong>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>{new Date(p.date).toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
