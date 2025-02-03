import LineCard from "@/components/cards/LineCard";
import BarChart from "@/pages/bar-chart";
import Card from "@/pages/card";
import CircleChart from "@/pages/circle-chart";
import Dashboard from "@/pages/dashboard";
import LineChart from "@/pages/line-chart";
import Table from "@/pages/table";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/circle-chart" element={<CircleChart />} />
      <Route path="/line-chart" element={<LineChart />} />
      <Route path="/bar-chart" element={<BarChart />} />
      <Route path="/table" element={<Table />} />
      <Route path="/card" element={<Card />} />
      <Route path="/line-card" element={<LineCard />} />
    </Routes>
  );
};

export default AppRoutes;
