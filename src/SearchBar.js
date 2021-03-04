import React from 'react';

import './App.css';

import NamesContainer from './NamesContainer';

class SearchBar extends React.Component {

  state = {
    names: [
      'Joonas', 'Eetu', 'Kimi', 'Kristian', 'Aaretti', 'Noel',
    ],
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  //nameRender = () => {
    //for (i = 0; i < 5; i++) {return NamesContainer }
  //}


    render(){
      return (
        <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
          <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Etsi nimeä!'/>
          <br></br>
          <h3>vitun hyviä nimiä:</h3>
          <NamesContainer names = {this.dynamicSearch()}/>
        </div>
      );
    }
}

export default SearchBar;