import React from 'react'
import './MovieOutside.css';
import { theOldGuard } from '../../../assets/images';
import { connect } from 'react-redux';
import {getSingleMovie as actionCreators} from '../../../store/actions/getSingleMovie';
import { withRouter } from 'react-router-dom';

function MovieOutside(props) {

    const detailPage = () => {
        window.document.title = props.name;
        props.history.push('/result')
        props.getMovieDetail(props.id)
    }
    return (
        <div className="movieOutside" onClick={detailPage}>
            <img src={ props.img ||theOldGuard} alt="movie"/>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        getMovieDetail: (id) => dispatch(actionCreators(id))
    }
}

export default connect(null,mapDispatchToProps)(withRouter(MovieOutside));