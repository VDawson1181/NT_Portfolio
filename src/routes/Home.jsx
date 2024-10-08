import React from 'react'
import '../components/Home/Home.css'

const Home = ({homepageData:{mainTitle, subTitle, portraitCopy}}) => {
  return (
    <>
        <section id="homepage" className="homepage">
            <div className="main_portrait">
              <div className='imageHover'>I am both a Direct Marketing Association Certified professional AND an Associate Creative Director with over 15 years of experience as a content strategist and copywriter. I am passionate about my work and I get real results. Want to see? <br /> Reach out!</div>
            </div>
        <div className="card_Large">
            
            <div className="main_body">
            <h1 className='sacramento-regular'>{mainTitle}</h1>
            <h2>{subTitle}</h2>
            <hr />
            <h3>Words Matter!</h3>
            <p>Grow Your Business With Strong, Compelling Copy That Increases Conversion <br /> And Boosts Sales Crafted By A Copywriter Who Actually GETS Marketing.</p>
            <br />
            <p>Want killer content that gets more traffic, better (quality!) leads, and a sweet, sweet lift to your overall sales?</p>
            <p>You need a persuasive content copywriter who understands both creative and marketing strategy. <br /> That&#39;s where I come in.</p>
            <br />
            <p className="main_connect">Let's Connect - Email: <a href="mailto:Nicoletringali@gmail.com">Nicoletringali@gmail.com</a></p>
            </div>
        </div>
        </section>
    </>
  )
}

export default Home