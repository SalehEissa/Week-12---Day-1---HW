import React from 'react';

const Index = ({ pokemon }) => {
  return (
    <main>
      <nav>
        <a href='/'>Home</a>
      </nav>
      <h1>See All The Pokemon!</h1>
      <h3><a href='/pokemon/new'>Add Pokemon</a></h3>
      <ul>
        {pokemon.map((poke) => (
          <li key={poke._id}>
            <a href={`/pokemon/${poke._id}`}>
              {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Index;
