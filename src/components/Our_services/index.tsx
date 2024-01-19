/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { IoManSharp } from "react-icons/io5";
import { FaBabyCarriage } from "react-icons/fa6";

type props = {
  heading: string;
  subText: string;
  icon: any;
};

const FeatureCard = ({ heading, subText, icon }: props) => {
  return (
    <div className={styles.cardContainer}>
      <span className="">{icon}</span>
      <h2 className="font-semibold my-6 text-greenTheme text-2xl">{heading}</h2>
      <p className={styles.subtext}>{subText}</p>
    </div>
  );
};

const Index = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className="text-center">
        <h1 className="font-semibold text-greenTheme mb-4">OUR SERVICES</h1>
        <p className="md:font-medium font-semibold md:text-2xl sm:text-xl text-base">
          Connecting Cities, Connecting Lives: Experience the <br /> Future of
          Transportation with Our Services
        </p>
      </div>
      <div className={styles.cardsContainer}>
        <FeatureCard
          icon={<IoManSharp fontSize={50} />}
          heading="#1 Riders"
          subText="Embark on a journey of unparalleled convenience 
          with our dedicated Riders services. Whether you're commuting 
          to work, heading out for a night on the town, or 
          simply exploring the city, our seamless ride-sharing 
          experience is tailored to elevate your every trip. 
          Enjoy prompt pickups, courteous drivers, 
          and a fleet of well-maintained vehicles that ensure comfort and safety."
        />
        <FeatureCard
          icon={<FiShoppingCart fontSize={50} />}
          heading="#2 Delivery"
          subText="Experience the ultimate in swift and secure 
          deliveries with our cutting-edge Delivery services. 
          From parcels to packages, we've transformed the 
          way goods move across the city. Our reliable network 
          of drivers ensures prompt and efficient deliveries, 
          while our real-time tracking feature lets you 
          keep an eye on your shipment every step of the way. "
        />
        <FeatureCard
          icon={<FaBabyCarriage fontSize={50} />}
          heading="#3 Food."
          subText="Savor the flavor of convenience with our 
          dedicated Food services. Indulge in a culinary journey 
          delivered right to your doorstep, courtesy of our 
          seamless and efficient platform. From your favorite 
          local eateries to popular chains, our extensive 
          network of drivers ensures your food arrives 
          fresh, hot, and on time. 
          Experience the joy of hassle-free dining 
          without leaving the comfort of your home."
        />
      </div>
    </section>
  );
};

export default Index;
