import React from 'react';

class Fish extends React.Component {
    render() {
      const image = this.props.details.image;
      return (
        <li classname='menu-fish'>
          <img src={image} alt={this.props.details.name} />
          <h3 className='fish-name'>{this.props.details.name}</h3>
        </li>
      )
  };
};

export default Fish;