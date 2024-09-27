import Navigation from './Navigation/Navigation';
import Homepage from './Homepage/Homepage'
import AboutMe from './AboutMe/AboutMe';
import HireMe from './HireMe/HireMe';
import Portfolio from './Portfolio/Portfolio';
import '../src/reset.css';
import '../src/index.css';
import './App.css';
import './Navigation/Navigation.css';
import './Homepage/Homepage.css';
import './AboutMe/AboutMe.css'
import './HireMe/HireMe.css'
import './Portfolio/Portfolio.css'

export default function App() {

  const homepageData={
    mainTitle: "Nicole Tringali",
    subTitle: "Content Strategist + Copywriter",
    portraitCopy: "I am both a Direct Marketing Association Certified professional AND an Associate Creative Director with over 15 years of experience as a content strategist and copywriter. I am passionate about my work and I get real results. Want to see? Reach out!",
  };


  return (
    <>
      <Navigation/>
      <Homepage homepageData={homepageData}></Homepage>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <HireMe></HireMe>
    </>
  )
}

