import backgroundSvg from "../assets/royal-botanic-gardens-sydney-australia 1.svg";

export default function LoginPage() {
  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundSvg})` }}
    >
      <div className="flex h-[500px] w-[400px] flex-col rounded-lg bg-white p-8 shadow-lg">
        <div className="pb-6 text-center text-2xl font-bold">
          LOGO GOES HERE
        </div>
        <div className="pb-2 text-3xl font-bold text-gray-800">WELCOME!</div>
        <div className="pb-10 text-3xl font-bold text-gray-800">
          WHAT'S YOUR EMAIL?
        </div>
        <input
          type="text"
          placeholder="Email"
          className="mb-8 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
        />
        <button className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
          Continue
        </button>
        <div>TODO: AUTHENTICATE USING GMAIL CONTAINER</div>
      </div>
    </div>
  );
}
