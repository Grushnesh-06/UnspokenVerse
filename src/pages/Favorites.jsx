import { Card, CardContent, Typography, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

function Favorites() {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Favorites</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <Card className="h-100">
            <CardContent>
              <div className="d-flex justify-content-between align-items-start">
                <Typography variant="h6">
                  Stars around my Scars
                </Typography>
                <IconButton color="error">
                  <FavoriteIcon />
                </IconButton>
              </div>

              <Typography variant="body2" className="mb-3">
                In a garden of beautiful flowers, I'll still be that dead one even if it showers...
              </Typography>

              <Typography variant="caption">
                — Grushnesh Rajagiri
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Favorites
