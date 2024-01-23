import styles from "./styles";

const Index = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className="">
        <div className={styles.copyright}>
          <p>© 2023 Copyright: All rights reserved</p>
        </div>
        <div className="">
          <div className={styles.first_col}>
            <div className="flex w-full mb-8 lg:justify-start justify-center">
              <img src="./logo.png" alt="Ride Logo" width="100" />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-5 w-full">
            <div className="footer_section">
              <h4 className="font-semibold mb-3 text-xl">Overview</h4>
              <p>
                <a href="#">Services</a>{" "}
              </p>
              <p>
                <a href="#">Who we are</a>
              </p>
              <p>
                <a href="#">Resources</a>
              </p>
            </div>
            <div className="footer_section">
              <h4 className="font-semibold mb-3 text-xl">Legal</h4>
              <p>
                <a href="#">Privacy policy</a>
              </p>
              <p>
                <a href="#">Terms of use</a>
              </p>
              <p>
                <a href="#">Cookie Policy</a>
              </p>
            </div>
            <div className="footer_section">
              <h4 className="font-semibold mb-3 text-xl">Business Info</h4>
              <h4>
                46 Badoss ways, Top Wafers,
                <br /> Victoria Island, 105145, Lagos, Nigeria
              </h4>
              <p>
                <a href="#">info@Ride.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
