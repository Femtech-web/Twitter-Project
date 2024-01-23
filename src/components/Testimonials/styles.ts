import genStyles from '../customStyles';

const styles = {
  sectionContainer: `${genStyles.pagePad} lg:min-h-screen min-h-[60vh] py-[3rem]`,
  card_container: "w-[95%] lg:h-[370px] sm:h-[400px] h-[370px] p-3 border-greenTheme border-[1px] shadow-md rounded-md mx-2 relative cursor-pointer",
  icon: "text-3xl font-bold text-greenTheme",
  testimony: "max-w-[95%] text-[15px] font-medium italic leading-[1.7rem]",
  img_container: "flex justify-start items-center gap-4 mt-12 absolute bottom-4 w-full",
  img: "rounded-full h-[50px] w-[50px] ",
}

export default styles;