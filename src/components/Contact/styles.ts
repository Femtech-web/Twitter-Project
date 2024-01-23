import genStyles from '../customStyles';

const styles = {
  sectionContainer: `${genStyles.pagePad} min-h-screen bg-greenTheme contact_bg py-[5rem]`,
  inner_container: "flex lg:flex-row flex-col gap-[4rem] lg:items-center min-h-[70vh] md:p-4 p-2",
  input: `outline-none px-4 py-4 w-full bg-[#F5F5F5] rounded-lg focus:border-2 md:text-base text-sm placeholder:text-sm`,
  form: "flex flex-col gap-4 flex-1 bg-white rounded-lg min-h-[60vh] py-[3rem] px-[2rem] text-slate-700",
  header: "text-2xl mb-6 text-black",
  textarea: "resize-none rounded-lg bg-[#F5F5F5] placeholder:text-sm p-4 outline-none focus:border-2",
  btn: "w-full border-none text-sm hover:opacity-80 bg-greenTheme text-white text-center py-4 rounded-lg"
}

export default styles;