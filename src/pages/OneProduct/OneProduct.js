import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const OneProduct = () => {
    const [product, setProduct] = useState({})
    const params = useParams()

    const getOneProduct = () => {
        axios(`http://localhost:4444/clothes/${params.id}`)
            .then(({data}) => setProduct(data))
    }
    useEffect(() => {
        getOneProduct()
    }, [])


    console.log(product)
    return (
        <section>
            one product
        </section>
    );
};

export default OneProduct;