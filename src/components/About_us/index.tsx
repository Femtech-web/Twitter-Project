/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from "./styles";
import style from "../customStyles";

const Index = () => {
  return (
    <section className={style.sectionContainer}>
      <div className={style.header_center}>
        <h1 className={style.sectionHeader_two}>WHO WE ARE</h1>
        <p className={style.headerText_two}>
          Beyond Transportation, Unveiling the Soul of <br /> Our Ride-Sharing
          Experience.
        </p>
      </div>
      <div className={styles.img_container}>
        <div className={styles.img_wrapper}>
          <img
            src="/girl-sitting-one.jpg"
            alt="A girl in a car"
            className={styles.img}
          />
          <img
            src="/boy-sitting-one.jpg"
            alt="A boy in a car"
            className={styles.img}
          />
          <img
            src="/girl-sitting-three.jpg"
            alt="A girl in a car"
            className={styles.img}
          />
        </div>
        <iframe
          height="400"
          src="https://www.youtube.com/embed/MYhkO-6cft0?si=qEsYnSYzzTKyvZnk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full rounded-xl"
        ></iframe>
      </div>
    </section>
  );
};

export default Index;
