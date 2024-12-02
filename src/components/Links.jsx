import React from 'react'

const Links = ({ classes, website, twitter, linkedin, facebook, portfolio }) => {
    return (
        <div className='mx-2 '>
            <div className={`links flex md:mt-0 mt-2 ` + classes}>
                {/* links */}
                <a
                    href={"https://"+portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 p-1.5 mr-2 rounded-full shadow-md transition duration-200"
                >
                    <img
                        src="../../link_new.png"
                        alt="link"
                        className="w-6 h-6 object-contain text-gray-600 hover:text-gray-800"
                    />
                </a>
                <a
                    href={"https://"+twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 p-1.5 mr-2 rounded-full shadow-md transition duration-200"
                >
                    <img
                        src="../../twitter_new.png"
                        alt="twitter"
                        className="w-6 h-6 object-contain text-gray-600 hover:text-gray-800"
                    />
                </a>
                <a
                    href={"https://"+linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 p-1.5 mr-2 rounded-full shadow-md transition duration-200"
                >
                    <img
                        src="../../linkedin_new.png"
                        alt="linkedin"
                        className="w-6 h-6 object-contain text-gray-600 hover:text-gray-800"
                    />
                </a>
                <a
                    href={"https://"+facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 p-1.5 mr-2 rounded-full shadow-md transition duration-200"
                >
                    <img
                        src="../../facebook_new.png"
                        alt="facebook"
                        className="object-contain text-gray-600 hover:text-gray-800"
                    />
                </a>
                {/* <a
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 p-1.5 mr-2 rounded-full shadow-md transition duration-200"
                >
                    <img
                        src="../../google_PNG.png"
                        alt="google"
                        className="w-6 h-6 object-contain text-gray-600 hover:text-gray-800"
                    />
                </a> */}
            </div>
        </div>
    )
}

export default Links
