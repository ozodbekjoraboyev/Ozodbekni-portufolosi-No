import React from "react";

function About() {
  return (
    <div>
      <div className="container">
        <div
          style={{
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            // width: 400,
            justifyContent:'center',
            alignItems:"center",
            fontSize:20,
            margin:"0 auto"
          }}
        >
          <h2>About Me</h2>
          <p>
            Hello! My name is <strong>Ozodbek Nazirov</strong>, and I am 18
            years old. I am currently a first-year student at university, where
            I am pursuing a degree in computer science. I have a strong passion
            for web development and specialize in frontend development.
          </p>
          <p>
            I am proficient in several web technologies including{" "}
            <strong>HTML</strong>, <strong>CSS</strong>, <strong>SASS</strong>,{" "}
            <strong>Tailwind CSS</strong>,<strong>JavaScript</strong> <strong>React.js</strong>, and{" "}
            <strong>GitHub</strong>. These tools help me create responsive,
            visually appealing, and user-friendly websites. As a frontend
            developer, I enjoy transforming creative ideas into functional and
            interactive digital experiences.
          </p>
          <p>
            I am always eager to learn and grow in this field, and I am excited
            to take on new challenges to further develop my skills. My goal is
            to continuously improve and stay updated with the latest trends in
            web development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
