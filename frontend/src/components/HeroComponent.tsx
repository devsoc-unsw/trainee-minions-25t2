import HeroImage from '../assets/hero-component.svg';

const HeroComponent = () => {
    return (
        <div className="w-full h-160 bg-gray-50 flex items-center">

            <div className="w-1/2 px-16 ml-7">
                <h1 className="text-7xl font-bold mb-6 leading-relaxed">
                    Find Your <span className="text-pink-500">Perfect</span> Match!
                </h1>
                <p className="text-3xl font-bold text-purple-600 mb-10 leading-normal">Connect with like-minded people</p>
                <button className="bg-indigo-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-indigo-700">Get Started 💗</button>
            </div>

            <div className="w-1/2 flex:justify-center">
                <img 
                    src={HeroImage} 
                    className="w-3/4 h-3/4 object-contain ml-6 mt-10" 
                    alt="Hero" 
                />
            </div>
        </div>
    );
};

export default HeroComponent;