import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    const restaurants = this.props.store.getState().restaurants.map((restaurant) => {
      return <Restaurant restaurant={restaurant} key={restaurant.id} store={this.props.store} />
    })

    return(
      <ul>
        { restaurants }
      </ul>
    );
  }
};

export default Restaurants;
