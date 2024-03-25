/* eslint-disable react-refresh/only-export-components */
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "../../assets/StyledComponents";
import { memo } from "react";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = null, // Initialize as null if optional
  name,
  _id,
  groupChat = false,
  isOnline,
  sameSender,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  const chatItemStyles = {
    display: 'flex',
    gap: "1rem",
    alignItems: 'center',
    padding: "1rem",
    borderBottom: "1px solid #f0f0f0",
    backgroundColor: sameSender ? "black" : "unset",
    color: sameSender ? "white" : "unset",
    position: "relative",
  };

  return (
    <Link
      style={{ padding: "0" }} // Use style prop for inline styles
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <div style={chatItemStyles}>
       <AvatarCard avatar={avatar}/>

        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && newMessageAlert.count ? (
  <Typography>{newMessageAlert.count} New Messages</Typography>
) : null}

        </Stack>

        {isOnline && (
          <Box
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
