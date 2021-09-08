import React,{Fragment,useEffect} from 'react';
import HeaderComponent from '../component/header'
import FooterComponent from '../component/footer'
import AOS from 'aos';
import "aos/dist/aos.css"




const data = [
  { 
    category: 'Day 1: Thursday October 7 (Namibian Time UTC+2)',
    prog: [
      { time: '10:00 – 10:30', event: 'Welcome Message' },
      { time: '10:35 – 10:50', event: 'History of the Conference<br/> <b>Dr Thomas Ndousse</b>' },
      { time: '11:00 – 12:00', event: 'Keynote Address<br/><br/> The Important Role of Operations Research (OR) Tools in the Success of AI and Smart Systems<br/><br/> <b>Prof. Attahiru S. Alfa</b><br/> Professor Emeritus in the Department of Electrical and Computer Engineering , University of Manitoba, Manitoba, Canada and Extraordinary Professor in the Department of Electrical, Electronic and Computer Engineering, University of Pretoria, South Africa'},
      { time: '12:00 – 12:20', event: '<b>Break</b>' },
      { time: '', event: '<b>Section 1 : Deep Learning</b>' },
      { time: '12:20 – 12:40', event: 'A Critical Analysis of Deep Learning Architectures For Classifying Breast Cancer Using Histopathology Images<br/><em>Yusuf Seedat and Dustin Van Der Haar</em>' },
      { time: '12:40 – 13:00', event: 'A Patch-based Convolutional Neural Network for Localized MRI Brain Segmentation<br/> <em>Trevor Vambe, Serestina Viriri and Mandlenkosi Gwetu</em>' },
      { time: '13:00 – 13:20', event: 'Copy-Move and Splicing Forgeries in Digital Images using Deep Learning<br/><em>Brice Mboule Ebele, Hippolyte Tapamo Kenfack, Serge Essuthi, Oscar Eone Etoua and Amos Mbietieu Mbietieu</em>' },
      { time: '13:20 – 13:40', event: 'Facial Recognition through Localized Siamese Convolutional Neural Networks<br/><em>Leenane Makurumure and Mandlenkosi Gwetu</em>' },
      { time: '13:40 – 14:40', event: '<b>Lunch Break</b>' },
      { time: '14:40 – 15:40', event: 'Keynote Address<br/><br/> Artificial Intelligence for Language Technologies<br/><br/><b>Prof. Ndapa Nakashole</b><br/>Assistant Professor at the University of California, San Diego, USA' },
      { time: '15:40 – 16:00', event: '<b>Break</b>' },
      { time: '', event: '<b>Section 2 : Classification and Pattern Recognition I</b>' },
      { time: '16:00 – 16:20', event: 'Face Recognition In Databases of images With Hidden Markov’s Models<br/> <em>Amos Mbietieu Mbietieu, Hippolyte Tapamo Kenfack, Oscar Eone Etoua, Serge Essuthi Essoh and Brice Mboule Ebele</em>' },
      { time: '16:20 – 16:40', event: 'Auto-encoders for Brain MRI Segmentation<br/> <em>Kishan Jackpersad and Mandlenkosi Gwetu</em>' },
      { time: '16:40 – 17:00', event: 'Effective Feature Selection for Improved Prediction of Heart Disease<br/> <em>Ibomoiye Domor Mienye and Yanxia Sun</em>' },
      { time: '17:00 – 17:20', event: 'Convolutional Neural Network Feature Extraction for EEG Signal Classification<br/><em>Liresh Kaulasar and Mandlenkosi Gwetu</em>' },
    ]
  },
]


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
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {
                              p.prog.map((c, i) => (
                                <tr key={i} style={{ padding: 0, margin: 0 }}>
                                  <td className="text-left px-2 py-2 whitespace-nowrap text-gray-600" style={{ width: '20%' }}>{ c?.time || '' }</td>
                                  <td className="text-left px-2 py-2 whitespace-nowrap text-gray-600"><span dangerouslySetInnerHTML={{__html: c?.event || '' }} /></td>
                                </tr>
                              ))
                            }
                          </tbody>
                        </table>
                      </div>
                      ))
                      }
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
