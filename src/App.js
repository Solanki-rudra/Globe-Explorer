import logo from './logo.svg';
import './App.css';
import CountryContext from './contexts/countryContext';
import CountryHome from './component/country/countryHome';
import { Route, Routes } from 'react-router-dom';
import Compare from './component/compare/compare';
import Quiz from './component/quiz/quiz';
import Account from './component/account/account';
import Login from './component/auth/login';
import Header from './shared/header';
import Dashboard from './component/home/dashboard';
import NotFound from './component/notFound';
import CountryDetails from './component/country/countryDetails';
import Home from './component/home/home';
import AuthProvider from './component/auth/auth';
import RequireAuth from './component/auth/requireAuth';

function App() {
  return (
    <AuthProvider>
      <CountryContext>
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path='country' element={<CountryHome />} />
            <Route path='country/:countryName' element={<CountryDetails />} />
            <Route path='compare' element={<Compare />} />
            <Route path='quiz' element={<Quiz />} />
            <Route path='account' element={<RequireAuth><Account /></RequireAuth>} />
            <Route path='login' element={<Login />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CountryContext>
    </AuthProvider>
  );
}

export default App;
