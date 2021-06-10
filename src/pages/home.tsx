import React from 'react';
import './../assets/css/home.css';
import instagramWord from '../assets/img/instagram-word.png';
import outline_home_black_24dp from '../assets/img/1x/outline_home_black_24dp.png';
import round_explore_white_24dp from '../assets/img/1x/round_explore_white_24dp.png';
import { SearchElement } from '../components/seachElement';
export default function Home() {
    return (
        <div className="home-header">
            <img className="insta-img" src={instagramWord} />
            <SearchElement />
            <img src={outline_home_black_24dp} />
            <img src={round_explore_white_24dp} />
        </div>
    );
}
