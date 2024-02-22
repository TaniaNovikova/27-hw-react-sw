function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>

      <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Star Wars</title>
        <link href='./node_modules/bootstrap/dist/css/bootstrap.min.css' rel="stylesheet" ></link>
        {/* <link rel="stylesheet" href="./CSS/style.css"></link> */}
        <link rel="stylesheet" href="./src/index.css"></link>
        <link rel="stylesheet" href="./src/App.css"></link>
        <link rel="shortcut icon" href="./assets/star-wars-icon-png-8.jpg" type="image/x-icon"></link>
      </head>

      <body class="container-fluid">
        <header>
          <nav class="fixed-top">
            <ul class="nav mt-1 ms-5">
              <li class="nav-item btn btn-danger mx-1">Home</li>
              <li class="nav-item btn btn-danger mx-1">About me</li>
              <li class="nav-item btn btn-danger mx-1">Star Wars</li>
              <li class="nav-item btn btn-danger mx-1">Contact</li>
            </ul>
          </nav>
          <h1 class="text-center py-4">Luke Skywalker</h1>
        </header>
        <main class="clearfix">
          <section class="float-start w-25 me-3">
            <img class="w-100" src="./src/assets/main.jpg" alt="Hero" />
          </section>
          <section class="float-end w-50 row border mx-1">
            <h2 class="col-12 text-center">Dream team</h2>
            <img class="col-4 p-1" src="./src/assets/friend1.jpg" alt="Friend" />
            <img class="col-4 p-1" src="./src/assets/friend2.jpg" alt="Friend" />
            <img class="col-4 p-1" src="./src/assets/friend3.jpg" alt="Friend" />
            <img class="col-4 p-1" src="./src/assets/friend4.jpg" alt="Friend" />
            <img class="col-4 p-1" src="./src/assets/friend5.jpg" alt="Friend" />
            <img class="col-4 p-1" src="./src/assets/friend6.jpg" alt="Friend" />
            <img class="bottomLeft col-4 p-1" src="./src/assets/friend7.jpg" alt="Friend" />
            <img class="col-4 p-1" src="./src/assets/friend8.jpg" alt="Friend" />
            <img class="bottomRight col-4 p-1" src="./src/assets/friend9.jpg" alt="Friend" />
          </section>
          <p class="farGalaxy">
            It is a period of civil war.
            Rebel spaceships, striking
            from a hidden base, have won
            their first victory against
            the evil Galactic Empire.

            During the battle, Rebel
            spies managed to steal secret
            plans to the Empire's
            ultimate weapon, the DEATH
            STAR, an armored space
            station with enough power
            to destroy an entire planet.

            Pursued by the Empire's
            sinister agents, Princess
            Leia races home aboard her
            starship, custodian of the
            stolen plans that can save her
            people and restore
            freedom to the galaxy....
          </p>
        </main>
        <footer class="row align-items-center">
          <div class="btn btn-danger col-2 offset-2">
            <p class="text-center m-0">Send me an <span class="email text-uppercase">email</span></p>
          </div>
        </footer>
      </body>
    </div>
  )
}

{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


export default App
