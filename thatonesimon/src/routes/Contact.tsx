import React from 'react';

import './routes.css';

export default class Contact extends React.Component {

    render() {
        return (
            <div className='base-page'>
                <h1>Contact Me!</h1>
                <main>
                    <p>If you'd like to contact me, you can reach me at:</p>
                    <a href="mailto:thatonesimon@gmail.com?body=My custom mail body">thatonesimon@gmail.com</a>
                </main>
            </div>
        )
    }
}
