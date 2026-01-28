import { Button, TextField } from '@mui/material'

function WritePoem() {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Write a Poem</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="d-flex flex-column gap-4">
            <TextField
              label="Poem Title"
              variant="outlined"
              fullWidth
            />

            <TextField
              label="Author Name"
              variant="outlined"
              fullWidth
            />

            <TextField
              label="Your Poem"
              variant="outlined"
              multiline
              rows={10}
              fullWidth
            />

            <Button variant="outlined" color='secondary' size="large">
              Post Poem
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WritePoem
