import React from 'react';


const Homepage = ({homepageData:{mainTitle, subTitle, portraitCopy} }) => {
  return (
    <section id="homepage" className="homepage">
        <div className="main_portrait"><div className='imageHover'>{portraitCopy}</div></div>
      <div className="card_Large">
        
        <div className="main_body">
          <h1 className='sacramento-regular'>{mainTitle}</h1>
          <h2>{subTitle}</h2>
          <hr />
          <h3>Words Matter!</h3>
          <p>Grow Your Business With Strong, Compelling Copy That Increases Conversion <br /> And Boosts Sales Crafted By A Copywriter Who Actually GETS Marketing</p>
          <p>Want killer content that gets more traffic, better (quality!) leads, and a sweet, sweet lift to your overall sales?</p>
          <p> You need a persuasive content copywriter who understands both creative and marketing strategy. <br /> That&#39;s where I come in.</p>
        </div>
      </div>
    </section>
  )
}

export default Homepage