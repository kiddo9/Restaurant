
import { Chart } from "react-google-charts";

 const data = [
  ["Year", "Reservation", "Customers"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

 const options = {
  title: "Reservation Statistics",
  curveType: "function",
  legend: { position: "bottom" },
};

 function chart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default chart