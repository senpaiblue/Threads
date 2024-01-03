import * as React from 'react';
import { Thread } from '../types/threads';
import { View } from 'react-native';
import { Text } from './Themed';
import {Ionicons, Feather, AntDesign, FontAwesome} from "@expo/vector-icons"
import {MaterialIcons} from "@expo/vector-icons"
import { timeAgo } from '../utils/time-ago';


export default function ThreadsItem(thread:Thread):JSX.Element{
  return(
    <View>
      <Text>
        {thread.author.username}
        <View>
         <PostHeading name={thread.author.name} createdAt={thread.createdAt} verified={thread.author.verified}/>
         <PostFooter replies={thread.repliesCount} likes={thread.likesCount} />
        </View>
      </Text>
    </View>
  )
}

function PostHeading({name,createdAt,verified}:{
 name:string;
 createdAt:string;
 verified:boolean;
}) {
 return(
  <View
  style={{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
    width: "100%",
  }}
>
  <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
    <Text style={{ fontWeight: "500" }}>{name}</Text>
    {verified && (
      <MaterialIcons name="verified" size={14} color="#60a5fa" />
    )}
  </View>
  <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
    <Text style={{ color: "gray" }}>{timeAgo(createdAt)}</Text>
    <Feather name="more-horizontal" size={14} color="gray" />
  </View>
</View>
);
}
export function PostFooter({
  replies,
  likes,
}: {
  replies: number;
  likes: number;
}) {
  return (
    <Text style={{ color: "gray" }}>
      {replies} replies · {likes} likes
    </Text>
  );
}
