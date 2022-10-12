import React from 'react';
import './Banner.css';
import bannerImg from './online.jpg';

const Banner = () => {



    const handleTakeText = () =>{
        console.log('click for take a test')
    }

    const handleCreateTest = () =>{
        console.log('handle for crete a new test');
    }






    return (
        <div className='banner-area'>
            <div className='banner-gradiant'></div>
            <div>
            <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img src={bannerImg} class=" ml-10 max-w-sm rounded-lg" />
                <div>
                <h1 class="text-3xl font-bold">Full Online Exam Quiz Test for Student</h1>
                <p class="py-2">No more cheating on Online tests</p>
                <div className='flex justify-center mt-4'>
                    <div className='take-text px-3 mx-2'>
                        <button onClick={handleTakeText} className='py-2'>TAKE A DEMO TEST</button>
                    </div>
                    <div className='create-text px-3 mx-2'>
                        {/* <p className='py-2'>CREATE TEST</p> */}
                        <button onClick={handleCreateTest} className='py-2'>CREATE TEST</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;