import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { FaCircle } from "react-icons/fa";
ChartJS.register(...registerables);

const Linechart = () => {


  return (
    <div>
      <Line id="myChart"
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags"],
          datasets: [
            {
              label: "Terbit",
              fill: false,
              borderColor: "#2E90FA",
              backgroundColor: "#2E90FA",
              borderWidth: 6,
              pointRadius: 0,

              data: [100, 200, 120, 300, 200, 124, 320, 500],
            },
            {
              label: "Dicabut",
              fill: false,
              borderColor: "#FF4E4E",
              backgroundColor: "#FF4E4E",
              borderWidth: 6,
              pointRadius: 0,

              data: [130, 210, 190, 310, 210, 120, 320, 200],
            },
            {
              label: "Berlaku",
              fill: false,
              borderColor: "#38FFB7",
              backgroundColor: "#38FFB7",
              borderWidth: 6,
              pointRadius: 0,

              data: [140, 280, 520, 120, 200, 424, 120, 200],
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false
            },
          },
          elements: {
            line: {
              tension: 0.4,
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
                display: false,
              },
            },
          },
        }}
      ></Line>

      <div className="flex flex-row mx-auto w-full justify-center mt-10">
        <div id="terbit" className="flex flex-row mx-4">
          <FaCircle className="text-[#2E90FA] mt-1" />
          <p className="ml-2">Terbit</p>
        </div>
        <div id="dicabut" className="flex flex-row mx-4">
          <FaCircle className="text-[#FF4E4E] mt-1" />
          <p className="ml-2">Dicabut</p>
        </div>
        <div id="berlaku" className="flex flex-row mx-4">
          <FaCircle className="text-[#38FFB7] mt-1" />
          <p className="ml-2">Berlaku</p>
        </div>
      </div>
    </div>
  );
};

export default Linechart;
