import { connect } from 'react-redux';
import { fetchPopular } from '../../actions/movies';
import Popular from "./Popular";

const mapStateToProps = (state) => state.moviesReducer;

const mapDispatchToProps = (dispatch) => ({
    fetchPopular: () => dispatch(fetchPopular())
});

export default connect(mapStateToProps, mapDispatchToProps)(Popular);