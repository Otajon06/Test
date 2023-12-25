import React from "react";
import { Routes,Route } from "react-router-dom";
import CartoonsLayout from "./Layout/CartoonsLayout";
import HomeLayout from "./Layout/HomeLayout";
import HomePageContainer from "../Containers/HomePage/HomPage";


const RoutesWithSupRoutes = () => {
    return (
        <Routes className="RoutesWithSupRoutes">
            <Route path="/" element={<HomeLayout>
                <h1>aaaaa</h1>
            </HomeLayout>}/>
            <Route path="/cartoons" element={<CartoonsLayout>
                <HomePageContainer/>
            </CartoonsLayout>}/>
            <Route path="*" element={<CartoonsLayout>
                <h1>Page Note Founted</h1>
            </CartoonsLayout>}/>
        </Routes>
    )
}


export default RoutesWithSupRoutes;