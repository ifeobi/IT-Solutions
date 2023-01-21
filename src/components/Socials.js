import React, { Component } from "react";

import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,  
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

export default class Socials extends Component {
  render() {
    const shareUrl = window.location.href;
    return (
      <div>
        <FacebookShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#Blog..."}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#Blog..."}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <LinkedinShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#Blog..."}
        >
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>
      </div>
    );
  }
}
