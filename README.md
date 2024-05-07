# News App

This React-based web application provides a platform for displaying curated news articles. It offers features like fetching news data from an API, showcasing breaking news, top headlines, and news categorized by topics such as politics and sports.

## Installation

To run this project locally, ensure you have Node.js and npm (Node Package Manager) installed on your system. If not, you can download and install them from [here](https://nodejs.org/).

Follow these steps after installing Node.js and npm:

1. **Clone Repository**: Clone this repository to your local machine.

2. **Navigate to Project Directory**: Open your terminal and navigate to the project directory.

3. **Install Dependencies**:

    ```bash
    npm install
    ```

    This command installs all the required dependencies listed in the `package.json` file.

### Client-Side Dependencies:

- `react`: JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React.
- `react-scripts`: Contains scripts and configurations used by Create React App.
- `react-responsive-modal`: Provides a responsive modal component for React.
- `styled-components`: Library for styling React components with CSS.
- `@fortawesome/fontawesome-svg-core`, `@fortawesome/free-solid-svg-icons`, `@fortawesome/react-fontawesome`: Libraries for using fontawesome icons.

### Additional Dependencies:

- `@fortawesome/free-brands-svg-icons`: Fontawesome icons for various brands.

4. **Start Development Servers**:

   For Server-side:

    ```bash
    npm run devStart
    ```

   For Client-side:

    ```bash
    npm run start
    ```

    These commands start the development servers for both the server-side and client-side components of the application.

5. **Usage**:

    - Upon running the application, you'll see a navigation bar with options to view different categories of news.
    - Clicking on a category (e.g., Politics or Sports) will display news articles related to that category.
    - The Breaking News section showcases the latest breaking news.
    - The Top Headlines section displays top news headlines.
    - The News section presents news articles based on the selected category.
    - You can click on individual news articles to view more details.

Enjoy exploring the world of news with the News App!

