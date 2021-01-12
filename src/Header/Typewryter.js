import React from "react";
import Typewriter from 'typewriter-effect';

const Typewr = () => (

    <Typewriter loop options={{  loop: true}}
        onInit={(typewriter) => {
            typewriter.typeString('The Webmaster ')
            typewriter.typeString(' Javascript & React Developer')
                .callFunction(() => {
                    console.log('String typed out!');
                })

                .pauseFor(2000)
                .deleteAll()
                .callFunction(() => {
                    console.log('All strings were deleted');
                })
                .start();

        }}
    />
)
export default Typewr

