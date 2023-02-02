import 'bootstrap';
import 'reactstrap';
import "react-bootstrap";
import "@emotion/react";
import "@emotion/styled";
import "@mui/material";
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StoreProvider } from './utils/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StoreProvider>
        <App />
    </StoreProvider>
);

