import React, {useState} from 'react'
import LottoCard1 from '../assets/portfolio/lottoCards/LC_1.jpg'
import LottoCard2 from '../assets/portfolio/lottoCards/LC_2.jpg'
import LottoCard3 from '../assets/portfolio/lottoCards/LC_3.jpg'
import LottoCard4 from '../assets/portfolio/lottoCards/LC_4.jpg'
import LottoCard5 from '../assets/portfolio/lottoCards/LC_5.jpg'
import LottoCard6 from '../assets/portfolio/lottoCards/LC_6.jpg'
import LottoCard7 from '../assets/portfolio/lottoCards/LC_7.jpg'
import LottoCard8 from '../assets/portfolio/lottoCards/LC_8.jpg'
import LottoCard9 from '../assets/portfolio/lottoCards/LC_9.jpg'

const lottoCards = [
    {name: "Cash Jolt", card: LottoCard1}, 
    {name: "Rise From The Debt", card: LottoCard2}, 
    {name: "Haunted by Bills", card: LottoCard3},                                           
    {name: "Super Dough Kickoff", card: LottoCard4}, 
    {name: "Grand Slam Kickoff", card: LottoCard5}, 
    {name: "Cash Invasion", card: LottoCard6}, 
    {name: "Ben's Big Money Celebraton", card: LottoCard7}, 
    {name: "Momma's Bundle of Joy", card: LottoCard8}, 
    {name: "Rainy Day Riches", card: LottoCard9}
];


const Portfolio = () => {

  return (
    <div id="portfolio" className='PortfolioSec'>
        <div className='portfolioWrapper'>
           <ul className="portfolioMenu">
            <li>Packages</li>
            <li>Blogs</li>
            <li>Lotto Cards</li>
            <li>Emails</li>
           </ul>
            <hr />
            <section className='packages'>
                <h2>Packages</h2>
                <ul>
                    <li>Good Things Are Headed Your Way</li>
                    <li>Money Tree Interactive Game</li>
                    <li>Positive Impact</li>
                    <li>Uncut Checks</li>
                    <li>We&apos;re Getting Close</li>
                </ul>

                <div className="pkg_presentation">
                    {/* <div className="good_Things">
                        <h2>Good Things Are Headed Your Way</h2>
                        <div className="topCopy">
                            <span>Objective</span>
                            <p>This is part of a new email series that I pitched to the marketing team to help generate incremental revenue for the company.  It performs very well, bringing in approximately $1.2 Million in unplanned revenue annually. The overall idea was to thank recent orderers for their patronage by “surprising and delighting” them with an exciting savings opportunity that no other customers were getting. We currently have 5 other creatives rotating in the series.</p>
                            <span>The idea for this version: </span>
                            <p>Show a modern, animated email that gives a bold statement regarding this recent order and teases a special reward incentive that's waiting for them on the landing page. It's an interactive balloon pop experience on the LP that reveals the discount.</p>
                        </div>
                    </div> */}
                </div>
            </section>
            <section className='blogs'>
                <h2>Blogs</h2>
                <ul>
                    <li>Perfect Body - Top 10 Perfect Body Laser Skincare Products We&apos;re Obsessing Over (And Why You Should Be, Too!)</li>
                    <li>Perfect Body - The 7 Benefits of the NEW Emsculpt (And Why It&apos;s A Godsend For Athletes!)</li>
                    <li>Perfect Body - Can I Get Laser Hair Removal On My Whole Body?</li>
                    <li>PCH - Real News vs. Fake News: How can you tell?</li>
                    <li>PCH - A Perfect Fit: Online Jigsaw Puzzles at PCH.com Games and YOU!</li>
                </ul>
            </section>
            <section className='LottoCards'>
                <h2>LottoCards</h2>
                <ul>
                    {
                        lottoCards.map((lottoCard, index) => (
                            <li key={index}><span>{lottoCard.name}</span><img src={lottoCard.card} alt={lottoCard.name} loading='lazy'/></li>
                        ))
                    }                    
                </ul>
            </section>
            <section className='EMails'>
                <h2>EMails</h2>
                <ul>
                                  
                </ul>
            </section>
            {/* <section className="pf_packages">
                <div className="pkg_1">
                    <div className="pkg_breakdown">
                        <h2>Good Things Are Headed Your Way</h2>
                        <blockquote>
                            <p>
                                <span>Objective:</span> This is part of a new email series that I pitched to the marketing team to help generate incremental revenue for the company.  It performs very well, bringing in approximately $1.2 Million in unplanned revenue annually. The overall idea was to thank recent orderers for their patronage by “surprising and delighting” them with an exciting savings opportunity that no other customers were getting. We currently have 5 other creatives rotating in the series.
                                <span>The idea for this version: </span> Show a modern, animated email that gives a bold statement regarding this recent order and teases a special reward incentive that's waiting for them on the landing page. It's an interactive balloon pop experience on the LP that reveals the discount.
                            </p>        
                        </blockquote>                        
                    </div>

                </div>
            </section> */}
        </div>
    </div>
  )
}

export default Portfolio