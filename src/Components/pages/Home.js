import React from 'react'
import '../../App.css'
import Cards from '../Cards';
import HeroComponent from '../HeroComponent'

function Home(){
    return(
        <React.Fragment>
            <HeroComponent/>
            <Cards/>
        </React.Fragment>
    )
}

export default Home;