# Life Countdown

## Description

Life Countdown is a powerful and insightful React-based web application that provides a unique visual representation of your life in various unit of time. By leveraging the capabilities of React and the utility-first styling of Tailwind CSS, this app offers an interactive and responsive user interface that encourages users to reflect on the passage of time and make the most of their lives.

## Features

- **Interactive Life Visualization**: A grid-based representation of your life in various time units.
- **Customizable Birth Date**: Input your birth date to personalize the visualization.
- **Real-time Updates**: The grid updates in real-time as you input or change your birth date.

## Technical Stack

- **React**: For building a dynamic and efficient user interface.
- **Tailwind CSS**: For rapid UI development with utility-first CSS.
- **Date-fns**: For precise and easy date manipulations.
- **React Hooks**: Utilizing useState and useEffect for state management and side effects.

## Project Structure

```
life-countdown/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── TimeUnit.jsx
│   │   ├── PositiveCard.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Input.jsx
│   │       └── Label.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
├── README.md
├── package.json
├── tailwind.config.js
└── jsconfig.json
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
2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes the single build dependency from your project.
- `npm run deploy`: Deploys the app to GitHub Pages.

## Deployment

This project is configured for easy deployment to GitHub Pages:

1. Update the `homepage` field in `package.json`:
   ```json
   "homepage": "https://mamertofabian.github.io/life-countdown"
   ```
2. Run the deploy script:
   ```
   npm run deploy
   ```

This builds the app and pushes it to the `gh-pages` branch of your GitHub repository.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Date-fns](https://date-fns.org/)
- [GitHub Pages](https://pages.github.com/)

## Contact

Mamerto Fabian - [@mamertofabian](https://twitter.com/mamertofabian)

Project Link: [https://github.com/mamertofabian/life-countdown](https://github.com/mamertofabian/life-countdown)

## Learn More

To dive deeper into the technologies used in this project, check out the following resources:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)
- [GitHub Pages Deployment](https://create-react-app.dev/docs/deployment/#github-pages)
