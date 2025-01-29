import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/main-page/Layout";
import Dashboard from "./pages/Dashboard";
function App() {


  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Nested routes go here */}
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
