import React,{Fragment,useEffect} from 'react';
import HeaderComponent from '../component/header'
import ScopeComponent from '../component/scope'
import FooterComponent from '../component/footer'
import Tutorials from '../component/tutorials'
import Plenary from '../component/plenary'
import AOS from 'aos';
import "aos/dist/aos.css"

function Home() {
  useEffect(() => {
    AOS.init({
      once:true,
    duration:1000     
    })
  }, [])
  return (
    <Fragment>
    <HeaderComponent menu={"Home"} />
    <ScopeComponent />
    {/*
    <Tutorials />
    <Plenary />
    */}
    <FooterComponent />
    </Fragment>
  );
}

export default Home;
