import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
const Contact = () => {
  const [data, setData] = useState({});
  useEffect(async () => {
    setData(await fatchData("/static/info.json"));
  }, []);
  return (
    <div className="dizme_tm_section" id="contact">
      <div className="dizme_tm_contact">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Contact Me</span>
            <h3>Let&apos;s Discuss How I Can Help You</h3>
            <p>
              Please do get in touch with me if you wish to discuss further. We can chat between 9:00 a.m. and 8:00 p.m, Monday through Saturday.
            </p>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              {data && data.contact && (
                <ul>
                  <li>
                    <div className="list_inner">
                      {/* <div className="icon orangeBackground">
                        <i className="icon-location orangeText" />
                      </div> */}
                      {/* <div className="short">
                        <h3>Address</h3>
                        <span>{data.contact.address}</span>
                      </div> */}
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon greenBackground">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="short">
                        <h3>Email</h3>
                        <span>
                          <a href="#">{data.contact.email}</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon purpleBackground">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="short">
                        <h3>Book Consultation</h3>
                        <span><a href="https://calendly.com/marcelinanowak_va/consultation-call" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline'}} >Click Me</a></span>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>
            {/* Get your API here https://www.embedgooglemap.net */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
