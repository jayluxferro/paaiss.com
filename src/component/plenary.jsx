import React, { Fragment } from 'react'

const data = [
  {
    category: 'Plenary Speakers',
    names: [
      { name: "Prof. Ndapa Nakashole", bio: "Prof. Ndapa Nakashole is an Assistant Professor at the University of California, San Diego, where  she teaches and carries out research on Statistical Natural Language Processing. Before that she was postdoctoral scholar at Carnegie Mellon University. She obtained her PhD from Saarland University and  the Max Planck Institute for Informatics, Germany. She completed undergraduate studies in Computer Science at the University of Cape Town, South Africa.", profile: "ndapa.jpg" }, 
    ],
  }
]
const Plenary = ()  => {
  return (
    <Fragment>
      {
        data.map((d, l) => (
        <div className="bg-white" style={{ marginTop: 10 }} key={l}>
          <div className="mx-auto py-12 px-4 max-w-screen-xl text-center sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
                <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                  <h3 data-aos="zoom-in" className="text-3xl leading-9 font-extrabold text-indigo-600 tracking-tight sm:text-4xl">{ d.category }</h3>
                </div>
              <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:grid-cols-2 lg:gap-4">   
                {
                  d.names?.map((c, i) => (
                    <li data-aos="zoom-in" className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left" key={i} style={{ height: 600 }}>
                      <div className="space-y-6 xl:space-y-10">
                        <img className="mx-auto h-40 w-40 rounded-full xl:w-40 xl:h-40" src={ c?.profile.length ? require(`../assets/images/profile/${c?.profile}`) : require('../assets/images/dp.png') } alt="" />
                        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                          <div className="font-medium text-lg leading-6 space-y-1">
                            <h4 className="text-white">{ c?.name }</h4>
                          </div>
                        </div>
                      </div>
                      <hr/>
                      <div className="relative" style={{ marginTop: 20 }}>
                        <div className="lg:absolute lg:inset-0 text-white">
                            <p data-aos="zoom-in"  className="text-lg leading-7 mt-3"><span className={"font-medium underline"}>Bio:</span> { c?.bio }</p>
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
    </Fragment>
  )
}

export default Plenary
