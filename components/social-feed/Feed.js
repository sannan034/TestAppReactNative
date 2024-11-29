import {
    StyleSheet,
    View,
    Text,
    Image,
    useWindowDimensions
} from 'react-native'

import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';




export default function Feed({ feed }) {

    const { width, height } = useWindowDimensions();

    const feedImgHeight = width >= height ? 460 : 300;

    return (
        <View style={styles.feed}>
            <View style={styles.feedHeader}>
                <View style={styles.userDetails}>
                    <Image
                        source={{ uri: feed.userImageURL }}
                        style={styles.userImg}
                    />
                    <Text style={styles.userText}>{feed.user}</Text>
                </View>
                <Entypo name="dots-three-horizontal" size={24} color="white" />
            </View>
            <View style={styles.feedDetail}>
                <Image
                    source={{ uri: feed.webformatURL }}
                    style={[styles.feedImg, {height: feedImgHeight }]}
                />
                <View style={styles.feedIconContainer}>
                    <View style={styles.feedLeftIconContainer}>
                        <AntDesign name="hearto" size={24} color="white" />
                        <FontAwesome name="comment-o" size={24} color="white" />
                        <AntDesign name="sharealt" size={24} color="white" />
                    </View>
                    <View>
                        <MaterialIcons name="save-alt" size={24} color="white" />
                    </View>
                </View>
                <View style={styles.likeContainer}>
                    <Text style={styles.likeText}>{feed.likes}</Text>
                    <Text style={{ color: "white",fontWeight: "600" }}>likes</Text>
                </View>
                <View style={styles.commentContainer}>
                    <View style={styles.commentDetailsContainer}>
                        <Text style={styles.commentUser}>{feed.user}</Text>
                        <Text style={styles.commentText}>{feed.comment}</Text>
                    </View>
                    <View style={styles.viewComment}>
                        <Text style={styles.viewCommentText}>View all {feed.commentCount} comments</Text>
                    </View>
                    <View style={styles.addComment}>
                        <Image
                            source={{ uri: feed.userImageURL }}
                            style={styles.userCommentImg}
                        />
                        <Text style={styles.addCommentText}>Add a comment...</Text>
                    </View>
                </View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    feed: {
        marginBottom: 20,
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#3a3a3a',
        paddingBottom: 30
    },
    feedHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    userImg: {
        width: 30,
        height: 30,
        borderRadius: '100%'
    },
    userText: {
        color: "white"
    },
    feedDetail: {
        flex: 1
    },
    feedImg: {
        width: "100%",
    },
    likeText: {
        color: "white",
        fontWeight: "600"
    },
    feedIconContainer: {
        padding: 10,
        flex: 1,
        flexDirection: "row",
    },
    feedLeftIconContainer: {
        flex: 1,
        flexDirection: "row",
        gap: 16,
        alignItems: "center"
    },
    feedRightIconContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    userDetails: {
        width: "100%",
        flex: 1,
        gap: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        
    },
    likeContainer: {
        flex: 1,
        flexDirection: "row",
        fontWeight: "semibold",
        gap: 6,
        paddingStart: 10 
    },
    commentContainer: {
        padding: 10,
        flex: 1,
        flexDirection: "column",
        gap: 10,
    },
    commentUser: {
        fontWeight: "600",
        color: "white",
        paddingEnd: 10,
    },
    commentText: {
        color: "white"
    },
    commentDetailsContainer: {
        flex: 1,
        flexDirection: "row",
    },
    viewCommentText: {
        color: "#a9a8a8",
    }, 
    addComment:{
        flex:1,
        flexDirection: 'row',
        alignItems: "center",
        gap: 10,
    },
    userCommentImg: {
        width: 20,
        height: 20,
        borderRadius: '100%'
    },
    addCommentText: {
        color: "#a9a8a8"
    }
});

