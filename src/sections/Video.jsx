import React from 'react'
import styled from 'styled-components'
import ModalVideo from 'react-modal-video';
// import 'react-modal-video/scss/modal-video.scss';

const StyledComponent = styled.section`
  .modal-video-movie-wrap {
    padding: 0 !important;
    iframe{
      min-height: 100vh;
      width: 100%;
    }
  }
`;
const Video = () => {
  return (
    <StyledComponent>
        <ModalVideo
            channel='vimeo'
            isOpen={true}
            videoId={921645846}
            // onClose={() => setOpen(false)}
            closeIcon=''
            controls={false} // Hide controls
            showCloseButton={false} // Hide close button
            autoplay // Autoplay video
        />
    </StyledComponent>
  )
}

export default Video