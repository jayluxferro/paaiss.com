import React,{Fragment,useEffect} from 'react';
import HeaderComponent from '../component/header'
import FooterComponent from '../component/footer'
import Tracks from '../component/tracks'
import AOS from 'aos';
import "aos/dist/aos.css"

const PapersComponent = () => {
  useEffect(() => {
    AOS.init({
      once:true,
      duration:1000
    })
  }, [])
  return (
    <Fragment>
      <HeaderComponent menu={"Call for Papers"} />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto">
            <svg className="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
              <defs>
                <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
              <defs>
                <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg className="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
              <defs>
                <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                <span className="text-indigo-600">Call For Papers</span>
              </h2>
            </div>
          </div>
          <Tracks/>
          <div className="prose prose-lg text-gray-500 mx-auto">
            <h3 data-aos="zoom-in">IMPORTANT DATES</h3>
            <ul>
              <li data-aos="zoom-in" className={"font-light"}>Technical papers submission deadline: <span className={"font-medium"}>June 30, 2021</span></li>
              <li data-aos="zoom-in" className={"font-light"}>Author notification: <span className={"font-medium"}>July 15, 2021</span></li>
              <li data-aos="zoom-in" className={"font-light"}>Final manuscript deadline: <span className={"font-medium"}>July 31, 2021</span></li>
              <li data-aos="zoom-in" className={"font-light"}>Author registration deadline: <span className={"font-medium"}>August 20, 2021</span></li>
            </ul>
            <h3>SUBMISSION OF PAPERS</h3>
            <p data-aos="zoom-in" className={"font-light"}>The submission of papers is through EasyChair system using: <a target={"_blank"} rel="noopener noreferrer" href="https://easychair.org/conferences/?conf=panafricanais2021" className={"font-blue-400 underline"}>https://easychair.org/conferences/?conf=panafricanais2021</a>. As shown in the page that is opened, you must first create an EasyChair account if you do not have one already. The EasyChair system will then email you your password, which you will then use to access the system and finalize your paper submission.</p>
            <p data-aos="zoom-in" className={"font-light"}>Template for paper preparation:<br/>
            <span data-aos="zoom-in" className={"font-bold"}>LaTex: <a target={"_blank"} rel="noopener noreferrer" href="/files/llncs2e.zip" className={"font-blue-400 underline"}> llncs2e.zip</a>.</span><br/>
            <span data-aos="zoom-in" className={"font-bold"}>MS Word: <a target={"_blank"} rel="noopener noreferrer" href="/files/splnproc1703.zip" className={"font-blue-400 underline"}> splnproc1703.zip</a>.</span><br/>
             <span data-aos="zoom-in" className={"font-light"}>The preferred format for submission is LaTex.</span><br/>
            </p>
            
            <h3>REGISTRATION FEES</h3>
            <p data-aos="zoom-in" className={"font-light"}>
              <ol>
                <li>Early registration (one paper): 130 USD</li>
                <li>Early registration (more than one paper): 200 USD</li>
                <li>Early registration non-author: 80 USD</li>
                <li>Late registration (one paper): 150 USD</li>
                <li>Late registration (more than one paper): 220 USD</li>
                <li>Late registration non-author: 100 USD</li>
              </ol>
            </p>
    {/*
            <p data-aos="zoom-in" className={"font-light"}>Papers accepted for the conference will be allocated 12 pages in the proceedings (including references), with the option of purchasing up to 2 extra pages for $50 per page. If you are unwilling or unable to pay the additional charge, you should limit yourself to 12 pages. Otherwise, the page limit is 14 pages.</p>
            */}
            <h3>Conference Proceedings:</h3>
            <p data-aos="zoom-in" className={"font-light"}>Proceedings of the conference will appear in Lecture Notes of the Institute for Computer Sciences, Social-Informatics and Telecommunications Engineering (LNICST) Springer Series, indexed in SCOPUS, ISI Proceedings, MetaPress, SpringerLink, and DBLP (<a href="https://www.springer.com/series/8197" target="_blank">https://www.springer.com/series/8197</a>)</p>

            <h3>Contact:</h3>
            <p data-aos="zoom-in" className={"font-light"}>For any additional query, please contact the conference TPC Co-chairs via email: <a target={"_blank"} rel="noopener noreferrer" href="mailto:general-chair@paaiss.com" className={"font-blue-400 underline"}>general-chair@paaiss.com</a></p>
          </div>
        </div>
      </div>

      <FooterComponent />

    </Fragment>
  )
}

export default PapersComponent
