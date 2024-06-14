import React from 'react';
import { useParams } from 'react-router-dom';
import { appId, secret } from './variables';
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {

  const {id} = useParams();

  const liveStream = async(element)=>{
    const appID = appId;
  const serverSecret = secret;
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    id,  
    Date.now().toString(),
    "Shikha Thakkar"
  );
  const zp = ZegoUIKitPrebuilt.create(kitToken);
  zp.joinRoom({
    container: element,
    scenario: {
      mode: ZegoUIKitPrebuilt.LiveStreaming,
    },
    sharedLinks:[
      {
        name: "Copy Link",
        url: `http://localhost:5173/room/${id}`,
      },
    ],
  });


  };
  return (
    <>
      <div ref={liveStream}></div>

    </>
  )
};

export default Room