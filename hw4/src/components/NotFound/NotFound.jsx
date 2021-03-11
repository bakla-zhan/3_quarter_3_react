import {Fragment} from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <Fragment>
            <h2>Page not found</h2>
            <Link to='/' >Return to homepage</Link>
        </Fragment>
    );
};

export {NotFound};