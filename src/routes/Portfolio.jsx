import React from 'react'
import PkgArticle from '../components/Pkg_Article/PkgArticle';
import { Outlet } from 'react-router-dom';
// Good things images
import goodThings1 from '../../src/assets/portfolio/_Packages/Good_Things/GTEmail.png';
import goodThings2 from '../../src/assets/portfolio/_Packages/Good_Things/GTPkg1.png';
import goodThings3 from '../../src/assets/portfolio/_Packages/Good_Things/GTPkg2.png';
// Money Tree images
import moneyTree1 from '../../src/assets/portfolio/_Packages/Money_Tree/MoneyTree1.png';
import moneyTree2 from '../../src/assets/portfolio/_Packages/Money_Tree/MoneyTree2.png';
import moneyTree3 from '../../src/assets/portfolio/_Packages/Money_Tree/MoneyTree3.png';
import moneyTree4 from '../../src/assets/portfolio/_Packages/Money_Tree/MoneyTree4.png';
import moneyTree5 from '../../src/assets/portfolio/_Packages/Money_Tree/MoneyTree5.png';
import moneyTree6 from '../../src/assets/portfolio/_Packages/Money_Tree/MoneyTree6.png';
// Positive Impact images
import piEmailTop from '../../src/assets/portfolio/_Packages/Positive_Impact/PIEmailTop.png';
import piEmailMid from '../../src/assets/portfolio/_Packages/Positive_Impact/PIEmailMid.gif';
import piEmailBod from '../../src/assets/portfolio/_Packages/Positive_Impact/PIEmailBody.png';
import positiveImpact1 from '../../src/assets/portfolio/_Packages/Positive_Impact/PIPkg1.png';
import positiveImpact2 from '../../src/assets/portfolio/_Packages/Positive_Impact/PIPkg2.png';
import positiveImpact3 from '../../src/assets/portfolio/_Packages/Positive_Impact/PIPkg3.png';
import positiveImpact4 from '../../src/assets/portfolio/_Packages/Positive_Impact/PIPkg4.png';
// Uncut Checks images
import UCEmail from '../../src/assets/portfolio/_Packages/Uncut_Checks/UCEmail.png';
import UCimg1 from '../../src/assets/portfolio/_Packages/Uncut_Checks/UC1.png';
import UCimg2 from '../../src/assets/portfolio/_Packages/Uncut_Checks/UC2.png';
import UCimg3 from '../../src/assets/portfolio/_Packages/Uncut_Checks/UC3.png';
import UCimg4 from '../../src/assets/portfolio/_Packages/Uncut_Checks/UC4.png';
import UCimg5 from '../../src/assets/portfolio/_Packages/Uncut_Checks/UC5.png';
// We're getting close
import wgcEmail from '../../src/assets/portfolio/_Packages/Were_getting_Close/wgcEmail.png';
import wgcimg1 from '../../src/assets/portfolio/_Packages/Were_getting_Close/wgc1.png';
import wgcimg2 from '../../src/assets/portfolio/_Packages/Were_getting_Close/wgc2.png';
import wgcimg3 from '../../src/assets/portfolio/_Packages/Were_getting_Close/wgc3.png';
import wgcimg4 from '../../src/assets/portfolio/_Packages/Were_getting_Close/wgc4.png';
import wgcimg5 from '../../src/assets/portfolio/_Packages/Were_getting_Close/wgc5.png';
import wgcimg6 from '../../src/assets/portfolio/_Packages/Were_getting_Close/wgc6.png';


const Portfolio = () => {

  // Good Things
  const gt_users = [
    {
      id: "goodThings",
      title: "Good Things Are Headed Your Way",
      type: "Ecommerce Direct Marketing Package",
      objective: "This is part of a new email series that I pitched to the marketing team to help generate incremental revenue for the company.  It performs very well, bringing in approximately $1.2 Million in unplanned revenue annually. The overall idea was to thank recent orderers for their patronage by “surprising and delighting” them with an exciting savings opportunity that no other customers were getting. We currently have 5 other creatives rotating in the series.",
      inspiration: "The idea for this version: Show a modern, animated email that gives a bold statement regarding this recent order and teases a special reward incentive that's waiting for them on the landing page. It's an interactive balloon pop experience on the LP that reveals the discount.", 
      result:"",
      isValid: true, 
    },
  ];
  const gt_images = [
    {url: goodThings1, blurb: ""},
    {url: goodThings2, blurb: ""},
    {url: goodThings3, blurb: ""},
  ];

  // MoneyTree
  const mt_users = [
    {
      id: "moneyTree",
      title: "Money Tree",
      type: "Ecommerce Direct Marketing Package",
      objective: "Create an interactive game that would surprise and delight users with both an exciting opportunity to win and a special “free gift” order incentive.",
      inspiration: "The idea for this version: Ever wish you had your own personal money tree? Yeah, me too. That's what gave me the idea here. The user gets presented with the sweepstakes section first. They click to shake the tree and cash falls down and tallies up. The prize was made variable, ranging from $50,000-$100,000. Playing off of the excitement of the sweepstakes, we haloed the theme for the product section, giving the user a chance to shake the tree for a free gift order incentive. Users received either a $25 or $30 free gift value with their order based on their buyer segment with the most loyal customers revealing the highest amount. Design-wise, we kept it light and playful. We added a little birdie who “chirped” and relayed important UI messaging to the user. We even had elements like a boot falling out of one of the trees as a fun add-on.",
      result:"This performed very well. It tested at a +18 Lift to Order Response.", 
      isValid: true, 
    },
  ];
  const mt_images = [
    {url: moneyTree1, blurb: ""},
    {url: moneyTree2, blurb: ""},
    {url: moneyTree3, blurb: ""},
    {url: moneyTree4, blurb: ""},
    {url: moneyTree5, blurb: ""},
    {url: moneyTree6, blurb: ""},
  ];

  // Positive Impact
  const pi_users = [
    {
      id: "positiveImpact",
      title: "Positive Impact",
      type: "Ecommerce Direct Marketing Package",
      objective: "Create a new contest promotion that is uplifting to the users and provides a substantial payout for our imminent prize event",
      inspiration: "This package was written in the thick of Covid lockdown. A lot of people around the country were feeling the financial strains of furloughs and budget cuts. But at the same time, there was a strong sense of community across the country. People were (virtually) checking in on family, friends and neighbors and offering to help anyway they could. It gave me the idea to create an Americana-themed package with a strong sweepstakes offer that would give substantial financial relief and impact the winner's life in a positive way. This “positive impact” would help wipe out debt, cushion savings, even help out loved ones. Design-wise, we chose a red, white and blue color pallet with elements from our national landmarks. We even included a virtual apple pie recipe card that users could download. (I wrote and tested the recipe myself)!",
      result:"This performed very well. It tested at a +18 Lift to Order Response.", 
      isValid: true, 
    },
  ];
  const pi_images = [
    {url: piEmailTop, blurb: ""},
    {url: piEmailMid, blurb: ""},
    {url: piEmailBod, blurb: "The upfront message teases THREE positive impact checks with the last check remaining a mystery until the user clicks through to the landing page."},
    {url: positiveImpact1, blurb: "On load of the landing page, the user gets a pop-up message asking him to make a decision regarding how much the last positive impact check should be made out for if he wins from this notice. Johnny is choosing between three prize values: Cash for a Vacation, Cash for a new Car, or Cash towards a Charity."},
    {url: positiveImpact2, blurb: "Once Johnny picks, he is asked to confirm his choice."},
    {url: positiveImpact3, blurb: ""},
    {url: positiveImpact4, blurb: "This was placed into an affinity mailing targeted to buyers who have shown an interest in kitchen items. We added a fun virtual recipe card that Johnny could print for free."},
  ];

  // Uncut Checks
  const uc_users = [
    {
      id: "uncutChecks",
      title: "Uncut Checks",
      type: "Ecommerce Direct Marketing Package",
      objective: "Create a new daily package that can be used with the promotional TV timeframe.",
      inspiration: "Come up with a fresh approach to showcase the Win For Life prize being offered. The lifetime payments are paid out weekly, which comes out to a lot of checks being printed. That inspired the idea of freshly printed uncut money sheets. Here we switched out the cash for faux-check sheets. Design-wise, we wanted to go big and bold with a modern, clean letter.",
      result:"This package performed stellar. It was a +19 in unique clicks, + 16 in lift to order response", 
      isValid: true, 
    },
  ];
  const uc_images = [
    {url: UCEmail, blurb: "The top of the email is attention-grabbing with an oversized prize statement overlapping the checks to emphasize the massive payout amount. We used minimal copy above the fold as a teaser and kept the letter informational and on the shorter side."},
    {url: UCimg1, blurb: "Landing Page: The user clicks through the email and sees a continuation of the uncut checks theme."},
    {url: UCimg2, blurb: "Call to order: We segmented the messaging here, targeting our lower tier of orderers, encouraging them to place a new order today to “level up” and start receiving bigger and better customer level benefits."},
    {url: UCimg3, blurb: ""},
    {url: UCimg4, blurb: "Supporting Assets: These assets are sprinkled throughout the lineup between products on tab 2 and 3, as a reminder to the user that their entry has not yet been submitted and they have to keep going to complete it."},
    {url: UCimg5, blurb: "Entry Confirmation Stamp"},
  ];

  // We're Getting Close
  const wgc_users = [
    {
      id: "weGettinClose",
      title: "We're Getting Close",
      type: "Ecommerce Direct Marketing Package", 
      objective: "Create a new email package that can be used during the final 10 days to enter countdown timeframe.",
      inspiration: "This was based around my personal experience, while making a prize delivery on behalf of PCH. I recalled the electricity of anticipation as we drove down the highway, closing the miles between our hotel and the winner's location, inching in excitement with each highway sign we passed. That inspired me to create a fun package that puts Johnny in the Prize Patrol van, dreaming about his own winning moment. Will we be coming for him next? Will it be his we're closing in on in just days to award our next big prize?  We added personalization throughout including on the highway signs to help reinforce that it could very well be Johnny's home we visit next if he enters and wins. Design-wise, we wanted to keep this airy and playful to give the entrant room to dream about the route we could be taking to their home.",
      result:"This package was a very high performer. Due to its success, we created a V2 of the package.", 
      isValid: true, 
    },
  ];
  const wgc_images = [
    {url: wgcEmail, blurb: "E-Mail"},
    {url: wgcimg1, blurb: "Landing Page: We used a driving animation here to help set the scene of a prize delivery. It's a dream sequence that outs the user in the driver's seat. This animation autostarts on load and continues for 4 stages until a hard with the call to action for Johnny to enter is presented."},
    {url: wgcimg2, blurb: "We designed a custom billboard"},
    {url: wgcimg3, blurb: ""},
    {url: wgcimg4, blurb: "Balloons swaying in the breeze"},
    {url: wgcimg5, blurb: "We continued the driving theme for the product section. Here we created a digital sign that switched out messaging in two stages."},
    {url: wgcimg6, blurb: "Included targeted messaging for lapsed buyers"},
  ];

  return (
    <>
      <h1>Packages</h1>
      <PkgArticle id="goodThings" items={gt_users} images={gt_images}/>
      <PkgArticle id="moneyTree" items={mt_users} images={mt_images}/>
      <PkgArticle id="positiveImpact" items={pi_users} images={pi_images}/>
      <PkgArticle id="uncutChecks" items={uc_users} images={uc_images}/>
      <PkgArticle id="weGettinClose" items={wgc_users} images={wgc_images}/>

      <Outlet/>
    </>
  )
}

export default Portfolio

// import React, {useState} from 'react'
// import LottoCard1 from '../assets/portfolio/lottoCards/LC_1.jpg'
// import LottoCard2 from '../assets/portfolio/lottoCards/LC_2.jpg'
// import LottoCard3 from '../assets/portfolio/lottoCards/LC_3.jpg'
// import LottoCard4 from '../assets/portfolio/lottoCards/LC_4.jpg'
// import LottoCard5 from '../assets/portfolio/lottoCards/LC_5.jpg'
// import LottoCard6 from '../assets/portfolio/lottoCards/LC_6.jpg'
// import LottoCard7 from '../assets/portfolio/lottoCards/LC_7.jpg'
// import LottoCard8 from '../assets/portfolio/lottoCards/LC_8.jpg'
// import LottoCard9 from '../assets/portfolio/lottoCards/LC_9.jpg'

// const lottoCards = [
//     {name: "Cash Jolt", card: LottoCard1}, 
//     {name: "Rise From The Debt", card: LottoCard2}, 
//     {name: "Haunted by Bills", card: LottoCard3},                                           
//     {name: "Super Dough Kickoff", card: LottoCard4}, 
//     {name: "Grand Slam Kickoff", card: LottoCard5}, 
//     {name: "Cash Invasion", card: LottoCard6}, 
//     {name: "Ben's Big Money Celebraton", card: LottoCard7}, 
//     {name: "Momma's Bundle of Joy", card: LottoCard8}, 
//     {name: "Rainy Day Riches", card: LottoCard9}
// ];


// const Portfolio = () => {

//   return (
//     <div id="portfolio" className='PortfolioSec'>
//         <div className='portfolioWrapper'>
//            <ul className="portfolioMenu">
//             <li>Packages</li>
//             <li>Blogs</li>
//             <li>Lotto Cards</li>
//             <li>Emails</li>
//            </ul>
//             <hr />
//             <section className='packages'>
//                 <h2>Packages</h2>
//                 <ul>
//                     <li>Good Things Are Headed Your Way</li>
//                     <li>Money Tree Interactive Game</li>
//                     <li>Positive Impact</li>
//                     <li>Uncut Checks</li>
//                     <li>We&apos;re Getting Close</li>
//                 </ul>

//                 <div className="pkg_presentation">
//                     {/* <div className="good_Things">
//                         <h2>Good Things Are Headed Your Way</h2>
//                         <div className="topCopy">
//                             <span>Objective</span>
//                             <p>This is part of a new email series that I pitched to the marketing team to help generate incremental revenue for the company.  It performs very well, bringing in approximately $1.2 Million in unplanned revenue annually. The overall idea was to thank recent orderers for their patronage by “surprising and delighting” them with an exciting savings opportunity that no other customers were getting. We currently have 5 other creatives rotating in the series.</p>
//                             <span>The idea for this version: </span>
//                             <p>Show a modern, animated email that gives a bold statement regarding this recent order and teases a special reward incentive that's waiting for them on the landing page. It's an interactive balloon pop experience on the LP that reveals the discount.</p>
//                         </div>
//                     </div> */}
//                 </div>
//             </section>
//             <section className='blogs'>
//                 <h2>Blogs</h2>
//                 <ul>
//                     <li>Perfect Body - Top 10 Perfect Body Laser Skincare Products We&apos;re Obsessing Over (And Why You Should Be, Too!)</li>
//                     <li>Perfect Body - The 7 Benefits of the NEW Emsculpt (And Why It&apos;s A Godsend For Athletes!)</li>
//                     <li>Perfect Body - Can I Get Laser Hair Removal On My Whole Body?</li>
//                     <li>PCH - Real News vs. Fake News: How can you tell?</li>
//                     <li>PCH - A Perfect Fit: Online Jigsaw Puzzles at PCH.com Games and YOU!</li>
//                 </ul>
//             </section>
//             <section className='LottoCards'>
//                 <h2>LottoCards</h2>
//                 <ul>
//                     {
//                         lottoCards.map((lottoCard, index) => (
//                             <li key={index}><span>{lottoCard.name}</span><img src={lottoCard.card} alt={lottoCard.name} loading='lazy'/></li>
//                         ))
//                     }                    
//                 </ul>
//             </section>
//             <section className='EMails'>
//                 <h2>EMails</h2>
//                 <ul>
                                  
//                 </ul>
//             </section>
//             {/* <section className="pf_packages">
//                 <div className="pkg_1">
//                     <div className="pkg_breakdown">
//                         <h2>Good Things Are Headed Your Way</h2>
//                         <blockquote>
//                             <p>
//                                 <span>Objective:</span> This is part of a new email series that I pitched to the marketing team to help generate incremental revenue for the company.  It performs very well, bringing in approximately $1.2 Million in unplanned revenue annually. The overall idea was to thank recent orderers for their patronage by “surprising and delighting” them with an exciting savings opportunity that no other customers were getting. We currently have 5 other creatives rotating in the series.
//                                 <span>The idea for this version: </span> Show a modern, animated email that gives a bold statement regarding this recent order and teases a special reward incentive that's waiting for them on the landing page. It's an interactive balloon pop experience on the LP that reveals the discount.
//                             </p>        
//                         </blockquote>                        
//                     </div>

//                 </div>
//             </section> */}
//         </div>
//     </div>
//   )
// }

// export default Portfolio