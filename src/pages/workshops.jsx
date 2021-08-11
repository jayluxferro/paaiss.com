import React,{Fragment,useEffect} from 'react';
import HeaderComponent from '../component/header'
import FooterComponent from '../component/footer'
import AOS from 'aos';
import "aos/dist/aos.css"


const workship_topics = [
  'Emerging trends influenced by AI and smart systems',
  'Smart system Implications on cultures and societies',
  'Ethics in AI and smart Systems',
  'Emerging the smart systems with 5g, 6G, blockchain, and IoT',
  'Mathematics and Statistics in AI',
  'AI for Traditional Medicine',
  'African classics in mathematics, computation, and knowledge representation',
]

const submission_guidelines = [
  'Title of the Tutorial/Workshop and short summary.',
  'Broad scope (e.g. Smart Farming using Sensor Networks).',
  'Name, affiliation and contact (including email and phone) details of the coordinating presenter and all other co-presenters.',
  'The targeted audience and prerequisites.',
  'Tutorial/Workshop duration. Full day tutorials will be seven hours and half day tutorials will be three and a half hours.',
  'Detailed tutorial program, with a list of topics covered.',
  'Technical bibliography (with emphasis on the authors’ works and other related works being covered).',
  'List of tutorial material to be provided to the attendees.',
  'Short biographical sketch of each presenter indicating previous experience in delivering lectures and tutorials, and expertise on the tutorial topic.'
]

const WorkshopsComponent = () => {
    useEffect(() => {
        AOS.init({
          once:true,
        duration:1000     
        })
      }, [])
    return (
        <Fragment>
<HeaderComponent menu={"Call for Workshops"} />



<div className="bg-white overflow-hidden">
  <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
    <div className="mx-auto text-base max-w-prose lg:max-w-none">
      <div className="bg-white-50">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                <span className="text-indigo-600">Call For Workshops</span>
              </h2>
            </div>
      </div>
    </div>
    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
        <svg className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
        </svg>
        <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
          <figure>
            <div className="relative pb-7/12 lg:pb-0">
              <img src={require('../assets/images/workshop.jpg')} alt="" width="1184" height="1376" className="rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto" />
            </div>
            
          </figure>
        </div>
      </div>
      <div>
        
        <div className="prose text-gray-500 mx-auto font-light lg:max-w-none lg:row-start-1 lg:col-start-1">
         <p data-aos="zoom-in">Proposals for mini-workshops to be held in conjunction with the PAN-African Artificial Intelligence and Smart Systems Conference (PA-AISS) at the University of Namibia, o more specifically the day before the main conference or during the evenings. These events will provide authors, panelists, and special guests to present early research results, perspectives, and insights on topics relevant to the conference attendees. Workshops and tutorials are sought in but not limited in the following areas:</p>
          
          <ul>
            {
              workship_topics.map((w, i) => (
                <li data-aos="zoom-in" key={i}>{ w }</li> 
              ))
            } 
          </ul>
          <p data-aos="zoom-in">Each successfully submitted workshop proposal is reviewed closely by the conference organizing committee.  Workshops have a duration of Full day or Half day.</p>
        </div>
        {/*
        <div data-aos="zoom-in" className="inline-flex rounded-md shadow mt-2">
        <a href={require('../assets/files/cfpapers.pdf')} target={"_blank"} rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-light rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
        Please click Call for Workshops and Panels (PDF)
        </a>
        </div>
        */}
      </div>
    </div>
  </div>
</div>

<div className="py-16 xl:py-30 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
  <div className="max-w-max-content lg:max-w-7xl mx-auto">
    <div className="relative z-10 mb-8 md:mb-2 md:px-6">
      <div className="text-base max-w-prose lg:max-w-none">
        <h1 data-aos="zoom-in" className=" text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">SUBMISSION GUIDELINES</h1>

      </div>
    </div>
    <div className="relative">
      <svg className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern id="95e8f2de-6d30-4b7e-8159-f791729db21b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
      </svg>
      <svg className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern id="7a00fe67-0343-4a3c-8e81-c145097a3ce0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
      </svg>
      <div className="relative md:bg-white md:p-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-6 mb-8">
            <div  className="prose text-gray-500 mx-auto lg:max-w-none lg:row-start-0 lg:col-start-0">
            <p data-aos="zoom-in">Mini-Workshop and Tutorial submissions should be formatted as follows:</p>
            <ul>
                {
                  submission_guidelines.map((s, i) => (
                    <li data-aos="zoom-in" className={"font-light"} key={i}>{ s }</li>
                  ))
                } 
            </ul>
            </div>
            
            <div  className="prose text-gray-500 mx-auto -ml-1 lg:max-w-none lg:row-start-0 lg:col-start-0">
            
            </div>
            
            <div className="prose text-gray-500 mx-auto lg:max-w-none lg:row-start-0 lg:col-start-0">
            
            </div>
        </div>
        
      </div>
    </div> 
  </div>
</div>
<div className="py-16 xl:py-30 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
  <div className="max-w-max-content lg:max-w-7xl mx-auto">
    <div className="relative">
      <div className="relative md:bg-white md:p-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-6 mb-8">
            <div  className="prose text-gray-500 mx-auto lg:max-w-none lg:row-start-0 lg:col-start-0">
              <h2 data-aos="zoom-in">IMPORTANT DATES</h2>
              <ul>
                <li data-aos="zoom-in" className={"font-light"}>Technical papers submission deadline: <span className={"font-medium"}>August 17, 2021 (FIRM)</span></li>
                <li data-aos="zoom-in" className={"font-light"}>Author notification: <span className={"font-medium"}>August 20, 2021 (FIRM)</span></li>
                <li data-aos="zoom-in" className={"font-light"}>Final manuscript deadline: <span className={"font-medium"}>August 30, 2021 (FIRM)</span></li>
                <li data-aos="zoom-in" className={"font-light"}>Author registration deadline: <span className={"font-medium"}>September 6, 2021 (FIRM)</span></li>
              </ul>
            <h3>SUBMISSION OF WORKSHOPS</h3>
            <p data-aos="zoom-in" className={"font-light"}>The submission of workshops is through EasyChair system using: <a target={"_blank"} rel="noopener noreferrer" href="https://easychair.org/conferences/?conf=panafricanais2021" className={"font-blue-400 underline"}>https://easychair.org/conferences/?conf=panafricanais2021</a>. As shown in the page that is opened, you must first create an EasyChair account if you do not have one already. The EasyChair system will then email you your password, which you will then use to access the system and finalize your paper submission.</p>
              <h3>Contact:</h3>
              <p data-aos="zoom-in" className={"font-light"}>For any additional query, please contact the conference TPC Co-chair via email: <a target={"_blank"} rel="noopener noreferrer" href="mailto:general-chair@paaiss.com" className={"font-blue-400 underline"}>general-chair@paaiss.com</a></p>
            </div>
            
            <div  className="prose text-gray-500 mx-auto -ml-1 lg:max-w-none lg:row-start-0 lg:col-start-0">
            
            </div>
            
            <div className="prose text-gray-500 mx-auto lg:max-w-none lg:row-start-0 lg:col-start-0">
            
            </div>
        </div>
        
      </div>
    </div> 
  </div>
</div>
<FooterComponent />
        </Fragment>
    )
}

export default WorkshopsComponent
