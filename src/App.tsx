import './index.css'

import react from './images/react.svg'
import tailwindcss from './images/tailwindcss.svg'
import typescript from './images/typescript.svg'
import vercel from './images/vercel.svg'
import vite from './images/vite.svg'

function App() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="sticky border-b border-blue-200 bg-white px-2 py-4 shadow-md shadow-blue-800 dark:bg-blue-100 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a className="flex items-center" href="#">
            <h1 className="self-center whitespace-nowrap text-xl font-semibold dark:text-blue-700">
              VRTTV
            </h1>
          </a>
          <nav>
            <button
              aria-controls="navbar-default"
              aria-expanded="false"
              className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              data-collapse-toggle="navbar-default"
              type="button"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                <li>
                  <a
                    aria-current="page"
                    className="block rounded bg-blue-100 py-2 pr-4 pl-3 text-blue-700 dark:text-blue-700 md:bg-transparent md:p-0 md:text-blue-700"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="block border-b border-blue-100 py-2 pr-4 pl-3 text-blue-400 transition-colors hover:text-blue-700 md:border-0 md:p-0 md:hover:bg-transparent"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="block border-b border-blue-100 py-2 pr-4 pl-3 text-blue-400 transition-colors hover:text-blue-700 md:border-0 md:p-0 md:hover:bg-transparent"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="block border-b border-blue-100 py-2 pr-4 pl-3 text-blue-400 transition-colors hover:text-blue-700 md:border-0 md:p-0 md:hover:bg-transparent"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="block border-b border-blue-100 py-2 pr-4 pl-3 text-blue-400 transition-colors hover:text-blue-700 md:border-0 md:p-0 md:hover:bg-transparent"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <section className="flex grow bg-gradient-to-b from-blue-700 to-blue-800">
        <div className="flex flex-1 flex-col items-center justify-center gap-7 text-center text-blue-100">
          <div className="flex gap-8">
            <img alt="Vite Icon" className="w-10" src={vite} />
            <img alt="React Icon" className="w-10" src={react} />
            <img alt="Typescript Icon" className="w-10" src={typescript} />
            <img alt="Tailwindcss Icon" className="w-10" src={tailwindcss} />
            <img alt="Vercel Icon" className="w-10" src={vercel} />
          </div>
          <h2 className="text-6xl font-bold">VRTTV Boilerplate</h2>
          <p className="max-w-xs text-lg sm:max-w-none">
            Avoid setting up a project from scratch. Start using VRTTV 🎉
          </p>
          <a
            className="rounded-full bg-blue-100 p-3 px-5 font-medium uppercase text-blue-700 shadow-blue-800 transition-colors hover:bg-blue-900 hover:text-blue-100"
            href="https://github.com/Drumpy/vrttv-boilerplate"
            rel="noopener noreferrer"
            target="_blank"
          >
            🔗 Get the boilerplate
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
