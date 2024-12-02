import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import SocialFeed from './components/social-feed/SocialFeed';



export default function App() {
  const {width,height} = useWindowDimensions();
  const paddingTop = width >= height ? 10 : 80; 
  const paddingStart = width < height ? 10 : 60; 

  return (
    <>
      <StatusBar style="light" />
      <View 
        style={[
            styles.container,
            { paddingTop: paddingTop, paddingStart: paddingStart }
        ]}
      >
        <SocialFeed/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
