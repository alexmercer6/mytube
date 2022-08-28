import React, { useEffect, useState } from "react"
import Video from "./Video"

function Feed() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
                "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
            },
        }
        fetch(
            "https://youtube-v31.p.rapidapi.com/search?q=music&part=snippet%2Cid&regionCode=US&maxResults=2&order=date",
            options
        )
            .then((response) => response.json())
            .then((response) => setVideos(response.items))
            .catch((err) => console.error(err))
    }, [])

    if (!videos) {
        return (
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                Loading...
            </div>
        )
    }

    console.log(videos)

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
            }}
        >
            {videos.map((video, index) => {
                return (
                    <Video
                        thumbnailURL={video.snippet.thumbnails.medium.url}
                        title={video.snippet.title}
                        description={video.snippet.description.slice(0, 60)}
                    />
                )
            })}
        </div>
    )
}

export default Feed
