import './App.css';
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './layout/layout';
import Models from './pages/models';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Privacy from './pages/privacy';
import AGB from './pages/agb';
import Mainpage from "./layout/mainpage";
import Detailsite from './pages/detail';
function App() {




  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route
          exact
            path=""
            element={
              <Mainpage>
                <Models />
              </Mainpage>
            }
          />
          <Route
            path="models"
            element={
              <Mainpage>
                <Models />
              </Mainpage>
            }
          />
          <Route path="privacy" element={<Privacy />} />
          <Route path="agb" element={<AGB />} />
          <Route
            path=":girlId"
            element={
              <Mainpage>
                <Detailsite/>
              </Mainpage>
            }
          />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
