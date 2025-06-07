import HeaderLeft from './components/HeaderLeft';
import Footer from './components/Footer';

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  return (
<div>
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* Mobile header: zichtbaar op kleine schermen */}
      <div className="block md:hidden w-full border-b border-gray-300 dark:border-gray-700">
        <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Desktop sidebar header: scrollbaar onafhankelijk van content */}
      <div className="hidden md:block md:w-1/3 h-screen overflow-y-auto border-r border-gray-300 dark:border-gray-700">
        <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Main content: scrollbaar onafhankelijk van sidebar */}
      <div className="w-full md:w-2/3 h-screen overflow-y-auto">
        {children}
</div>
     </div>
 
    <Footer />
    </div>
  );
};


export default Layout;
