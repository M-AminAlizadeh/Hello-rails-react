import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setGreeting } from '../greetingSlice';

const Greeting = ({ greeting, setGreeting }) => {
  useEffect(() => {
    fetch('http://[::1]:3000/api/random_greeting')
      .then((response) => response.json())
      .then((data) => setGreeting(data.greeting))
      .catch((error) => console.error('Error fetching greeting:', error));
  }, [setGreeting]);

  return (
    <div>
      <h1>Welcome to this simple app!</h1>
      <h1>{greeting}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

export default connect(mapStateToProps, { setGreeting })(Greeting);
