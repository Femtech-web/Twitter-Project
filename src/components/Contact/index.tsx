import { useState } from "react";
import Input from "./Input";
import styles from "./styles";

const Index = () => {
  const [details, setDetails] = useState({
    fullname: "",
    email: "",
    phone_number: "",
  });

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.inner_container}>
        <form action="" className={styles.form}>
          <h1 className={styles.header}>Send a message:</h1>
          <Input
            name="fullname"
            type="text"
            value={details.fullname}
            placeholder="Your name*"
            handleChange={(e) => setDetails(e.target.value)}
          />
          <Input
            name="email"
            type="text"
            value={details.email}
            placeholder="Email address*"
            handleChange={(e) => setDetails(e.target.value)}
          />
          <Input
            name="fullname"
            type="text"
            value={details.phone_number}
            placeholder="Phone number*"
            handleChange={(e) => setDetails(e.target.value)}
          />
          <textarea
            id=""
            cols={30}
            rows={10}
            placeholder="Enter your message"
            className={styles.textarea}
          ></textarea>
          <button className={styles.btn}>SEND MESSAGE</button>
        </form>
        <div className="flex-1 text-white">
          <h1 className="text-4xl mb-8">Contact Us</h1>
          <p>
            If you are interested in working with us or would like to learn more
            about our services, please don't hesitate to contact us. You can
            reach us by email.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
