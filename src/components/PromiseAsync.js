import React, {Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as promiseActions from '../actions/promiseActions';
import UserForm from './UserForm';
import UsersData from './UsersData';

class PromiseAsync extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: {name: ''}
    };
    this.handleDataFetch = this.handleDataFetch.bind(this);
    this.onUserInputChange = this.onUserInputChange.bind(this);
    this.saveUser = this.saveUser.bind(this);
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

  handleDataFetch() {
    this.props.actions.fetchUsersIfNeeded();
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

PromiseAsync.propTypes = {
  users: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return{
    users: state.promiseData.users || [],
    isFetching: state.promiseData.isFetching || false
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(promiseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PromiseAsync);
