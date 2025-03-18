import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "flatpickr/dist/themes/material_green.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "flatpickr/dist/themes/material_blue.css";
import 'react-loading-skeleton/dist/skeleton.css'
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { AuthProvider } from './Context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
