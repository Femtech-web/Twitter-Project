import Slider from "react-slick";
import { VscQuote } from "react-icons/vsc";
import { testimonialData, settings } from "./data";
import styles from "./styles";
import style from "../customStyles";

interface TestimonialProps {
  imageUrl: string;
  name: string;
  testimony: string;
  index: number;
}

const TestimonialCard = ({ imageUrl, name, testimony }: TestimonialProps) => {
  return (
    <div className={styles.card_container}>
      <div className="flex mt-6 gap-2">
        <span className={styles.icon}>
          <VscQuote fontSize={28} />
        </span>
        <p className={styles.testimony}>{testimony}</p>
      </div>
      <div className={styles.img_container}>
        <img src={imageUrl} alt="first card image" className={styles.img} />
        <h1 className="text-xl">{name}</h1>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <section className={styles.sectionContainer}>
      <div>
        <h1 className={style.sectionHeader_two}>TESTIMONIALS</h1>
        <p className={style.headerText_two}>
          Rider Reviews: The Heartwarming Tales of Commutes <br /> Made
          Memorable with Our Services
        </p>
      </div>
      <div className="mt-10">
        <Slider {...settings}>
          {testimonialData.map((item, index) => (
            <TestimonialCard key={index} {...item} index={index} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Index;
