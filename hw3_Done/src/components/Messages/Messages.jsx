import { Component, createRef } from 'react';
import { Message } from '../Message';
import './Messages.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class Messages extends Component {
    state = {
        messages: [{ author: 'robot', text: 'hello...' }],
        inputText: ''
    };

    messageRef = createRef();

    addMessage = () => {
        this.messageRef.current.focus(); // чтобы после попытки отправить пустое сообщение по кнопке 'send' курсор оставался в поле ввода
        if (this.state.inputText !== '') { // чтобы нельзя было отправить пустое сообщение
            this.setState({
                messages: [...this.state.messages, { author: 'me', text: this.state.inputText }],
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

    componentDidMount() {
        this.messageRef.current.focus();
    }

    componentDidUpdate() {
        this.messageRef.current.focus(); // чтобы после отправки сообщения курсор оставался в поле ввода сообщения
        const endElement = document.querySelector('.message:last-child');
        endElement.scrollIntoView(); // для автоматической прокрутки чата вниз до последнего сообщения
        if (this.state.messages.length % 2 === 0) {
            setTimeout(() => {
                const answer = this.getRobotAnswer();
                this.setState({ messages: [...this.state.messages, { author: 'robot', text: answer }] });
            }, 1000);
        }

    }

    render() {
        const { messages = [] } = this.state;

        return (
            <div className='layout'>
                <div className='messages'>
                    {messages.map((item, index) => (
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
            </div>
        );
    }
}

export { Messages };