import React from 'react';

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <main>
        <nav>
          <a href='/'>Home</a>
        </nav>
        <h1>See All The Pokemon!</h1>
        <h3><a href='/pokemon/new'>Add Pokemon</a></h3>
        <ul>
          {pokemon.map((poke, index) => (
            <li key={index}>
              <a href={`/pokemon/${poke._id}`}>
                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default Index;
