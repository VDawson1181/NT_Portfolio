
import React, {useState} from 'react';
import './PkgLotto.css'

const PkgLotto = ({items}) => {
const cardList = items;
// const imageList = images;

const [toggle, setToggle] = useState(false);

const toggleShowStatus = () => {
    setToggle(!toggle);
}

    // const pkgImages = imageList.map( (image, index) => <div key={index}>
    //             <img className="card-image" src={ image.url } alt="Image" loading="lazy"/>
    // </div>);
    
    const packages = cardList.map((item, index) => <div id={item.id} key={item.id} className={item.isValid ? "PkgLottoWrapper":"PkgLottoHidden"}>
        <h2 className='clicker' onClick={toggleShowStatus}>{item.name}</h2>
        <div className={toggle ? "PkgLottoInner " : "PkgLottoInner pkgClosed"}>
            <img className="card-image" src={ item.card } alt="Image" loading="lazy"/>
        </div>
    </div>
    );


    
  return (<>
  {packages} 
  </>

  )
}
export default PkgLotto
