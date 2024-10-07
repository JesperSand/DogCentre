// src/pages/DogsProfile.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './DogsProfile.css'; // Import CSS for styling

const DogsProfile = () => {
  const { id } = useParams(); // Get the chip number from the URL
  const [dog, setDog] = useState(null); // State to hold dog data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const response = await axios.get('https://api.jsonbin.io/v3/b/66ea6857e41b4d34e4325758'); // Your API endpoint
        const dogData = response.data.record.find(d => d.chipNumber === id); // Find the specific dog by chip number
        setDog(dogData); // Set the dog data
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error('Error fetching dog data:', error);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchDogData(); // Fetch dog data
  }, [id]);

  // Show a loading message if data is still being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  // Show a message if no dog is found
  if (!dog) {
    return <p>Dog not found!</p>;
  }

  return (
    <div className="dog-profile">
      <div className="header">
        <Link to="/dogs" className="back-button">← Back</Link>
        <h1>{dog.name}</h1>
      </div>
      <img src={dog.img} alt={dog.name} className="dog-profile-image" />
      <div className="dog-details">
        <p><strong>Breed:</strong> {dog.breed}</p>
        <p><strong>Age:</strong> {dog.age} years</p>
        <p><strong>Chip Number:</strong> {dog.chipNumber}</p>
        <p><strong>Sex:</strong> {dog.sex}</p>
        <p><strong>Owner:</strong> {dog.owner.name} {dog.owner.lastName}</p>
        <p><strong>Phone:</strong> {dog.owner.phoneNumber}</p>
        <p><strong>Present:</strong> {dog.present ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
  
  
};

export default DogsProfile;
