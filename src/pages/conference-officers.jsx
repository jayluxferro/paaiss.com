import React,{Fragment,useEffect} from 'react';
import HeaderComponent from '../component/header'
import FooterComponent from '../component/footer'
import AOS from 'aos';
import "aos/dist/aos.css"

const chair = [
  { 
    category: 'Organizing Committee Chair',
    names: [
      { name: 'Dr. Thomas Ndousse-Fetter', role: 'General Chair', email: 'general-chair@paaiss.com' }
    ]
  }
]

const data = [ 
  {
    category: 'Executive Organizing Committee', 
    names: [
      { name: "Dr. Victoria Hasheela-Mufeti", school: "University of Namibia"},
      { name: "Dr. Isaac Woungang", school: "Ryerson University, Toronto, Canada"},
      { name: "Dr. Telex Magloire Ngatched", school: "University of Newfoundland, Canada"},
      { name: "Dr. Serestina Viriri", school: "University of KwaZulu-Natal, South Africa"},
      { name: "Dr. Jules-Raymond Tapamo", school: "University of KwaZulu-Natal, South Africa"},
      { name: "Dr. James Dzisi Gadze", school: "Kwame Nkrumah University of Science and Technology, Ghana"},
    ],
  },
  {
    category: 'Local Organizing Committee',
    names: [
      { name: "Prof. Adolfo Diaz", school: "University of Namibia"},
      { name: "Ms. Theodora Mukaya", school: "University of Namibia"},
      { name: "Ms. Annastacia Shipepe", school: "University of Namibia"},
      { name: "Mr. Justice Owusu Agyemang", school: "Kwame Nkrumah University of Science and Technology, Ghana"},
      { name: "Mr. Michael Soli", school: "University of Ghana" }
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
{
  chair.map((d, l) => (
  <div className="bg-white" key={l}>
      <div className="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 data-aos="zoom-in" className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl text-indigo-600">{ d.category }</h2>
          </div>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {
                        d.names?.map((c, i) => (
                          <tr key={i} style={{ padding: 0, margin: 0 }}>
                            <td className="text-left px-2 py-2 whitespace-nowrap" style={{ width: '30%' }}>{ c?.name || 'Not Specified' }</td>
                            <td className="text-left px-2 py-2 whitespace-nowrap">{ c?.role || 'Not Specified' }</td>
                            <td className="text-left px-2 py-2 whitespace-nowrap"><a href={ `mailto:${c?.email}` || '#' }>{c?.email}</a></td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  ))
          }
{
  data.map((d, l) => (
  <div className="bg-white" key={l}>
      <div className="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 data-aos="zoom-in" className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl text-indigo-600">{ d.category }</h2>
          </div>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          University
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {
                        d.names?.map((c, i) => (
                          <tr key={i} style={{ padding: 0, margin: 0 }}>
                            <td className="text-left px-2 py-2 whitespace-nowrap" style={{ width: '30%' }}>{ c?.name || 'Not Specified' }</td>
                            <td className="text-left px-2 py-2 whitespace-nowrap">{ c?.school || 'Not Specified' }</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
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
