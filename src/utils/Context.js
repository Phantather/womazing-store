import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CustomContext = createContext()

export const Context = (props) => {

    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState('all')
    const [page, setPage] = useState(1)
    const [cart,setCart] = useState( [])
    const [changeGender, setChangeGender] = useState('all')
    const [user, setUser] = useState({
        login: ''
    })

    const getAllProducts = () => {
        axios('http://localhost:4444/clothes')
            .then(({data}) => setProducts(data))
            .catch((error) => console.log(error))
    }

    const addElCart = (item) => {
        if (cart.some(el => el.id == item.id)){
            setCart(cart.map(el => el.id == item.id ? {...item,count : el.count + 1} : el))
        } else {
            setCart([...cart, {...item,count:1}])
        }
    }

    const registerUser = (data) => {
        axios.post('http://localhost:4444/register', {...data, orders: []})
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setUser(res.data.user)
                navigate('/')
            })
    }

    const loginUser = (data) => {
        axios.post('http://localhost:4444/login', {...data, orders: []})
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setUser(res.data.user)
                navigate('/')
            })
    }
    const logoutUser = () => {
        localStorage.removeItem('user')
        setUser({
            login: ''
        })
    }


    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
        getAllProducts()
    },[])

    const value = {
        products, setProducts,
        getAllProducts,
        addElCart,
        categories, setCategories,
        page, setPage,
        changeGender, setChangeGender,
        cart,setCart,
        registerUser,
        user, setUser,
        logoutUser, loginUser
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}