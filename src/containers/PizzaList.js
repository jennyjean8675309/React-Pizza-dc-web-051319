import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {
  generatePizzas = () => {
    return this.props.pizzas.map(pizza => {
      return <Pizza pizza={pizza} key={pizza.id} editPizza={this.props.editPizza} />
    })
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.generatePizzas()}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
