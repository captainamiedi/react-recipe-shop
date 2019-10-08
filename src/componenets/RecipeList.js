import React, { Component } from 'react';
import Recipes from './Recipes';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
    render() {
        const {recipes, handleDetails, value, handleSubmit, handleSearch, error} = this.props;

        return (
           <React.Fragment>
               <RecipeSearch value={value} handleSearch={handleSearch} handleSubmit={handleSubmit} />
               <div className="container my-5">
                   <div className="row">
                       <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                           <h1 className="text-slanted">recipe list</h1>
                       </div>
                   </div>
               </div>
               <div className="row">
               {error ? <h1 className="text-danger text-center mx-auto">{error}</h1> : 
                recipes.map(recipe => {
                    return <Recipes key={recipe.recipe_id} recipe={recipe} 
                    handleDetails={handleDetails}
                 />
                })}
               </div>
               
           </React.Fragment>
        )
    }
}
