import React from 'react';
import NewPost from "./NewPost/NewPost";
import Slider from "./Slider/Slider";
import Us from "./Us/Us";
import Team from "./Team/Team";

const Home = () => {
    return (
        <>
            <NewPost/>
            <Slider/>
            <Us/>
            <Team/>
        </>
    );
};

export default Home;