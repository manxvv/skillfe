import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import Modal from '../Modal';
import AuthActions from '../../store/actions/auth-actions';


//Editor Section..............
const Editor = ({ placeholder, senderData, editorHtml, setEditorHtml }) => {
    console.log(senderData, "profileDataprofileData")
    const [theme, setTheme] = useState('snow');
    const handleChange = (html) => {
        setEditorHtml(html);
    };
    const handleThemeChange = (newTheme) => {
        if (newTheme === "core") newTheme = null;
        setTheme(newTheme);
    };

//rounak changes
let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })

    return (
        <div className= {`sm:h-[55vh]  ${!mode ? "bg-darkBg text-white ": ""} `}>
            <ReactQuill
                theme={theme}
                onChange={handleChange}
                value={editorHtml}
                modules={Editor.modules}
                formats={Editor.formats}
                bounds={'.app'}
                placeholder={placeholder}
                style={{ height: 'calc(100% - 4rem)' }} // Calculate height dynamically
            />
        </div>
    );
};
Editor.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
};

Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
];

Editor.propTypes = {
    placeholder: PropTypes.string,
    senderData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
    }).isRequired,
};
//SendEmail Section................
const ComposeButton = ({ name, to }) => {
    const [modalOpen, setmodalOpen] = useState(false);
    const [modalBody, setmodalBody] = useState("");
    const [sendTo, setsendTo] = useState("");
    const [sendSubject, setsendSubject] = useState("");
    const [dataa, setdataa] = useState({
        "to": { to },
        "subject": "",
        "msg": ""
    });


    const {
        register,
        handleSubmit,
        reset,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();





    // Function to handle changes in the sendTo field
    const handleSendToChange = (event) => {
        // alert(event.target.value)
        setsendTo(event.target.value);

        setValue("to", event.target.value)
        setdataa(prev => {

            console.log(prev, "prevprevprev")
            return { ...prev, ["to"]: event.target.value }
        })
    };

    // Function to handle changes in the sendSubject field
    const handleSendSubjectChange = (event) => {
        setsendSubject(event.target.value);
        setValue("subject", event.target.value)
        setdataa(prev => {

            return { ...prev, ["subject"]: event.target.value }
        })
    };

    let profileData = useSelector((state) => {
        let completeData = state?.auth?.profile;
        return completeData
    })

    const dispatch = useDispatch()

    // Define sender data
    const senderData = {
        name: 'XYZ,',
        position: 'XYZ Developer,',
        company: 'XYZ Company,',
        website: 'https://www.amansas.com/',
        logo: '../../../Amansas_logo.png',
    };



    // useEffect(() => {
    //   dispatch(AuthActions.profile());
    // }, []);





    const [editorHtml, setEditorHtml] = useState(`
    <pre>
    
    
    
    
    
    
    
    </pre>
    <p>Regards</p>
    <p>${senderData?.name || ""} ${senderData?.surname || ""}</p>
    <p>${senderData?.position || ""}</p>
    <p>${senderData?.company || ""}</p>
    <p>${senderData?.mobile || ""}</p>
    <p><a href="${senderData.website}">${senderData.website}</a></p>
    <img width="100px" src="${senderData.logo}" alt="Logo"/>
  `);


    const sendingMail = (dat) => {



        dat["msg"] = editorHtml
        // dataa["subjecta"]=sendSubject
        // dataa["toa"]=sendTo

        // setdataa()
        console.log(dat, "sendTosendTosendTosendTo")

        dispatch(AuthActions.sendMail(dat, () => setmodalOpen(false)))
    }


//rounak changes
let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })


    const handleModalButtonClick = () => {
        setmodalBody(
            <div className={`font-poppins ${!mode ? "bg-darkBg text-white ": ""} `}>
                <div className='flex'>
                    <span className='mx-2 font-poppins'>To</span>
                    {
                        (to) ?
                            (<>
                                <input value={to} className={`font-poppins w-full outline-0 ${!mode ? "bg-darkBg ": ""} `} name='sendTo' defaultValue={setsendTo(to)} type="text" onChange={handleSendToChange} />
                            </>) :
                            (<>
                                <input className={`font-poppins w-full outline-0 ${!mode ? "bg-darkBg text-white ": ""} `} name='sendTo' defaultValue={sendTo} type="text" onChange={handleSendToChange} />
                            </>)
                    }
                </div>
                <hr className='py-2' />
                <div className='flex'>
                    <span className='mx-2 font-poppins'>Subject</span>
                    <input className={`font-poppins w-full outline-0 ${!mode ? "bg-darkBg text-white ": ""} `} name='sendSubject' defaultValue={sendSubject} type="text" onChange={handleSendSubjectChange} />
                </div>
                <hr className='py-2' />
                <Editor placeholder={'Type your message...'} senderData={{ ...senderData, ...profileData }} editorHtml={editorHtml} setEditorHtml={setEditorHtml} />
                <div className="my-4">
                    <Button onClick={handleSubmit(sendingMail)} classes='w-[100px] rounded-full float-right my-auto' name={"Send"}></Button>
                </div>
            </div>
        );
        setmodalOpen(prev => !prev);
    };

    return (
        <>
            {/* compass Container */}
            <Button onClick={handleModalButtonClick} name={name}></Button>
            <Modal size={"xl"} modalHead={"New Message"} children={modalBody} isOpen={modalOpen} setIsOpen={setmodalOpen} />
        </>

    );
};

export default ComposeButton;
