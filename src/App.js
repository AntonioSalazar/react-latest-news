import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';


function App() {

  //define the category
  const [ category, setCategory ] = useState('');
  const [ news , setNews] = useState([])

  //API Call
  useEffect(() => {
    const apiCall = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API}`
      const response = await fetch(url);
      const news = await response.json();
      setNews(news.articles);
    }

    apiCall();
  }, [category])

  return (
    <Fragment>
      <Header title="Latest News all the time"/>

      <div className='container blue-grey lighten-3'>
        <Form 
          setCategory={setCategory}
        />
        <NewsList
          news={news}
        />
      </div>
    </Fragment>
  );
}


export default App;
