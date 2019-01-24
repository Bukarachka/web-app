import React, { Component } from 'react';
import {Movie} from "../Movie";
import {Link} from "react-router-dom";

class Similar extends Component {
    componentDidMount(){
        if(this.props.location.state != null){
            this.props.fetchSimilar(this.props.location.state.movie);
        }
    }

    render() {
        return (
            <div>
                <Link to='/popular'>
                    <button>go to popular</button>
                </Link>
                <ul>
                    {this.props.movies !== null ? this.props.movies.map((movie)=> <li key={movie.id}>
                            <button>
                                <Movie
                                    poster={movie.poster_path}
                                    title={movie.title}
                                    language={movie.original_language}/>
                            </button>
                        </li>) :
                        "Loading..."}
                </ul>
            </div>
        );
    }
}

export default Similar;