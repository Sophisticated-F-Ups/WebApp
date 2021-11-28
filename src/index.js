import { ColorModeScript } from "@chakra-ui/react"
import ReactDOM from "react-dom"
import App from "./App"
import theme from "./theme"
import './index.css';
ReactDOM.render(
  <>
    {/* 👇 Here's the script */}
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>,
  document.getElementById("root"),
)