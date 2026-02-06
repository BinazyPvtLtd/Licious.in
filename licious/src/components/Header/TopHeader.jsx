import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";

const TopHeader = () => {
  return (
    <>
      {/* <!-- Top Bar --> */}
      <div class="top-bar">
        <div className="top-left">
          <div className="top-item">
            <BsTelephone size={15} />
            <span>+91 98765 43210</span>
          </div>

          <div className="top-item">
            <SlLocationPin />
            <span>123 Market Street, City</span>
          </div>
        </div>

        <div class="top-right">
          <CiClock2 size={20} />
          Open: 7AM - 9PM
        </div>
      </div>
    </>
  );
};

export default TopHeader;
