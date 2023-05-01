import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={''} element={<Layout/>}>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/store'} element={<Store/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
