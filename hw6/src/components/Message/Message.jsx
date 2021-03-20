import {Component} from 'react';
import './Message.css';


class Message extends Component {
    render() {
        const {obj} = this.props;
        return (
            <div className='message'
            style={ { alignSelf: obj.author === 'robot' ? 'flex-start' : 'flex-end' } }>
                <div>{ obj.text }</div>
                <div className="message-sender">{ obj.author }</div>
            </div>
        )
    }
};

export { Message };