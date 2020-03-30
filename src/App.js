import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form'

function App() {

  //define the category
  const [ category, setCategory ] = useState('');
  console.log(category + 'from app')

  //API Call
  useEffect(() => {
    const apiCall = async() => {
      
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API}`
      console.log(url)
      const response = await fetch(url);
      const news = await response.json();
      console.log(news);
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
      </div>
    </Fragment>
  );
}

export default App;
