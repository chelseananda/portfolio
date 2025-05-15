import bitcoin from './bitcoin.png';
import cardealership from './cardealership.png';
import harvest from './harvest.png';

export const projects = [
  {
    id: 1,
    title: "Bitcoin Price Tracker",
    description: "A real-time Bitcoin price tracking application with historical data visualization and price alerts.",
    image: bitcoin,
    link: "https://github.com/chelseananda/bitcoin-tracker",
    technologies: "React, Node.js, WebSocket, Chart.js"
  },
  {
    id: 2,
    title: "Car Dealership Management",
    description: "Full-stack application for managing car inventory, sales, and customer relationships.",
    image: cardealership,
    link: "https://github.com/chelseananda/car-dealership",
    technologies: "C#, ASP.NET, SQL Server, Bootstrap"
  },
  {
    id: 3,
    title: "Harvest Planning System",
    description: "Agricultural management system for optimizing harvest schedules and resource allocation.",
    image: harvest,
    link: "https://github.com/chelseananda/harvest-planner",
    technologies: "Python, Django, PostgreSQL, React"
  }
];

export default projects;
