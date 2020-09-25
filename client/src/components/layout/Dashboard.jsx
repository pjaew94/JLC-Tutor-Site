import React from 'react'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Dashboard = ({ isAuthenticated }) => {

    if(!isAuthenticated) {
        return <Redirect to='/login' />
    }

    return (
        <div>
            dashboard
        </div>
    )
}

Dashboard.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Dashboard)
