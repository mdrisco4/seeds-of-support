import React from "react";
import styled from "styled-components";

const SectionTitle = styled.div`
  font-size: 50px;
  text-align: center;
  color: rgb(123, 94, 55);
  font-weight: bold;
  @media (min-width: 800px) {

  }
  @media (min-width: 1150px) {
font-size: 60px;
margin-bottom: 25px;
}
`

const MissionStatement = styled.div`
  font-size: 24px;
  text-align: center;
  color: rgb(35, 77, 32);
  font-weight: bold;
  margin-bottom: 15px;
  @media (min-width: 800px) {
font-size: 30px;
}
@media (min-width: 1150px) {

}
`;

const BoardMemberContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
  @media (min-width: 650px) {
padding-left: 10px;
}
  @media (min-width: 800px) {

}
@media (min-width: 1150px) {

}
`;

const BoardPhoto = styled.img`
  height: 250px;
  @media (min-width: 800px) {

}
@media (min-width: 1150px) {
height: 340px;
}
`;

const BoardTitle = styled.div`
  font-size: 20px;
  margin-left: 10px;
  font-weight: bold;
@media (min-width: 550px) {
    font-size: 28px;
}
  @media (min-width: 800px) {
font-size: 35px;
}
@media (min-width: 1150px) {
font-size: 54px;
}
`;

const BoardDescription = styled.div`
  font-size: 15px;
  margin-left: 10px;
  color: rgb(35, 77, 32);
  font-weight: bold;
@media (min-width: 550px) {
    font-size: 20px;
}
  @media (min-width: 800px) {
font-size: 24px;
}
@media (min-width: 1150px) {
    font-size: 32px;
}
`;

const ContatctInfo = styled.div`
font-size: 24px;
font-weight: bold;
text-align: center;
@media (min-width: 650px) {
text-align: left;
padding-left: 20px;
}
@media (min-width: 850px) {
font-size: 32px;
margin-top: 4px;
}
@media (min-width: 1150px) {
font-size: 45px;
}
`

const FooterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
@media (min-width: 650px) {
flex-direction: row;
}
@media (min-width: 850px) {

}
@media (min-width: 1200px) {

}
`

const FooterLogo = styled.img`
@media (min-width: 650px) {
height: 100px;
width: 100px;
}
@media (min-width: 850px) {
    height: 140px;
width: 140px;
}
@media (min-width: 1150px) {
    height: 180px;
width: 180px;
}
`

const LandingPage = () => (
  <div
  style={{maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
  }}>
    <SectionTitle>Welcome to Seeds of Support!</SectionTitle>
    <MissionStatement>
      We are a secular, non-profit organization that focuses on helping people
      in the bay area regain and maintain a firm grip on their recovery and find
      a new direction in life. We are cannabis friendly and operate under the
      philosophy that "Green is Clean" and strive to both spread awareness about
      and de-stigmatize addiction. For more about our mission and who we are go
      to our 'Mission' page.
    </MissionStatement>
    <SectionTitle>Board of Directors</SectionTitle>
    <BoardMemberContainer>
      <BoardPhoto src="https://i.imgur.com/qnZG6lJ.png" />
      <div>
        <BoardTitle>CEO: Jake Sassaman</BoardTitle>
        <BoardDescription>
          Our CEO is Jake Sassaman. Jake has been in the Bay Area Community for
          over 10 years and is active in both Oakland Town Hall and the cannabis
          community. A repected member of the community, Jake set up this
          project to help vulnerable citizens in need.
        </BoardDescription>
      </div>
    </BoardMemberContainer>
    <BoardMemberContainer>
      <BoardPhoto src="https://i.imgur.com/AyPltrg.png" />
      <div>
        <BoardTitle>COO: John P. Gennaro, JD</BoardTitle>
        <BoardDescription>
          John has been a member of the board since the onset of this project.
          An attorney by trade, John has made a career working in civil law and
          providing pro-bono defense work to at risk Bay Area citizens.
        </BoardDescription>
      </div>
    </BoardMemberContainer>
    <BoardMemberContainer>
      <BoardPhoto src="https://i.imgur.com/aFrLPiW.png" />
      <div>
        <BoardTitle>CFO: Laura Belafont, CPA</BoardTitle>
        <BoardDescription>
          Our CFO Laura is a certified accountant who spent 12 years working for
          The City of Oakland before switching to the private sector and
          starting her own company, Belafont Acconting. Acitve in local
          volunteer work, Laura joined Seeds of Support to better the community
        </BoardDescription>
      </div>
    </BoardMemberContainer>
    <SectionTitle>Contact Us</SectionTitle>
    <FooterContainer>
    <div>
    <ContatctInfo>560 Thomas L. Berkley Way</ContatctInfo>
    <ContatctInfo>Oakland, CA 94612</ContatctInfo>
    <ContatctInfo>(510) 354-9872</ContatctInfo>
    </div>
    <FooterLogo src="https://i.imgur.com/3ei96FN.png" alt="logo" className="logo"/>
    </FooterContainer>
  </div>
);

export default LandingPage;
