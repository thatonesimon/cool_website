import React from 'react';
import ImageGallery from "../assets/ImageGallery";

export default class Home extends React.Component {

    render() {
        return (
            <div className='base-page'>
                <h1>Welcome to my performance profile!</h1>
                <main>
                    <p>If you'd like to contact me, </p>
                </main>
                <ImageGallery/>
            </div>
        )
    }
}
