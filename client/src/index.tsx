import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


//Import________________________________________________________
import { Store, Persistor } from './SagaSetup';
import './App.css';
import Auth from './Components/Authentication';
import App from './App';
import NotFound from './Pages/ZNoPage';
import Login from './Pages/Login';
import Home from './Pages/Home';
import AddResources from './Pages/AddResources';
import InventoryResources from './Pages/InventoryResources';
import TopyearResources from './Pages/TopyearResources';


const root = ReactDOMClient.createRoot(document.querySelector('#root') as HTMLDivElement);

root.render(
    <>
    <Provider store={ Store() }>
        <PersistGate persistor={ Persistor() } >
            <BrowserRouter>
                <App />
                
                <Routes>
                    <Route element={ <Auth /> }>
                        <Route path='/login' element={ <Login /> } />
                    </Route>

                    <Route element={ <Auth /> }>
                        <Route path='/home' element={ <Home /> }>
                            <Route path='addResource' element={ <AddResources /> } />
                            <Route path='inventoryResources' element={ <InventoryResources /> } />
                            <Route path='topyearResources' element={ <TopyearResources /> } />
                        </Route>
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </PersistGate>
    </Provider>
    </>
);