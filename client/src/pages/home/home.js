import React from 'react';
import './home.scss';
import List from '../../components/list/list';
import Slick from '../../components/slick/slick';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <div className="home_title">
                    <Slick />
                    <List />
                </div>
            </div>
        </div>
    );
}

export default Home;
