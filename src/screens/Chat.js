import { useRoute } from "@react-navigation/native";

import { GiftedChat } from "react-native-gifted-chat";
import { useCallback, useEffect, useState } from "react";

//importação do firebase e database
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { database } from "../config/firebase";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const route = useRoute();
  const { name } = route.params;

  useEffect(() => {
    async function getMessages() {
      const values = query(
        collection(database, "chats"),
        orderBy("createdAt", "desc")
      );
      onSnapshot(values, (snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          }))
        )
      );
    }
    getMessages();
  }, []);

  //função que aciona assim que envia a mensagem no aplicativo
  const mensagemEnviada = useCallback((messages = []) => {
    setMessages((previousMessages) => {
      GiftedChat.append(previousMessages, messages);
    });
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(database, "chats"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(msg) => mensagemEnviada(msg)}
      user={{
        _id: name,
      }}
    />
  );
}
