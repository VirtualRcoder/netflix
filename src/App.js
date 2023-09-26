import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "grey",
      }}
    >
      <Home />
    </Box>
  );
}

export default App;
