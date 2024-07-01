import React from "react";
import { useSelector } from "react-redux";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";

const LanguagePieChart = () => {
  Chart.register(...registerables);
  const repos = useSelector((state) => state.github.repos);

  // Create an object to calculate language distribution
  const languageCounts = repos.reduce((acc, repo) => {
    // Get the language for each repo, if there is no language consider it as 'Unknown'
    const lang = repo.language || "Unknown";
    if (acc[lang]) {
      acc[lang] += 1;
    } else {
      acc[lang] = 1;
    }
    return acc;
  }, {});

  const labels = Object.keys(languageCounts); // Language names
  const data = Object.values(languageCounts); // Language counts

  // Data structure for Pie chart
  const chartData = {
    labels: labels, // Language names
    datasets: [
      {
        label: "Number of Uses Of The Language ", // Tag will be shown on graph
        data: data, // Language counts
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#8bc34a",
          "#9c27b0",
          "#e91e63",
          "#795548",
          "#607d8b",
          "#4caf50",
          "#ff5722",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#8bc34a",
          "#9c27b0",
          "#e91e63",
          "#795548",
          "#607d8b",
          "#4caf50",
          "#ff5722",
        ],
        hoverOffset:10
      },
    ],
  };
  return (
    <div>
      <h2>Language Distribution</h2>
      <Pie data={chartData}/>
    </div>
  )
};

export default LanguagePieChart;
