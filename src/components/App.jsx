import { Route, Routes } from 'react-router-dom';
import { Movies } from 'pages/Movies/Movies';
import { Home } from 'pages/Home/Home';
import { Layout } from 'pages/Layout/Layout';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};
