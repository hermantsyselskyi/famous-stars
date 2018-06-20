import React, { Component } from 'react';
import Star from '../Star/Star'
class StarList extends Component {

    
  render() {
    return (
      <div>
          <h2>All Stars</h2>
        <ul>
          {
            this.props.starList.map( item => <Star star={item} /> ) }
        </ul>

      </div>
        
    );
  }

}

export default StarList;