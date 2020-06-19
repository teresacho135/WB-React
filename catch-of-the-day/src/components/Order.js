import React from 'react';

class Order extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
    });

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul>
          <li>{orderIds}</li>
        </ul>
      </div>
    )
  }
}

export default Order;