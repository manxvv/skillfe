import React from 'react';
import Webcam from 'react-webcam';

const FilePickers = ({ itm, errors, register }) => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        // Use the imageSrc captured from the webcam
    }, [webcamRef]);

    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            <button onClick={capture}>Capture</button>
            <input
                type={itm.type}
                accept={itm.accept}
                multiple={itm?.multiple ? true : false}
                {...register(itm.name,
                    {
                        required: itm.required ? "This field is required" : false,
                        ...itm.props
                    }
                )}
                className="block w-full text-sm text-black border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-black focus:outline-none dark:bg-white dark:border-black dark:placeholder-black p-2"
                {...itm.props} />
            <p className='text-xs text-red-700'>{errors[itm.name]?.message}</p>
        </>
    );
};

export default FilePickers;
