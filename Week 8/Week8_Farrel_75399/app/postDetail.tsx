import {getPostDetail,getUserDetail,getCommentsByPost} from "@/api/api";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";

export default function PostDetail() {
  const { id, userId } = useLocalSearchParams<{
    id: string;
    userId: string;
  }>();

  const postId = Number(id);
  const user_Id = Number(userId);

  const [post, setPost] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    if (postId) getPostData();
    if (user_Id) getUserData();
    if (postId) getComments();
  }, []);

  const getPostData = () => {
    getPostDetail(postId).then((res) => {
      setPost(res.data);
    });
  };

  const getUserData = () => {
    getUserDetail(user_Id).then((res) => {
      setUser(res.data);
    });
  };

  const getComments = () => {
    getCommentsByPost(postId).then((res) => {
      setComments(res.data);
    });
  };

  return (
    <ScrollView style={{ flex: 1, padding: 15 }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
        {post?.title}
      </Text>

      <Text style={{ marginVertical: 10 }}>
        {post?.body}
      </Text>

      <Text style={{ marginTop: 10 }}>Created By:</Text>
      <Text>{user?.name}</Text>
      <Text>{user?.email}</Text>

      <Text style={{ marginTop: 20, fontWeight: "bold" }}>
        Comments:
      </Text>

      {comments.map((c) => (
        <View key={c.id} style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>{c.name}</Text>
          <Text>{c.body}</Text>
        </View>
      ))}
    </ScrollView>
  );
}