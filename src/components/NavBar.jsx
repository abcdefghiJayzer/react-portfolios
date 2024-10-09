export default function NavBar() {
  return (
    <nav className="top-0 z-50 sticky bg-gray-950 px-5">
      <div className="flex flex-wrap justify-between items-center mx-auto pt-4 pb-2 max-w-screen-xl">
        <a className="flex items-center">
          <span className="md:block hidden font-semibold text-2xl text-white whitespace-nowrap self-center">
            Joseph Maniquis
          </span>
          <span className="block md:hidden font-semibold text-2xl text-white whitespace-nowrap self-center">
            JM
          </span>
        </a>

        <button
          type="button"
          className="inline-flex justify-center items-center md:hidden p-2 text-white hover:text-gray-300 focus:outline-none transition-all"
          aria-controls="navbar-default"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className="w-full md:block md:w-auto hidden"
          id="navbar-default"
        >
          <ul className="flex md:flex-row flex-col md:space-x-8 rtl:space-x-reverse md:border-0 bg-gray-950 md:bg-transparent md:mt-0 p-4 md:p-0 font-medium">
            <li>
              <a
                href="#"
                className="block bg-gray-50 md:bg-transparent px-3 py-2 md:p-0 rounded text-gray-900 md:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block md:border-0 md:hover:bg-transparent hover:bg-white px-3 py-2 md:p-0 rounded text-white md:hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block md:border-0 md:hover:bg-transparent hover:bg-white px-3 py-2 md:p-0 rounded text-white md:hover:text-white"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block md:border-0 md:hover:bg-transparent hover:bg-white px-3 py-2 md:p-0 rounded text-white md:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
