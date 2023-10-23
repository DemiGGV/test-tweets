import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home.jsx';
import Tweets from './pages/Tweets.jsx';
// import NotFound from './pages/NotFound.jsx';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
