import css from './list.module.css'
import Header from '../../components/Header/Header'
import logoSvg from '../../components/Footer/FooterImage/Logo (1).svg'
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'
// import iconLeftArrowSvg from './listImage/iconbase (3).svg'
// import iconLightRightArrowSvg from './listImage/iconbase (2).svg'
// import iconDarkRightArrowSvg from './listImage/iconbase (4).svg'
import Footer from '../../components/Footer/Footer'
import NewSteller from '../../components/newSletter/newSteller'
import loupe from '../../images/iconbase (5).svg'
import globus from '../../images/iconbase (6).svg'
import burgerMenu from '../../components/Header/iconbase (11).svg'
import darkBurgerMenu from '../../components/Header/iconbase (12).svg'
import Pagination from '../../components/Pagination/pagination'
import { useSelector } from 'react-redux'
import Preloader from '../../components/preloader/preloader'
import { useState } from 'react'




function List() {
  const {cards, isLoading} = useSelector((state) => state)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItems] = useState(12);
  const [firstItem , setFirestItem] = useState(0)
  const totalItems = cards?.length; 
  console.log(totalItems);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const pageChange = (newFirstPage, newFullPage) => {
    setItems(newFullPage)
    setFirestItem(newFirstPage)
  }
  // const newCards = cards.slice(itemsPerPage)
  return (
    <div>
        <Header color={'black'} logosvg={logoSvg} background={'#212B36'} secondColor={'white'} loupe={loupe} globus={globus} burgerMenu={darkBurgerMenu}/>
        <div className={css.filterDiv}>
            <Filter background={'#F9FAFB'}/>
        </div>
        <div className={css.cardWrapper}>
            {
              isLoading
              ? 
              <Preloader/>
              :
              cards?.map((el, index) => (
                <Card
                  key={el.id + index}
                  title={el.name}
                  country={el.country}
                  days={el.days}
                  nights={el.nights}
                  review={el.review}
                  image={el.image}
                  id={el.id}
                  price={el.price}
                />
            ))
            }
        </div>
        <Pagination/>
        <NewSteller />
        <Footer />
    </div>
  )
}

export default List