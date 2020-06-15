import React from 'react';

class Fish extends React.Component {
  render() {
    return (
      <li classname='menu-fish'>
        <img src={this.props.fish.image} alt={this.props.fish.name} />
      </li>
    )
  };
};

export default Fish;