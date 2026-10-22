import { Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage.jsx';
import HomePages from './pages/HomePages.jsx';
import Test from './pages/Test.jsx';
import PostDetails from './pages/PostDetails.jsx';


  function App() {
    
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<HomePages/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/blog/:id" element={<PostDetails />} />
        
      </Routes>
    </div>
    </>
  );
};

export default App
