// import HomeBg from "../../src/assets/images/home-bg-1.png";
import HomeBanner from "../../src/assets/images/banner-1.gif";
import Navbar from "../components/Navbar";
import Sm_Title from '../components/Sm_Title'
export default function Home() {
  return (
    <div>
      <div
        className="desktop_bg bg-no-repeat bg-cover object-cover h-screen w-full"
      >
        <Navbar />

        <Sm_Title />
      </div>
    </div>
  );
}
