import React from 'react';
import AnimalSection from './AnimalSection';
import IntroOne from './IntroOne';
import IntroTwo from './IntroTwo';

const Homepage = () => {
    return (
        <div className='m-10'>
            <IntroOne></IntroOne>
            <AnimalSection></AnimalSection>
            <IntroTwo></IntroTwo>
        </div>
    );
};

export default Homepage;