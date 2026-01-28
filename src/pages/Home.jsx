import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import UVimage from '../assets/UV.jpeg'
import UVdark from '../assets/UVdark.png'

function Home() {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center align-items-center min-vh-75">
        <div className="col-md-8 text-center">

            <div
              className="home-logo mb-4"
              style={{ height: '200px' }}
            ></div>


          <h1 className="display-4 fw-bold mb-3">
            Welcome to UnspokenVerse
          </h1>
          <p className="lead mb-4">
            A space to explore emotions, poets, and words left unspoken.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/explore"
            >
              Explore Poems
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/write"
            >
              Write a Poem
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
