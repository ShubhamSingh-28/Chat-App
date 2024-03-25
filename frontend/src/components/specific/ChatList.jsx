/* eslint-disable react/prop-types */
import ChatItem from "../shared/ChatItem";
import { Stack } from '@mui/material';
const ChatList = ({
  // eslint-disable-next-line react/prop-types
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "1",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"} overflow={"auto"} height={"90vh"}>
      {
        chats?.map((data, index)=>{
          const {avatar,_id, name, groupchat, members}=data;
          const newMessageAlert = newMessagesAlert.find((alert) => alert.chatId === _id);
          const isOnline = members?.some((member) => onlineUsers.includes(_id));

          return <ChatItem newMessageAlert={newMessageAlert}
            isOnline={isOnline} 
            avatar={avatar}
            name={name}
            _id={_id}
            key={_id}
            groupChat={groupchat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
            index={index}/>
        })
      }
    </Stack>
  );
};

export default ChatList;
