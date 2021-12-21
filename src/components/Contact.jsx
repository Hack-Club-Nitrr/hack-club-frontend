import { useFormik } from "formik";

import axios from "axios";

//Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//images
import emailImage from "../assets/img/email.png";
import locationImage from "../assets/img/location.png";
import phoneImage from "../assets/img/phone.png";
import shapeImage from "../assets/img/shape.png";
//css
import "../assets/stylesheets/Contact.css";

//validation
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Address";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (!/^[6789][0-9]{9}$/i.test(values.phone)) {
    errors.phone = "Invalid Phone Number";
  }

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.message) {
    errors.message = "Required";
  }

  return errors;
};

const Contact = () => {
  //formik
  const formik = useFormik({
    initialValues: {
      message: "",
      phone: "",
      email: "",
      name: "",
    },
    validate,
    validateOnChange: false,
    onSubmit: (values) => {
      axios
        .post(
          `https://sheet.best/api/sheets/edf3cae8-26f3-4d05-a12c-02b6d24a1406`,
          values
        )
        .then((res) => {
          toast.success("Message Send Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch((err) => console.log(err));
      formik.resetForm();
    },
  });

  return (
    <div className="contact-container" id="Contact">
      <br />
      <span className="big-circle"></span>
      <img src={shapeImage} className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="contact-title">Let's get in touch</h3>
          <p className="text">
            Hack club NITRR is a non-profit organization which is entirely student led. This is a place for makers who come together to create an inclusive environment and community that strives continuously to learn,build and create.
          </p>

          <div className="info">
            <div className="information">
              <img src={locationImage} className="icon" alt="" />
              <p>Great Eastern Rd, Amanaka, Raipur, Chhattisgarh</p>
            </div>
            <div className="information">
              <img src={emailImage} className="icon" alt="" />
              <p>aditya90005@gmail.com</p>
            </div>
            <div className="information">
              <img src={phoneImage} className="icon" alt="" />
              <p>7000629928</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form
            noValidate
            onSubmit={formik.handleSubmit}
            autoComplete="off"
            className="inner-form"
          >
            <h3 className="title">Contact us</h3>
            <div
              className={`input-container ${
                formik.errors.name && "errorInput"
              }`}
            >
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
            </div>
            <div
              className={`input-container ${
                formik.errors.email && "errorInput"
              }`}
            >
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div
              className={`input-container ${
                formik.errors.phone && "errorInput"
              }`}
            >
              <input
                type="text"
                name="phone"
                className="input"
                placeholder="Phone Number"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {formik.errors.phone ? (
                <div className="error">{formik.errors.phone}</div>
              ) : null}
            </div>
            <div
              className={`input-container textarea ${
                formik.errors.message && "errorInput"
              }`}
            >
              <textarea
                name="message"
                className="input"
                placeholder="Your Message"
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
              {formik.errors.message ? (
                <div className="error">{formik.errors.message}</div>
              ) : null}
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
      <ToastContainer
        autoClose={2000}
        theme="colored"
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
};

export default Contact;
