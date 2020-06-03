import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='TCHO is cool' age={29} cool={true} />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;