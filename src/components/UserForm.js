import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './common/TextInput';

const UserForm = ({user, onSave, onChange, loading}) => {
    return (
        <div className="App-form container">
            <form>
                <TextInput
                    name="name"
                    label="Name"
                    placeholder="Enter User name"
                    value={user.name}
                    onChange={onChange}
                    onSave={onSave} />

                <input
                    type="submit"
                    disabled={loading}
                    value={loading ? 'Saving...' : 'Save'}
                    className="btn btn-primary"
                    onClick={onSave} />
            </form>
        </div>
    )
};

UserForm.propTypes = {
    user: PropTypes.object,
    onSave: PropTypes.func,
    onChange: PropTypes.func
};

export default UserForm;