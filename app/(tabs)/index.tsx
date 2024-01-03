import * as React from 'react';
import { Platform, RefreshControl, StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Lottie from "lottie-react-native"
import { createRandomUser } from '../../utils/generate-dummy-data';
import { ThreadsContext } from '../../context/thread-context';
import ThreadsItem from '../../components/ThreadsItem';

// const user = createRandomUser();
// console.log(JSON.stringify(user,null,2));
export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null)
  const threads = React.useContext(ThreadsContext)
  return (
   <SafeAreaView>
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal:10,
      paddingTop: Platform.select({android:30}),
    }}
    refreshControl={<RefreshControl refreshing={false}
    onRefresh={()=>{
      animationRef.current?.play();
    }}
    tintColor={"transparent"}/>}
    >
     <Lottie
     ref={animationRef}
     source={require("../../lottie-animations/threads.json")}
     loop={false}
     autoPlay
     style={{
      width:90,
      height:90,
      alignSelf:"center",
     }}
    //  onAnimationFinish={()=>{
    //   alert("finished")
    //  }}
     /> 
     {threads.map((thread)=>(
      <ThreadsItem key={thread.id} {...thread}/>
     ))}
    </ScrollView>
   </SafeAreaView>
  );
}

