import { Fragment, useEffect, useRef } from "react";
import $ from "jquery";
import Hotline from "components/shared/Hotline";

const ChatBox = () => {
  return (
    <Fragment>
      <div id="sd-chat-box"></div>
      <a className="chat-box_toggle" href="tel:19006626"></a>
      {/* <div className="open-gift-box"></div> */}
      <section
        className="all_chat-box"
        id="contact1"
        style={{ display: "none" }}
      >
        {/* <div className="all_items-chat-box">
          <Hotline />
        </div> */}
      </section>
    </Fragment>
  );
};

export default ChatBox;
