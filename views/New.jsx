import React, { useState, useCallback } from 'react';

const New = () => {
  const [formData, setFormData] = useState({
    name: '',
    img: '',
  });

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/pokemon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        window.location.href = '/pokemon';
      } else {
        console.error('Failed to create Pokémon.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, [formData]);

  return (
    <main>
      <h1>Add a Pokemon!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Name:
          <input
            type="text"
            id='name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          /><br />
        </label>
        <label htmlFor="img">
          Image URL:
          <input
            type="text"
            id='img'
            name='img'
            value={formData.img}
            onChange={handleInputChange}
          /><br />
        </label>
        <input type="submit" value="Add" />
      </form>
      <a href='/pokemon'>back</a>
    </main>
  );
};

export default New;
