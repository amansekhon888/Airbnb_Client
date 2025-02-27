import { Outlet } from 'react-router-dom'
import Header from "../Components/Header/Header.tsx";
import Footer from "../Components/Footer/Footer.tsx";
import { SearchProvider } from '../Provider/SearchContext.tsx';

const Layout = () => {
  return (
    <div className="max-w-[1640px] mx-auto">
      <SearchProvider>
        <Header />
      </SearchProvider>
      <main className="pt-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout