import React from 'react'
import ReactDOM from 'react-dom'
import {
      BrowserRouter,
      Routes,
      Route
} from 'react-router-dom'

import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Header from './components/Header'
import Error from './components/Error';
import Freelances from './pages/Freelances';
import Freelance from './pages/Freelance';
import Footer from './components/Footer';
import Result from './pages/Result';
import GlobalStyle from './utils/styles/GlobalStyle';
import { ThemeProvider, SurveyProvider } from './utils/contexte';



ReactDOM.render(
      <React.StrictMode>
            <BrowserRouter>
                  <ThemeProvider>
                        <SurveyProvider>
                              <GlobalStyle />
                              <Header />
                              <Routes>
                                    <Route exact path="/" element={<Home />} />
                                    <Route path="/survey/:questionNumber" element={<Survey />} />
                                    <Route path="/results" element={<Result />} />
                                    <Route path="/freelances" element={<Freelances />} />
                                    <Route path="/freelance" element={<Freelance />} />
                                    <Route path='*' element={<Error />} />
                              </Routes>
                              <Footer />
                        </SurveyProvider>
                  </ThemeProvider>
            </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
)
