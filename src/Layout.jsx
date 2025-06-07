import HeaderLeft from './components/HeaderLeft';

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/3 h-screen sticky top-0 overflow-y-auto border-r border-gray-300 dark:border-gray-700">
        <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="w-full md:w-2/3 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
