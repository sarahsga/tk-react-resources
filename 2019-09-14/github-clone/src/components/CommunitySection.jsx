import React from 'react'
import TeamMember from './TeamMember';

export default function CommunitySection() {
    return (
        <>
            <div className="team">
                <div className="innerTeam">
                    <h2>Community</h2>
                    <p>Welcome home, developers</p>
                    <p className="teamPara">
                        GitHub is home to the world’s largest community of developers and
                        their projects...
                    </p>
                </div>
            </div>
            <div className="companies">
                <div className="companyDetail">
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />                
                </div>
            </div>
        </>
    )
}
