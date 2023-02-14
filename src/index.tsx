import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeProvider from "./Styles/theme/ThemeProvider";

let domNode = document.getElementById('root')
let root = createRoot(domNode)

root.render(
    <BrowserRouter >
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
)