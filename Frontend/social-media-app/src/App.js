import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Post from './pages/Post';
import Comment from './pages/Comment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/create-post' element={<Post />} />
          <Route path="/post/:postId" element={<Comment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
