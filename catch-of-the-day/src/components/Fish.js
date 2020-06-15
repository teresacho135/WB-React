import React from 'react';

class Fish extends React.Component {
    render() {
      const {image, name} = this.props.details.image;
      return (
        <li classname='menu-fish'>
          <img src={image} alt={name} />
          <h3 className='fish-name'>{name}</h3>
        </li>
      )
  };
};

export default Fish;