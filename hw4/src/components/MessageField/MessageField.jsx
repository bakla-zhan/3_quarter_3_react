import { Component, Fragment, createRef } from 'react';
import { TextField, Button, Icon } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Message } from '../Message';
import './MessageField.css';


class MessageField extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
    };
    
    state = {
        messages: {
            1: [{ author: 'robot', text: 'hello from chat 1' }],
            2: [],
            3: [{ author: 'robot', text: 'hello from chat 3' }],
        },
        inputText: '',
    }; 

    messageRef = createRef();

    addMessage = () => {
        const { currentChat } = this.props;
        
        this.messageRef.current.focus(); // чтобы после попытки отправить пустое сообщение по кнопке 'send' курсор оставался в поле ввода
        if (this.state.inputText !== '') { // чтобы нельзя было отправить пустое сообщение
            this.setState({
                messages: {
                    ...this.state.messages,
                    [currentChat]: [
                        ...this.state.messages[currentChat],
                        {
                            author: 'me',
                            text: this.state.inputText,
                        },
                    ],
                },
                inputText: '' // очистка поля ввода после отправки сообщения
            });
        };
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

    componentDidUpdate(prevProps, prevState) {
        const { currentChat } = this.props;
        
        this.messageRef.current.focus(); // чтобы после отправки сообщения курсор оставался в поле ввода сообщения
        
        const endElement = document.querySelector('.message:last-child');
        if (endElement) {
            endElement.scrollIntoView(); // для автоматической прокрутки чата вниз до последнего сообщения
        };
        
        if (prevState.messages[currentChat].length < this.state.messages[currentChat].length && 
            this.state.messages[currentChat][this.state.messages[currentChat].length - 1].author === 'me') {
            setTimeout(() => {
                const answer = this.getRobotAnswer();
                this.setState({
                    messages: {
                        ...this.state.messages,
                        [currentChat]: [
                            ...this.state.messages[currentChat],
                            { author: 'robot', text: answer },
                        ],
                    }, 
                });
            }, 1000);
        }

    }

    render() {
        const { messages = [] } = this.state;
        const { currentChat } = this.props;

        return (
            <div className='messageField'>
                {currentChat && (
                    <Fragment>
                        <div className='messages'>
                            {messages[currentChat] &&
                                messages[currentChat].map((item, index) => (
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

export { MessageField };