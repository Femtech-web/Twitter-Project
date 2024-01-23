import genStyles from '../customStyles';

const styles = {
  circle_container: `${genStyles.flexCenter} sm:w-[400px] sm:h-[400px] w-[350px] h-[350px] rounded-full bg-white p-[1.5rem] shadow-lg`,
  inner_container: `${genStyles.flexCenter} sm:w-[350px] sm:h-[350px] w-[300px] h-[300px] rounded-full border-[1px] border-greenTheme`,
  circle_text: "text-greenTheme font-bold",
  features_container: "flex lg:flex-row flex-col items-center mt-[5rem] mb-[3rem] md:-translate-x-6",
  line: "lg:h-[2px] lg:w-[50px] w-[2px] h-[50px] translate-x-0 bg-white",
  tyre: "flex items-center lg:flex-row flex-col"
}

export default styles;