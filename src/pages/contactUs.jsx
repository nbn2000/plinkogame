import Form from "../sections/contact-us/Form";
import Head from "../sections/contact-us/Head";
import Header from "../sections/contact-us/Header";
const ContactUs = () => {
  return (
    <div className="mt-[80px]">
      <Header />
      <div className="container">
        <Head />
        <Form />
      </div>
    </div>
  );
};

export default ContactUs;
