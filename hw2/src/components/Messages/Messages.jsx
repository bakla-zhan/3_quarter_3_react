import {Component, Fragment} from 'react';
import { Message } from '../Message';

class Messages extends Component {
    state = {
        messages: [{author: 'robot', text: 'hello...'}]
    };

    addMessage = () => {
        this.setState({messages: [...this.state.messages, {author: 'human', text: 'hello, how are you?'}]});
    };

    getRobotAnswer = () => {
        let robotAnswers = ['fine, tnx...', 'leave me alone! I am just a robot...', 'better than you', 'sorry, I am busy'];
        return robotAnswers[parseInt((Math.random() * 4))];
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 0) {
            setTimeout(() => {
                let answer = this.getRobotAnswer();
                this.setState({messages: [...this.state.messages, {author: 'robot', text: answer}]});
            }, 1000);
        }
        
    }

    render() {
        const {messages = []} = this.state;

        return (
            <Fragment>
                <div className='messages'>
                    {messages.map((item, index) => (
                        <Message key={index} obj={item}/>
                    ))}
                </div>
                <button onClick={this.addMessage}>send message</button>
            </Fragment>
        );
    }
}

export { Messages };