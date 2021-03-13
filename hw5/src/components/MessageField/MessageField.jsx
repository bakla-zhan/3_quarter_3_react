import { Component, Fragment, createRef } from 'react';
import { TextField, Button, Icon } from '@material-ui/core';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {sendMessage} from '../../redux/actions/messageActions';
import { Message } from '../Message';

import './MessageField.css';


class _MessageField extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };
    
    state = {
        inputText: '',
    }; 

    messageRef = createRef();

    addMessage = (msg = '', author = '') => {
        const chatId = this.props.currentChat;

        const newMessage = msg.length ? msg : this.state.inputText;
        const currentAuthor = author.length ? author : 'me';
        
        this.messageRef.current.focus(); // чтобы после попытки отправить пустое сообщение по кнопке 'send' курсор оставался в поле ввода
        
        (msg.length || this.state.inputText) && this.props.sendMessage(newMessage, currentAuthor, chatId);
         
        this.setState({
            inputText: '' // очистка поля ввода после отправки сообщения
        });
    };

    getRobotAnswer = () => {
        const robotAnswers = ['fine, tnx...', 'leave me alone! I am just a robot...', 'better than you', 'sorry, I am busy'];
        return robotAnswers[parseInt((Math.random() * 4))];
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.addMessage();
        };
        if (event.key === 'Escape') { // очистка поля ввода при нажатии клавиши Escape
            this.setState({ inputText: '' });
        };
    }

    componentDidUpdate(prevProps) {
        const chatId = this.props.currentChat;
        
        this.messageRef.current.focus(); // чтобы после отправки сообщения курсор оставался в поле ввода сообщения
        
        const endElement = document.querySelector('.message:last-child');
        if (endElement) {
            endElement.scrollIntoView(); // для автоматической прокрутки чата вниз до последнего сообщения
        };
        
        if (prevProps.messages[chatId].length < this.props.messages[chatId].length && 
            this.props.messages[chatId][this.props.messages[chatId].length - 1].author === 'me') {
            setTimeout(() => {
                const answer = this.getRobotAnswer();
                this.addMessage(answer, 'robot');;
            }, 1000);
        }
    }

    render() {
        const { messages = {}, currentChat: chatId } = this.props;

        return (
            <div className='messageField'>
                {this.props.currentChat && (
                    <Fragment>
                        <div className='messages'>
                            {messages[chatId] &&
                                messages[chatId].map((item, index) => (
                                    <Message key={index} obj={item} />
                            ))}
                        </div>
                        <div className='inputBlock'>
                            <TextField
                                id='standard-basic'
                                className='input__field'
                                label='input your message'
                                name='inputText'
                                inputRef={this.messageRef}
                                value={this.state.inputText}
                                onChange={this.handleChange}
                                onKeyDown={this.handleKeyDown}
                            />
                            <Button
                                variant='contained'
                                color='primary'
                                endIcon={<Icon>send</Icon>}
                                onClick={this.addMessage}
                            >
                            Send
                            </Button>
                        </div>
                    </Fragment>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.chat.messages,
});

const MessageField = connect(mapStateToProps, { sendMessage })(_MessageField);

export { MessageField };