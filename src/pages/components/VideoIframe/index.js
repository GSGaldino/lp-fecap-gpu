import React from 'react';
import Iframe from 'react-iframe';

import './styles.css';


export default function VideoIframe() {
  return (
    <Iframe
      url="https://player.vimeo.com/video/403386729"
      position="relative"
      width="100%"
      height="500px"
      frameBorder="0"
      className="iframe"
    />
  )
}
