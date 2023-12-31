import styles from "../style";
import { discount, robot } from "../assets";
//import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white"></span> Additional Features are Coming{" "}
            <span className="text-white"></span> 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Of City Life.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The Modern Version of City Life Suffers from the Misalocation of Resources, Government Corruption, and Weak Citizen Representation. We Aim to Change That.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <iframe src="https://www.veed.io/embed/35659b6b-4346-44b3-8885-1ee68297da85" width="744" height="504" frameborder="0" title="WhatsApp Video 2023-09-05 at 1.24.22 AM" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

     
    </section>
  );
};

export default Hero;
