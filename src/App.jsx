import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Tweets from './pages/Tweets.jsx';
import { Header } from './components/Header/Header.jsx';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
