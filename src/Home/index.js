import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SliderWidget from './SliderWidget';
import Subscribe from './Subscribe';
import Blocks from '../components/Home/blocks';
import Poll from '../components/Home/poll';


const Home = () => {
    const [home, setHome] = useState([]);
    const { slider } = home;
    useEffect(() => {
        axios.get('http://localhost:3005/home').then((res) => {
            setHome(res.data);
            console.log(res.data);
        })
    }, []);
    return (
        <>
        <SliderWidget slides={slider} />
        <Subscribe />
        <Blocks blocks={home.blocks}/>
        <Poll/>
        </>
    )
};

export default Home;
