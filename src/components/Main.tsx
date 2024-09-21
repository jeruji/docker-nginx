import React from "react";
import Layout from "./shared/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Loading = () => <p>Loading...</p>;
const Main = () => {
    return (
        <div>
            <React.Suspense fallback={<Loading />}>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </Layout>
            </React.Suspense>
        </div>
    )
}

export default Main;