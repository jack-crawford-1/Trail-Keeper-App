# Trail-Keeper-App

Trail keeper is a feature-rich web application currently in development, designed to make planning and coordinating hikes a little easier, by providing detailed information and resources about trails, events, training modules, and forums.

See source code:


[https://github.com/jack-crawford-1/trail-keeper-client](url)

[https://github.com/jack-crawford-1/trail-keeper-server](url)


<img width="1460" alt="image 6" src="https://github.com/user-attachments/assets/124b6bd8-0e49-4c2a-bfa0-4475ed2d3665">
Current dashboard mockup with maps component integrated

##

## creating a custom map write-up
In this post, I&apos;ve tried to walk through my process in
            integrating GeoJSON data with Google Maps. By leveraging libraries
            like Proj4 for coordinate conversion and creating a topographical
            overlay with LINZ data, I managed to create a functional map
            component that displays hiking routes and points of interest [https://jackcrawford.co.nz/articles/custom-maps](url)


<img width="620" alt="image 2" src="https://github.com/user-attachments/assets/c9dd4240-5de2-46fb-a13e-c75730d6e359">


## Tech Stack:
### Frontend:
* **React**: For building the user interface.
* **React Router**: For client-side routing.
* **Vite**: For a fast development server and build tool.
* **Tailwind CSS**: For styling the components.
* **TypeScript**: For type safety and improved development experience.
* **react-google-maps/api**
* **googlemaps/js-api-loader**
* **Dotenv**
* **Proj4** for coordinate conversion
* **LINZ and DOC data** for map overlays

### ⠀Backend:
* **Node.js**: For running the server.
* **Express**: For building the API routes.
* **PostgreSQL**: As the database for storing application data.
* **Axios**: For making HTTP requests from the backend.
* **Nodemon**: For automatic server restarts during development.
* **bcrypt**: For hashing passwords.
* **jsonwebtoken**: For handling JWT tokens.
* **cookie-parser**: For parsing cookies.
* **Chai, Mocha, Supertest, Nock**: For testing.
* **NYC**: For code coverage.

### ⠀Development Tools:
* **ESLint**: For linting JavaScript and TypeScript code.
* **Prettier**: For code formatting.
* **autoprefixer**: For handling vendor prefixes in CSS.

## Planned Key Features:
1. User Management: Registration, login, and user profile management.
2. Interactive maps with offline route planning, collaboration, topographical details
3. Trail Reports: Users can post and view reports about trail conditions.
4. Events Management: Users can create and join hiking events.
5. Forum: Users can participate in discussions about hiking and trails.
6. Volunteer Management: Users can volunteer their skills for trail maintenance.

initial spacing mockup
<img width="1468" alt="image 3" src="https://github.com/user-attachments/assets/3fd42edb-2064-41b0-984b-7eb4b5197bac">



