import Divider from "../../Components/Divider/Divider.tsx";
import Banner from "../../Components/Home/Banner.tsx";
import Category from "../../Components/Home/Category.tsx";
import Recommended from "../../Components/Home/Recommended.tsx";
import PopularStays from "../../Components/Home/PopularStays.tsx";
import WeekendDeals from "../../Components/Home/WeekendDeals.tsx";
import { SearchProvider } from "../../Provider/SearchContext.tsx";
const Home = () => {
    return (
        <div>
            <SearchProvider>
                <Banner />
            </SearchProvider>
            <Divider classes="my-10" />
            <Category/>
            <Recommended/>
            <PopularStays/>
            <WeekendDeals/>
        </div>
    )
}

export default Home