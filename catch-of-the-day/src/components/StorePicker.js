import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  handleClick() {
    alert('heyy');
  };

  render() {
    return (
        <form className='store-selector'>
          <h2>Please Enter a Store</h2>
          <button onClick={this.handleClick}>Click Me!</button>
          <input 
            type="text" 
            required placeholder="Store Name"
            defaultValue={getFunName()} 
          />
          <button type="submit">Visit Store</button>
        </form>
    )  
  }
}

export default StorePicker;