import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";

const TopHeader = () => {
  return (
    <>
      {/* <!-- Top Bar --> */}
      <div class="top-bar">
        <div class="top-left">
          <span>
            <BsTelephone size={15} className="inline-block mt-6" /> +91 98765
            43210
          </span>

          <span>
            <SlLocationPin className="inline-block mt-2" />
            123 Market Street, City
          </span>
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
