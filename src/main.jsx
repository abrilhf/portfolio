import ReactDOM from 'react-dom/client'
import App from './App'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter } from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

ReactDOM.createRoot(document.getElementById('root'))



.render(
    <BrowserRouter>
        <SpeedInsights />
        <NextUIProvider>
            <App/>
        </NextUIProvider>
    </BrowserRouter>
)