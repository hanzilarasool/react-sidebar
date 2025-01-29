import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/main-page/Layout";
import Dashboard from "./pages/Dashboard";
import Builder from "./pages/Builder";
import Orders from "./pages/Orders";
import Collection from "./pages/Collection";
import Products from "./pages/Products";
import Location from "./pages/Location";
import Integration from "./pages/Integration";
import Employees from "./pages/Employees";
import Promotion from "./pages/Marketing-relevants/Promotion";
import Discounts from "./pages/Marketing-relevants/Discounts";
import PushNotification from "./pages/Marketing-relevants/PushNotification";
import Setting from "./pages/Setting";
function App() {


  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Nested routes go here */}
          <Route index element={<Dashboard />} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/products" element={<Products />} />
{/* customer specific routes */}
          <Route path="/builder" element={<Builder />} />
          <Route path="/location" element={<Location />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/employees" element={<Employees />} />

          {/* marketing relevant routes */}
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/discounts" element={<Discounts />} />
          <Route path="/push-notification" element={<PushNotification />} />

          {/* customer-user-specific */}
          <Route path="/settings" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
