import React from 'react'
import PkgLotto from '../components/Pkg_Lotto/PkgLotto';

// Lotto Card images
import LottoCard1 from '../assets/portfolio/lottoCards/LC_1.jpg'
import LottoCard2 from '../assets/portfolio/lottoCards/LC_2.jpg'
import LottoCard3 from '../assets/portfolio/lottoCards/LC_3.jpg'
import LottoCard4 from '../assets/portfolio/lottoCards/LC_4.jpg'
import LottoCard5 from '../assets/portfolio/lottoCards/LC_5.jpg'
import LottoCard6 from '../assets/portfolio/lottoCards/LC_6.jpg'
import LottoCard7 from '../assets/portfolio/lottoCards/LC_7.jpg'
import LottoCard8 from '../assets/portfolio/lottoCards/LC_8.jpg'
import LottoCard9 from '../assets/portfolio/lottoCards/LC_9.jpg'


const LottoCards = () => {

  // const lCards = [
  //   {id:"lc1", name: "Cash Jolt", isValid: true, card: LottoCard1}, 
  //   {id:"lc2", name: "Rise From The Debt", isValid: true, card: LottoCard2}, 
  //   {id:"lc3", name: "Haunted by Bills", isValid: true,  card: LottoCard3},                                           
  //   {id:"lc4", name: "Super Dough Kickoff", isValid: true, card: LottoCard4}, 
  //   {id:"lc5", name: "Grand Slam Kickoff", isValid: true, card: LottoCard5}, 
  //   {id:"lc6", name: "Cash Invasion", isValid: true, card: LottoCard6}, 
  //   {id:"lc7", name: "Ben's Big Money Celebraton", isValid: true, card: LottoCard7}, 
  //   {id:"lc8", name: "Momma's Bundle of Joy", isValid: true, card: LottoCard8}, 
  //   {id:"lc9", name: "Rainy Day Riches", isValid: true, card: LottoCard9}
  // ];
  const lCard1 = [{id:"lc1", name: "Cash Jolt", isValid: true, card: LottoCard1}]; 
  const lCard2 = [{id:"lc2", name: "Rise From The Debt", isValid: true, card: LottoCard2}]; 
  const lCard3 = [{id:"lc3", name: "Haunted by Bills", isValid: true,  card: LottoCard3}];                                           
  const lCard4 = [{id:"lc4", name: "Super Dough Kickoff", isValid: true, card: LottoCard4}]; 
  const lCard5 = [{id:"lc5", name: "Grand Slam Kickoff", isValid: true, card: LottoCard5}]; 
  const lCard6 = [{id:"lc6", name: "Cash Invasion", isValid: true, card: LottoCard6}]; 
  const lCard7 = [{id:"lc7", name: "Ben's Big Money Celebraton", isValid: true, card: LottoCard7}]; 
  const lCard8 = [{id:"lc8", name: "Momma's Bundle of Joy", isValid: true, card: LottoCard8}];
  const lCard9 = [{id:"lc9", name: "Rainy Day Riches", isValid: true, card: LottoCard9}];

  return (
    <div className='PkgLottoMain'>
      <h1>Lotto Cards</h1>
      <PkgLotto items={lCard1}/>
      <PkgLotto items={lCard2}/>
      <PkgLotto items={lCard3}/>
      <PkgLotto items={lCard4}/>
      <PkgLotto items={lCard5}/>
      <PkgLotto items={lCard6}/>
      <PkgLotto items={lCard7}/>
      <PkgLotto items={lCard8}/>
      <PkgLotto items={lCard9}/>
    </div>
  )
}

export default LottoCards