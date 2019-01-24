import React, { Component } from 'react';
import {Movie} from "../Movie";
import {Link} from "react-router-dom";

class Popular extends Component {
    componentDidMount(){
        this.props.fetchPopular();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.movies !== null ? this.props.movies.map((movie)=> <li key={movie.id}>
                            <Link to={{
                                pathname: '/similar',
                                state: {movie: movie}
                            }}>
                            <button>
                                <Movie
                                    poster={movie.poster_path}
                                    title={movie.title}
                                    language={movie.original_language}/>
                            </button>
                            </Link>
                        </li>) :
                        "Loading..."}
                </ul>
            </div>
        );
    }
}

export default Popular;