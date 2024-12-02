import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { backendassetUrl } from '../../utils/url';
import UiTopBar from '../../components/UiTopBar';
import FileViewer from '../../components/FileViewer';
import CommonActions from '../../store/actions/common-actions';
import { useDispatch } from 'react-redux';
import UiBottomBar from '../../components/UiBottomBar';

const ViewPitchDeck = () => {
    const { pitchId } = useParams()
    const dispatch = useDispatch()
    // const docs = [
    //     { uri:  }
    // ];
    const file = "http://localhost:8093/uploads/dummy.pdf";
    const type = 'pdf';
    dispatch(CommonActions.commondownload("http://localhost:8093/uploads/dummy.pdf","testing.pptx"))
    return (
        <div className='w-full h-full'>
            <div className='h-[8vh]'>
                <UiTopBar />
            </div>
            <div className='h-[84vh]'>
                <FileViewer url={file} ftype={type} />
            </div>
            <div className='h-[8vh]'>
                <UiBottomBar/>
            </div>
        </div>
    );
    return <DocViewer documents={docs} />;
};
export default ViewPitchDeck;

