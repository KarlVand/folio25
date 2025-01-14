import React, { useEffect } from 'react';
import { motion, useAnimationControls } from 'motion/react';

import '../assets/css/stackSlider.css';

import icon1 from '../assets/stackIcons/Babel.svg';
import icon2 from '../assets/stackIcons/GitHub.svg';
import icon3 from '../assets/stackIcons/VSCode.svg';
import icon4 from '../assets/stackIcons/Docker.svg';
import icon5 from '../assets/stackIcons/Linux.svg';
import icon6 from '../assets/stackIcons/NPM.svg';
import icon7 from '../assets/stackIcons/Oh my zsh.svg';
import icon8 from '../assets/stackIcons/Ubuntu.svg';
import icon9 from '../assets/stackIcons/Inkscape.svg';
import icon10 from '../assets/stackIcons/Vite.js.svg';
import icon11 from '../assets/stackIcons/JSON.svg';
import icon12 from '../assets/stackIcons/Three.js.svg';

const icons1 = [
    { path: icon1, name: 'Babel' },
    { path: icon2, name: 'Github' },
    { path: icon3, name: 'Vscode' },
    { path: icon4, name: 'Docker' },
    { path: icon5, name: 'Linux' },
    { path: icon6, name: 'NPM' },
    { path: icon7, name: 'Oh my zsh' },
    { path: icon8, name: 'Ubuntu' },
    { path: icon9, name: 'Inkscape' },
    { path: icon10, name: 'Vite.js' },
    { path: icon11, name: 'JSON' },
    { path: icon12, name: 'Three.js' }
];



function StackSlider() {
    const controls = useAnimationControls();
    const duplicatedIcons = [...icons1, ...icons1];

    const startAnimation = async () => {
        await controls.start({
            x: [`-50%`, `0%`], 
            transition: {
                duration: 15,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
            }
        });
    };

    useEffect(() => {
        startAnimation();
    }, []);


    return (
        <div className='techSliderContainer'>
            <motion.div 
                className='slider' 
                animate={controls} 
                onAnimationComplete={() => {
                    controls.set({ x: '0%' });
                    startAnimation();
                }}
            > 
                {duplicatedIcons.map((icon, index) => (
                    <motion.div
                        key={index}
                        className="icon"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img 
                            src={icon.path} 
                            alt={icon.name}
                            className="svgIcon" 
                        />
                    </motion.div>
                ))}
            </motion.div>

            
        </div>
    );

}

export default StackSlider;