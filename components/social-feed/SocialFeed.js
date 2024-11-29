import { 
    StyleSheet,
    View,
    FlatList,ScrollView
} from "react-native";

import Feed from "./Feed";
import getFeedApi from "../../apis/getFeedApi";
import { useEffect, useState } from "react";



export default function SocialFeed(){
    const [feedList,setFeedList] = useState([]);
    const [page,setPage] = useState(1);
 
    useEffect(() => {
        const getFeed = async () => {
            try {
                const feeds = await getFeedApi(page);
                const date = new Date();
                const feedsWithUniqueId = feeds.map(feed => {
                    const tempFeed = feed;
                    tempFeed.id = Math.floor(
                        date.getDate() + date.getMilliseconds()
                    ).toString() + feed.id.toString()
                    return tempFeed;
                })
                setFeedList(list => [...list, ...feedsWithUniqueId]);
                saveFeedLocally(feedsWithUniqueId);
            } catch (error) {
                console.log(error)
            }
        }
        getFeed();
    },[page]);


    return (
        <View style={styles.feedContainer}>
            <FlatList
                data={feedList}
                keyExtractor={feed => feed.id}
                renderItem={itemData => <Feed feed={itemData.item} />}
                style={styles.feedList}
                onEndReached={() => setPage(page => ++page)}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    feedContainer: {
        flex: 1,
        width: '100%'
    },
   
})

