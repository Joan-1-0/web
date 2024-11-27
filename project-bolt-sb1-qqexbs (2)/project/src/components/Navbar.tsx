import React from 'react';
import { GamepadIcon } from 'lucide-react';

interface NavItemProps {
  text: string;
  onClick: () => void;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ text, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-white hover:bg-violet-700 transition-colors rounded-lg ${
      isActive ? 'bg-violet-700' : ''
    }`}
  >
    {text}
  </button>
);

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="bg-violet-600 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <GamepadIcon className="h-8 w-8 text-white" />
            <span className="ml-2 text-white font-bold">RJ Gaming</span>
          </div>
          <div className="flex space-x-4">
            {['inicio', 'nosotros', 'RJ en consolas', 'RJ en celular', 'RJ en PC'].map((section) => (
              <NavItem
                key={section}
                text={section}
                onClick={() => setActiveSection(section)}
                isActive={activeSection === section}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;