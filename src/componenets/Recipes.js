import React, { Component } from 'react'

export default class Recipes extends Component {
    
    render() {
        const { image_url, title, source_url, publisher, recipe_id } = this.props.recipe;
        // console.log(this.props.recipe.recipe_id);
        const   handleDetails = this.props.handleDetails;
        // console.log(typeof(handleDetails), 'handling');
        
        return (
            <React.Fragment>
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card">
                        <img src={image_url} className="img-card-top" alt="recipe" style={{height: '14rem'}}/>
                        <div className="card-body text-capitalize">
                            <h6>{title}</h6>
                            <h6 className="text-warning text-slanted">provided by: {publisher}</h6>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary text-capitalize" onClick={()=>handleDetails(0, recipe_id)}>details</button>
                            <a target="_blank" rel="noopener noreferrer" href={source_url} className="btn btn-success text-capitalize mx-2">recipe url</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
