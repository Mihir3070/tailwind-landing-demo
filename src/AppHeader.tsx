import Header from './components/header/Header';
// import { SolutionsMegaMenu } from './components/mega-menus/SolutionsMegaMenu';
// import { ResourcesMegaMenu } from './components/mega-menus/ResourcesMegaMenu';
// import { CompanyMegaMenu } from './components/mega-menus/CompanyMegaMenu';

export default function AppHeader() {
  return (
    <Header
      // logo={<span className="font-bold text-xl text-white">Mihir</span>}
      // navItems={[
      //   {
      //     key: 'solutions',
      //     label: 'Solutions',
      //     panel: <SolutionsMegaMenu onNavigate={() => {}} />
      //   },
      //   {
      //     key: 'resources',
      //     label: 'Resources',
      //     panel: <ResourcesMegaMenu onNavigate={() => {}} />
      //   },
      //   {
      //     key: 'company',
      //     label: 'Company',
      //     panel: <CompanyMegaMenu onNavigate={() => {}} />
      //   }
      // ]}
      // ctas={
      //   <>
      //     <button className="w-full lg:w-auto bg-white text-blue-600 px-4 py-2 rounded-full text-sm">
      //       Try ClickLearn
      //     </button>
      //     <button className="w-full lg:w-auto bg-orange-400 text-white px-4 py-2 rounded-full text-sm">
      //       Book a demo
      //     </button>
      //   </>
      // }
    />
  );
}