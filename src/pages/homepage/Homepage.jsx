import React from 'react';
import Banner from '../../components/homepage/Banner';
import Statistics from '../../components/homepage/Statistics';
import TrendingApps from '../../components/homepage/TrendingApps';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <Statistics />
            <TrendingApps />
        </div>
    );
};

export default Homepage;