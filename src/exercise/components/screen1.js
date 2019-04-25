import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeUser } from '../actions';

class Screen1 extends Component {

  constructor (props) {
    super (props);
  }

  static propTypes = {
    users: PropTypes.array,
    removeLastUser: PropTypes.func.isRequired
  };

  removeLastUser = () => {
    this.props.removeLastUser();
  }

  render () {
    return (
      <div className="col-6 bg-primary">
        <h3>Screen1</h3>
        <button className="btn btn-danger" onClick={this.removeLastUser}>Remove User</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: state.root.users
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeLastUser: () => dispatch(removeUser())
})

export default connect(mapStateToProps, mapDispatchToProps) (Screen1);
