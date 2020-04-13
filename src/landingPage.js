import React from "react";

const LandingPage = () => (
  <>
    <h2
      style={{
        fontSize: "50px",
        textAlign: "center",
        color: "rgb(123, 94, 55)",
      }}
    >
      Welcome to Seeds of Support!
    </h2>
    <h4
      style={{
        fontSize: "20px",
        textAlign: "center",
        color: "rgb(35, 77, 32)",
      }}
    >
      We are a secular, non-profit organization that focuses on helping people
      in the bay area regain and maintain a firm grip on their recovery and find
      a new direction in life. We are cannabis friendly and operate under the
      philosophy that "Green is Clean" and strive to both spread awareness about and
      de-stigmatize addiction.  For more about our mission and who we are go to our 'Mission' page.
    </h4>
    <h4 style={{
        fontSize: "50px",
        textAlign: "center",
      }}>Board of Directors</h4>
      <div style={{
          display: "flex",
      }}>
      <img src="https://i.imgur.com/qnZG6lJ.png" style={{
          height: "250px"
        }}/>
        <div>
        <h3 style={{
            fontSize: "30px"
        }}>Jake Sassaman, CEO</h3>
        <h4 style={{
            fontSize: "24px"
        }}>Our CEO is Jake Sassaman.  Jake has been in the Bay Area Community for over 10 years and is active in both Town Hall and the cannabis community.</h4>
        </div>
        </div>
  </>
);

export default LandingPage;
