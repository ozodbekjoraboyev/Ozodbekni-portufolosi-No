import React from "react";

function About() {
  return (
    <div>
      <div className="container ">
        <div
          style={{
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            margin: "0 auto",
          }}
        >
          <h2>Men haqimda</h2>
          <p>
            Salom, mening ismim Ozodbek Jo'raboyev . Yoshim 18. Men IT sohasiga
            va web dasturlash texnologiyalariga qiziqaman hamda shu soha
            bo'yicha o'qiyapman. Men Frontend yo'nalishi bo'yicha HTML, CSS,
            SCSS, JavaScript, React, Tailwind CSS, Bootstrap, GitHub kabi
            texnologiyalar bo'yicha tajribaga egaman.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
