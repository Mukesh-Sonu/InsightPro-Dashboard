# InsightPro Dashboard

The **InsightPro Dashboard** is a light and dark-themed, modern analytics dashboard designed to deliver comprehensive insights into user activity, traffic, and engagement. Built with an intuitive interface, this dashboard is ideal for applications that require real-time data visualization and management capabilities.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Demo
Check out the live demo [here](https://insightpro-dashboard.netlify.app).

## Features

- **Analytics Overview**: Displays key metrics, including views, visits, new users, and active users in a clear, easy-to-read format.
- **Data Visualizations**: Interactive charts and graphs, including line, bar, and pie charts, to provide deep insights.
- **Traffic Insights**: Breaks down traffic by website, device, and location, giving a detailed view of user demographics and behavior.
- **Notifications & Activities**: Real-time updates on recent user activities and notifications.
- **Contact List**: Displays a list of recent contacts for quick access.
- **Easy Navigation**: Left sidebar navigation for quick access to different sections like Projects, User Profile, Campaigns, and more.
- **Interactive Navigation**:
  - **Dark/Light Mode Toggle**: Seamlessly switch between light and dark themes.
  - **Breadcrumb Navigation**: Easily trace your path across pages.
  - **Order Navigation**: Click on the orders card to navigate directly to the orders page.
  - **Favorites and Recents Toggle**: Quickly switch between favorite and recent items in the sidebar.

## Screenshots
<img width="1038" alt="Screenshot 2024-10-30 at 4 00 51 PM" src="https://github.com/user-attachments/assets/df690b1f-0138-48c9-8382-fe8c155c9d46">
<img width="1470" alt="Screenshot 2024-10-30 at 4 15 25 PM" src="https://github.com/user-attachments/assets/97ddfde1-a9ad-4f33-af46-026f956d94d2">
<img width="1470" alt="Screenshot 2024-10-30 at 4 15 48 PM" src="https://github.com/user-attachments/assets/9361da85-2f5e-41d8-9add-7c40f14686ea">

## Technologies

This project leverages the following technologies:

- **React**: For building a responsive and dynamic user interface.
- **Ant Design**: For consistent styling and layout.
- **AG charts**: For creating interactive data visualizations.
- **React Icons**: For a cohesive icon set.
- **React Router**: For navigating between dashboard pages.

## Installation

To get this project running locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone git@github.com:Mukesh-Sonu/InsightPro-Dashboard.git
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To run the development server:

```bash
npm start
```
## Project Structure

The project follows a modular component-based structure to improve reusability and maintainability. Here’s an overview:

### Detailed Breakdown

- **`components/`**: Contains all UI components, organized by function and scope for maintainability.
  - **`common/`**: Holds common utilities, wrappers, and shared configurations.
  - **`hooks/`**: Contains custom React hooks for reusable logic.
  - **`infoSidebar/`**: Handles additional information sections for the sidebar.
  - **`molecules/`**: Small, reusable UI elements like notifications and contacts.
  - **`Insights/`**: Insights-specific components, broken down by atomic design principles (atoms, molecules, organisms).
  - **`navbar/`**: Contains the main navigation bar for the application.
  - **`orders/`**: Manages the orders page and related components.
  - **`sidebar/`**: Organizes sidebar structure and components, including user profile and activity lists.

- **`context/`**: Houses React Context for global state management, ensuring a single source of truth for state across components.

- **`layouts/`**: Contains layout components that define general structures for different pages.

- **`App.jsx`**: Main component that serves as the entry point for the app.

- **`main.jsx`**: Root file responsible for rendering the app to the DOM.

