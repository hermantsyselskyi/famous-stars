import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import NewStar from '../NewStar/NewStar';
import StarList from '../StarList/StarList';

class App extends Component {


constructor(props) {
  super(props);
  this.state = { 
    star: { name: 'jb', role: 'jbj' },
    starList: [{ name: 'jb', role: 'jbj' }]
   } 
  }
  handleChangeFor = (propertyName) => (event) => {
    console.log(propertyName);
    // Change state using setState not an = 
    this.setState( { star: {
        ...this.state.star,
        [propertyName]: event.target.value 
      }
    });
  }
  submitStar = (event) => {
    event.preventDefault();
    this.setState({
      starList: [...this.state.starList, this.state.star ]
    });
    this.setState({ 
      star: { name: '', role: '' }
     });
   console.log(this.state.star);
    
  }

  render() {
    return (
      <div className="App">
        <Header /> 
        <NewStar newStar={this.state.star} 
                  handleChangeFor={ this.handleChangeFor} 
                  submitStar={this.submitStar}/>       
        <StarList starList={this.state.starList} />
                  
      </div>
    );
  }
}



export default App;
