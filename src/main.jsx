
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { myStore } from './store/store.js'
import { CookieProvider } from './contexts/CookieContext.jsx'
import LanguageContextProvider from './contexts/LanguageContext.jsx'
import { DarkModeProvider } from './contexts/DarkModeContext.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={myStore}>
    <CookieProvider>
      <LanguageContextProvider>
        <DarkModeProvider>
          <div className="dark:bg-customBlack  dark:text-customWhite">
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </div>
        </DarkModeProvider>
      </LanguageContextProvider>
    </CookieProvider>
  </Provider>
)
