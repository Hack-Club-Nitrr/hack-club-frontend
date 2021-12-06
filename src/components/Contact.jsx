//images
import emailImage from "../assets/img/email.png";
import locationImage from "../assets/img/location.png";
import phoneImage from "../assets/img/phone.png";
import shapeImage from "../assets/img/shape.png";
//css
import "../assets/stylesheets/Contact.css";
const Contact = () => {
  return (
    <div className="contact-container" id="Contact">
      <span className="big-circle"></span>
      <img src={shapeImage} className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="contact-title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src={locationImage} className="icon" alt="" />
              <p>42 Bakers street, London</p>
            </div>
            <div className="information">
              <img src={emailImage} className="icon" alt="" />
              <p>GojoStoru@Soceror.com</p>
            </div>
            <div className="information">
              <img src={phoneImage} className="icon" alt="" />
              <p>1729-42-314</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form autocomplete="off" className="inner-form">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                name="phone"
                className="input"
                placeholder="Phone Number"
              />
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                placeholder="Your Message"
              ></textarea>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
