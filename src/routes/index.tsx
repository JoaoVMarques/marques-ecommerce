import { Routes, Route } from 'react-router-dom';
import InfoPage from '../pages/infoPage';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<InfoPage />} />
    </Routes>
  );
}

export default Router;
