import React, { Component } from 'react';

class NewStar extends Component {

    // React Componets have props, pass them to the 
    // parent (Component) class - if you don't,
    // things won't work right!
   

    // Setting state with an = is something you only 
    // want to do in the constructor. Outside of the
    // constructor always use the setState method

    // Make sure that the handleChange knows about 'this'
    // You ONLY need this if you don't make an arrow function
    //this.handleChange = this.handleChange.bind(this);
  

  // By making this an arrow function, 'this' is bound for you!
  // Use arrow functions!  
  // handleChangeForName = (event) => {
  //   console.log(event.target.value);
  //   // Change state using setState not an = 
  //   this.setState( { star: {
  //       ...this.state.star,
  //       name: event.target.value 
  //     }
  //   });
  // }

  // handleChangeForBrightness = (event) => {
  //   console.log(event.target.value);
  //   // Change state using setState not an = 
  //   this.setState( { star: { 
  //       ...this.state.star,
  //       brightness: event.target.value 
  //     } 
  //   });
  // }

  render() {
    return (
      <div>
        <form onSubmit= {this.props.submitStar}>
        <label>Name:</label>
        <input  onChange= {this.props.handleChangeFor('name')} value={this.props.newStar.name} />
        <label>Role:</label>
        <input  onChange= {this.props.handleChangeFor('role')} value={this.props.newStar.role} />
        <input type ="submit" value ="Submit" />
        </form>

      </div>
        
    );
  }

}

export default NewStar;