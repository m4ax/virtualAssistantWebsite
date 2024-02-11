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
                  {"I launched my business fuelled by a belief in more than the 9-5 grind and a lifelong passion for helping others. After studying Social Work at university, I faced a crossroad: the office life or daring adventure of travelling around Southeast Asia. Choosing adventure led me to where I am today, grateful to have built a business that allows me to support incredible entrepreneurs. My mission is to get your strategy right and help you scale your business. What sets me apart? You’re not just a client; you’re a business I’m genuinely committed to supporting."}
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
