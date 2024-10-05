import "../../css/Style.css";
import "../../css/Navigation.css";
import Topnav from "./Topnav";

// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
const SecNavigation = () => {
  return (
    <div className="nav-container sec-nav">
      <section className="section nav-sec">
        <Topnav />
      </section>
    </div>
  );

  // return(
  //     <div className='pink'>
  //         <img src={pink} alt='img'></img>
  //     </div>
  // )
};

export default SecNavigation;
