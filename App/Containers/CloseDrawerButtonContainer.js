import React, { Component } from 'react'
import {TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import HeaderIcon from '../Components/HeaderIcon'
import {Images, Metrics} from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import RestaurantActions, { RestaurantSelectors } from '../Redux/RestaurantRedux'

// Styles
// import styles from './Styles/CloseDrawerButtonContainerStyle'

class CloseDrawerButtonContainer extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }


  _closeDrawer = () => {
    this.props.setSelectedRestaurantId(null)
  };

  backButton = () => {
    return (
      <TouchableOpacity onPress={this._closeDrawer}>
        <HeaderIcon imgSource={Images.backButton}/>
      </TouchableOpacity>
    )
  }

  render () {
    const { selectedId }= this.props
    return selectedId
      ? this.backButton()
      : null
  }
}

const mapStateToProps = (state) => {
  return {
    selectedId: RestaurantSelectors.getSelectedRestaurantId(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedRestaurantId: id  => dispatch(RestaurantActions.setSelectedRestaurantId(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CloseDrawerButtonContainer)
