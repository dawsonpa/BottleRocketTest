import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ConnectedButtonContainerStyle'

class ConnectedButtonContainer extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <TouchableOpacity>

      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedButtonContainer)
