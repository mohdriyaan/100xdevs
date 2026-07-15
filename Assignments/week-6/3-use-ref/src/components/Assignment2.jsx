import React, { useState, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered.
// Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [, forceRender] = useState(0);

    const renderCount = useRef(0);

    // Increment the render count on ev ery render

    const handleReRender = () => {
        // Force a re-render
        renderCount.current = renderCount.current + 1
        forceRender(Math.random());
    };

    return (
        <div>
            <p>
                This component has rendered {renderCount.current} times.
            </p>
            <button onClick={handleReRender}>
                Force Re-render
            </button>
        </div>
    );
}