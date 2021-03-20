import { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './Layout.css';

import { Header } from '../Header';
import { MessageField } from '../MessageField';
import { ChatList } from '../ChatList';

class _Layout extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    render() {
        const { match } = this.props;

        return (
            <div className='layout'>
                {/* задать вопрос преподавателю, можно ли передать chatId централизованно один раз во все компоненты */}
                <Header currentChat={match.params.chatId} />
                <div className="layout-canvas">
                    <ChatList currentChat={match.params.chatId} />
                    <MessageField currentChat={match.params.chatId} />
               </div>
            </div>
        );
    }
}

const Layout = withRouter(_Layout);

export { Layout };
