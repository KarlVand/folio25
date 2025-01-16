import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'motion/react';

import './stackSlider.css';

import icon1 from './stackIcons/HTML5.svg';
import icon2 from './stackIcons/CSS3.svg';
import icon3 from './stackIcons/PHP.svg';
import icon4 from './stackIcons/JavaScript.svg';
import icon5 from './stackIcons/React.svg';
import icon6 from './stackIcons/Sass.svg';
import icon7 from './stackIcons/Tailwind_CSS_Logo.svg';
import icon8 from './stackIcons/Node.js.svg';
import icon9 from './stackIcons/Bootstrap.svg';
import icon10 from './stackIcons/MySQL.svg';
import icon11 from './stackIcons/Markdown.svg';
import icon12 from './stackIcons/Git.svg';

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
    const [isHovered, setIsHovered] = useState(false);
    const duplicatedIcons = [...icons1, ...icons1];

    const startAnimation = async () => {
        await controls.start({
            x: [`0%`, `-50%`], 
            
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
            }
        
        });
    };

    useEffect(() => {
        startAnimation();
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
        startAnimation(30);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
        startAnimation(15);
    }


    return (
        <div className='sliderContainer'
            
        >
            <motion.div 
                className='slider' 
                animate={controls} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onAnimationComplete={() => {
                    controls.set({ x: '0%' });
                    startAnimation(isHovered ? 30 : 15);
                    
                }
            }
            > 
                {duplicatedIcons.map((icon, index) => (
                    <motion.div
                        key={index}
                        className="icon"
                        whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.8 }}
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