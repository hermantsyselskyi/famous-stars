import React, { Component } from 'react';

class Star extends Component {

  constructor(props) {
    // React Componets have props, pass them to the 
    // parent (Component) class - if you don't,
    // things won't work right!
    super(props);

    // Setting state with an = is something you only 
    // want to do in the constructor. Outside of the
    // constructor always use the setState method
    this.state = { star: { name: '', role: '' } } 

    // Make sure that the handleChange knows about 'this'
    // You ONLY need this if you don't make an arrow function
    //this.handleChange = this.handleChange.bind(this);
  }

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

  handleChangeFor = (propertyName) => (event) => {
    console.log(propertyName);
    // Change state using setState not an = 
    this.setState( { star: {
        ...this.state.star,
        [propertyName]: event.target.value 
      }
    });
  }
  consolelogfunk = () => {
    console.log(this.state.star);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChangeFor('name')} />
        <input onChange={this.handleChangeFor('role')} />
        <button onClick={this.consolelogfunk}>
        Submit
      </button>
        <p>{this.state.star.name} is famous for {this.state.star.role}</p>
      </div>
      
        
    );
  }

}

export default Star;