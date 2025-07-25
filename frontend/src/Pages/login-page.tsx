import backgroundSvg from '../assets/royal-botanic-gardens-sydney-australia 1.svg';

export default function LoginPage() {
    return (
        <div 
            className="min-h-screen w-full bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: `url(${backgroundSvg})`}}
        >
            <div className="bg-white p-8 w-[400px] h-[500px] rounded-lg shadow-lg flex flex-col">
                <div className="pb-6 text-2xl font-bold text-center">LOGO GOES HERE</div>
                <div className="pb-2 text-3xl font-bold text-gray-800">WELCOME!</div>
                <div className="pb-10 text-3xl font-bold text-gray-800">WHAT'S YOUR EMAIL?</div>
                <input type="text"
                    placeholder="Email"
                    className="mb-8 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                /> 
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                    Continue
                </button>
                <div>
                    TODO: AUTHENTICATE USING GMAIL CONTAINER
                </div>
            </div>
        </div>
    );
}