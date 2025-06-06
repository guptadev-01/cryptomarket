import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../CoinContext'
import { Link, useParams } from 'react-router-dom'


const Home = () => {

    const {allCoin, currency} = useContext(CoinContext)
    const [displayCoin, setDisplayCoin] = useState([])
    const [input, setInput] = useState('')

    const inputHandler = (e) => {
        setInput(e.target.value)
        if(e.target.value === ''){
            setDisplayCoin(allCoin);
        }
    }

    const searchHandler = async (e) => {
        e.preventDefault();
        const coin = await allCoin.filter((item) => {
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoin(coin);
    }

    useEffect(() => {
        setDisplayCoin(allCoin)
    }, [allCoin])

  return (
    <div className='home'>
        <div className='hero'>
            <h1>Largest <br /> Crypto Marketplace</h1>
            <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about Crypto's</p>
            <form onSubmit={searchHandler}>
                <input onChange={inputHandler} value={input} type="text" placeholder='Search crypto...' required/>
                <datalist id='coinlist'>{allCoin.map((item, index) => (<option key={index} value={item.name} />))}</datalist>
                <button type='submit'>Submit</button>
            </form>
        </div>
        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coin</p>
                <p>Price</p>
                <p style={{textAlign:'center'}}>24H Change</p>
                <p className='market-cap'>Market Cap</p>
            </div>
            {displayCoin.slice(0,10).map((item, index) => {
                return(
                    <Link to={`/coin/${item.id}`} key={index} className="table-layout">
                        <p>{item.market_cap_rank}</p>
                        <div className='coin-tbl-layout'>
                            <img src={item.image} alt="" />
                            <p>{item.name + '-' + item.symbol}</p>
                        </div>
                        <p>{currency.symbol}{item.current_price.toLocaleString()}</p>
                        <p style={{textAlign:'center'}} className={item.price_change_24h > 0 ? 'green' : 'red'}>{Math.floor(item.price_change_percentage_24h * 100)/100 + '%'}</p>
                        <p className='market-cap'>{currency.symbol}{item.market_cap.toLocaleString()}</p>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Home