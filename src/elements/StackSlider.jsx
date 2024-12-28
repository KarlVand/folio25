import React, { useEffect } from 'react';
import { motion, useAnimationControls } from 'motion/react';

import '../assets/css/stackSlider.css';

import icon1 from '../assets/stackIcons/HTML5.svg';
import icon2 from '../assets/stackIcons/CSS3.svg';
import icon3 from '../assets/stackIcons/PHP.svg';
import icon4 from '../assets/stackIcons/JavaScript.svg';
import icon5 from '../assets/stackIcons/React.svg';
import icon6 from '../assets/stackIcons/Sass.svg';
import icon7 from '../assets/stackIcons/Tailwind_CSS_Logo.svg';
import icon8 from '../assets/stackIcons/Node.js.svg';
import icon9 from '../assets/stackIcons/Bootstrap.svg';
import icon10 from '../assets/stackIcons/MySQL.svg';
import icon11 from '../assets/stackIcons/Markdown.svg';
import icon12 from '../assets/stackIcons/Git.svg';

const icons1 = [
    { path: icon1, name: 'HTML5' },
    { path: icon2, name: 'CSS3' },
    { path: icon3, name: 'PHP' },
    { path: icon4, name: 'JavaScript' },
    { path: icon5, name: 'React' },
    { path: icon6, name: 'Sass' },
    { path: icon7, name: 'Tailwind CSS' },
    { path: icon8, name: 'Node.js' },
    { path: icon9, name: 'Bootstrap' },
    { path: icon10, name: 'MySQL' },
    { path: icon11, name: 'Markdown' },
    { path: icon12, name: 'Git' }
];



function StackSlider() {
    const controls = useAnimationControls();
    const duplicatedIcons = [...icons1, ...icons1];

    const startAnimation = async () => {
        await controls.start({
            x: [`50%`, `-50%`], 
            transition: {
                duration: 10,
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
        <div className='sliderContainer'>
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
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img 
                            src={icon.path} 
                            alt={icon.name}
                            className="svgIcon" // Consistent sizing
                        />
                    </motion.div>
                ))}
            </motion.div>

            
        </div>
    );

}

export default StackSlider;