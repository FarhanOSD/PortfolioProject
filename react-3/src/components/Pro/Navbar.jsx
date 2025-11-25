import React, { useState } from 'react';
import { navLinks } from '../constants';

const NavItems = ({ onClick }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={onClick}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Farhan Ahmed Tamkin
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <NavItems onClick={closeMenu} />
      </div>
    </header>
  );
}

export default Navbar;

// import React, { useState } from 'react'
// import { navLinks } from '../constants';

// const NavItems = () => {
//   return (
//     <ul className='nav-ul'>
//       {navLinks.map((id, href, name) => (
//         <li key={id} className='nav-li'>
//           <a href={href} className='nav-li_a'>
//             {name}
//           </a>
//         </li>
//       ))}
//     </ul>
//   )
// }

// function Navbar() {

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenue = () => {
//     setIsOpen((prevIsOpen)=> !prevIsOpen);
//   }

//   return <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
//     <div className='max-w-7xl mx-auto'>
//       <div className='flex justify-between items-center py-5 mx-auto px-10 py-5'>
//         <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
//         Farhan Ahmed Tamkin
//         </a>
//         <button onClick={toggleMenue} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle menue'>
//           <img src={ isOpen ? "assets/close.svg" : "assets/menu.svg"} alt='toggle' className='w-6 h-6'/>
//         </button>
//         <nav className='sm:flex hidden'>
//           <NavItems />
//         </nav>
//       </div>
//     </div>
//   </header>;
// }

// export default Navbar
