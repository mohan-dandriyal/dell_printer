
import React from "react"

import Benar from '../component/Benar'
import Service from '../component/Service'
import Chose from '../component/Chose'
import Contact from "../component/Contact"
import HomeAbout from "../component/HomeAbout"

const Home = () => {
    return (
        <>
            <Benar />
            <Service />
            <HomeAbout />
            <Chose />
            <Contact />
        </>
    )
}

export default Home