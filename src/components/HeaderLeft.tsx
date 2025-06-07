import { Link } from 'react-router-dom';
import { BiCurrentLocation, BiEnvelope, BiLogoLinkedin, BiMoon, BiPhone, BiSun } from 'react-icons/bi';

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5 relative">
          <div className="text-center space-y-1">
            {/* Navigatie */}
            <div className="space-y-2 px-5">
              <Link to="/" className="block hover:underline">CV</Link>
              <Link to="/projects" className="block hover:underline">Projecten</Link>
              <Link to="/about" className="block hover:underline">Over mij</Link>
            </div>
          </div>
          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              Dorien <span className='font-semibold'>Van Loo</span>
            </h1>
            <h3 className='text-xl font-light'>Student</h3>
          </div>
          <button
            className="absolute right-10 top-10 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <BiSun className="text-2xl" /> : <BiMoon className="text-2xl" />}
          </button>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiEnvelope className="text-xl" />
              <span>r0657640@student.thomasmore.be</span>
            </li>
            <li className="flex items-center gap-2">
              <BiPhone className="text-xl" />
              <span>0488361186</span>
            </li>
            <li className="flex items-center gap-2">
              <BiCurrentLocation className="text-xl" />
              <span>Heist-op-den-Berg, Itegem</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SOCIAL</h1>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiLogoLinkedin className="text-xl" />
  <a
    href="https://www.linkedin.com/in/dorien-van-loo-15a3a3295/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    @dorien-van-loo
  </a>            </li>
          </ul>
        </div>

        <h1 className="text-base font-semibold md:text-2xl">SKILLS</h1>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">HTML</span>
          <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">C#</span>
          <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">React</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
