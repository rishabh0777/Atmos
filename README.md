
# Atmos Weather Web App

[![Website](https://img.shields.io/website-up-down-green-red/https/rishabh0777.github.io/Atmos.svg)](https://rishabh0777.github.io/Atmos/)

Atmos is a weather web application built using React and Tailwind CSS, designed to provide users with accurate and up-to-date weather forecasts. The app includes components for today's 3-hour forecast and a 5-day forecast. Navigation within the app is managed using React Router.

## Features

- **Real-time Weather Information**: Get current weather data for any city.
- **3-Hour Forecast**: View detailed weather forecasts for the next few hours.
- **5-Day Forecast**: Check the weather for the next five days.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Live Demo

Check out the live demo of the app [here](https://rishabh0777.github.io/Atmos/).

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    \`\`\`sh
    git clone https://github.com/rishabh0777/Atmos.git
    cd Atmos
    \`\`\`

2. **Install dependencies**:
    \`\`\`sh
    npm install
    \`\`\`

3. **Start the development server**:
    \`\`\`sh
    npm run dev
    \`\`\`

    The app will be available at \`http://localhost:3000\`.

## Project Structure

\`\`\`
.vscode
dist
node_modules
public
  └── 404.html
src
  └── assets
  └── components
    └── Dashboard.jsx
    └── Nav.jsx
    └── Right.jsx
    └── FiveDaysForecast.jsx
    └── TodayForecast.jsx
    └── ThreeHour.jsx
    └── Daily.jsx
  └── contexts
    └── DataContext.jsx
    └── InputContext.jsx
    └── WeatherContext.jsx
  └── App.jsx
  └── index.css
  └── main.jsx
.eslintrc.cjs
.gitignore
index.html
package-lock.json
package.json
postcss.config.js
README.md
tailwind.config.js
vite.config.js
\`\`\`

## Setup Tailwind CSS with Vite

This project uses Tailwind CSS for styling, integrated with Vite for a fast and efficient development setup. Below are the key configuration files:

### `tailwind.config.js`
\`\`\`javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

### `postcss.config.js`
\`\`\`javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
\`\`\`

### `vite.config.js`
\`\`\`javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Atmos/', // Base path for GitHub Pages
})
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue.

## License

This project is licensed under the MIT License.
