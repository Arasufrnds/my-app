import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Garage from './components/Garage';
import Header from './components/Header';
import FavouriteColorStateExample from './components/FavoriteColorStateExample';
import ClassStateExample from './components/ClassStateExample';
import FunctionMultipleHooks from './components/FunctionMulipleHooks';
import UpdateArrayList from './components/UpdateArrayList';
import Timer from './components/Timer';
import MyForm from './components/MyForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App/>
    {/* <Garage/> */}
    {/* <Header/> */}
    {/* <FavouriteColorStateExample/> */}
    {/* <ClassStateExample/> */}
{/* <FunctionMultipleHooks/> */}
{/* <UpdateArrayList/> */}
       {/* <Timer/> */}
       {/* <MyForm/> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
