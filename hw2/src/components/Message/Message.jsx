import {Component} from 'react';


class Message extends Component {
    render() {
        const {obj} = this.props;
        return <div className='message'><b>{obj.author}:</b> {obj.text}</div>;
    }
};

export { Message };