<a id="readme-top"></a>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li >eCommerce Coffee</li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project
<div align="center">
<h2>eCommerce Coffee</h2>
</div>

[![Welcome to eCommerce Coffee][product-screenshot]](http://146.190.185.60/)

This full stack web application simulates an eCommerce "coffee and tea" website.

I built this app as a portfolio project in order to refresh my React.js and Redux Toolkit programming skills. 
I also wanted to improve my mobile responsiveness skills. And, the app uses Redux to store any items selected for purchase 
from the different product pages. Placing an order only clears all of the items from the store. The frontend application is built using Vite.js.  

The backend of the application uses an Express.js server and a Postgresql database. I used Docker to build images for the frontend, db, and backend directories of the app. A docker-compose file is also available within this repo to streamline the startup of development versions of the app. This website is currently hosted on a Ubuntu Linux virtual server from Digital Ocean where I learned a lot about production deployments.  

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* [![React][React.js]][React-url]
* [![React-Router][React-router.js]][React-Router-url]
* [![ReactStrap][Reactstrap.js]][Reactstrap-url]
* [![ReactIcons][ReactIcons.js]][ReactIcons-url]
* [![Redux][Redux-toolkit.js]][Redux-url]
* [![Vite][Vite.js]][Vite-url]
* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![Postgresql][Postgresql.org]][Postgresql-url]
* [![Docker][Docker.com]][Docker-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

 

### Prerequisites

The below software packages need to be installed on your local machine prior to starting the application. 
* Node.js <br />
  Open a terminal and verify the version of Node.js on your local machine.
  ```sh
    node -v
  ```
  This repo was created using Node.js version 20.16. <br />You may consider updating your version of Node.js if your version is old.
  <br /> <br />
  For more information about installing Node.js, please refer to this link [https://nodejs.org/en/learn/getting-started/how-to-install-nodejs](hhttps://nodejs.org/en/learn/getting-started/how-to-install-nodejs) 

* npm (Node Package Manager)<br />
  Also verify the version of NPM that is installed on your machine  
  ```sh
    npm -v
  ```
  You can update npm to the latest version by using the following command:
  ```sh
  npm install npm@latest -g
  ```
* PostgreSQL <br />
  Please visit the Postgresql.org/download website to download the installer used for your machine's operating system. <br />
  <br />
  **Please Note: <br />
  When you install PostgreSQL, you will be asked to provide a password. Please keep this password in a safe place because
  you will need it to connect to any database you create. <br />   

  Here is a link to the installers page: <br />
  [https://www.postgresql.org/download/](https://www.postgresql.org/download/) <br /> 

* pgAdmin4 <br />
  pgAdmin4 is a graphical interface that simplifies the creation, maintenance and use of database objects. 
  If you do not have much experience with using psql CLI tool, I recommend that you download pgAdmin4 to your local machine. 
  Here is a link to the download page: <br /> 
  [https://www.pgadmin.org/download/](https://www.pgadmin.org/download/) <br /> 
 

* Docker Desktop ( Optional - It is very easy to use docker ! ) <br />
  If you want to run this application using docker containers, you must have Docker Desktop installed on your local machine. <br />
  Please visit https://docker.com/get-started to download and install Docker Desktop for your operating system.
  


### Installation

1. Verify that your local machine has the necessary prerequisites installed.
2. Open a terminal on your local machine and clone the github repo.
   ```sh
   git clone https://github.com/jeffkarr/ecom-coffee-v2.git
   ```
3. Using the open terminal, cd into the /backend folder.
4. Install NPM packages for the backend server.
   ```sh
   npm install
   ```
5. Using a code editor, navigate to the /backend folder and create a .env file.
6. Paste the following env vars into the newly created .env file. Provide unique values for each of the variables.
    ```sh
      PROD_DB_HOST="uniquevalue"
      PROD_DB_PORT=9999
      PROD_DB_USER="uniquevalue"
      PROD_DB_PASSWORD="uniquevalue"
      PROD_DB_NAME="uniquevalue"
      DEV_DB_HOST="uniquevalue"
      DEV_DB_PORT=9999
      DEV_DB_USER="uniquevalue"
      DEV_DB_PASSWORD="uniquevalue"
      DEV_DB_NAME="uniquevalue"
      NODE_ENV="development" 
      SERVER_PORT=8888
    ```
7. If you are not familar with using Postgres, please read the following article from freeCodeCamp or use the pgAdmin4 desktop
   app. <br />
    [https://www.freecodecamp.org/news/manage-postgresql-with-psql/](https://www.freecodecamp.org/news/manage-postgresql-with-psql/) <br /> <br />

8. Please execute the init.sql script that is located in the /db folder of this repo using either the psql CLI tool or pgAdmin4
   app. <br />
   This script creates and populates 4 tables that are used by the application. <br />

9. In the open terminal, type 'npm start' to start the backend server. <br />
  You should see in the console that the server is running on the port you specified in the .env file for SERVER_PORT. <br />

10. Using a code editor, navigate to the /frontend/src/ folder and create a .env file within the /src folder. <br />

11. Paste the following environment variables into the newly created .env file: 
    ```sh
      VITE_REACT_APP_API_DEV_URL="<your backend hostname and server port>"  (example: "http://localhost:5000") <br />
      VITE_REACT_APP_API_PROD_URL="<your production domain name or public IP address>"  (example: "example.com" or "http://123.456.789.10" )
      VITE_NODE_ENV="development"  
    ``` 
    These variables allow the frontend server to communicate with the backend server. <br /> 

12. Using a code editor, please navigate to the root of the project and create a .env file. <br />

13. Paste the following environment variables into the newly created .env file: 
  ```sh
    DB_HOST="ecomm_db"
    DB_PORT=5432
    DB_USER="postgres"
    DB_PASSWORD="postgres"
    DB_NAME="postgres"
    DB_URL="postgresql://postgres:postgres@ecomm_db:5432/postgres"
    SERVER_PORT=4100
  ```
  This .env file is used by the docker-compose command.<br />

14. Open a second terminal, and cd to your project folder. Then, cd into the /frontend folder. <br />

15. In the open second terminal, type "npm start". <br />
  This will start the web server for the front end of the application. <br />

16. Open a web browser and type "http://localhost:3000" in the browser's address bar to view the running application. <br />

17. To stop the servers, type Ctrl+C within each open terminal.  

18. If you choose to start the application using docker compose commands, please read the following steps <br />

19. Please turn on the Docker Desktop application on your local machine.

20. Open a terminal, then cd into the root directory of the project. Then, type the following command: 
  ```sh
    docker compose build     
  ```
21. After the docker compose build successfully finishes, type the following command: 
  ```sh
    docker compose up
  ```
22. Open a web browser and type "http://localhost:3000" in the browser's address bar to view the running application. <br />

23. To stop the containers, type Ctrl+C in the open terminal. <br />
  The console should indicate that the containers have stopped. <br />

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](/LICENSE) for more information.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Jeff Karr @ LinkedIn.com - [https://www.linkedin.com/in/jeffrey-a-karr/](https://www.linkedin.com/in/jeffrey-a-karr/) 

Project Link: [https://github.com/jeffkarr/ecom-coffee-v2](https://github.com/jeffkarr/ecom-coffee-v2)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [Img Shields](https://shields.io)
* [React Icons](https://react-icons.github.io/react-icons/search)
* [How to Get Started with Docker ](https://www.youtube.com/watch?v=iqqDU2crIEQ&t=1002s)
* [Digital Ocean Hosting](https://www.digitalocean.com/)
* [Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[forks-shield]: https://img.shields.io/github/forks/jeffkarr/ecom-coffee-V2.svg?style=for-the-badge
[forks-url]: https://github.com/jeffkarr/ecom-coffee-v2/forks
[stars-shield]: https://img.shields.io/github/stars/jeffkarr/ecom-coffee-V2.svg?style=for-the-badge
[stars-url]: https://github.com/jeffkarr/ecom-coffee-V2/stargazers
[issues-shield]: https://img.shields.io/github/issues/jeffkarr/ecom-coffee-V2.svg?style=for-the-badge
[issues-url]: https://github.com/jeffkarr/ecom-coffee-V2/issues
[license-shield]: https://img.shields.io/github/license/jeffkarr/ecom-coffee-V2.svg?style=for-the-badge
[license-url]: https://github.com/jeffkarr/ecom-coffee-V2/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jeffrey-a-karr/
[product-screenshot]: /frontend/public/images/ecom-coffee-med-400.jpg
[mit-license]: /LICENSE

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[React-Router.js]: https://img.shields.io/badge/react--router.js-563D7C?style=for-the-badge&logo=reactrouter&logoColor=#CA4245
[React-Router-url]: https://reactrouter.com/en/main
[Reactstrap.js]: https://img.shields.io/badge/Reactstrap.js-35495E?style=for-the-badge&logo=reactbootstrap&logoColor=4FC08D
[Reactstrap-url]: https://reactstrap.github.io/?path=/story/home-installation--page
[ReactIcons.js]: https://img.shields.io/badge/react--icons-DD0031?style=for-the-badge&logo=react&logoColor=white
[ReactIcons-url]: https://react-icons.github.io/react-icons/
[Redux-Toolkit.js]: https://img.shields.io/badge/redux--toolkit.js-4A4A55?style=for-the-badge&logo=redux&logoColor=FF3E00
[Redux-url]: https://redux-toolkit.js.org/
[Vite.js]: https://img.shields.io/badge/Vite.js-A257FF?style=for-the-badge&logo=vite&logoColor=yellow
[Vite-url]: https://vitejs.dev/
[Node.js]: https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Postgresql.org]: https://img.shields.io/badge/Postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[Postgresql-url]: https://www.postgresql.org/
[Docker.com]: https://img.shields.io/badge/docker-0769AD?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/