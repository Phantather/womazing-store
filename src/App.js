import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import OneProduct from "./pages/OneProduct/OneProduct";
import Cart from "./pages/Cart/Cart";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={''} element={<Layout/>}>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/store'} element={<Store/>}/>
                    <Route path={'/product/:id'} element={<OneProduct/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
