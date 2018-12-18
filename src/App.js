import React from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import Footer from './Footer';

const App = () => ( 
  <div className="App">
    <BlogForm />
    <BlogList />
    <Footer />
  </div>
);

export default App;