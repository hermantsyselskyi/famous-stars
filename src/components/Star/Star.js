import React, { Component } from 'react';
import './Star.css';
class Star extends Component {

    
  render() {
    return (
      <li key={this.props.star.name}>
        {this.props.star.name} is famous for {this.props.star.role}
        </li>
    );
  }

}

export default Star;




 