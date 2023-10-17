import React from 'react'

const MidBlock = () => {
  return (
    <>
<section className="bg-white dark:bg-gray-900">
  <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">We didn't reinvent the wheel</h2>
      <p className="mb-4 text-md text-black">We are financial analysts, designers and developers, innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the financial services you need at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-8">
      <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
      <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
    </div>
  </div>
</section>

<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Powering financial freedom for <span className="font-extrabold">200,000+</span> users worldwide</h2>
      <p className="mb-4 font-light">Track your finances through an open, collaborative platform. Link your accounts and ingest data from other software development tools, so that you have richer contextual information to rapidly respond to financial changes.</p>
      <p className="mb-4 font-medium">We deliver great service experiences fast - without the complexity of traditional money solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
      <a href="!#" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
        Learn more
        <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
      </a>
    </div>
  </div>
</section>


    </>
  )
}

export default MidBlock