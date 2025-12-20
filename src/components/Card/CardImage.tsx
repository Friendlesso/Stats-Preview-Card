import DesktopImg from "../../assets/image-header-desktop.jpg";
import MobileImg from "../../assets/image-header-mobile.jpg";

export function CardImage() {
  return (
    <div className="md:w-1/2 sm:w-full lg:w-1/2 overflow-hidden">
      <img className="hidden sm:block w-full h-full object-cover" src={DesktopImg} alt="Company image" />
      <img className="sm:hidden w-full h-1/2 object-cover" src={MobileImg} alt="Company image" />
      <div className="absolute w-full h-full bg-(--image-accent-color)"></div>
    </div>
  )
}
