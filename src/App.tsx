import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Overview from "./pages/Overview";
import Phases from "./pages/Phases";
import Takeaways from "./pages/Takeaways";
import Feedback from "./pages/Feedback";
import { FirebaseProvider } from "./components/FirebaseProvider";

export default function App() {
  return (
    <FirebaseProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/phases" element={<Phases />} />
            <Route path="/takeaways" element={<Takeaways />} />
            <Route path="/submit" element={<Feedback />} />
          </Routes>
        </Layout>
      </Router>
    </FirebaseProvider>
  );
}
