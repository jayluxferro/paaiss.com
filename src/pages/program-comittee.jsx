import React,{Fragment,useEffect} from 'react';
import HeaderComponent from '../component/header'
import FooterComponent from '../component/footer'
import AOS from 'aos';
import "aos/dist/aos.css"




const data = [
    {name:"Jules-Raymond Tapamo",school:"University of Kwazulu-Natal, South Africa"},
    {name:"Shadrack Maina Mambo",school:"University of Kenyatta, Kenya"},
    {name:"Antoine Bagula",school:"University of Western Cape, South Africa"},
    {name:"Mohammed-Sani Abdulai",school:"Advanced Information Technology Institute, Ghana"},
    {name:"Serestina Viriri",school:"University of Kwazulu-Natal, South Africa"},
    {name:"Shibwabo Benard",school:"University of Strathmore, Kenya"},
    {name:"Ismail Ateya",school:"University of Strathmore, Kenya"},
    {name:"Lawrence Githuari",school:"University of Nairobi, Kenya"},
    {name:"Herve Frackin",school:"University of Havre, France"},
    {name:"Petros Nicopolitidis",school:"Aristotle University of Thessaloniki, Greece"},
    {name:"Lu Wei",school:"Keene State College, USA"},
    {name:"Zeadally Sherali",school:"University of Kentucky, USA"},
    {name:"Luca Caviglione",school:"CNIT, Italy"},
    {name:"Khuram Khalid",school:"Ryerson University, Canada"},
    {name:"Hwang-Cheng Wang",school:"National Ilan University, Taiwan"},
    {name:"Megha Gupta",school:"University of Delhi, India"},
    {name:"Hamed Aly",school:"Acadia University, Canada"},
    {name:"Hamid Mcheick",school:"Université du Québec à Chicoutimi"},
    {name:"Rohit Ranchal",school:"IBM Watson Health Cloud, USA"},
    {name:"ChamseddineTalhi",school:"École de technologie supérieure"},
    {name:"Cui Baojiang",school:"Beijing University of Post and Telecommunications, China"},
    {name:"Vinesh Kumar",school:"University of Delhi, India"},
    {name:"Alagan Anpalagan",school:"Ryerson University, Canada"},
    {name:"Sanjay Kumar Dhurandher",school:"University of Delhi, India"},
    {name:"Andrea Visconti",school:"Milan University, Italy"},
    {name:"Joel Rodrigues",school:"University of Beira Interior, Portugal"},
    {name:"Glaucio Haraldo Da Silva de Carvalho",school:"Sheridan College, Canada"},
    {name:"Zelalem Shibeshi",school:"University of Fort Hare, South Africa"},
    {name:"Chen Ding",school:"Ryerson University, Canada"},
    {name:"Danda B. Rawat",school:"Howard University, USA"},
    {name:"Mehrdad Tirandazian",school:"Ryerson University, Canada"},
    {name:"Ilsun You",school:"Soonchunhyang University, Republic of Korea"},
    {name:"Neeraj Kumar",school:"Thapar Institute of Engineering and Technology, India"},
    {name:"Nitin Gupta",school:"University of Delhi, India"},
    {name:"JuggapongNatwichai",school:"Chiang Mai University, Thailand"},
    {name:"Amir Mohammadi Bagha",school:"Ryerson University"},
    {name:"Marcelo Luis Brocardo",school:"University of Santa Catarina, Brazil"},
    {name:"Ruppa K. Thulasiram",school:"University of Manitoba, Canada"},
    {name:"Alain Richard Ndjiongue",school:"Memorial University of Newfoundland, Canada"},
    {name:"Jules Merlin Mouatcho Moualeu",school:"University of the Witwatersrand, South Africa"},
    {name:"Ahmed Mohamed Ali Ibrahim",school:"Carleton University, Canada"},
    {name:"Olutayo Oyeyemi Oyerinde",school:"University of the Witwatersrand, South Africa"},
    {name:"Narushan Pillay",school:"University of NkwaZulu-Natal, South Africa"},
    {name:"Lilatul Ferdouse",school:"Ryerson University, Canada"},
    {name:"Mkhuseli Ngxande",school:"Stellenbosch University, South Africa"},
    {name:"Ignace Tchangou Toudjeu",school:"Tshwane University of Technology, South Africa"},
    {name:"Glenford Mapp",school:"Middlesex University, UK"},
    {name:"Raphael Angulu", school:"Masinde Mulino University of Science and Technology, Kenya"},
    {name:"Clement Nyirenda", school: "University of Western Cape, South Africa"}
]


const ProgramCommittee = () => {
    useEffect(() => {
        AOS.init({
          once:true,
        duration:1000     
        })
      }, [])
    return (
        <Fragment>
<HeaderComponent menu={"Technical Program Committee"} />

  <div className="bg-white">
    <div className="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 data-aos="zoom-in" className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl text-indigo-600">Technical Program Committee</h2>
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
                      data.map((c, i) => (
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


<FooterComponent />

        </Fragment>
    )
}

export default ProgramCommittee
