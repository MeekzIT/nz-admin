import React from 'react'
import { HomePageTypes } from './types'
import SliderHomePage from './sliderHomePage';
import AboutUsHome from './aboutUsHomePage';
import BuildingHomePage from './buildingHomePage';
import WeOffersHomePage from './weOffersHomePage';

const HomePage = ({ pageName }: HomePageTypes) => {
    switch (pageName) {
        case "Slider":
            return <SliderHomePage />
        case "AboutUs":
            return <AboutUsHome />
        case "Building":
            return < BuildingHomePage />
        case "WeOffers":
            return < WeOffersHomePage />
        default:
            return
    }
}

export default HomePage

