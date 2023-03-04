import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./pages/global/Topbar"
import { Route, Routes } from "react-router-dom";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Bar from "./visualizations/Bar";
import BarTest from "./visualizations/Bartest";
import Pie from "./visualizations/Pie";
import Line from "./visualizations/Line";
import Attendance from "./pages/attendance";
import GradeDistributions from "./pages/gradedistributions";
import Enrollment from "./pages/enrollment";
import Discipline from "./pages/discipline";
import Projections from "./pages/projections";
import Team from "./pages/reports";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value ={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/gradedistributions" element={<GradeDistributions/>} />
              <Route path="/enrollment" element={<Enrollment/>} />
              <Route path="/discipline" element={<Discipline/>} />
              <Route path="/bartest" element={<BarTest/>} />
              <Route path="/projections" element={<Projections/>} />
              <Route path="/team" element={<Team />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie/>} />
              <Route path="/line" element={<Line/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
