import { useState } from 'react'
import {
    Card,
    CardContent,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent
} from '@mui/material'
import poems from '../data/poems'

function Explore() {
    const [open, setOpen] = useState(false)
    const [selectedPoem, setSelectedPoem] = useState(null)

    const handleOpen = (poem) => {
        setSelectedPoem(poem)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setSelectedPoem(null)
    }

    return (
        <div className="container py-5">
            <h2 className="text-center fw-bold mb-4">Explore Poems</h2>

            <div className="row g-4">
                {poems.map((poem) => (
                    <div className="col-md-4" key={poem.id}>
                        <Card className="h-100">
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {poem.title}
                                </Typography>

                                <Typography variant="body2" className="mb-3">
                                    {poem.content.slice(0, 100)}...
                                </Typography>

                                <Typography variant="caption" display="block" className="mb-3">
                                    — {poem.author}
                                </Typography>

                                <Button
                                    variant="outlined" color='secondary'
                                    onClick={() => handleOpen(poem)}
                                >
                                    Read More
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
                PaperProps={{
                    sx: {
                        border: '2px solid #9b5de0',
                        borderRadius: 2
                    }
                }}
            >

                {selectedPoem && (
                    <>
                        <DialogTitle >{selectedPoem.title}</DialogTitle>
                        <DialogContent>
                            <Typography
                                variant="body1"
                                className="mb-3"
                                style={{ whiteSpace: 'pre-line' }}
                            >
                                {selectedPoem.content}
                            </Typography>

                            <Typography variant="caption">
                                — {selectedPoem.author}
                            </Typography>
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </div>
    )
}

export default Explore
