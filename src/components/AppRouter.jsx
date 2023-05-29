import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./router";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route path={route.path} element={route.element} key={route.path}></Route>
            )}
            <Route path="/*" element={<Navigate replace to="/error" />} />
        </Routes>
    );
};

export default AppRouter;