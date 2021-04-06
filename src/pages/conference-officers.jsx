import React,{Fragment,useEffect} from 'react';
import HeaderComponent from '../component/header'
import FooterComponent from '../component/footer'
import AOS from 'aos';
import "aos/dist/aos.css"

const chair = [
  {
    category: 'Organizing Committee Chair',
    names: [
      { name: 'Dr. Thomas Ndousse-Fetter', role: 'General Chair', email: 'general-chair@paaiss.com', profile: '' }
    ]
  }
]

const data = [
  {
    category: 'Executive Organizing Committee',
    names: [
      { name: "Dr. Victoria Hasheela-Mufeti", school: "University of Namibia", profile: "vic.jpg"},
      { name: "Dr. Isaac Woungang", school: "Ryerson University, Toronto, Canada", profile: "isaac.jpg"},
      { name: "Dr. Telex Magloire Ngatched", school: "University of Newfoundland, Canada", profile: "telex.jpg"},
      { name: "Dr. Serestina Viriri", school: "University of KwaZulu-Natal, South Africa", profile: "serestina.png"},
      { name: "Dr. Jules-Raymond Tapamo", school: "University of KwaZulu-Natal, South Africa", profile: ""},
      { name: "Dr. James Dzisi Gadze", school: "Kwame Nkrumah University of Science and Technology, Ghana", profile: ""},
    ],
  },
  {
    category: 'Local Organizing Committee',
    names: [
      { name: "Prof. Adolfo Diaz", school: "University of Namibia", profile: ""},
      { name: "Ms. Theodora Mukaya", school: "University of Namibia", profile: ""},
      { name: "Ms. Annastacia Shipepe", school: "University of Namibia", profile: ""},
      { name: "Mr. Justice Owusu Agyemang", school: "Kwame Nkrumah University of Science and Technology, Ghana", profile: "justice.jpg"},
    ]
  }
]

const ConferenceOfficers = () => {
  useEffect(() => {
    AOS.init({
      once:true,
      duration:1000
    })
  }, [])
  return  (
    <Fragment>
      <HeaderComponent menu={"Organizing Committee"} />
    {/*
      {
        chair.map((d, l) => (
        <div className="bg-white" style={{ marginTop: 20 }} key={l}>
          <div className="mx-auto py-12 px-4 max-w-screen-xl text-center sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
                <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                  <h3 data-aos="zoom-in" className="text-3xl leading-9 font-extrabold text-indigo-600 tracking-tight sm:text-4xl">{ d.category }</h3>
                </div>
              <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">       
                {
                  d.names?.map((c, i) => (
                    <li data-aos="zoom-in" className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                      <div className="space-y-6 xl:space-y-10">
                        <img className="mx-auto h-30 w-30 rounded-full xl:w-40 xl:h-40" src={ c?.profile.length ? require(`../assets/images/profile/${c?.profile}`) : require('../assets/images/dp.png') } alt="" />
                        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                          <div className="font-medium text-lg leading-6 space-y-1">
                            <h4 className="text-white">{ c?.name }</h4>
                            <h5 className="text-white">{ c?.role }</h5>
                          </div>

                          <ul className="flex justify-center space-x-5">
                            <li>
                              <a href={`mailto: ${c?.email}`} className="text-gray-400 hover:text-gray-300 transition ease-in-out duration-150">
                                <span className="sr-only">Email</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M16.999,4.975L16.999,4.975C16.999,4.975,16.999,4.975,16.999,4.975c-0.419-0.4-0.979-0.654-1.604-0.654H4.606c-0.584,0-1.104,0.236-1.514,0.593C3.076,4.928,3.05,4.925,3.037,4.943C3.034,4.945,3.035,4.95,3.032,4.953C2.574,5.379,2.276,5.975,2.276,6.649v6.702c0,1.285,1.045,2.329,2.33,2.329h10.79c1.285,0,2.328-1.044,2.328-2.329V6.649C17.724,5.989,17.441,5.399,16.999,4.975z M15.396,5.356c0.098,0,0.183,0.035,0.273,0.055l-5.668,4.735L4.382,5.401c0.075-0.014,0.145-0.045,0.224-0.045H15.396z M16.688,13.351c0,0.712-0.581,1.294-1.293,1.294H4.606c-0.714,0-1.294-0.582-1.294-1.294V6.649c0-0.235,0.081-0.445,0.192-0.636l6.162,5.205c0.096,0.081,0.215,0.122,0.334,0.122c0.118,0,0.235-0.041,0.333-0.12l6.189-5.171c0.099,0.181,0.168,0.38,0.168,0.6V13.351z"/>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        ))
      }
      */}
      {
        data.map((d, l) => (
        <div className="bg-white" style={{ marginTop: 20 }} key={l}>
          <div className="mx-auto py-12 px-4 max-w-screen-xl text-center sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
                <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                  <h3 data-aos="zoom-in" className="text-3xl leading-9 font-extrabold text-indigo-600 tracking-tight sm:text-4xl">{ d.category }</h3>
                </div>
              <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">       
                {
                  d.names?.map((c, i) => (
                    <li data-aos="zoom-in" className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                      <div className="space-y-6 xl:space-y-10">
                        <img className="mx-auto h-30 w-30 rounded-full xl:w-36 xl:h-36" src={ c?.profile.length ? require(`../assets/images/profile/${c?.profile}`) : require('../assets/images/dp.png') } alt="" />
                        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                          <div className="font-medium text-lg leading-6 space-y-1">
                            <h4 className="text-white">{ c?.name }</h4>
                            <h5 className="text-white">{ c?.school }</h5>
                          </div>

                          <ul className="flex justify-center space-x-5">
                            <li>
                              <a href={`mailto: ${c?.email || '#'}`} className="text-gray-400 hover:text-gray-300 transition ease-in-out duration-150">
                                <span className="sr-only">Email</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M16.999,4.975L16.999,4.975C16.999,4.975,16.999,4.975,16.999,4.975c-0.419-0.4-0.979-0.654-1.604-0.654H4.606c-0.584,0-1.104,0.236-1.514,0.593C3.076,4.928,3.05,4.925,3.037,4.943C3.034,4.945,3.035,4.95,3.032,4.953C2.574,5.379,2.276,5.975,2.276,6.649v6.702c0,1.285,1.045,2.329,2.33,2.329h10.79c1.285,0,2.328-1.044,2.328-2.329V6.649C17.724,5.989,17.441,5.399,16.999,4.975z M15.396,5.356c0.098,0,0.183,0.035,0.273,0.055l-5.668,4.735L4.382,5.401c0.075-0.014,0.145-0.045,0.224-0.045H15.396z M16.688,13.351c0,0.712-0.581,1.294-1.293,1.294H4.606c-0.714,0-1.294-0.582-1.294-1.294V6.649c0-0.235,0.081-0.445,0.192-0.636l6.162,5.205c0.096,0.081,0.215,0.122,0.334,0.122c0.118,0,0.235-0.041,0.333-0.12l6.189-5.171c0.099,0.181,0.168,0.38,0.168,0.6V13.351z"/>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        ))
      }
      <FooterComponent />
    </Fragment>
  )
}

export default ConferenceOfficers;
