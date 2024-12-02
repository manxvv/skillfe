import React from 'react'
import Links from '../Links'

const Company_profile_section = ({ company_links, rating, votes, logo_url }) => {
  return (
    <>
      <div className='my-5'>
        {/* logo section */}
        <img className='w-[clamp(150px,50%,200px)] d-block m-auto rounded-xl' src={logo_url} alt="" />
      </div>
      <div>
        {/* link Section */}
        <Links  facebook={company_links?.facebook} twitter={company_links?.twitter} portfolio={company_links?.portfolio} linkedin={company_links?.linkedin} />
      </div>
      <div>
        {/* rating section */}
        {
          (isNaN(rating)) ?
            (<>
            </>) :
            (<>
              <div className="grid grid-cols-3 my-10">
                <div className='m-auto'>
                  <img className='w-[50px]' src="../../../star_icon.png" alt="" />
                </div>
                <div className="text-2xl my-auto ">
                  {rating}/10
                </div>
                <div className="my-auto">
                  <p className="text-white text-center bg-secLine px-2 py-4 rounded-sm text-sm w-3/4">
                    {votes} Votes
                  </p>
                </div>
              </div>
            </>)
        }
      </div>
    </>
  )
}

export default Company_profile_section
