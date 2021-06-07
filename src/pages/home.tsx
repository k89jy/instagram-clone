import React from 'react';
import './../assets/css/home.css';
import instagramWord from '../assets/img/instagram-word.png';
export default function Home() {
    return (
        <div className="home-header">
            <img src={instagramWord} />
            <input type="text" placeholder="검색"></input>
        </div>
    );
}
