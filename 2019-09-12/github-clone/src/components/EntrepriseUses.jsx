import React from 'react'
import UseCard from './UseCard'

export default function EntrepriseUses() {
    return (
        <div className="companies">
            <p>See how the world's leading companies use GitHub Enterprise.</p>
            <div className="companyDetail">
                <UseCard />
                <UseCard />
                <UseCard />
                <UseCard />
            </div>
        </div>
    )
}
