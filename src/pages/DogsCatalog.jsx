import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './DogsCatalog.css';

const DogsCatalog = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get('https://api.jsonbin.io/v3/b/66ea6857e41b4d34e4325758');
        setDogs(response.data.record);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dogs:', error);
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dogs-catalog">
      <div className="header">
        <Link to="/" className="back-button">
          ← Back
        </Link>
        <h2>Our Dog Clients</h2>
      </div>
      <div className="dogs-list">
        {dogs.map((dog) => (
          <Link to={`/dogs/${dog.chipNumber}`} key={dog.chipNumber} className="dog-card">
            <img src={dog.img} alt={dog.name} className="dog-image" />
            <h3>{dog.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DogsCatalog;
