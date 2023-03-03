import React from 'react';

import './navigation.css'

const footerStyle = {
    bottom: 0,
    position: 'relative',
}
export default class Footer extends React.Component {

    render() {
        return (
            <div className='footer'>
                <hr/>
                <p>Deployment code: test</p>
            </div>
        )
    }
}
