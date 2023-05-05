import {createContext, useState} from "react";
import axios from "axios";

export const CustomContext = createContext()

export const Context = (props) => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState('all')
    const [page, setPage] = useState(1)
    const [changeGender, setChangeGender] = useState('all')

    const getAllProducts = () => {
        axios('http://localhost:4444/clothes')
            .then(({data}) => setProducts(data))
            .catch((error) => console.log(error))
    }

    const value = {
        products, setProducts,
        getAllProducts,
        categories, setCategories,
        page, setPage,
        changeGender, setChangeGender
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}