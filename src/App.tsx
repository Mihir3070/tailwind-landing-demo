import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import PricingSection from './components/pricing/PricingSection'

function App() {

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <div className='h-screen pt-16'>
        {/* <AppHeader /> */}
        <Header />
        <h1 className='text-xl'>Hello Mihir</h1>
        <PricingSection />
        <Footer />
      </div>
    </>
  )
}

export default App
