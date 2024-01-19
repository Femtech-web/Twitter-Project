import genStyles from '../customStyles';

const styles = {
  sectionContainer: `${genStyles.pagePad} min-h-screen`,
  header: `text-center ${genStyles.headerTwo}`,
  subtext: `md:text-[14px] sm:text-[13px] text-[12px] text-center leading-[1.5rem]`,
  cardsContainer: 'flex gap-5 mt-12 lg:flex-row flex-col',
  cardContainer: 'py-14 px-6 flex-1 min-h-[400px] rounded-md flex flex-col items-center border-[1px] border-greenTheme',
}

export default styles;