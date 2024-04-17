import { Routes, Route } from 'react-router-dom';
import InfoPage from '../pages/infoPage';
import PlansPage from '../pages/plansPage';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<InfoPage />} />
      <Route path='/plans' element={<PlansPage />} />
    </Routes>
  );
}

export default Router;
