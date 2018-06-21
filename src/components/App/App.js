import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import Swapi from '../Swapi/Swapi';
import Header from '../Header/Header';
import NewStar from '../NewStar/NewStar';
import StarList from '../StarList/StarList';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      planetList: []
    }
  }

  // this is similar to Jquery onready
  // It is called by react when the component is loaded and ready to go
  componentDidMount() {
    console.log('App component mounted');
    this.getPlanets('https://swapi.co/api/planets/?format=json');
  }

  getPlanets(url){
    axios.get(url)
      .then( (response) => {
        console.log('The response data:', response.data.results);
        this.setState({ planetList: [...this.state.planetList, ...response.data.results]})

        let nextUrl = response.data.next;
        if(nextUrl != null){
          this.getPlanets(nextUrl);   
        }
        else{
          console.log('All planets recieved');
        }    
      }).catch( (error) => {
        console.log('Error', error);
        
      });
  }


  render() {
    return (
      <div className="App">
        <Header />
        <div className="grid-container">
          <Swapi planetList={this.state.planetList}/>
        </div>   
      </div>
    );
  }
}

export default App;
// constructor(props) {
//   super(props);
//   this.state = { 
//     star: { name: 'jb', role: 'jbj' },
//     starList: [{ name: 'jb', role: 'jbj' }]
//    } 
//   }
//   handleChangeFor = (propertyName) => (event) => {
//     console.log(propertyName);
//     // Change state using setState not an = 
//     this.setState( { star: {
//         ...this.state.star,
//         [propertyName]: event.target.value 
//       }
//     });
//   }
//   submitStar = (event) => {
//     event.preventDefault();
//     this.setState({
//       starList: [...this.state.starList, this.state.star ]
//     });
//     this.setState({ 
//       star: { name: '', role: '' }
//      });
//    console.log(this.state.star);
    
//   }

