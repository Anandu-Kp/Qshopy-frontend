import React, { useEffect, useState } from 'react'
import Dashboard from '../Components/Dashboard'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loader from '../Components/Common/Loader';
import Navbar from '../Components/Common/NavBar';

function UserDashboardPage() {
    if (!localStorage.getItem('token')) {
        alert("you should login/register first")
        window.location.href = "/"
    }
    const { userType } = useParams();
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [category, setCategory] = useState("all")
    const [filteredProductList, setFilteredProductList] = useState([]);

    const subCategory = {
        sports: ['football', 'cricket', 'badminton'],
        fashion: ['men', 'women'],
        electronics: ["smartphones", "tv", "earphones"]
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        setIsLoading(true);
        // const endpoint = userType == "user" ? `${process.env.REACT_APP_API}/product/get-products` : `${process.env.REACT_APP_API}/product/get-user-products`;
        const endpoint = userType == "user" ? `${process.env.REACT_APP_API}/product/get-products` : `${process.env.REACT_APP_API}/product/get-user-products`;
        axios.get(endpoint, {
            headers: {
                "qurinom-token": localStorage.getItem("token")
            }
        })
            .then((res) => {
                setIsLoading(false);
                setProductList(res.data.data);
                setFilteredProductList(res.data.data)
            })
            .catch((err) => {
                setIsLoading(false)
                console.log(err)
            })

    }
    const filterProducts = (e) => {
        setCategory(e.target.value)
        if (e.target.value != "all") {
            console.log(productList);
            setFilteredProductList(productList.filter((element) => {
                return element.category.toLowerCase() == e.target.value;
            }))
        }

    }
    const filterSubProducts = (e) => {
        if (e.target.value != "all") {
            console.log(productList);
            setFilteredProductList(productList.filter((element) => {
                return element.sub_category.toLowerCase() == e.target.value;
            }))
        }

    }
    return (
        <>
            <Navbar isMerchant={userType == "merchant"} />
            {isLoading ? <Loader /> : <div className='dashboard'>
                <div className='filter'>
                    <select id="categoryDropdown" onChange={filterProducts}>
                        <option value="all">All</option>
                        <option value="fashion">Fashion</option>
                        <option value="sports">Sports</option>
                        <option value="electronics">Electronics</option>
                    </select>
                    {
                        category != "all" && <select id="categoryDropdown" onChange={filterSubProducts}>
                            <option value="all">All</option>
                            {
                                subCategory[category].map((ele) => <option value={ele}>{ele}</option>)
                            }
                        </select>
                    }
                </div>
                <div>

                    {!productList ? <h2 style={{ marginTop: "5rem" }}>You dont have any product to show</h2> : <Dashboard type={userType} productList={filteredProductList} />}
                </div>
            </div>}</>
    )
}

export default UserDashboardPage