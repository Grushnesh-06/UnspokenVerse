import { colors, Button } from "@mui/material"

function Login() {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Login</h2>

      <div className="row justify-content-center">
        <div className="col-md-5">
          <form className="border rounded p-4 shadow-lg d-flex flex-column gap-4 ">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
              />
            </div>

            <Button variant="outlined" color='secondary' size="large">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
