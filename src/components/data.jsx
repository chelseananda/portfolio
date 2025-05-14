// src/data.js

import carDealershipImg from './assets/cardealership.png';
import harvestImg from './assets/harvest.png';
import bitcoinImg from './assets/bitcoin.png';

export const projects = [
  {
    id: 1,
    title: 'Car Dealership Management System',
    description:
      'A comprehensive Java-based system for managing car dealership operations including inventory, sales, and customer management.',
    technologies: 'Java • Spring Boot • MySQL',
    link: 'https://github.com/chelseananda/CarDealership',
    image: carDealershipImg,
  },
  {
    id: 2,
    title: 'Harvest Application',
    description:
      'An agricultural management system that helps farmers track crop yields, manage resources, and optimize harvesting schedules.',
    technologies: 'Kotlin • Firebase',
    link: 'https://github.com/chelseananda/HarvestApplication',
    image: harvestImg,
  },
  {
    id: 3,
    title: 'Bitcoin Price Prediction',
    description:
      'A machine learning model that predicts Bitcoin price movements using historical data and technical indicators.',
    technologies: 'Python • TensorFlow • Pandas',
    link: 'https://github.com/chelseananda/BitcoinPrediction',
    image: bitcoinImg,
  },
];
