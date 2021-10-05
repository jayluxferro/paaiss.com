import React,{Fragment,useEffect} from 'react';
import HeaderComponent from '../component/header'
import FooterComponent from '../component/footer'
import AOS from 'aos';
import "aos/dist/aos.css"




const data = [
  { 
    category: 'Day 1: Thursday October 7 (Namibian Time)',
    prog: [
      { time: '14:00 – 10:30', event: 'Welcome Message<br/> <b>Prof. Anicia Peters</b><br/><br/> PVC: Research, Innovation and Development, University of Namibia, Namibia', link: 'https://ryerson.zoom.us/j/99856827321?pwd=UVFES0ZOTXE2ejlXL1BOZzVNS3paUT09' },
      { time: '14:35 – 14:50', event: 'History of the Conference<br/> <b>Dr Thomas Ndousse</b>' },
      { time: '15:00 – 16:00', event: 'Keynote Address<br/><br/> The Important Role of Operations Research (OR) Tools in the Success of AI and Smart Systems<br/><br/> <b>Prof. Attahiru S. Alfa</b><br/> Professor Emeritus in the Department of Electrical and Computer Engineering , University of Manitoba, Manitoba, Canada and Extraordinary Professor in the Department of Electrical, Electronic and Computer Engineering, University of Pretoria, South Africa'},
      { time: '16:00 – 16:20', event: '<b>Break</b>' },
      { time: '', event: '<b>Section 1 : Deep Learning</b>&nbsp;&nbsp; - Sesssion Chair: <b>Telex M. N. Ngatched</b>' },
      { time: '16:20 – 16:40', event: 'A Critical Analysis of Deep Learning Architectures For Classifying Breast Cancer Using Histopathology Images<br/><em>Yusuf Seedat and Dustin Van Der Haar</em>' },
      { time: '16:40 – 17:00', event: 'A Patch-based Convolutional Neural Network for Localized MRI Brain Segmentation<br/> <em>Trevor Vambe, Serestina Viriri and Mandlenkosi Gwetu</em>' },
      { time: '17:00 – 17:20', event: 'Copy-Move and Splicing Forgeries in Digital Images using Deep Learning<br/><em>Brice Mboule Ebele, Hippolyte Tapamo Kenfack, Serge Essuthi, Oscar Eone Etoua and Amos Mbietieu Mbietieu</em>' },
      { time: '17:20 – 17:40', event: 'Facial Recognition through Localized Siamese Convolutional Neural Networks<br/><em>Leenane Makurumure and Mandlenkosi Gwetu</em>' },
      { time: '17:40 – 18:40', event: '<b>Lunch Break</b>' },
      { time: '18:40 – 19:40', event: 'Keynote Address<br/><br/> Artificial Intelligence for Language Technologies<br/><br/><b>Prof. Ndapa Nakashole</b><br/>Assistant Professor at the University of California, San Diego, USA', link: 'https://ryerson.zoom.us/j/91802029702?pwd=SnhYMFIrQ0sxWlREOGxGQTc4cUgrdz09' },
      { time: '19:40 – 20:00', event: '<b>Break</b>' },
      { time: '', event: '<b>Section 2 : Classification and Pattern Recognition I</b>&nbsp;&nbsp; - Session Chair: <b>Jules R. Tapamo</b>' },
      { time: '20:00 – 20:20', event: 'Face Recognition In Databases of images With Hidden Markov’s Models<br/> <em>Amos Mbietieu Mbietieu, Hippolyte Tapamo Kenfack, Oscar Eone Etoua, Serge Essuthi Essoh and Brice Mboule Ebele</em>' },
      { time: '20:20 – 20:40', event: 'Auto-encoders for Brain MRI Segmentation<br/> <em>Kishan Jackpersad and Mandlenkosi Gwetu</em>' },
      { time: '20:40 – 21:00', event: 'Effective Feature Selection for Improved Prediction of Heart Disease<br/> <em>Ibomoiye Domor Mienye and Yanxia Sun</em>' },
      { time: '21:00 – 21:20', event: 'Convolutional Neural Network Feature Extraction for EEG Signal Classification<br/><em>Liresh Kaulasar and Mandlenkosi Gwetu</em>' },
    ]
  },
  {
    category: 'Day 2: Friday October 8 (Namibian Time)',
    prog: [
      { time: '14:00 – 15:00', event: 'Keynote Address<br/><br/> A Practical Framework for Impactful Statistical Machine Learning in Artificial Intelligence<br/><br/> <b>Prof. Ernest Fokoue</b><br>Professor at School of Mathematical Sciences, Rochester Institute of Technology, Rochester, New York, USA' },
      { time: '15:00 – 15:20', event: '<b>Break</b>' },
      { time: '', event: '<b>Section 3 : Neural Networks and Support Vector Machines</b>&nbsp;&nbsp; - Session Chair: <b>Isaac Woungang</b>' },
      { time: '15:20 – 15:40', event: 'Hybridized Loss Functions for Improved Neural Network Generalization<br/><em>Matthew Dickson, Anna Bosman and Katherine Malan</em>' },
      { time: '15:40 – 16:00', event: 'Diverging Hybrid and Deep Learning Models into Predicting Students’ Performance in Smart Learning Environments – A Review<br/><em>Elliot Mbunge, Stephen Fashoto, Racheal Mafumbate and Sanelisiwe Nxumalo</em>' },
      { time: '16:00 – 16:20', event: 'Combining Multi-Layer Perceptron and Local Binary Patterns for Thermite Weld Defects Classification<br/><em>Mohale Molefe and Jules-Raymond Tapamo</em>' },
      { time: '16:20 – 16:40', event: 'Classification of Semantic Web Ontologies with Support Vector Machines<br/><em>Gideon Koech, Jean Vincent Fonou Dombeu and Mandlenkosi Gwetu</em>' },
      { time: '16:40 – 17:00', event: '<b>Break</b>' },
      { time: '', event: '<b>Section 4 : Smart Systems</b>' },
      { time: '17:00 - 17:20', event: 'An Elliptic Curve Based Biometric User Authentication Protocol for Smart Homes Using Smartphone<br/><em>Amir Mohammadi Bagha, Isaac Woungang, Sanjay K. Dhurandher and Issa Traore</em>' },
      { time: '17:20 – 17:40', event: 'Efficient Sub-channel and Power Allocation in Multi-cell Indoor VLC Systems<br/><em>Sylvester Aboagye, Telex M. N. Ngatched and Octavia A. Dobre</em>' },
      { time: '17:40 – 18:00', event: 'Autonomic IoT: Towards Smart System Components with Cognitive IoT<br/><em>Justice Owusu Agyemang, Dantong Yu and Jerry John Kponyo</em>' },
      { time: '18:00 – 18:20', event: 'Study of customer sentiment towards smart lockers<br/><em>Colette Malyack, Cheickna Sylla and Pius Egbelu</em>' },
      { time: '18:20 – 18:50', event: '<b>Lunch Break</b>' },
      { time: '18:50 – 19:50', event: 'Keynote Address<br/><br/>Applications of Artificial Intelligence in Next-Generations Wireless Communications<br/><br/><b>Prof. Telex M. N. Ngatched</b><br/>Associate Professor in the School of Science and the Environment , Memorial University of Newfoundland, Canada' },
      { time: '19:50 – 20:10', event: '<b>Break</b>' },
      { time: '', event: '<b>Section 5 : Classification and Pattern Recognition II</b>&nbsp;&nbsp; - Session Chair: <b>Serestina Viriri</b>' },
      { time: '20:10 – 20:30', event: 'Race recognition using enhanced local binary pattern<br/><em>Hippolyte Tapamo Kenfack, Brice Mboule Ebele, Amos Mbietieu Mbietieu and Serge Essuthi Essoh</em>' },
      { time: '20:30 – 20:50', event: 'Detection and Classification of Coffee Plant Diseases by Image Processing and Machine Learning<br/><em>Serge Essuthi Essoh, Hippolyte Tapamo Kenfack, Brice Mboule Ebele, Amos Mbietieu Mbietieu and Oscar Eone Etoua</em>' },
      { time: '20:50 – 21:10', event: 'Plant Diseases Detection and Classification using Transfer Learning<br/><em>Emma Genders and Serestina Viriri</em>' },
    ]
  },
  {
    category: 'Day 3: Saturday October 9 (Namibian Time)',
    prog: [
      { time: '14:00 – 18:00', event: 'Tutorial<br/><br/>On the Ubiquity of the Bayesian Paradigm in Artificial Intelligence and Statistical Machine Learning<br/><br/><b>Prof. Ernest Fokoue</b><br/>Professor at School of Mathematical Sciences, Rochester Institute of Technology, Rochester, New York, USA' },
      { time: '18:00 – 18:20', event: '<b>Break</b>' },
      { time: '18:20 – 20:00', event: '<b>Concluding Remarks</b>' },
    ]
  }
]

const showZoomLink = (data) => {
  if(data.link){
    return (
      <a data-aos="zoom-in" href={data.link} target={"_blank"} rel="noopener noreferrer" className="my-5 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-light rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
        Join
      </a>
    )
  }
  return <span></span>
}

const ConferenceProgramme = () => {
    useEffect(() => {
        AOS.init({
          once:true,
        duration:1000     
        })
      }, [])

    return (
        <Fragment>
          <HeaderComponent menu={"Conference Programme"} />

          <div className="bg-white">
            <div className="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
              <div className="space-y-8 sm:space-y-12">
                <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">

                </div>
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      {
                      data.map((p, i) => ( 
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" style={{ marginBottom: 50 }}>
                        <h3 data-aos="zoom-in" className="text-2xl leading-9 font-extrabold tracking-tight sm:text-2xl text-indigo-600">{p?.category}</h3>
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-bold-500 uppercase tracking-wider">
                                Time
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-bold-500 uppercase tracking-wider">
                                Event
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-bold-500 uppercase tracking-wider">
                                Zoom Link
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {
                              p.prog.map((c, i) => (
                                <tr key={i} style={{ padding: 0, margin: 0 }}>
                                  <td className="text-left px-2 py-2 whitespace-nowrap text-gray-600" style={{ width: '20%' }}>{ c?.time !== '' ? c?.time + ' (GMT+2)' : '' } </td>
                                  <td className="text-left px-2 py-2 whitespace-nowrap text-gray-600"><span dangerouslySetInnerHTML={{__html: c?.event || '' }} /></td>
                                  <td className="text-left px-2 py-2 whitespace-nowrap text-gray-600">
                                    { showZoomLink(c) }
                                  </td>
                                </tr>
                              ))
                            }
                          </tbody>
                        </table>
                      </div>
                      ))
                      }
                    </div>
                    
                    {/* download programme */}
                    <div>
                      <a data-aos="zoom-in" href={require(`../assets/files/conference-programme.pdf`)} target={"_blank"} rel="noopener noreferrer" className="my-5 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-light rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                        Download Conference Programme
                      </a>
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

export default ConferenceProgramme
