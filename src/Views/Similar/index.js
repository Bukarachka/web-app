import { connect } from 'react-redux';
import { fetchSimilar } from '../../actions/movies';
import Similar from "./Similar";

const mapStateToProps = (state) => state.moviesReducer;

const mapDispatchToProps = (dispatch) => ({
    fetchSimilar: (movie) => dispatch(fetchSimilar(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(Similar);