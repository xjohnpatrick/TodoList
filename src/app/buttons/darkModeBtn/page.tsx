// //src/app/buttons/darkModeBtn/page.tsx
// import React from 'react'

// import { GiMoonBats } from "@react-icons/all-files/gi/GiMoonBats";
// import { FaSun } from "@react-icons/all-files/fa/FaSun";
// import { useState, useEffect } from 'react';

// const DarkMode = () => {
//     const [darkMode, setDarkMode] = useState(false);

//     const handleClickTheme = () => {
//         const newTheme = !darkMode;
//         setDarkMode(newTheme);
//         localStorage.setItem('darkMode', JSON.stringify(newTheme));
//     }

//     useEffect(() => {
//         document.body.classList.toggle('dark', darkMode);
//         document.body.classList.toggle('light', !darkMode);
//     }, [darkMode]);

//     useEffect(() => {
//         const savedTheme = localStorage.getItem('darkMode');
//         if (savedTheme !== null) {
//             setDarkMode(JSON.parse(savedTheme));
//         }
//     }, []);
//   return (
//     <button onClick={handleClickTheme} className="flex text-inherit font-poppins whitespace-nowrap tracking-wide overflow-hidden text-2xl stroke-[0.75] hover:stroke-white dark:text-white stroke-blue text-blue hover:text-white place-items-center hover:bg-blue transition-colors duration-100 rounded p-2">
//                     <div className="flex gap-4 pr-2 pl-1 items-center">
//                     {darkMode ? <FaSun /> : <GiMoonBats />}
//                         <span className="text-lg">
//                             {darkMode ? 'Light Theme' : 'Dark Theme'}
//                         </span>
//                     </div>
//     </button>
//   )
// }

// export default DarkMode