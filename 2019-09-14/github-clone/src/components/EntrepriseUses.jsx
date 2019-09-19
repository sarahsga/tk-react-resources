import React from 'react'
import ImgCard from './ImgCard'
import nida from './../assets/images/img3.png'

export default function EntrepriseUses() {
    return (
        <div className="companies">
            <p>See how the world's leading companies use GitHub Enterprise.</p>
            <div className="companyDetail">
                <ImgCard
                    heading="Pakistan Wins T20" 
                    imgURL="https://customer-stories-feed.github.com/customer_stories/mgm-resorts/hero.jpg"
                >
                    Lorem Ipsum blah blah blah
                </ImgCard>

                <ImgCard 
                    heading="New Butterfly discovered!"
                    imgURL="https://customer-stories-feed.github.com/customer_stories/nationwide/nw_hero.jpg"
                >
                   dshgxkdhaj
                </ImgCard>

                <ImgCard 
                    heading="Nawaz in JAIL!" 

                    imgURL={nida}
                >
                    LOL
                </ImgCard>

                <ImgCard 
                    heading="CORRUPTION OUT OF CONTROL!"
                >
                    IMRAN do somethingsjgf
                </ImgCard>
            </div>
        </div>
    )
}
