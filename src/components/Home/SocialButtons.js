import React from "react";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";

const SocialButtonsPage = () => {
  return (
    <MDBContainer>
      <MDBBtn href="https://www.facebook.com/stanly.cole" target="_blank" size="lg" tag="a" social="fb">
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>
      <MDBBtn href="https://twitter.com" target="_blank" size="lg" tag="a" social="tw">
        <MDBIcon fab icon="twitter" />
      </MDBBtn>
      <MDBBtn href="https://www.linkedin.com/in/stanislav-iarotchi" target="_blank" size="lg" tag="a" social="li">
        <MDBIcon fab icon="linkedin-in" />
      </MDBBtn>
      <MDBBtn href="https://stanyaro.slack.com" target="_blank" size="lg" tag="a" social="slack">
        <MDBIcon fab icon="slack" />
      </MDBBtn>
      <MDBBtn href="https://github.com/siarotchi" target="_blank" size="lg" tag="a" social="git">
        <MDBIcon fab icon="github" />
      </MDBBtn>
      <MDBBtn href="mailto:stanyarodev.gmail.com" target="_blank" size="lg" tag="a" social="email">
        <MDBIcon icon="envelope" />
      </MDBBtn>
    </MDBContainer>
  );
};

export default SocialButtonsPage;
