import CityPage from "./Pages/CityPage/CityPage";
import Home from "./Pages/Home/Home";
import SingleAds from "./Pages/SingleAds/SingleAds";

export let Routes=[
    {path:'/' , element:<Home/>},
    {path:'/:ostan/:city' , element:<CityPage/>},
    {path:'/:ostan/' , element:<CityPage/>},
    {path:'/:ostan/:cat/:id' , element:<SingleAds/>}
]