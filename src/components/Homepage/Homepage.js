import React from 'react';
import AnimalSection from './AnimalSection';
import IntroOne from './IntroOne';

const Homepage = () => {
    return (
        <div className='m-10'>
            <IntroOne></IntroOne>
            <AnimalSection></AnimalSection>
        </div>
    );
};

export default Homepage;