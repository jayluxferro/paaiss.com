import React,{Fragment,useEffect} from 'react';
import HeaderComponent from '../component/header'
import FooterComponent from '../component/footer'
import Tutorials from '../component/tutorials'
import Plenary from '../component/plenary'
import AOS from 'aos';
import "aos/dist/aos.css"

const KeynoteSpeakersComponent = () => {
    useEffect(() => {
        AOS.init({
          once:true,
        duration:1000     
        })
      }, [])
    return (
      <Fragment>
        <HeaderComponent menu={"keynote speakers"} />
        <Plenary />
        <Tutorials />
        <FooterComponent />
      </Fragment>
    )
}

export default KeynoteSpeakersComponent
