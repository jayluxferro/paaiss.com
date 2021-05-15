import React from 'react'

const SocialMediaLinks = () => {
  return (
    <div className="mt-8 flex justify-center space-x-6">
      <a href="https://www.facebook.com/PAN-African-Artificial-Intelligence-and-Smart-Systems-Conference-106770094884803" target="_blank" className="text-gray-400 hover:text-gray-500">
        <span className="sr-only">Facebook</span>
        <img src={ require('../assets/images/fb.png') }  style={{ width: 25 }}/>
      </a>
      <a href="http://instagram.com/pan_ai_ss" target="_blank" className="text-gray-400 hover:text-gray-500">
        <span className="sr-only">Instagram</span>
        <img src={ require('../assets/images/ig.png') }  style={{ width: 25 }}/>
      </a>
      <a href="http://twitter.com/pan_ai_ss" target="_blank" className="text-gray-400 hover:text-gray-500">
        <span className="sr-only">Twitter</span>
        <img src={ require('../assets/images/twt.png') }  style={{ width: 25 }}/>
      </a>
    </div>
  )
}

export default SocialMediaLinks
