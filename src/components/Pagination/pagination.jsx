import css from './Pagination.module.css'
import iconLeftArrowSvg from '../../pages/listPage/listImage/iconbase (3).svg'
import iconDarkRightArrowSvg from '../../pages/listPage/listImage/iconbase (4).svg'
import { useState } from 'react'


function Pagination() {
  const [onPage, setPage] = useState(1)
  const [pageNumber, setPageNumber] = useState(1)
  const [isClicked, setClicked] = useState(true)
  return (
    <div className={css.prePagntn}>
        <div className={css.pagination}>
            <button onClick={pageNumber <=  1 ? null : ()=>{setPageNumber(pageNumber-1)}}><img src={iconLeftArrowSvg} alt="" /></button>
            <div onClick={() => {setPage(onPage)}} >{pageNumber}</div>
            <div onClick={() => {setPage(onPage+1)}} >{pageNumber+1}</div>
            <div onClick={() => {setPage(onPage+1)}} >{pageNumber+2}</div>
            <div onClick={() => {setPage(onPage+1)}} >{pageNumber+3}</div>
            <div onClick={() => {setPage(onPage+1)}} >{pageNumber+4}</div>
            <div onClick={()=>{setPageNumber(pageNumber+1)}} >...</div>
            <button onClick={() =>{setPageNumber(pageNumber+1)}}><img src={iconDarkRightArrowSvg} alt="" /></button>
        </div>
    </div>

  )
}

export default Pagination