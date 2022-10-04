import React from 'react'
import millify from 'millify';

import { useGetCoinsQuery } from '../services/cryptoApi'
import { News, Cryptocurrencies } from "../Components"; 

import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';


const { Title } = Typography;



const Homepage = () => {

  const { data, isFetching } = useGetCoinsQuery(10);
  const globalStats = data?.data?.stats;
  console.log(data?.data);

  if(isFetching) return '...Loading...';

  return (

    <div className="Home">
      <Title level="{2}" className="heading">Worldwide Coin Stats</Title>
      <Row className="global">
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={ millify(globalStats.totalCoins)} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volumes" value={ millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={ millify(globalStats.totalMarkets)} /></Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title first">Top 10 Cryptocurrencies in the World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>

      <Cryptocurrencies simplified/>

       <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>

      <News simplified/>



    </div>

  )
}

export default Homepage