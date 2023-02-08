import axios from "axios";

const API = "AIzaSyDr1BkRSBs5YBnkpmug1j5DR3DBRRq_mlc";


export async function getVideos() {
    
    const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=KZ&key=${API}`
    )
    const videos = []
    for(const key in response.data.items) {
        const obj = {
          id: key,
          title: response.data.items[key].snippet.title,
          description: response.data.items[key].snippet.description,
          published: new Date(response.data.items[key].snippet.publishedAt),
          image: response.data.items[key].snippet.thumbnails.high.url
        };
        videos.push(obj)
    }

    return videos;
}