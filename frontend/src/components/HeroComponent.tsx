import HeroImage from "../assets/hero-component.svg";

const HeroComponent = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center bg-gray-50 px-4 py-12 lg:flex-row lg:py-16">
      <div className="w-full px-4 text-center lg:ml-7 lg:w-1/2 lg:px-16 lg:text-left">
        <h1 className="mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl lg:leading-relaxed xl:text-7xl">
          Find Your <span className="text-pink-500">Perfect</span> Match!
        </h1>
        <p className="mb-10 text-lg leading-normal font-bold text-purple-600 sm:text-xl lg:text-xl xl:text-3xl">
          Connect with like-minded people
        </p>
        <button className="rounded-lg bg-indigo-500 px-6 py-3 font-bold text-white transition-colors hover:bg-indigo-700">
          Get Started 💗
        </button>
      </div>

      <div className="mt-8 flex w-full justify-center lg:mt-0 lg:w-1/2">
        <img
          src={HeroImage}
          className="h-auto w-3/4 object-contain sm:w-2/3 lg:mt-10 lg:ml-6 lg:w-3/4"
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
