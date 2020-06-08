import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  
  goToStore(event) {
    //1, Stop the form from submitting
    event.preventDefault();
    //2. get text from that input
    //3. Change the page to /store/whatever-they-entered
    
  }

  render() {
    return (
        <form className='store-selector' onSubmit={this.goToStore}>
          <h2>Please Enter a Store</h2>
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