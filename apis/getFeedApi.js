
const API_KEY = "47334154-d7ec99e07ae673cf0f4d20f66";

export default async function getFeedApi(page = 1){
    const url = "https://pixabay.com/api/?key=" + API_KEY  +`&page=${page}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        

        const feed = json.hits.map( ({
            id,
            webformatURL,
            likes,
            user,
            userImageURL,
            comments
        }) => {
            return { 
                id:id,
                webformatURL: webformatURL,
                likes: likes,
                user: user,
                userImageURL: userImageURL,
                commentCount: comments,
                comment: "has commented to this post"
            };
        }) 
        return feed;


    } catch (error) {
        console.error(error.message);
    }

}