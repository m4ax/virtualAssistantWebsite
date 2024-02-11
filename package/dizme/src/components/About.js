import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? 2 : 1}.png`} alt="image" />
                {/* <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={7} />
                    </h3>
                    <span className="name">
                      Days a Week
                      <br />
                      of Availability.
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={1200}/></h3>
                    <span className="name">
                      Hours of
                      <br />
                      Social Work Study.
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`About Me`}</span>
                <h3>I Help You Focus on What Matters</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {"I believe in making a difference, not just working a 9-to-5. That's why I started my business. After studying social work, I wanted more than a typical office job. So, I traveled Southeast Asia, and that experience changed my life. Now, I help entrepreneurs like you build successful businesses while making a positive impact."}
                  <br></br>
                  <br></br>
                  {"Here's how I can help: I'll work with you to develop a clear strategy, define your goals, and create a plan to achieve them. Then, I'll guide you through scaling your business so you can grow sustainably. Most importantly, I offer genuine support because my priority is your success. I'm not just a consultant, I'm a partner invested in your journey."}
                  <br></br>
                  <br></br>
                  {"Let's build something great together!"}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
