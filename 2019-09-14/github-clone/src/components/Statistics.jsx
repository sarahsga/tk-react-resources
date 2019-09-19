import React from 'react'
import BubbleSideNote from './BubbleSideNote'
import StatBubble from './StatBubble'

export default function Statistics() {
    return (
        <div className="count">
            <div className="countBalls">
                <StatBubble />
                <StatBubble />
                <StatBubble />
            </div>
            <div className="countDetails">
                <ul>
                    <BubbleSideNote />
                    <BubbleSideNote />
                    <BubbleSideNote />
                </ul>
            </div>
        </div>
    )
}
