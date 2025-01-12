import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigate} from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { HomeContainer, Heading, SearchBox, InputBox, FilteringContainer, TableHeading, SearchButton, TableContainer } from '../styledComponents'

const apiStatuses = {
    initial: 'INITIAL',
    inprogress: 'inprogress',
    success: 'SUCCESS',
    failure: 'FAILURE'
}

const Home = () => {
    const [apiStatus, setApiStatus] = useState(apiStatuses.initial)
    const [customOrderId, setCustomOrderId] = useState('')
    const [transactions, setTransactions] = useState([])
    const [url, setUrl] = useState('https://edviron-backend-jh1s.onrender.com/transactions')

    const GetTransactions = async () => {
        setApiStatus(apiStatuses.inprogress)
        const response = await fetch(url)
        console.log(response)
        if(response.ok){
            const data = await response.json()
            setTransactions(data.transactions)
            setApiStatus(apiStatuses.success)
        }else {
            setApiStatus(apiStatuses.failure)
        }
    }

    const handleStateChange = (event, setFunction) => {
        setFunction(event.target.value)
    }

    useEffect(() => {
        GetTransactions();
    }, [])

    const renderTransactions = () => (
        <TableContainer className='table table-hover table-bordered'>
            <thead>
                <tr>
                    <TableHeading scope='col'>Collect ID</TableHeading>
                    <TableHeading scope='col'>School ID</TableHeading>
                    <TableHeading scope='col'>Gateway</TableHeading>
                    <TableHeading scope='col'>Order Amount</TableHeading>
                    <TableHeading scope='col'>Transaction Amount</TableHeading>
                    <TableHeading scope='col'>Status</TableHeading>
                    <TableHeading scope='col'>Custom Order ID</TableHeading>
                </tr>
            </thead>
            <tbody>
            {
             transactions.map(each => {
                return <tr key={each.customOrderId}>
                    <TableHeading>{each.collect_id}</TableHeading>
                    <TableHeading>{each.school_id}</TableHeading>
                    <TableHeading>{each.gateway}</TableHeading>
                    <TableHeading>{each.order_amount}</TableHeading>
                    <TableHeading>{each.transaction_amount}</TableHeading>
                    <TableHeading>{each.status}</TableHeading>
                    <TableHeading>{each.custom_order_id}</TableHeading>
                </tr>
             })
            }
            </tbody>
        </TableContainer>
    )

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
        return <Navigate to='/login' />
    }

    return (
        <HomeContainer>
            <Heading>Edviron</Heading>
            <FilteringContainer>
                <SearchBox>
                    <SearchButton>
                    <FaSearch style={{height: '20px'}}/>
                    </SearchButton>
                    <InputBox placeholder='Custom Order Id' value={customOrderId} onChange={(event) => handleStateChange(event, setCustomOrderId)} />
                </SearchBox>
            </FilteringContainer>
            {renderTransactions()}
        </HomeContainer>
    )
}

export default Home