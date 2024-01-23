import style from "../customStyles";
import styles from "./styles";

const Circle = ({ text }: { text: string; index: number }) => {
  return (
    <div className={styles.circle_container}>
      <div className={styles.inner_container}>
        <p className={styles.circle_text}>{text}</p>
      </div>
    </div>
  );
};

const Index = () => {
  const features = ["Responsible", "Safe", "Transparent"];

  return (
    <section className={`${style.sectionContainer} bg-greenTheme features_bg`}>
      <div className={style.header_center_two}>
        <h1 className={style.sectionHeader_one}>KEY FEATURES</h1>
        <p className={style.headerText_one}>
          Where Comfort Meets Connectivity: Highlighting the Key <br /> Features
          that Define Our Ride-Sharing Excellence
        </p>
      </div>
      <div className={styles.features_container}>
        {features.map((text, index) => (
          <>
            <div className={styles.tyre}>
              {(index === 1 || index === 2) && (
                <div className={styles.line}></div>
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
