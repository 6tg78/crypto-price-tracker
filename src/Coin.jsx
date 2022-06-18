import React from 'react';

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <div className='coin-row box is-flex is-flex-direction-row is-justify-content-start is-align-items-center'>
      <div className='coin is-flex is-flex-direction-row is-justify-content-center is-align-items-center'>
        <img className='asset-img mr-3' src={image} alt='asset' />
        <h5 className='is-size-5 mr-2'>{name}</h5>
        <p className='coin-symbol is-size-6'>
          {symbol.toUpperCase()}
        </p>
      </div>
      <div className='coin-data ml-6 is-flex is-flex-direction-row is-justify-content-center is-align-items-center'>
        <p className='coin-price'>Price: ${price.toLocaleString()}</p>
        {priceChange < 0 ? (
          <p className='coin-change ml-5 has-text-danger'>
            24h %: {priceChange.toFixed(2)}%
          </p>
        ) : (
          <p className='coin-change has-text-success'>
            24h %: {priceChange.toFixed(2)}%
          </p>
        )}
        <p className='coin-volume ml-5'>
          Volume: ${volume.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Coin;
