import Navbar from "./components/sidebar/Navbar";
import Layout from "./layout";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Layout>
      <Navbar />
      <div className="p-4">
        <Dashboard />
      </div>
    </Layout>
  );
}

export default App;
