import React from 'react';
import './../assets/css/home.css';
import instagramWord from '../assets/img/instagram-word.png';
import { SearchElement } from '../components/seachElement';
export default function Home() {
    return (
        <div className="home-header">
            <img className="insta-img" src={instagramWord} />
            <SearchElement />
        </div>
    );
}
