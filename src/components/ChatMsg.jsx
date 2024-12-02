import React, { useEffect, useRef, useState } from "react";
import CommonForm from "./CommonForm";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  UilMessage,
  UilEnvelopeAlt,
  UilPaperclip,
  UilTimesCircle,
} from "@iconscout/react-unicons";
import WebsocketActions from "../store/actions/websocket-actions";
import { backendassetUrl } from "../utils/url";
const ChatMsg = ({ investorId }) => {
  const [attachment, setAttachment] = useState(null);
  const [attachmentUrl, setAttachmentUrl] = useState(null);
  let getUserId = useSelector((state) => {
    let interdata = state?.auth?.user?.id;
    return interdata;
  });
  let getChatMessge = useSelector((state) => {
    if (state?.websocket?.msg_from_socket[getUserId]) {
      return [...state?.websocket?.msg_from_socket[getUserId]];
    } else {
      return [];
    }
  });
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setValues,
    getValues,
    formState: { errors },
  } = useForm();
  let SendForm = [
    {
      name: "message",
      value: "message",
      type: "text",
      props: "",
      required: true,
      placeholder: "Type Your Message...",
    },
  ];
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onFileInputChange = (event) => {
    const file = event.target.files[0];
    setAttachment(file);
    const fileUrl = URL.createObjectURL(file);
    setAttachmentUrl(fileUrl);
  };
  const onTableViewSubmit = (data) => {
    if (attachment) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileData = reader.result.split(",")[1];
        const fileName = attachment.name;
        const fileExtension = fileName.split(".").pop(); // Get file extension
        // Send file data over WebSocket
        data["rId"] = investorId;
        data["sId"] = getUserId;
        data["fId"] = "s";
        data["type"] = "file";
        data["name"] = fileName;
        data["extension"] = fileExtension;
        data["data"] = fileData;
        let dwq = {
          message: data["message"],
          sId: getUserId,
          rId: getUserId,
          fId: "r",
          type: "file",
          name: fileName,
          extension: fileExtension,
          data: fileData,
          rname: attachmentUrl,
        };
        console.log("fghjkasdfsdfyhujisdf",dwq);
        dispatch(WebsocketActions.msg_from_socket(dwq));
        console.log(data, investorId, "investingId", "sdfsdsffsdsf");
        // data["uid"] = uid
        // dispatch(AuthActions.businessRegister(data, () => {
        //     navigate("/kycregister/" + uid)
        // }))
        dispatch(WebsocketActions.send_to_socket("chat_send", data));
        // socket.emit('file', { name: fileName, extension: fileExtension, data: fileData });
        // reader
      };
      reader.readAsDataURL(attachment);
      setAttachment(null);
      setAttachmentUrl(null);
    } else {
      // alert(investorId)
      // alert(getUserId)
      data["rId"] = investorId;
      data["sId"] = getUserId;
      data["fId"] = "s";
      data["type"] = "message";
      let dwq = {
        message: data["message"],
        sId: getUserId,
        rId: getUserId,
        fId: "r",
        type: "message",
      };
      dispatch(WebsocketActions.msg_from_socket(dwq));
      console.log(data, investorId, "investingId", "sdfsdsffsdsf");
      // data["uid"] = uid
      // dispatch(AuthActions.businessRegister(data, () => {
      //     navigate("/kycregister/" + uid)
      // }))
      dispatch(WebsocketActions.send_to_socket("chat_send", data));
      setValue("message", "");
    }
  };
  const triggerFileInput = () => {
    // Trigger the file input element when the button is clicked
    document.getElementById("attachmentInput").click();
  };
  useEffect(() => {
    scrollToBottom();
  }, [getChatMessge]);
  const removeAttachment = () => {
    // Clear attachment and attachmentUrl states
    setAttachment(null);
    setAttachmentUrl(null);
  };
  return (
    <>
      <div className="flex">
        <div className="absolute bottom-16 left-2 right-2 top-4 overflow-x-scroll mt-10">
          {getChatMessge.map((itm) => {
            console.log(getUserId, itm, "getUsdmjjjdjerIdgetUserId");
            return (
              <>
                {itm?.sId == getUserId ? (
                  <div
                    className="flex gap-4 my-2 flex-row-reverse "
                    ref={messagesEndRef}
                  >
                    {/* username */}
                    <div>
                      <div className="w-[50px] h-[50px] rounded-full bg-secLine flex justify-center items-center">
                        <div className="text-2xl text-white font-poppins">
                          S
                        </div>
                      </div>
                    </div>
                    {/* chat */}
                    <div>
                      {itm?.type == "file" ? (
                        !itm.name.endsWith(".pdf") ? (
                          <img
                            src={"data:image/jpeg;base64," + itm.data}
                            width={300}
                          />
                        ) : (
                          <a
                            href={URL.createObjectURL(
                              new Blob([itm.data], { type: "application/pdf" })
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Document
                          </a>
                        )
                      ) : (
                        <div className="w-auto shadow-md p-2 rounded-xl float-right bg-green-100 break-words">
                          <p className="font-poppins text-md text-justify dark:text-white break-anywhere">
                            {itm?.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div
                    className="flex gap-4 my-2 flex-row"
                    ref={messagesEndRef}
                  >
                    {/* username */}
                    <div>
                      <div className="w-[50px] h-[50px] rounded-full bg-secLine flex justify-center items-center">
                        <div className="text-2xl text-white font-poppins">
                          S
                        </div>
                      </div>
                    </div>
                    {/* chat */}
                    <div>
                      {/* {
                                                itm?.type == "file" ? <div className="w-auto shadow-md p-2 rounded-xl float-right">
                                                    <img src={backendassetUrl + itm.rname} width={300} />
                                                </div> : <div className="w-auto shadow-md p-2 rounded-xl float-right break-words">
                                                    <p className="font-poppins text-md text-justify dark:text-white break-anywhere">
                                                        {itm?.message}
                                                    </p>
                                                </div>
                                            } */}
                      {itm?.type == "file" ? (
                        !itm.name.endsWith(".pdf") ? (
                          <img src={assetUrl + itm.rname} width={300} />
                        ) : (
                          <a
                            href={backendassetUrl + itm.rname}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Document
                          </a>
                        )
                      ) : (
                        <div className="w-auto shadow-md p-2 rounded-xl float-right bg-white-100 break-words">
                          <p className="font-poppins text-md text-justify dark:text-white break-anywhere">
                            {itm?.message}
                          </p>
                        </div>
                      )}
                      {/* <div className="w-auto shadow-md p-2 rounded-xl float-right">
                                        <p className="font-poppins text-md text-justify dark:text-white">
                                            {itm?.value}
                                        </p>
                                    </div> */}
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div className="w-full absolute bottom-0 flex">
          <div className="w-[70%]">
            {attachmentUrl ? (
              <div className="relative">
                <button
                  className="absolute top-0 right-0"
                  onClick={removeAttachment}
                >
                  <UilTimesCircle size="24" />
                </button>
                {attachment.type.startsWith("image/") ? (
                  <img
                    src={attachmentUrl}
                    alt="Attachment"
                    style={{ maxWidth: "100px" }}
                  />
                ) : (
                  <a
                    href={attachmentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Document
                  </a>
                )}
              </div>
            ) : (
              <CommonForm
                classes={"w-full ml-2"}
                Form={SendForm}
                errors={errors}
                register={register}
                setValue={setValue}
                getValues={getValues}
              />
            )}
          </div>
          <div className="flex justify-center bg-white dark:bg-darkBg">
            <input
              id="attachmentInput"
              type="file"
              className="hidden"
              onChange={onFileInputChange}
              accept="image/*,.pdf,.doc,.docx"
            />
            <Button
              icon={<UilPaperclip size="18" className="hello" />}
              classes="w-1/10 h-1/2 mt-6 mx-1"
              onClick={triggerFileInput}
              name=""
            />

            <Button
              icon={<UilMessage size="18" className={"hello"} />}
              classes={"w-1/8 h-1/2 mt-6"}
              onClick={handleSubmit(onTableViewSubmit)}
              name=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* Sender Section */
}
{
  /* <div className="flex gap-4 my-2 flex-row-reverse"> */
}
{
  /* username */
}
{
  /* <div>
            <div className="w-[50px] h-[50px] rounded-full bg-secLine flex justify-center items-center">
              <div className="text-2xl text-white font-poppins">S</div>
            </div>
          </div> */
}
{
  /* chat */
}
{
  /* <div>
            <div className="w-3/4 shadow-md p-4 rounded-xl float-right">
              <p className="font-poppins text-md text-justify dark:text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                perferendis ab saepe expedita quo, cum nihil quod iure
                voluptatibus aspernatur vitae eaque.
              </p>
            </div>
          </div> */
}
{
  /* </div> */
}
{
  /* Reciever Section */
}
{
  /* <div className="flex gap-4 my-2"> */
}
{
  /* username */
}
{
  /* <div>
            <div className="w-[50px] h-[50px] rounded-full bg-secLine flex justify-center items-center">
              <div className="text-2xl text-white font-poppins">R</div>
            </div>
          </div> */
}
{
  /* chat */
}
{
  /* <div>
            <div className="w-3/4 shadow-md p-4 rounded-xl">
              <p className="font-poppins text-md text-justify dark:text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                perferendis ab saepe expedita quo, cum nihil quod iure
                voluptatibus aspernatur vitae eaque.
              </p>
            </div>
          </div>
        </div> */
}

{
  /* Send message section */
}
{
  /* <div>
    <div className="w-full absolute bottom-0">
        <div className="flex justify-center flex-wrap bg-white dark:bg-darkBg">
            <CommonForm
                classes={"w-5/6"}
                Form={SendForm}
                errors={errors}
                register={register}
                setValue={setValue}
                getValues={getValues}
            />
            <Button
                icon={<UilMessage size="18" className={"hello"} />}
                classes={"w-1/10 h-1/2 mt-6"}
                onClick={handleSubmit(onTableViewSubmit)}
                name=""
            />
        </div>
    </div>
</div> */
}

export default ChatMsg;
