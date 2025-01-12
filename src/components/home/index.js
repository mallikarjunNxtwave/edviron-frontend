import { useEffect, useState } from 'react'
// import cookies from 'js-cookie'
import Navigate from 'react-router-dom'



const Home = () => {

    const GetTransactions = async () => {
        const url = 'https://edviron-backend-jh1s.onrender.com/transactions'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

    }

    useEffect(() => {
        GetTransactions();
    }, [])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home