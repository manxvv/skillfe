import React from 'react'
import Links from '../../components/Links';

const BlogFooter = () => {
    //getting current year
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    //blog Links
    const blog_links = {
        portfolio: "https://www.google.com",
        google: "https://www.google.com",
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        linkedin: "https://www.linkedin.com"
    }
    return (
        <>
            <hr className='my-2 col-span-2' />
            <div className='col-span-2 py-4' >
                <div className="grid grid-cols-2">
                    <div>
                        <p className='font-poppins text-center text-xl' >Amansas Blog © {getCurrentYear()}</p>
                    </div>
                    <div>
                        <Links website="https://www.google.com" facebook="https://www.facebook.com" twitter="https://www.twitter.com" portfolio="https://www.google.com" linkedin="https://www.linkedin.com" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogFooter
