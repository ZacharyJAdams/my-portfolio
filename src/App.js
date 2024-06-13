import Layout from './Layout';
import Home from './scenes/Home';
import About from './scenes/About';
import Mission from './scenes/Mission';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
import Missing from './scenes/Missing'
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Routes>
              <Route path="/" element={<Layout />}> 

                {/* public routes */}
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="mission" element={<Mission />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />

                {/* catch all */}
                 <Route path="*" element={<Missing />} />

              </Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;