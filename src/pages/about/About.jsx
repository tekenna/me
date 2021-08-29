import React from "react";
import "./about.css";
import Footer from "../../components/footer/Footer"

function About() {
  return (
    <div className="about">
      <div className="intro">
        <h2 className="about_heading">
          About <span> me</span>
        </h2>
        <div className="intro_content">
          <p className="p">
            I am a design-minded and a detail oriented web developer passionate
            about combining beautiful, structured codes with nice interfaces and
            desired fuctionalities. I am experienced in developing and designing
            web interfaces from simple landng pages to multi-paged web
            applications. I always strive to create software that not only
            function efficiently, but also provides intuitive and good user
            experiences. I love learning new and better ways to create seamless
            user experiences with clean and efficient codes. I am open to
            learning and self development and in the process lay on impact on
            any community I'm working in. I'm always looking for opportunities
            to work with those willing to share their knowledge as much as I
            want to learn.
          </p>
          <div className="img">
            <img src="../images/me.jpg" className="pic" alt="me" />
          </div>
        </div>
      </div>

      <div className="services">
        <h2 className="about_heading">
          <span>My</span> Sevices
        </h2>
        <div className="service_wrap">
          <div className="service_card">
            <img
              src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/browser_web_internet_website.png?itok=g5B_Bw62"
              alt="frontend"
            />
            <div className="service_card_body">
              <h3>Front-end web development</h3>
              <p className="service_p">
                Using the Front End Trio [HTML, CSS and JavaScript] with
                pre-processors and build tools such as SCSS, I efficently
                implement Web Designs along with its functionalities. I also
                make utilise other tools such as Bootstrap and Material UI to
                ensure i deliver responsive web pages. I am equally proficient
                in the javascript library like React JS and React JSLibraries to
                build component based Single Paged Web Applications.
              </p>
              <div className="skills">
                <span>HTML </span>
                <span> CSS</span>
                <span>Javascript</span>
                <span>React.JS</span>
                <span>Next.js</span>
              </div>
            </div>
          </div>
          <div className="service_card">
            <img
              src="https://analyticsindiamag.com/wp-content/uploads/2019/05/blog.jpg"
              alt="backend"
            />
            <div className="service_card_body">
              <h3>Back-end development</h3>
              <p className="service_p">
                Using Node js for backend or serverside language with frames
                works like Express, EJS, NodeMon and some other npm packages.
                Also working with noSQL database with eperience from python and
                the Kivy frame work and deploying of websites using netlify and
                other free hosting services
              </p>
              <div className="skills">
                <span>Node.js</span>
                <span>Express</span>
                <span>Git&GitHub</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="education">
        <h2 className="about_heading edd_heading">education</h2>
        <div className="edd_wrapper">
          <div className="edd">
            <h3>Federal University of Technology Owerri <span>owerri-west, Imo state</span></h3>
            <div className="edd_title">
              <div>
                <h4 className="school">Industrial Physics</h4>
                <span className="cert"><i>B-tech</i> </span>
              </div>
              <span className="date">Nov 2015 - Aug 2021</span>
            </div>
          </div>
          <div className="edd">
            <h3>pivic model college <span>Ojo, Lagos state</span></h3>
            <div className="edd_title">
              <div>
                <h4 className="school">Secondary school</h4>
                <span className="cert"><i>O'level</i></span>
              </div>
              <span className="date">jan 2008 - dec 2014</span>
            </div>
          </div>
          <div className="edd">
            <h3>Early crown nursery & primary school <span>Ojo, Lagos state</span></h3>
            <div className="edd_title">
              <div>
                <h4 className="school">primary school</h4>
                <span className="cert"><i>1st school leaving cert</i></span>
              </div>
              <span className="date">jan 1999 - dec 2008</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
