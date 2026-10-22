import { Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage.jsx';
import HomePages from './pages/HomePages.jsx';
import Test from './pages/Test.jsx';
import PostDetails from './pages/PostDetails.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';


  function App() {
    
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<HomePages/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/settings" element={<SettingsPage/>} />
        <Route path="/blog/:id" element={<PostDetails />} />

        <Route path="*" element={<ErrorPage/>} />
        
      </Routes>
    </div>
    </>
  );
};

export default App
