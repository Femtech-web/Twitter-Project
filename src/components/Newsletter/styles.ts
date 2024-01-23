import genStyles from '../customStyles';

const styles = {
  sectionContainer: `${genStyles.pagePad} lg:min-h-[60vh] sm:min-h-[45vh] min-h-[60vh] bg-white py-[5rem]`,
  input_container: "flex justify-center w-full mt-[4rem] text-slate-600",
  input: "md:min-w-[500px] sm:min-w-[450px] min-w-[300px] bg-[#F5F5F5] focus:border-2 md:text-base text-sm placeholder:text-sm outline-none px-4 py-4",
  icon: "w-[50px] h-[58px]  bg-greenTheme flex items-center justify-center cursor-pointer hover:opacity-80",
}

export default styles;