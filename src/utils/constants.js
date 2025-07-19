const GOOGLE_API_KEY = "AIzaSyDtu02NNn9D2GzGq4KA-2_8dkiiUdZ2k88"; // Removed extra 'A' at beginning

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`;
