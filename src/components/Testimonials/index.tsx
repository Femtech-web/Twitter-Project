import Slider from "react-slick";
import { VscQuote } from "react-icons/vsc";
import { testimonialData, settings } from "./data";
// import { useCustomState } from "../../hooks/responsive";
import styles from "./styles";

interface TestimonialProps {
  imageUrl: string;
  name: string;
  testimony: string;
  index: number;
}

const TestimonialCard = ({
  imageUrl,
  name,
  testimony,
}: // index,
TestimonialProps) => {
  return (
    <div
      className=" w-[95%] h-[370px] p-3 border-greenTheme
       border-[1px] shadow-md rounded-md mx-2 relative cursor-pointer"
    >
      <div className="flex mt-6 gap-2">
        <span className="text-3xl font-bold text-greenTheme">
          <VscQuote fontSize={28} />
        </span>
        <p className="max-w-[95%] text-[15px] font-medium italic leading-[1.7rem]">
          {testimony}
        </p>
      </div>
      <div className="flex justify-start items-center gap-4 mt-12 absolute bottom-4 w-full">
        <img
          src={imageUrl}
          alt="first card image"
          className="rounded-full h-[50px] w-[50px] "
        />
        <h1 className="text-xl">{name}</h1>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className="">
        <h1 className="font-semibold text-greenTheme mb-4">TESTIMONIALS</h1>
        <p className="md:font-medium font-semibold md:text-2xl sm:text-xl text-base">
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
