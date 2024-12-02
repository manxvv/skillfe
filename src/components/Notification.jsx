import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthActions from "../store/actions/auth-actions";

const notyIconStyle = {
  position: "relative",
  display: "inline"
};
const notyNumStyle = {
  position: "absolute",
  right: "0",
  fontSize: "11px",
  color: "black",
  display: "inline",
  padding: "3px 5px",
  borderRadius: "20px"
};

export default function Notification({ width, color, count }) {
  const dispatch = useDispatch();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const notificationsRef = useRef(null);
  //click on outside to close notifications box
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
      setShowNotifications(false);
    }
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };


  //Getting notifications functionality

  useEffect(() => {
    dispatch(AuthActions.notifications());
    console.log("ghjkfghjkghjrtyui");
  }, []);
  //for http
  const notificationsData = useSelector((state) => {
    console.log("asfasfasfsadfasstateinnoti", state)
    const notiData = state?.auth?.notifications;
    // const notiData = state?.auth?.websocket?.notificatios_from_socket?.data;
    console.log("ertyuiopdfghjkl", notiData);
    return notiData;
  }) || [];

  //for webSocket
  // const notificationsData = useSelector((state) => {
  //   console.log("asfasfasfsadfasstateinnoti", state)
  //   return notiData;
  // }) || [];

  console.log("step1rtyuioghjklghjk", notificationsData);

  useEffect(() => {
    let combinedArray = [];

    notificationsData.forEach(item => {
      combinedArray = combinedArray.concat(item.faqs, item.kycResult, item.pitch);
    });

    console.log("step2ertyuiodfghjk", combinedArray);
    // const newCombinedArray = combinedArray.filter(item => item.text.trim() !== "");
    // console.log("step3rtyuiofghjk", newCombinedArray);
    // setNotifications(combinedArray);
    setNotifications(combinedArray);
  }, []);

  console.log("fsdasdfsdfasdfnoitia", notifications);

  // console.log("asfasfasdfsasdfnotafasf9wpef",notificationsData);


  const removeNotification = (index, id, type) => {
    let data = {
      id: id,
      type: type,
      isSeen: true
    }
    setNotifications((prevNotifications) =>
      prevNotifications.filter((_, i) => i !== index)
    );
    dispatch(AuthActions.postSeenNotifications(data))
  };

  // const removeNotification = (index) => {
  //   const updatedNotifications = [...notifications];
  //   const removedNotification = updatedNotifications.splice(index, 1)[0];
  //   // Assuming the id is used to identify the notification
  //   const updatedNotification = { ...removedNotification, isSeen: true };
  //   updatedNotifications.splice(index, 0, updatedNotification);
  //   setNotifications(updatedNotifications);
  // };







  return (
    <div ref={notificationsRef} className=" z-50">
      <div style={notyIconStyle} onClick={toggleNotifications}>
        {count > 0 ? <div className="bg-secLine" style={notyNumStyle}>{notifications.length}</div> : null}
        <svg
          viewBox="0 0 24 24"
          className="r-hkyrab r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          width={width}
          fill={color}
        >
          <g>
            <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z" />
          </g>
        </svg>
      </div>

      {showNotifications && (
        <div className="font-poppins text-md cursor-text">
          <div className="absolute top-16 right-5 z-10 bg-white dark:bg-secLine p-4 shadow-md text-black dark:text-white rounded-lg w-1/2">

            {
              (notifications.length > 0) ?
                (<>
                  <ul>
                    {notifications?.map((notification, index) => (
                      (notification?.text !== '') && (
                        <li key={index} className="flex justify-between items-center py-4 shadow-md px-4 border-b-2 border-secLine rounded-md">
                          {
                            notification?.text
                          }
                          <button className="w-[10px]" onClick={() => removeNotification(index, notification?.faqsId, notification?.type)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm5.293 5.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 1.414-1.414L10 8.586l4.293-4.293a1 1 0 0 1 1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </li>
                      )
                    ))}

                  </ul>
                </>) :
                (<>
                  <div className="dark:text-white font-poppins text-secLine text-lg text-center font-semibold hover:cursor-text">
                    No Notifications yet
                  </div>
                </>)
            }






          </div>
        </div>
      )}
    </div>
  );
}



