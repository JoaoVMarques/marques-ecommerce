import { Routes, Route } from 'react-router-dom';
import InfoPage from '../pages/infoPage';
import PlansPage from '../pages/plansPage';
import RegisterPage from '../pages/registerPage';

const plansRoutes = [
  'cobalt',
  'silver',
  'gold',
  'diamond',
  'bronze',
];

function Router() {
  return (
    <Routes>
      <Route path='/https://JoaoVMarques.github.io/marques-ecommerce/' element={<InfoPage />} />
      <Route path='/plans' element={<PlansPage />} />
      <Route>
        {plansRoutes.map((path, index) => (
          <Route path={`/subscribe/${path}-plan`} element={
            <RegisterPage />
          }
          key={index}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default Router;
