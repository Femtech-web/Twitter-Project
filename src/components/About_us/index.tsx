/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from "./styles";

const Index = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className="text-center">
        <h1 className="font-semibold text-greenTheme mb-4">WHO WE ARE</h1>
        <p className="md:font-medium font-semibold md:text-2xl sm:text-xl text-base">
          Beyond Transportation, Unveiling the Soul of <br /> Our Ride-Sharing
          Experience.
        </p>
      </div>
      <div className="flex flex-col gap-4 my-10">
        <div className="flex lg:flex-row flex-col gap-4">
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
