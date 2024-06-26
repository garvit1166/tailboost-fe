# SalesTrack Pro

[SalesTrack Pro](/) is a comprehensive analytics platform designed to provide real-time insights into key metrics for online businesses. From monitoring total revenue and profit to tracking product performance and customer behavior, our dashboard offers a centralized hub for understanding sales trends and making data-driven decisions. With interactive charts, intuitive visuals, and live updates powered by WebSocket technology, users can gain actionable insights into their sales performance, identify growth opportunities, and optimize their business strategies effectively. Built using the MERN stack and featuring secure authentication, our dashboard ensures a seamless and user-friendly experience for businesses seeking to elevate their e-commerce operations.

<Br/>

# Table of Contents

- [Features](#features)
- [Technologies Used](#tech-stack)
- [Installation](#setup)
- [Live Updates](#live-update)
- [Working Model Screenshots]()

<a id="features"></a>

# Features
- **Total Revenue**: View real-time updates on total revenue generated by the e-commerce platform.

- **Total Profit**: Monitor the total profit earned from sales transactions, providing insights into business profitability.

- **Total Product**: Track the total number of products available in the inventory, ensuring inventory management.

- **Total Orders**: Stay informed about the total number of orders placed, enabling efficient order fulfillment.

- **Sales Analysis Line Chart**: Visualize sales data trends over time with an interactive line chart, aiding in strategic decision-making.

- **Region Distribution Doughnut Chart**: Gain insights into sales distribution across different regions with an intuitive doughnut chart.

- **Top Customer Detail**: Identify top customers based on their purchasing behavior and transaction history, fostering customer relationship management.

- **Top Product Detail: Discover top**-selling products and their performance metrics, facilitating inventory optimization.

- **Sales by Subcategory**: Analyze sales performance by subcategories, helping to identify product categories driving revenue growth.

<a id="tech-stack"></a>

# Tech Stack

- ReactJs
- React Context API
- NodeJs
- ExpressJs
- MongoDB

    ### **Libraries Used**

- WebSocket (for real-time communication)
- Context API (for state management)
- React Router (for client-side routing)
- Bootstrap (for UI components)
- Axios (for making HTTP requests)
- ChartJs, Rechart.JS (For Charts)

<a id="setup"></a>

# Project Setup Guide

## Frontend

1. Clone TailBoost-fe repo and install dependencies

   ```sh
   git clone https://github.com/garvit1166/tailboost-fe
   npm i
   ```

2. Make .env file

3. Start the react app

   ```sh
   npm start
   ```

## Backend

1. Add .env in the root directory. Here's an example env file for you.

   ```sh
   MONGODB_URL
   ```

2. Start the backend server

   ```sh
   npm start
   ```
<a id="live-update"></a>

# Real-Time Data update

Our e-commerce sales dashboard leverages WebSocket technology to provide real-time updates whenever a new order is placed on the platform. WebSocket enables bidirectional communication between the client (web browser) and the server, allowing for instant data transmission without the need for continuous HTTP requests.

When a user places a new order on the e-commerce platform, the server immediately sends a notification to all connected clients via WebSocket. Upon receiving the notification, the client-side application updates the dashboard interface in real-time to reflect the latest changes. This ensures that all users viewing the dashboard have access to up-to-date information about sales transactions, total revenue, and other key metrics.

By leveraging WebSocket for real-time updates, our e-commerce sales dashboard provides users with a seamless and dynamic experience, allowing them to stay informed about the latest sales activities and make timely decisions to optimize their business operations

<a id="working-model-ss"></a>

# Working Model Screenshots
![image](https://github.com/garvit1166/tailboost-fe/assets/92694655/282ccca3-23a9-4498-8048-974e8088d298)
![image](https://github.com/garvit1166/tailboost-fe/assets/92694655/de650e4f-f71f-4de7-acf8-d7f7e498b00a)
![image](https://github.com/garvit1166/tailboost-fe/assets/92694655/1ae80a8f-d2de-4535-b159-cc83b132412f)



