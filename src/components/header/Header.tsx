// import React, { useRef, useState } from 'react';
// import { useClickOutside } from './useClickOutside';

// export type NavItem = {
//   key: string;
//   label: string;
//   panel: React.ReactNode;
// };

// interface HeaderProps {
//   logo: React.ReactNode;
//   navItems: NavItem[];
//   ctas?: React.ReactNode;
// }

// const Header: React.FC<HeaderProps> = ({ logo, navItems, ctas }) => {
//   const [activeKey, setActiveKey] = useState<string | null>(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const desktopRef = useRef<HTMLDivElement>(null);

//   useClickOutside(desktopRef, () => setActiveKey(null));

//   const closeAll = () => {
//     setActiveKey(null);
//     setMobileOpen(false);
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-blue-500">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {logo}

//           <nav className="hidden lg:flex gap-6" ref={desktopRef}>
//             {navItems.map(item => (
//               <button
//                 key={item.key}
//                 onClick={() => setActiveKey(p => p === item.key ? null : item.key)}
//                 className="text-white font-medium"
//               >
//                 {item.label}
//               </button>
//             ))}
//           </nav>

//           <div className="hidden lg:flex gap-3">{ctas}</div>

//           <button
//             className="lg:hidden text-white text-xl"
//             onClick={() => setMobileOpen(true)}
//           >
//             ☰
//           </button>
//         </div>
//       </div>

//       {activeKey && (
//         <div className="absolute top-full left-0 w-full bg-blue-500">
//           <div className="max-w-7xl mx-auto px-4">
//             <div className="bg-white rounded-xl shadow-xl p-6 my-4">
//               {navItems.find(n => n.key === activeKey)?.panel}
//             </div>
//           </div>
//         </div>
//       )}

//       {mobileOpen && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div className="absolute inset-0 bg-black/40" onClick={closeAll} />
//           <div className="absolute left-0 top-0 h-full w-80 bg-white p-5 overflow-y-auto">
//             <div className="flex justify-between items-center mb-6">
//               {logo}
//               <button onClick={closeAll}>✕</button>
//             </div>

//             {navItems.map(item => (
//               <div key={item.key} className="mb-4">
//                 <button
//                   onClick={() => setActiveKey(p => p === item.key ? null : item.key)}
//                   className="w-full text-left font-semibold py-2"
//                 >
//                   {item.label}
//                 </button>
//                 {activeKey === item.key && (
//                   <div className="mt-2 border-l pl-3">
//                     {item.panel}
//                   </div>
//                 )}
//               </div>
//             ))}

//             <div className="mt-6 space-y-2">{ctas}</div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

// option 2 

// import { useRef, useState } from "react";
// import { SolutionsMegaMenu } from "../mega-menus/SolutionsMegaMenu";
// import { ResourcesMegaMenu } from "../mega-menus/ResourcesMegaMenu";
// import { useClickOutside } from "./useClickOutside";

// type NavItem = {
//   label: string;
//   content?: React.ReactNode;
// };

// const NAV_ITEMS: NavItem[] = [
//   {
//     label: "Solutions",
//     content: <SolutionsMegaMenu onNavigate={() => { }} />,
//   },
//   {
//     label: "Resources",
//     content: <ResourcesMegaMenu onNavigate={() => { }} />,
//   },
//   {
//     label: "Company",
//   },
// ];

// const ArrowDown = ({ active }: { active: boolean }) => (
//   <svg
//     className={`w-4 h-4 transition-transform duration-200 ${active ? "rotate-180" : ""
//       }`}
//     viewBox="0 0 20 20"
//     fill="currentColor"
//   >
//     <path
//       fillRule="evenodd"
//       d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
//       clipRule="evenodd"
//     />
//   </svg>
// );


// export default function Header() {
//   const [activeDesktop, setActiveDesktop] = useState<string | null>(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeMobile, setActiveMobile] = useState<string | null>(null);


//   const desktopRef = useRef<HTMLDivElement>(null);

//   useClickOutside(desktopRef, () => {
//     if (activeDesktop) {
//       setActiveDesktop(null);
//     }
//   });

//   const handleDesktopNavClick = (item: NavItem) => {
//     if (!item.content) {
//       // Direct navigation
//       console.log(`Navigate to ${item.label}`);
//       setActiveDesktop(null);
//       return;
//     }

//     setActiveDesktop(
//       activeDesktop === item.label ? null : item.label
//     );
//   };


//   return (
//     <>
//       {/* ================= HEADER BAR ================= */}
//       <header className="fixed top-0 left-0 w-full h-16 bg-blue-500 z-50">
//         <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
//           <span className="font-bold text-xl text-white">Mihir</span>

//          {/* ================= DESKTOP NAV ================= */}
//           <div className="hidden lg:flex items-center gap-8">
//             {NAV_ITEMS.map((item) => {
//               const isActive = activeDesktop === item.label;
//               const hasPanel = !!item.content;

//               return (
//                 <button
//                   key={item.label}
//                   className="flex items-center gap-1 font-medium"
//                   onClick={() => handleDesktopNavClick(item)}
//                 >
//                   <span>{item.label}</span>

//                   {/* Arrow ONLY if panel exists */}
//                   {hasPanel && <ArrowDown active={isActive} />}
//                 </button>
//               );
//             })}
//           </div>


//           <div className="hidden lg:flex gap-3">
//             <button className="w-full lg:w-auto bg-white text-blue-600 px-4 py-2 rounded-full text-sm">
//               Try ClickLearn
//             </button>
//             <button className="w-full lg:w-auto bg-orange-400 text-white px-4 py-2 rounded-full text-sm">
//               Book a demo
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="lg:hidden"
//             onClick={() => setMobileOpen(true)}
//           >
//             ☰
//           </button>
//         </div>
//       </header>

//       {/* ================= DESKTOP MEGA MENU ================= */}
//       {activeDesktop && (
//         <div className="hidden lg:block fixed top-16 left-0 w-full bg-blue-500 shadow z-40" ref={desktopRef}>
//           <div className="max-w-7xl mx-auto px-6 py-8">
//             {
//               NAV_ITEMS.find((i) => i.label === activeDesktop)?.content
//             }
//           </div>
//         </div>
//       )}

//       {/* ================= MOBILE FULL SCREEN DRAWER ================= */}
//       {mobileOpen && (
//         <div className="fixed inset-0 bg-green-500 z-50 lg:hidden overflow-y-auto">
//           {/* Header */}
//           <div className="h-16 px-4 flex items-center justify-between border-b">
//             <span className="font-semibold">Menu</span>
//             <button onClick={() => setMobileOpen(false)}>✕</button>
//           </div>

//           {/* Nav Items */}
//           <div className="p-4 space-y-4">
//             {NAV_ITEMS.map((item) => {
//               const isExpandable = !!item.content;
//               const isOpen = activeMobile === item.label;

//               return (
//                 <div key={item.label} className="border rounded-lg">
//                   <button
//                     className="w-full px-4 py-3 flex justify-between items-center font-medium"
//                     onClick={() => {
//                       if (!isExpandable) {
//                         console.log(`Navigate to ${item.label}`);
//                         setMobileOpen(false);
//                         return;
//                       }

//                       setActiveMobile(isOpen ? null : item.label);
//                     }}
//                   >
//                     {item.label}

//                     {/* Show + / − ONLY if expandable */}
//                     {/* {isExpandable && <span>{isOpen ? "−" : "+"}</span>} */}
//                     {isExpandable && <ArrowDown active={isOpen} />}
//                   </button>

//                   {/* ================= EXPANDABLE CONTENT ================= */}
//                   {isExpandable && isOpen && (
//                     <div className="px-4 pb-4 pt-2">
//                       {item.content}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


// Option 3

import React, { useRef, useState } from "react";
import { SolutionsMegaMenu } from "../mega-menus/SolutionsMegaMenu";
import { ResourcesMegaMenu } from "../mega-menus/ResourcesMegaMenu";
import { useClickOutside } from "./useClickOutside";

type NavItem = {
  label: string;
  content?: React.ReactNode;
};



const ArrowDown = ({ active }: { active: boolean }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-200 ${active ? "rotate-180" : ""
      }`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Header() {
  const [activeDesktop, setActiveDesktop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobile, setActiveMobile] = useState<string | null>(null);

  /** Shared wrapper for nav + mega menu */
  const desktopWrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(desktopWrapperRef, () => {
    setActiveDesktop(null);
  });

  const handleDesktopNavClick = (item: NavItem) => {
    if (!item.content) {
      console.log(`Navigate to ${item.label}`);
      setActiveDesktop(null);
      return;
    }

    setActiveDesktop(
      activeDesktop === item.label ? null : item.label
    );
  };

  const closeAllMenus = () => {
    setActiveDesktop(null);
    setActiveMobile(null);
    setMobileOpen(false);
    console.log("Menus closed");
  };

  const NAV_ITEMS: NavItem[] = [
    {
      label: "Company",
    },
    {
      label: "Solutions",
      content: <SolutionsMegaMenu onNavigate={closeAllMenus} />,
    },
    {
      label: "Resources",
      content: <ResourcesMegaMenu onNavigate={closeAllMenus} />,
    },
  ];

  return (
    <>
      {/* ================= HEADER BAR ================= */}
      <header className="fixed top-0 left-0 w-full h-16 bg-blue-500 z-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <span className="font-bold text-xl text-white">Mihir</span>

          {/* ================= DESKTOP NAV + MEGA MENU ================= */}
          <div
            ref={desktopWrapperRef}
            className="hidden lg:block"
          >
            {/* Nav */}
            <div className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => {
                const isActive = activeDesktop === item.label;
                const hasPanel = !!item.content;

                return (
                  <button
                    key={item.label}
                    className="flex items-center gap-1 font-medium text-white"
                    onClick={() => handleDesktopNavClick(item)}
                  >
                    <span>{item.label}</span>
                    {hasPanel && <ArrowDown active={isActive} />}
                  </button>
                );
              })}
            </div>

            {/* Mega Menu */}
            {activeDesktop && (
              <div className="fixed top-16 left-0 w-full bg-blue-500 shadow z-40">
                <div className="max-w-7xl mx-auto px-6 py-8">
                  {
                    NAV_ITEMS.find(
                      (i) => i.label === activeDesktop
                    )?.content
                  }
                </div>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex gap-3">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm">
              Try ClickLearn
            </button>
            <button className="bg-orange-400 text-white px-4 py-2 rounded-full text-sm">
              Book a demo
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE FULL SCREEN DRAWER ================= */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-green-500 z-50 lg:hidden overflow-y-auto">
          {/* Header */}
          <div className="h-16 px-4 flex items-center justify-between border-b">
            <span className="font-semibold">Menu</span>
            <button onClick={() => setMobileOpen(false)}>✕</button>
          </div>

          {/* Nav Items */}
          <div className="p-4 space-y-4">
            {NAV_ITEMS.map((item) => {
              const isExpandable = !!item.content;
              const isOpen = activeMobile === item.label;

              return (
                <div key={item.label} className="border rounded-lg">
                  <button
                    className="w-full px-4 py-3 flex justify-between items-center font-medium"
                    onClick={() => {
                      if (!isExpandable) {
                        console.log(`Navigate to ${item.label}`);
                        setMobileOpen(false);
                        return;
                      }
                      setActiveMobile(isOpen ? null : item.label);
                    }}
                  >
                    <span>{item.label}</span>
                    {isExpandable && <ArrowDown active={isOpen} />}
                  </button>

                  {isExpandable && isOpen && (
                    <div className="px-4 pb-4 pt-2">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
