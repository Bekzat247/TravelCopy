import './nextArrow.css'
import arrowBracketSvg from '../../pages/landingPage/landingImage/latestPostImage/iconbase.svg'

const CustomNextButton = ({ onClick }) => {
    return (
      <button onClick={onClick} className="custom-next-button">
        <img src={arrowBracketSvg} alt="" />
      </button>
    );
  };

  export default CustomNextButton