import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const Type = () => {
    useEffect(() => {
        const typewriter = new Typewriter('#typewriter', {
            loop: true,
            delay: 100,
            deleteSpeed: 50,
        });

        typewriter
            .typeString('Fullstack Developer')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Graphic Designer')
            .pauseFor(2000)
            .deleteAll()
            .typeString('UI/UX Designer')
            .pauseFor(2000)
            .deleteAll()
            .start();

        // Cleanup function (not necessary for Typewriter but a good practice)
        return () => {
            typewriter.stop();
        };
    }, []);

    return (
        <span id='typewriter'></span>
    );
};

export default Type;
