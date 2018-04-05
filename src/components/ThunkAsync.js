import React, {Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as thunkActions from '../actions/thunkActions';
import UserForm from './UserForm';
import UsersData from './UsersData';

class ThunkAsync extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: {name: ''}
    };
    this.handleDataFetch = this.handleDataFetch.bind(this);
    this.onUserInputChange = this.onUserInputChange.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  handleDataFetch() {
    this.props.actions.fetchUsersIfNeeded();
  }

  onUserInputChange(event) {
    const name = event.target.value;
    let user = Object.assign({}, this.state.user);
    user.name = name;
    return this.setState({user: user});
  }

  saveUser(event) {
    event.preventDefault();
    this.props.actions.saveUser(this.state.user);
  }
  componentDidMount() {
    this.handleDataFetch();
  }
  render() {
    return (
      <div>
          <UserForm user={this.state.user} onChange={this.onUserInputChange} onSave={this.saveUser} />
          <UsersData users={this.props.users} isFetching={this.props.isFetching} />
      </div>
    );
  }
}

ThunkAsync.propTypes = {
  users: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return{
    users: state.thunkData.users || [],
    isFetching: state.thunkData.isFetching || false
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(thunkActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThunkAsync);
