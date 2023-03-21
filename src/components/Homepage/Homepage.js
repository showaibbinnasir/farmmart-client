import React from 'react';
import AnimalSection from './AnimalSection';
import AssociatedPartner from './AssociatedPartner';
import EssentialNeeds from './EssentialNeeds';
import Footer from './Footer';
import IntroOne from './IntroOne';
import IntroTwo from './IntroTwo';

const Homepage = () => {
    return (
        <div className='p-5 bg-[#ffffff]'>
            <IntroOne></IntroOne>
            <AnimalSection></AnimalSection>
            <IntroTwo></IntroTwo>
            <EssentialNeeds></EssentialNeeds>
            <AssociatedPartner></AssociatedPartner>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;