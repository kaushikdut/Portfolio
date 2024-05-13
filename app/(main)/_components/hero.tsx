import HeroContent from "./(sub)/heroContent";

const Hero = () => {
  return (
    <div className=" flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="scale-x-[-1] h-[100%] w-full object-cover relative top-[0px] opacity-[100%]"
      >
        <source src="/overlay-2.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
