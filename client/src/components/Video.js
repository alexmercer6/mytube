import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"

import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"

import Typography from "@mui/material/Typography"

export default function Video({ title, thumbnailURL, description }) {
    return (
        <Box>
            <Card sx={{ maxWidth: 345, minHeight: "350px" }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={thumbnailURL}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}
