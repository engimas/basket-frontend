import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: '',
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                display: true,
            },
        },
    },
};
// weeks
const labels = ["Sun","Mon","Tue", "Wed", "Thur","Fri", "Sat"]

// Dummy data without using faker
const dummyData = [4000,1000,6000 ,2000, 3000, 5000,7000];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: dummyData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: dummyData,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export default function ChartUi() {
    return <Line options={options} data={data} />;
}
