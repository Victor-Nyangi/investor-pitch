import React from 'react'
import { Link } from 'react-router-dom'
const NotFoundTest = () => {
  return (
    <>
<div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
  <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
    <div className="relative">
      <div className="absolute">
        <div>
          <h1 data-testid="title" className="my-2 text-gray-800 font-bold text-2xl">
            Looks like you've found the
            doorway to the great nothing
          </h1>
          <span title='sum'>17</span>
          <p className="my-8 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
          <Link to="/" className="sm:w-full lg:w-auto my-2 border rounded py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</Link>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="Fine Finance"/>
      </div>
      <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>4</li>

        </ul>
      </div>
    </div>
  </div>
  <div>
    <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="Fine Finance" />
  </div>
</div>

    </>
  )
}

export default NotFoundTest