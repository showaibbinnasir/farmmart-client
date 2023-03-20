import React from 'react';
import AnimalSection from './AnimalSection';
import EssentialNeeds from './EssentialNeeds';
import IntroOne from './IntroOne';
import IntroTwo from './IntroTwo';

const Homepage = () => {
    return (
        <div className='m-5'>
            <IntroOne></IntroOne>
            <AnimalSection></AnimalSection>
            <IntroTwo></IntroTwo>
            <EssentialNeeds></EssentialNeeds>
        </div>
    );
};

export default Homepage;