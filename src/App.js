import React, { Component } from 'react';
import './App.css';
import RecipeList from './componenets/RecipeList';
import RecipeDetails from './componenets/RecipesDetails';
import { recipes } from './tempList';


export default class App extends Component {
  state= {
    recipes: recipes,
    url: 'https://www.food2fork.com/api/search?key=8e30c5560e2f44a324e05ae2c49241c2',
    base_url: 'https://www.food2fork.com/api/search?key=8e30c5560e2f44a324e05ae2c49241c2',
    details_id: 35382,
    pageIndex: 1,
    search: '',
    query: '&q=',
    error: ''
  }

  async getRecipes(){
    try {
      const data = await fetch(this.state.url);
      const recipesData = await data.json();
      if (recipesData.recipes.length === 0) {
        this.setState({
          error: 'search results not found'
        })
      } else {
        this.setState({
          recipes: recipesData.recipes,
          error: ''
        })
      }
    } catch (error){
      console.log(error);
    }
  };

  componentDidMount() {
    this.getRecipes();
  };

  displayPage = (index) => {
    switch(index){
      default: 
      case 1:
        return <RecipeList 
          recipes={this.state.recipes} 
          handleDetails={this.handleDetails} 
          handleSearch={this.handleSearch}
          handleSubmit={this.handleSubmit}
          value={this.state.search}
          error={this.state.error}
        />
      case 0: 
        return <RecipeDetails 
          id={this.state.details_id} 
          handleIndex={this.handleIndex} 
        />
    }
  };

  handleIndex = (index) => {
    this.setState({
      pageIndex: index
    })
  };

  handleDetails = (index, id) => {
    console.log('here', index, id);
    this.setState({
      pageIndex: index,
      details_id: id
    })
  };

  handleSearch = (e) => {
   this.setState({
     search: e.target.value
   })
    
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(()=> {
      return {url: `${base_url}${query}${search}`, search: ""}
    }, ()=> {
      this.getRecipes();
    })
  };
  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}


