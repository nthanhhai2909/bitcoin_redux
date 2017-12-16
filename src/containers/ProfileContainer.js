import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Profile from '../components/Profile'
class ProfileContainer extends React.Component {

    render(){
        return(
            <div>
                <Profile

                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})


ProfileContainer.propTypes = {
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ProfileContainer)