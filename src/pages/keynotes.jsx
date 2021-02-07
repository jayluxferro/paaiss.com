import React,{Fragment,useEffect} from 'react';
import HeaderComponent from '../component/header'
import FooterComponent from '../component/footer'
import AOS from 'aos';
import "aos/dist/aos.css"

const KeynotesComponent = () => {
    useEffect(() => {
        AOS.init({
          once:true,
        duration:1000     
        })
      }, [])
    return (
        <Fragment>
<HeaderComponent menu={"keynotes"} />

<div className="bg-white">
    <div className="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 data-aos="zoom-in" className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl text-indigo-600">Keynotes</h2>
        </div>
      </div>
    </div>
  </div>
<div className="relative bg-white">
  <div className="lg:absolute lg:inset-0">
    <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
      <img className="h-56 w-full object-cover lg:absolute lg:h-full" src={require('../assets/images/keynote.jpg')} alt="" />
    </div>
  </div>
  <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
    <div className="lg:col-start-2 lg:pl-8">
      <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
        <p data-aos="zoom-in"  className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Keynote 1</p>
        <p data-aos="zoom-in"  className="text-lg leading-7 text-gray-500 mb-5 font-light mt-3"><span className={"font-medium underline"}>Title:</span> A Practical Framework for Impactful Statistical Machine Learning in Artificial Intelligence</p>
        <p data-aos="zoom-in"  className="text-lg leading-7 text-gray-500 mb-5 font-light mt-3"><span className={"font-medium underline"}>Presenter:</span> Dr Ernest Fokou, School of Mathematical Sciences, Rochester Institute of Technology, Rochester, New York, USA</p>
        <div className="prose text-gray-500">
            <p data-aos="zoom-in"  className={"font-light"}>
            <span className={"font-medium underline"}>Abstract: {" "}</span> Practice without theory is blind. Theory without practice is lame. This old adage clearly implicitly points to the eternal quintessential duality between theory and applications, and definitively a similar pearl of wisdom hints at the duality between inductive and deductive learning, also making it clearly that one cannot be fully understood without this other. In this lecture, I will meticulously traverse the landscape of statistical machine learning in its role/capacity as a servant of artificial intelligence, and I will use what I have codenamed the 7 Wheels of Statistical Machine Learning, to provide a candidate framework that can be adopted in all practical artificial intelligence problem solving, highlighting throughout using a refined taxonomy of research effort, that theory is just as important as application. Indeed, I argue, that in order for an artificial intelligence application to be sound, solid, impactful and lasting, It has to have been created with all the 7 wheels of SML carefully considered.
            </p>
        </div>
        <a data-aos="zoom-in" href={require('../assets/files/keynote1_Fokoue.pdf')} target={"_blank"} rel="noopener noreferrer" className="my-5 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-light rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
        Please click HERE (PDF) for more details
        </a>

        <p data-aos="zoom-in"  className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Keynote 2</p>
        <p data-aos="zoom-in"  className="text-lg leading-7 text-gray-500 mb-5 font-light mt-3"><span className={"font-medium underline"}>Title:</span> On the Ubiquity of the Bayesian Paradigm in Artificial Intelligence and Statistical Machine Learning</p>
        <p data-aos="zoom-in"  className="text-lg leading-7 text-gray-500 mb-5 font-light mt-3"><span className={"font-medium underline"}>Presenter:</span> Dr Ernest Fokou, School of Mathematical Sciences, Rochester Institute of Technology, Rochester, New York, USA</p>
        <div className="prose text-gray-500">
            <p data-aos="zoom-in"  className={"font-light"}>
            <span  className={"font-medium underline"}>Abstract:</span> The Bayesian paradigm directly or indirectly permeates almost every single aspect of the building blocks of statistical machine learning, providing a natural and almost quintessential framework for reasoning about and solving all kinds of artificial intelligence and data science problems. Mindful of this all-pervading influence and natural appeal, this four hour workshop/tutorial aimed at both practitioners and methodologists, will travel the length and breadth of the Bayesian school of thought as pertaining to its use in artificial intelligence, with the finality of highlighting and evidencing its ubiquity, but even more crucially its appealing and compelling usefulness and practicality in applications, computation, methodology and theory. This extended tutorial will unfold at the rhythm of the four aspects of statistical machine learning, namely:
            </p>
       
          <ul>
            <li data-aos="zoom-in" >(A) Applications [1st hour]</li>
            <li data-aos="zoom-in" >(M) Methodology [2nd hour]</li>
            <li data-aos="zoom-in" >(T) Theory [3rd hour]</li>
            <li data-aos="zoom-in" >(C) Computation [4th hour]</li>
          </ul>
        </div>
        <a data-aos="zoom-in" href={require('../assets/files/tutorial1_Fokoue.pdf')} target={"_blank"} rel="noopener noreferrer" className="my-5 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-light rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
        Please click HERE (PDF) for more details
        </a>
      </div>
    </div>
  </div>
</div>



<FooterComponent />
        </Fragment>
    )
}

export default KeynotesComponent