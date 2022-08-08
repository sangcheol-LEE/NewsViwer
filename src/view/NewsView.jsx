import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import NewsItem from '../components/NewsItem';
import Category from '../components/Category';

const NewsContiner = styled.div`
`;

const NewsView = () => {
  const [news, setNews] = useState(null)
  const [loading, setLoading] = useState(false);
  const params = useParams()


  useEffect(() => {
    const home = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=99b9486811fe445f8cc48237ee99a883`
    const categorys = `https://newsapi.org/v2/top-headlines?country=kr&category=${params.category}&apiKey=99b9486811fe445f8cc48237ee99a883`
    const fetchData = async() => {
      setLoading(true);
      try {
          const response = await axios.get((params.category === undefined || params.category === 'all' ) ? home : categorys)
          setNews(response)
      } catch(e) {
        console.log(e)
      }
      setLoading(false)
    }
      fetchData()
  },[params])

  if(loading) {
    return (
      <NewsContiner>데이터를 불러오고 있습니다.</NewsContiner>
    )
  }

  if(!news) {
    return null
  }

  return (
    <>
    <NewsContiner>
      {news.data.articles.map((article) => (
        <NewsItem  key={article.url} article={article}/>
      ))}
    </NewsContiner>
    </>
  );
};

export default NewsView;