import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// data set of type of goods and how much it is sold

const data = {
  labels: ["Fresh Produce", "Offseason Produce", "Dairy Products"],
  datasets: [
    {
      label: "Sales (in units)",
      data: [150, 75, 200], // Example data representing sales
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
      ],
      borderWidth: 2,
    },
  ],
};

export default function PieUI() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        formatter: (value) => {
          return value + "%";
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
