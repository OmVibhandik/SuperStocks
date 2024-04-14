# SuperStocks
### Intra-Day Stock Trader Web Application

This repository contains the source code for a web application designed for an intra-day stock trader. The application includes the following functionalities:

- A list of all NSE stocks in a table.
- Displaying the top 5 stocks today based on profits.
- A search filter for stock symbols.

The project is organized into two folders:
- **frontend**: Contains the React Vite application and Tailwind styling for the user interface.
- **backend**: Contains the Node.js application and MongoDB database for handling the data and serving the API.

## Technologies Used

- **Frontend**:
  - React Vite
  - Tailwind CSS
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB

## How to Run the Project

To run the project locally, follow the steps below:

### Prerequisites

- Ensure you have Node.js and npm (Node Package Manager) installed on your system.
- Make sure you have MongoDB running locally or have access to a MongoDB database.

### Running the Backend

1. Navigate to the `backend` directory:

    ```shell
    cd backend
    ```

2. Install the necessary dependencies:

    ```shell
    npm install
    ```

3. Start the backend server:

    ```shell
    npm start
    ```

    The server should start running on the specified port (e.g., `http://localhost:3000`).

### Running the Frontend

1. Navigate to the `frontend` directory:

    ```shell
    cd frontend
    ```

2. Install the necessary dependencies:

    ```shell
    npm install
    ```

3. Start the frontend application:

    ```shell
    npm run dev
    ```

    The application should start running on the specified port (e.g., `http://localhost:3000`).

## Additional Notes

- The application uses dummy data to represent stocks and their attributes

