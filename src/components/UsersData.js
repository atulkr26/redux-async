import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';

const UsersData = ({users, isFetching}) => {
    return (
        <div className="App-main container">

            <div className="card">
                <ul className="list-group list-group-flush">
                    {isFetching && users.length === 0 && <img src={logo} className="App-logo" alt="logo" />}
                    {!isFetching && users.length === 0 && <h6>Empty.</h6>}
                    {users.length > 0 && users.map( function(item){
                        return <li className="list-group-item" key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>
        </div>
    );
};

UsersData.propTypes = {
    users: PropTypes.array.isRequired,
    isFetching: PropTypes.bool
};

export default UsersData;