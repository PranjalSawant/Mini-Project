import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ImpactProgress = () => {
    const [percentage, setPercentage] = useState(0);
    const targetPercentage = 66; // Target percentage to animate up to

    // Animating both progress bar and percentage number at the same time
    useEffect(() => {
        const timer = setTimeout(() => {
            if (percentage < targetPercentage) {
                setPercentage(percentage + 1); // Increment percentage by 1 until target
            }
        }, 1); // Speed of the animation (20ms for smooth effect)

        return () => clearTimeout(timer); // Clean up the timeout on component unmount
    }, [percentage]);

    return (
        <div style={{ width: '100%', height: '100%' }}> {/* Adjust width & height */}
            <CircularProgressbar
                value={percentage} // Value for both the number and progress
                text={`${percentage}%`} // Synchronized text display
                styles={buildStyles({
                    rotation: 0.75, // Rotate to show the top half of the circle
                    strokeLinecap: 'round', // Rounded end caps on the progress bar
                    textSize: '16px',
                    pathTransitionDuration: 0.5, // Smooth animation for path
                    pathColor: `rgba(225, 225, 225, ${percentage / 100})`, // Path color based on percentage
                    textColor: '#fff',
                    background: true,
                    trailColor: '#fff',
                    backgroundColor: 'red',
                    pathTransition: 'ease-in-out',
                    trailWidth: 10,
                    pathWidth: 10,
                    strokeWidth: '1px',
                    strokeLinejoin: 'round',
                })}
                circleRatio={0.5} // Set ratio for a semicircle
            />
        </div>
    );
};
