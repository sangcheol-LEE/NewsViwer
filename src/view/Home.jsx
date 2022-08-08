import React from 'react';
import Category from '../components/Category';
import NewsView from './NewsView';
import { useParams } from 'react-router-dom';

const Home = () => {
  const params = useParams()
  return (
    <div>
      {!params && <Category />}
      <NewsView />
    </div>
  );
};

export default Home;