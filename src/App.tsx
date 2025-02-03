import Navbar from "./components/sidebar/Navbar";
import Layout from "./layout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Layout>
      <Navbar />
      <div className="p-4">
        <AppRoutes />
      </div>
    </Layout>
  );
}

export default App;
