import SucheIcon from "../assets/suche_icon.svg";
import IconPrimaryButton from "./IconPrimaryButton";


const FindComponent = () => {
  return (
    <div className="flex flex-row w-full bg-white border border-gray-300 rounded-md shadow-sm px-1 py-1 gap-2">
            <div className="flex items-center px-2">
              <img src={SucheIcon} alt="" className="w-5" />
            </div>
            <input
              type="text"
              placeholder="Suche..."
              className="px-3 py-1 rounded w-full outline-none"          
            />
          
            <IconPrimaryButton onClick={()=>{}} />
          </div>
  );
};
export default FindComponent;
