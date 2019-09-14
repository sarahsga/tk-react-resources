import React from 'react'
import IntegrationBubble from './IntegrationBubble'

export default function Integrations() {
    return (
        <>
            <div className="team">
                <div className="innerTeam">
                    <h2>Integrations</h2>
                    <p>Build on GitHub</p>
                    <p className="teamPara">
                        Customize your process with GitHub apps and an intuitive API.
                        Integrate the tools you already use or discover new favorites to
                        create a happier, more efficient way of working.
            </p>
                    <button>Learn about integrations →</button>
                </div>
            </div>
            <div className="balls">
                <div className="innerBalls">
                    <IntegrationBubble />
                    <IntegrationBubble />
                    <IntegrationBubble />
                    <IntegrationBubble />
                    <IntegrationBubble />
                    <IntegrationBubble />
                </div>
            </div>
        </>
    )
}
