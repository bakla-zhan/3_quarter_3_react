import {Component} from 'react';
import { TextField, IconButton } from '@material-ui/core';
import {Send} from '@material-ui/icons';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {changeUserName} from '../../redux/actions/profileActions';

import { Header } from '../Header';

import './Profile.css';

class _Profile extends Component {
    static propTypes = {
        userName: PropTypes.string,
        changeUserName: PropTypes.func.isRequired,
    };

    state = {
        userName: '',
    };

    changeUserName = () => {
        this.props.changeUserName(this.state.userName);
        this.setState({
            userName: '',
        });
    };
    
    render() {
        return (
            <div className='layout'>
                <Header />
                <div className='account' >
                    <h1>User profile</h1>
                    <p><b>User name:</b> {this.props.userName}</p>
                    <p><b>Age:</b> 88</p>
                </div>
                <div className='change-name'>
                    <TextField
                        value={this.state.userName}
                        label='New user name'
                        onChange={(event) =>
                            this.setState({
                                userName: event.target.value,
                            })
                        }
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                this.changeUserName();
                            }
                        }}
                    />
                    <IconButton
                        color='primary'
                        variant='contained'
                        onClick={this.changeUserName}
                    >
                        <Send />
                    </IconButton>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    userName: state.profile.userName,
});

const Profile = connect(mapStateToProps, { changeUserName })(_Profile);

export { Profile };