import React,{Fragment,useEffect} from 'react';
import HeaderComponent from '../component/header'
import ScopeComponent from '../component/scope'
import FooterComponent from '../component/footer'
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
    <FooterComponent />
    </Fragment>
  );
}

export default Home;
