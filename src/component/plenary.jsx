import React, { Fragment } from 'react'

const data = [
  {
    category: 'Plenary Speakers',
    names: [
      { name: "Prof. Attahiru S. Alfa", bio: "Attahiru S. Alfa is Professor Emeritus at the University of Manitoba, Department of Electrical and Computer Engineering and Extraordinary Professor at the University of Pretoria, Department of Electrical, Electronic and Computer Engineering. Dr. Alfa’s most recent research focus covers age of information, wireless sensor networks, cognitive radio networks, network restoration tools for wireless sensor networks, and the role of 5G on IoT, with specific interest in the mathematical modeling of those systems. His general research covers, but not limited to, the following areas: queueing theory and applications, optimization, performance analysis and resource allocation in telecommunication systems, modeling of communication networks, analysis of cognitive radio networks, modeling and analysis of wireless sensor networks, and smart cities.", profile: "alfa.png", more: true, document: 'alfa_bio', height: 950 },
      { name: "Prof. Ndapa Nakashole", title: 'Artificial Intelligence for Africa by Africans: Opportunities and Challenges', abstract: 'In many parts of the world, AI is transforming entire industries from manufacturing, to healthcare, and transportation. In this talk we survey the opportunities and challenges posed by AI, and present some thoughts on how Africa can leverage this technology to create economic value.', bio: "Prof. Ndapa Nakashole is an Assistant Professor at the University of California, San Diego, where  she teaches and carries out research on Statistical Natural Language Processing. Before that she was postdoctoral scholar at Carnegie Mellon University. She obtained her PhD from Saarland University and  the Max Planck Institute for Informatics, Germany. She completed undergraduate studies in Computer Science at the University of Cape Town, South Africa.", profile: "ndapa.jpg", more: false, height: 950 }, 
      { name: "Prof. Ernest Fokoue", bio: "Prof. Ernest Fokoue is a Professor in the School of Mathematical Sciences at Rochester Institute of Technology. He earned his PhD in Statistics at the University of Glasgow in the United Kingdom. He was postdoctoral research fellow at the Statistical and Applied Mathematical Sciences Institute (SAMSI). Prior to joining Rochester Institute of Technology, he held faculty positions at The Ohio State University and Kettering University. He is co-author of the Springer graduate textbook “Principles and Theory for Data Mining and Machine Learning”, and has been intensively and extensively involved in the interface between statistical science and artificial intelligence. He is a strong advocate of a complete approach to statistical machine learning and data science comprising a non-degenerate coverage of applications, computation, methodology and theory (ACMT), the staple of his research and teaching. A passionate lover of mathematical sciences from his earliest childhood, he often summarizes his philosophy as follows: 'while the letter of mathematics provides great delight to the seeker/researcher/practitioner, the spirit of this mother of all disciplines bestows experiences of a transcendental, nay ineffable nature. Therefore, seek the latter not the former.'", profile: "fokoue.png", more: true, document: "fokoue_bio", height: 1150 }, 
      { name: "Prof. Telex M. N. Ngatched", bio: "Prof. Telex M. N. Ngatched received the B.Sc. degree and the M.Sc. degree in electronics from the University of Yaoundé, Cameroon, the MscEng (Cum Laude) in electronic engineering from the University of Natal, South Africa, and the Ph.D. in electronic engineering from the University of KwaZulu-Natal, South Africa. He was a Postdoctoral Fellow and Research Associate with the University of KwaZulu-Natal and the University of Manitoba, respectively. He joined Memorial University in August 2012, where he is currently an Associate Professor and Coordinator of the Engineering One program at the Grenfell Campus. His research interests include 5G and 6G enabling technologies, optical wireless communications, hybrid optical wireless and radio frequency communications, artificial intelligence and machine learning for communications, and underwater communications.", profile: "telex.jpg", more: true, document: "telex_bio", height: 1150 }, 
    ],
  }
]

const loadMore = (c) => {
  if(c.more){
    return (
        <a data-aos="zoom-in" href={require(`../assets/files/${c?.document}.pdf`)} target={"_blank"} rel="noopener noreferrer" className="my-5 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-light rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          Please click HERE for more details.
        </a>
    )
  }
  return (
    <div></div>
  )
}


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
                    <li data-aos="zoom-in" className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left" key={i} style={{ height: c?.height }}>
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
                            <p data-aos="zoom-in"  className="text-lg leading-7 mt-3"><span className={"font-medium underline"}>Title of Presentation:</span> { c?.title }</p>
                            <p data-aos="zoom-in"  className="text-lg leading-7 mt-3"><span className={"font-medium underline"}>Abstract of Presentation:</span> { c?.abstract }</p>
                            <p data-aos="zoom-in"  className="text-lg leading-7 mt-3"><span className={"font-medium underline"}>Bio:</span> { c?.bio }</p>
                          {
                            loadMore(c)
                          }
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
