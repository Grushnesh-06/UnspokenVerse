import { Card, CardContent, Typography } from '@mui/material'
import poets from '../data/poets'

function Poets() {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Poets</h2>

      <div className="row g-4">
        {poets.map((poet) => (
          <div className="col-md-4" key={poet.id}>
            <Card className="h-100 text-center">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {poet.name}
                </Typography>

                <Typography variant="body2">
                  {poet.bio}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Poets
