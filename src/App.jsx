import './App.css';
import 'bulma/css/bulma.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false',
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => {
        alert('There is an error');
      });
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className='crypto-tracker'>
      <div className='container'>
        <section className='section has-text-centered coin-search'>
          <div className='columns is-centered'>
            <div className='column is-half'>
              <h1 className='is-size-3 mb-4'>Crypto tracker </h1>
              <input
                className='input coin-input'
                type='text'
                placeholder='Any crypto on your mind?'
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </section>
        <div className='table-wrapper'>
          {' '}
          {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                price={coin.current_price}
                volume={coin.total_volume}
                priceChange={coin.price_change_percentage_24h}
                marketCap={coin.market_cap}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
