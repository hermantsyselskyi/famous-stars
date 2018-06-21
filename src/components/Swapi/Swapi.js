import React, { Component } from 'react';


class Swapi extends Component {

  render() {
    console.log('List of Planets',this.props.planetList);
    return (
        <section>
        <ul>
          {this.props.planetList.map( planet =>
          <li key={planet.url}>{planet.name}</li>
          )}
        </ul>
      </section>              

    );
  }

}

export default Swapi;
