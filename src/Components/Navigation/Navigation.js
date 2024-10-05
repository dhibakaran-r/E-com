import "../../css/Style.css";
import Bottomnav from "./Bottomnav";
import "../../css/Navigation.css";
import Topnav from "./Topnav";

// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
const Navigation = () => {
  return (
    <div className="nav-container">
      <section className="section nav-sec">
        <Topnav />
      </section>

      <section className="section nav-sec section-2">
        <Bottomnav />
      </section>
    </div>
  );
  // return(
  //     <div className='pink'>
  //         <img src={pink} alt='img'></img>
  //     </div>
  // )
};

export default Navigation;
