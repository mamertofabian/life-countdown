# Life Countdown

## Description

Life Countdown is a React-based web application that provides a visual representation of your life in weeks. It leverages the power of React and Tailwind CSS to create an interactive and responsive user interface.

## Features

- Interactive life countdown visualization
- Customizable birth date input
- Responsive design for various screen sizes
- React-based components
- Tailwind CSS for utility-first styling

## Project Structure

```
.
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── timeunit.jsx
│   │   └── ui/
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── input.jsx
│   │       └── label.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.css
│   ├── App.jsx
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── README.md
├── components.json
├── jsconfig.json
├── package.json
├── package-lock.json
└── tailwind.config.js
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/mamertofabian/life-countdown.git
   ```
2. Navigate to the project directory:
   ```
   cd life-countdown
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```
2. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run deploy`: Deploys the app to GitHub Pages

## Deployment

This project is set up to deploy to GitHub Pages. To deploy:

1. Ensure your project's `homepage` field in `package.json` is set correctly:
   ```json
   "homepage": "https://mamertofabian.github.io/life-countdown"
   ```
2. Run the deploy script:
   ```
   npm run deploy
   ```

This will build the app and push it to the `gh-pages` branch of your GitHub repository.

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Learn More

- [React documentation](https://reactjs.org/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [GitHub Pages deployment](https://create-react-app.dev/docs/deployment/#github-pages)
