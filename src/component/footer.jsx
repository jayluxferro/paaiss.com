/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Fragment} from 'react';
import SocialMediaLinks from './social-media-links'

const FooterComponent = () => {
    return (
        <Fragment>
<footer className="bg-white border-t border-gray-200">
  <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden space-y-8 sm:px-6 lg:px-8">
    <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
      <div className="px-5 py-2">
        {/*
        <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
          Partners
        </a>
        */}
      </div>
    </nav>
    <div className="mt-8 flex justify-center space-x-6">
      <SocialMediaLinks />
    </div>
    <div className="mt-8 text-center text-base font-light leading-6 text-gray-400">
      &copy; 2021 AI Conference. All rights reserved.
    </div>
  </div>
</footer>


        </Fragment>
    )
}

export default FooterComponent;
