import styles from "./styles";

const Circle = ({ text }: { text: string; index: number }) => {
  return (
    <div className="w-[400px] h-[400px] rounded-full bg-white flex justify-center items-center p-[1.5rem] shadow-lg">
      <div className="w-[350px] h-[350px] rounded-full border-[1px] border-greenTheme flex justify-center items-center">
        <p className="text-greenTheme font-bold">{text}</p>
      </div>
    </div>
  );
};
const Index = () => {
  const features = ["Responsible", "Safe", "Transparent"];

  return (
    <section className={styles.sectionContainer}>
      <div className="text-center">
        <h1 className="font-semibold text-white mb-4">KEY FEATURES</h1>
        <p className="md:font-medium text-white font-semibold md:text-2xl sm:text-xl text-base">
          Where Comfort Meets Connectivity: Highlighting the Key <br /> Features
          that Define Our Ride-Sharing Excellence
        </p>
      </div>
      <div className="flex lg:flex-row flex-col items-center mt-[5rem] mb-[3rem] md:-translate-x-6">
        {features.map((text, index) => (
          <>
            <div className="flex items-center lg:flex-row flex-col">
              {(index === 1 || index === 2) && (
                <div className="lg:h-[2px] lg:w-[50px] w-[2px] h-[50px] translate-x-0 bg-white"></div>
              )}
              <Circle text={text} key={text} index={index} />
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Index;
// responsible transparent safe
