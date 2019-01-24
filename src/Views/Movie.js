import React, { Component } from 'react';

export class Movie extends Component {
    render() {
        return (
            <div className="movie-info">
                <img className="poster" src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + this.props.poster} alt={this.props.title}/>
                <div className="title">{this.props.title}</div>
                <div className="language">{this.props.language}</div>
                <div className="country-of-origin">{this.props.country}</div>
            </div>
        );
    }
}