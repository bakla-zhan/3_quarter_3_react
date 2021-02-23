// import React from 'react';
import { Messages } from '../Messages';

const App = () => {
    // return React.createElement('div', {id: 'test-id'}, 'Hello from React')
    return (
        <div id='test-id'>
            <h2>hello from react</h2>
            {/* <Message text='my new message'/> */}
            <Messages messages={['first', 'second']}/>
        </div>
    );
}

// export default App;
export { App };