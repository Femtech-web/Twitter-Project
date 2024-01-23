import genStyles from '../customStyles';

const styles = {
  heroContainer: `min-h-[90vh] relative hero-bg bg-greenTheme text-white overflow-x-hidden`,
  navContainer: `${genStyles.flexBtw} py-4 fixed w-full bg-greenTheme px-[4%] top-0 z-40`,
  navLinksContainer: 'flex gap-[3.5rem] text-lg font-bold',
  btnOne: `${genStyles.btn} px-[4rem] py-4 hover:opacity-80 bg-white text-greenTheme`,
  btnTwo: `${genStyles.btn} ${genStyles.flexCenter} flex-1 gap-3 py-4 hover:opacity-80 bg-white text-greenTheme `,
  btnThree: `${genStyles.btn} ${genStyles.flexCenter} flex-1 gap-3 bg-greenTheme py-4 border-2 border-white text-white hover:opacity-80 hover:text-white`,
  heroSection: `px-[4%] py-[2%] text-white md:mt-[5%] sm:mt-[12%] mt-[16%] flex lg:flex-row flex-col gap-10 lg:h-[90vh] h-auto items-center`,
  header: `${genStyles.header} `,
  subtext: `${genStyles.subtext} mb-6 sm:w-[80%] w-[93%]`,
  imgContainer: `${genStyles.flexCenter} lg:h-auto lg:w-[50%] w-full relative lg:mt-0 md:mt-[10%] md:mb-0 mb-[30px] top-8 lg:translate-x-[10%] -translate-x-[10%]`,
  img: 'object-cover w-full h-[70vh] lg:rounded-tl-xl lg:rounded-bl-xl rounded-tr-xl rounded-br-xl lg:rounded-tr-none lg:rounded-br-none',

  // Mobile Navbar Styles 
  mobileNavCont: 'w-[98%] min-h-[500px] fixed top-0 left-[1%] bg-white text-greenTheme p-4 z-40',
  closeNavCont: 'w-full flex justify-end py-6 px-4',
  mobileNavlinks: 'flex flex-col gap-6 min-h-[300px] font-bold',
}

export default styles;
// [#414141]
// lg:w-[45%] lg:h-auto h-[300px] w-full lg:absolute relative lg:-top-[12%] lg:mt-0 md:mt-[10%] md:mb-0 mb-[30px] top-8 md:right-0 right-[15%] -z-10