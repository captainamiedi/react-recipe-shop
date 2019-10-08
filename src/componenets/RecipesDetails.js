import React, { Component } from 'react';
import { recipe } from "../tempDetails";

export default class RecipesDetails extends Component {

    state = {
        recipe: recipe,
        url: `https://www.food2fork.com/api/get?key=8e30c5560e2f44a324e05ae2c49241c2&rId=${this.props.id}`
    }

    async componentDidMount() {
        try {
            const data = await fetch(this.state.url);
            const recipeData = await data.json();
        
            this.setState({
                recipe: recipeData.recipe
            })
            } catch (error){
            console.log(error);
            }
    }
    render() {
        const {image_url, publisher, publisher_url, source_url, title, ingredients } = this.state.recipe;
        const {handleIndex} = this.props;
        console.log(typeof(handleIndex), 'handlingindex')
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button className="btn btn-warning mb-5 text-capitalize" type="button" onClick={handleIndex}>back to recipe list</button>
                            <img src={image_url} alt="recipe" className="d-block w-100" />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">{title}</h6>
                            <h6 className="text-warning text-capitalize text-slanted">provided by {publisher}</h6>
                            <a target="_blank" rel="noopener noreferrer" href={publisher_url} className="btn btn-primary text-capitalize mt-2">publisher webpage</a>
                            <a target="_blank" rel="noopener noreferrer" href={source_url} className="btn btn-success text-capitalize mt-2 mx-2">recipe url</a>
                            <ul className="list-group mt-4">
                                <h2 className="mt-3 mb-4">ingredients</h2>
                                {ingredients.map((item, index) => {
                                    return (
                                        <li key={index} className="list-group-item text-slanted">{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
