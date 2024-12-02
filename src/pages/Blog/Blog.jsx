import React, { useEffect } from 'react'
import Company_people_connected from '../../components/company_details/Company_people_connected'
import CommonForm from '../../components/CommonForm'
import Button from '../../components/Button'
import { useForm } from 'react-hook-form'
import BlogFooter from '../BlogFooter/BlogFooter'

import { useDispatch, useSelector } from 'react-redux'
import { baseUrl } from '../../utils/url'

import AuthActions from '../../store/actions/auth-actions'


const Blog = () => {
    //Getting data from the API
    const dispatch = useDispatch();
    const blog_details = useSelector((state) => state?.auth?.users_blog)
    console.log("sfsadasdfasgdsdff", blog_details);
    const blog_data = blog_details?.dataAll || 5;
    console.log("blosfsdfewveorg", blog_data);
    const reqBlogData = blog_data[blog_data.length - 1];
    console.log("blogasasdfsettwe", reqBlogData);
    //form implementation section
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        getValues,
        formState: { errors },
    } = useForm()
    let Form = [
        { name: "emailSub", value: "emailSub", type: "email", props: "", required: true, placeholder: "youremail@example.com" },
    ]
    const onTableViewSubmit = (data) => {
        // console.log(data, "sdfsdsffsdsf")
        // data["uid"] = uid
        // dispatch(AuthActions.businessRegister(data, () => {
        //     navigate("/kycregister/" + uid)
        //     //navigate("/kycregister")
        // }))
    }

    //Data For the blog section
    let people_seen = [
        {
            employeeName: "eric manlunas",
            email: "eric@wavemaker.vc"
        },
        {
            employeeName: "eric manlunas",
            email: "eric@wavemaker.vc"
        },
        {
            employeeName: "eric manlunas",
            email: "eric@wavemaker.vc"
        },
        {
            employeeName: "eric manlunas",
            email: "eric@wavemaker.vc"
        },
        {
            employeeName: "eric manlunas",
            email: "eric@wavemaker.vc"
        },
        {
            employeeName: "eric manlunas",
            email: "eric@wavemaker.vc"
        }
    ]
    const getDate = (str) => {
        //getting posted date
        const dateString = str;
        // Parse the string into a Date object
        const date = new Date(dateString);
        // Get the day, month, and year
        const day = date.getDate();
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        // Format the date as "DD Mon YYYY"
        const formattedDate = `${day.toString().padStart(2, '0')} ${month} ${year}`;
        return formattedDate;
    }


    //modifin the image url
    const blogImagePath = reqBlogData?.blogImage?.replace(/\\/g, "/");

    const blogData = {
        blogImageURL: baseUrl + "/" + blogImagePath,
        // blogImageURL: "../../../blog.jpg",
        blogHeading: reqBlogData?.blogHeading,
        // blogHeading: "Lorem ipsum dolor sit amet Lorem, ipsum dolor.",

        shortDescription: reqBlogData?.headingDescription,
        // shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minima asperiores numquam aut vel aliquam alias dolorem impedit in expedita.",
        blogPostDate: getDate(reqBlogData?.date),
        blogDesc: [
            {
                heading: reqBlogData?.subHeading,
                // heading: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                desc: reqBlogData?.subHeadingDescription,
                // desc: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit a amet sed! Laudantium, eum ab! Iste, placeat earum? Aspernatur ad repellat minima quia odio distinctio provident debitis qui? Cum pariatur est quod omnis ratione id rem error, iste ut, ad nemo a. Quibusdam quas alias, fugit eligendi provident dolore a distinctio saepe, obcaecati, repellendus voluptate maiores? In quos non ad, odit incidunt cupiditate autem numquam consequuntur eum itaque quas? Culpa in sapiente explicabo qui enim cumque molestiae veritatis, harum odit molestias, ex animi assumenda! Cum quidem magnam maiores ex commodi distinctio placeat, deserunt provident iure beatae quae. Repellat, ipsa iste.,

            },
            {
                heading: "Lorem ipsum dolor sit amet. 2",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium saepe dolores doloremque repellendus blanditiis aperiam hic laudantium voluptatibus. Quas numquam eos labore rem praesentium. Dolorem eos tempore blanditiis illum ad at quidem nisi nulla ipsa illo! Culpa facilis qui temporibus explicabo ab, iure modi sapiente a praesentium consequatur aperiam quibusdam repellendus, dolor delectus dignissimos optio? Eum unde eaque iste, recusandae, aut suscipit nobis ipsam veniam, ut odio provident? Aperiam, et reprehenderit error optio fugiat esse magnam, at nisi enim accusamus natus facilis, temporibus ut dolores mollitia deserunt iure eos. Debitis asperiores laborum necessitatibus, ullam molestiae sit vitae consectetur incidunt provident. Vel id itaque blanditiis neque dolor perspiciatis tenetur provident beatae quam aspernatur qui tempora consequatur natus labore dolore quaerat, recusandae harum at assumenda quos? Consequatur quidem amet numquam, impedit eligendi dignissimos soluta officia maiores autem dolore aliquam ullam excepturi et quos omnis in! Aliquid veritatis a ratione dolor? Atque modi voluptates sapiente consequuntur provident nam animi deleniti cupiditate temporibus reprehenderit. Eum ipsum, numquam corrupti a nam obcaecati. Id placeat, expedita eaque ducimus ipsa accusamus, doloribus omnis dolor repellat ipsam blanditiis aliquid veniam quia! Quidem ipsa obcaecati quas iusto aut? Fuga, natus dignissimos. Dolore corrupti est nisi. Ea officiis repudiandae soluta.",
            }
        ],
        youtubeVideoLink: reqBlogData?.youtubeLink,
        // youtubeVideoLink: "https://www.youtube.com/embed/h3pVro9c0ko?si=CkbDocGUlZrU8T5z",
        youtubeVideoDesc: reqBlogData?.youtubeVideoDescription,
        // youtubeVideoDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad enim, officiis tempora facilis rem odio dignissimos a quae, reiciendis, neque incidunt cupiditate asperiores? Minima blanditiis, similique nesciunt odio error maiores facilis voluptas fugit ab minus, consectetur quae, qui atque perspiciatis ratione veniam! Repellendus, dolores. Nemo sapiente reprehenderit officiis, iure quod in! Culpa quisquam, nostrum, architecto molestiae tempore, assumenda quaerat et consequatur nobis enim nesciunt impedit vel. Pariatur enim fuga aliquam cum reprehenderit alias vero iste aliquid quidem cumque, odit, a et fugit quae sit excepturi nostrum odio, asperiores officiis culpa facere voluptatum cupiditate. Ipsa qui quasi reprehenderit temporibus debitis.",
        relatedBlogImage: baseUrl + "/" + blogImagePath,
        // relatedBlogImage: "../../../blog.jpg",
        relatedBlog: blog_data,
        // relatedBlog: [
        //     {
        //         blogHeading: "How To Become Your Own ‘Chief Storytelling Officer 1’",
        //         headingDescription: "Lorem ipsum dolor sit amet.",
        //         postedDate: "01/03/2024",
        //     },
        //     {
        //         heading: "How To Become Your Own ‘Chief Storytelling Officer 2’",
        //         desc: "Lorem ipsum dolor sit amet.",
        //         postedDate: "02/03/2024",
        //     },
        //     {
        //         heading: "How To Become Your Own ‘Chief Storytelling Officer 3’",
        //         desc: "Lorem ipsum dolor sit amet.",
        //         postedDate: "03/03/2024",
        //     },
        // ]

    }
    useEffect(() => {
        dispatch(AuthActions.getblogs())
    }, [])
    console.log("asdfasddssddfasdasdf",blogData?.blogImageURL);

    //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })
    return (
        <div className={`${!mode ? "  ": ""} `}>
        
            {reqBlogData && (
                <div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 px-4 sm:px-12 md:px-24 lg:px-40 font-poppins">
                        <div className='my-auto'>
                            <div>
                                <img className='w-5/6 d-block text-center mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-0 ms-4 sm:ms-6 md:ms-8 rounded-2xl transition-all duration-500 hover:scale-110' src={blogData?.blogImageURL} alt="" />
                            </div>
                        </div>
                        <div className='pe-4 pt-4 md:pe-10 md:pt-16'>
                            {/* blog heading */}
                            <div>
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-secLine p-2 sm:p-3 md:p-4 font-poppins font-semibold ">
                                    {blogData?.blogHeading}
                                </h1>
                            </div>
                            {/* blog short descritpion */}
                            <div>
                                <p className="text-justify text-sm sm:text-sm md:text-md lg:text-lg text-gray-600 p-2 sm:p-3 md:p-4 font-poppins dark:text-white">
                                    {blogData?.shortDescription}
                                </p>
                                <p className='text-xs px-4 pb-2'>Posted: {blogData?.blogPostDate}</p>
                            </div>
                            <hr className='py-2' />
                            {/* people read the blog */}
                            <Company_people_connected connected_people={people_seen} people_type={"People read"} />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 px-4 sm:px-12 md:px-24 lg:px-40">
                        <div className='col-span-2 '>
                            {
                                blogData?.blogDesc?.map(item => (
                                    <>
                                        <h1 className="text-lg sm:text-xl md:text-2xl py-4 text-secLine">{item?.heading}</h1>
                                        <p className=" text-md md:text-lg font-poppins text-justify">
                                            {item?.desc}
                                        </p>
                                    </>
                                ))
                            }
                            <hr className='my-8' />
                            {/* Youtube section */}
                            <div className='py-4'>
                                <iframe className='w-full h-[40vh] sm:h-[60vh] md:h-[80vh] rounded-xl' src={blogData?.youtubeVideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                {/* youtube description */}
                                <div className='border border-gray-300 rounded-md p-2 sm:p-6 md:p-8 my-4 shadow-md'>
                                    <p className='font-poppins text-justify text-md md:text-lg italic px-4 sm:px-8 md:px-12 lg:px-24'>
                                        {blogData?.youtubeVideoDesc}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* subscribe section */}
                        <div className="col-span-2 ">
                            <div className='border border-gray-100 rounded-sm px-4 py-4 sm:px-16 sm:py-12 md:px-24 md:py-16'>
                                <p className='font-poppins text-xl sm:text-2xl lg:text-3xl p-2 text-center text-secLine font-semibold'>Subscribe to Amansas Blog</p>
                                <p className='font-poppins text-lg sm:text-xl lg:text-2xl text-center'>Get the latest posts delivered right to your inbox</p>
                                <div className='flex justify-center pt-4 flex-wrap'>
                                    <CommonForm classes={"w-full md:w-1/2"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} />
                                    <Button classes={"w-1/10 h-1/2 mt-2 md:mt-5"} onClick={(handleSubmit(onTableViewSubmit))} name="Subscribe" />
                                </div>
                            </div>
                        </div>
                        {/* related blog section */}
                        <div className='col-span-2  font-poppins my-4'>
                            <div className="grid grid-cols-1 xl:grid-cols-3 shadow-lg rounded-lg">
                                <div className='py-4 order-last xl:order-first'>
                                    {/* related blog list */}
                                    {
                                        blogData?.relatedBlog?.slice(0, 3)?.map((item) => (
                                            <a href="">
                                                <div className='rounded-lg shadow-md m-4 p-4 transition-all duration-500 hover:scale-105' >
                                                    <p className='font-semibold text-secLine'>{item?.blogHeading}</p>
                                                    <p className='text-sm'>{item?.headingDescription}</p>
                                                    <p className='text-xs pt-1'>Posted: {getDate(item?.date)}</p>
                                                </div>
                                            </a>
                                        ))
                                    }
                                    <div className='flex justify-center'>
                                        <Button classes={"w-1/10 d-block text-center"} onClick={(handleSubmit(onTableViewSubmit))} name="See All Posts  &gt;" />
                                    </div>
                                </div>
                                <div className='col-span-2 gap-4'>
                                    <a href="">
                                        <div className='py-4 transition-all duration-500 md:hover:scale-95 hover:scale-105'>
                                            <div className='flex justify-center'>
                                                <div className='w-3/5'>
                                                    <img className='rounded-2xl' src={blogData?.relatedBlogImage} alt="" />
                                                </div>
                                            </div>
                                            <p className='font-semibold text-md sm:text-lg md:text-xl py-3 px-4 sm:px-6 md:px-12 text-secLine' >{blogData?.relatedBlog[0]?.blogHeading}</p>
                                            <p className='text-md px-4 sm:px-6 md:px-12'>{blogData?.relatedBlog[0]?.headingDescription}</p>
                                            <p className='text-xs py-2 px-4 sm:px-6 md:px-12'>Posted: {blogData?.blogPostDate}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* footer section */}
                        <BlogFooter />
                    </div>
                </div>
            )}
            {!reqBlogData &&
                (<>
                    <div className='flex justify-center items-center h-[85vh]'>
                        <p className="text-2xl font-poppins">
                            There is no blog
                        </p>
                    </div>
                    <BlogFooter />
                </>)}
        </div>
    )
}

export default Blog
