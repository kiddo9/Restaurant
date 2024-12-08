
import { Chart } from "react-google-charts";

 const data = [
  ["Year", "Reservation", "Customers"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
  ["2008", 1030, 540],
];

 const options = {
  title: "Reservation by status",
  curveType: "function",
  legend: { position: "right" },
};

 function App() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default App