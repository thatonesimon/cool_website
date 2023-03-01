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
                <hr />
                <p>This is a basic footer</p>
            </div>
        )
    }
}
