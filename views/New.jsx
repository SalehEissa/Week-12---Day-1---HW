import React from 'react';

class New extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      img: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission logic here, e.g., sending data to the server.
    // Example:
    const { name, img } = this.state;
    const formData = { name, img };

    // You can perform an API request, axios.post, fetch, etc.
    // For this example, we'll just log the data.
    console.log('Form data:', formData);
  }

  render() {
    const { name, img } = this.state;

    return (
      <main>
        <h1>Add a Pokemon!</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name: 
            <input
              type="text"
              id='name'
              name='name'
              value={name}
              onChange={this.handleInputChange}
            /><br />
          </label>
          <label htmlFor="img">Image URL: 
            <input
              type="text"
              id='img'
              name='img'
              value={img}
              onChange={this.handleInputChange}
            /><br />
          </label>
          <input type="submit" value="Add" />
        </form>
        <a href='/pokemon'>back</a>
      </main>
    );
  }
}

export default New;
