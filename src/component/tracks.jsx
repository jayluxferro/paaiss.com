import React, { Fragment } from 'react'

const data = [
  {
    name: 'Artificial Intelligence (Theory and Framework)',
    tracks: [
      'Advanced ML/DL Algorithms',
      'Distributed ML/DL Architectures',
      'Neural Networks Architectures',
      'Fuzzy Logic and Computational Intelligence',
      'AI-Based Computer Vision and Image Processing',
      'Evolutionary Computing',
      'Swarm Intelligence',
      'Bio-Inspired Computing',
      'Quantum Machine Learning',
      'Data Mining and Knowledge Discovery',
      'Computational Theories of Learning',
      'Neural Language Processing',
      'Distributed Knowledge-Based System',
      'AI-Based Pattern Recognition',
      'Scientific Machine Learning for Data-Intensive Science such as Astrophysics, Computational Biology, Climate Science, and Environmental Science'
    ]
  },
  {
    name: 'Smart Systems Enabling Technologies',
    tracks: [
      'Smart Systems Engineering',
      'Smart Systems Performance Modeling',
      'Affective Computing',
      'Big Data Analytics',
      'Smart Systems Software Stacks',
      'Smart Systems Security Technologies',
      'Intelligent Edge Computing',
      'Intelligent IoT Devices and Sub-Systems',
      'IIoT and Industry 4.0/5.0',
      'AI Hardware Accelerators (TPU, VPU, FPGA etc)',
      'Software-Defined System Framework for Smart Systems',
      'Domain-Specific IoT Framework for Smart Systems',
      'Autonomic Computing for Autonomous Systems',
      'Social Implications of Smart System Technologies',
      'Robotics Systems'
    ]
  },
  {
    name: 'AI Applications in 5G/6G Networks',
    tracks: [
      'Autonomic (Self-Aware) 5G/6G Management Networks',
      'Smart RF Sensors Applications in 5G/6G Networks',
      'Cognitive 5G Networks',
      'Blockchain Security for 5G/6G Networks',
      'AI-Enabled Machine Type Communications in 5G/6G Networks',
      'Intelligent Reconfigurable Smart Surfaces',
      'AI Applications in Visible Light Communications',
      'Embedded ML/DL in 5G/6G Edge Computing'
    ]
  },
  {
    name: 'Applied AI and Smart Systems',
    tracks: [
      'Smart Systems. Examples: Smart Cities, Smart Villages, Smart Agriculture, Smart Forest Management etc.',
      'Smart Bio-metric Systems',
      'Smart Grids and Energy Systems',
      'Smart IoT and Edge Computing',
      'Intelligent Transportation Systems',
      'Smart Personal Network Systems',
      'Smart Schools and Educational Systems',
      'IoT, IToT and Industry 4.0/5.0',
      'Smart Health Systems and Rural Tele-Health Systems'
    ]
  }
]

const Tracks = () => {
  return (
    <Fragment>

      <div className="relative md:bg-white md:p-6">
        <div className="lg:grid lg:grid-cols-4 lg:gap-6 mb-8">
          {
            data.map((k, i) => (
              <div key={i} className="prose text-gray-500 mx-auto lg:max-w-none lg:row-start-0 lg:col-start-0">
                <p data-aos="zoom-in">Track { i + 1 }. { k.name }</p>
                <ul>
                  {
                    k.tracks.map((t, j) => (
                      <li data-aos="zoom-in" className={"font-light"} key={j}>{ t }</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }


          <div  className="prose text-gray-500 mx-auto -ml-1 lg:max-w-none lg:row-start-0 lg:col-start-0">

          </div>

          <div className="prose text-gray-500 mx-auto lg:max-w-none lg:row-start-0 lg:col-start-0">

          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default Tracks
