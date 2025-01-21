import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'motion/react';

import './stackSlider.css';

import icon1 from './techIcons/Babel.svg';
import icon2 from './techIcons/GitHub.svg';
import icon3 from './techIcons/VSCode.svg';
import icon4 from './techIcons/Docker.svg';
import icon5 from './techIcons/Linux.svg';
import icon6 from './techIcons/NPM.svg';
import icon7 from './techIcons/Oh my zsh.svg';
import icon8 from './techIcons/Ubuntu.svg';
import icon9 from './techIcons/Inkscape.svg';
import icon10 from './techIcons/Vite.js.svg';
import icon11 from './techIcons/JSON.svg';
import icon12 from './techIcons/Three.js.svg';



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




function TechSlider() {
    const controls = useAnimationControls();
    const duplicatedIcons = [...icons1, ...icons1];
    const [isHovered, setIsHovered] = useState(false);

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
    
        startAnimation();
    
        const handleMouseEnter = () => {
            setIsHovered(true);     
        }

        const handleMouseLeave = () => {
            setIsHovered(false);
        }

        useEffect(() => {
            isHovered ? controls.stop() : controls.mount();
        }, [isHovered]);
        


    

        
        
            

    return (
        <div className='techSliderContainer'>
            <motion.div 
                className='slider' 
                animate={controls} 
                onAnimationComplete={() => {
                    controls.set({ x: '0%' });
                    startAnimation();
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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

export default TechSlider;