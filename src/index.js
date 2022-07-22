import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {
  CrimeNewsBigBoxContextComponent,
  CrimeNewsSmallBoxContextComponent,
  CurrentAffNewsBigBoxContextComponent,
  CurrentAffNewsSmallBoxContextComponent,
  KandaNewsBigBoxContextComponent,
  KandaNewsSmallBoxContextComponent,
  NationContextComponent,
  OtherNewsBigBoxContextComponent,
  OtherNewsSmallBoxContextComponent,
  PoliticsNewsBigBoxContextComponent,
  PoliticsNewsSmallBoxContextComponent,
  SouthContextComponent,
} from './Context/AppContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <BrowserRouter>
      <NationContextComponent>
        <SouthContextComponent>
          <KandaNewsBigBoxContextComponent>
            <KandaNewsSmallBoxContextComponent>
              <PoliticsNewsBigBoxContextComponent>
                <PoliticsNewsSmallBoxContextComponent>
                  <CurrentAffNewsBigBoxContextComponent>
                    <CurrentAffNewsSmallBoxContextComponent>
                      <CrimeNewsBigBoxContextComponent>
                        <CrimeNewsSmallBoxContextComponent>
                          <OtherNewsBigBoxContextComponent>
                            <OtherNewsSmallBoxContextComponent>
                              <App />
                            </OtherNewsSmallBoxContextComponent>
                          </OtherNewsBigBoxContextComponent>
                        </CrimeNewsSmallBoxContextComponent>
                      </CrimeNewsBigBoxContextComponent>
                    </CurrentAffNewsSmallBoxContextComponent>
                  </CurrentAffNewsBigBoxContextComponent>
                </PoliticsNewsSmallBoxContextComponent>
              </PoliticsNewsBigBoxContextComponent>
            </KandaNewsSmallBoxContextComponent>
          </KandaNewsBigBoxContextComponent>
        </SouthContextComponent>
      </NationContextComponent>
    </BrowserRouter>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
