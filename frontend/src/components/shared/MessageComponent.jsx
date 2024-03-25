import { Box, Typography } from "@mui/material";
import moment from "moment";
import { memo } from "react";
import { fileFormat } from '../../lib/features'; // assuming fileFormat is imported correctly
import { Render } from "./Render";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const samesender = sender?._id === user?._id;
const timeAgo = moment(createdAt, "YYYY-MM-DDTHH:mm:ss.SSSZ").fromNow();

  return (
    <div
      style={{
        alignSelf: samesender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        borderRadius: "5px",
        color: "black",
        padding: "0.5em",
        width: "fit-content",
      }}
    >
      {!samesender && (
        <Typography color={"#2694ab"} fontWeight={"600"}>
          {sender.name}
        </Typography>
      )}

      {content && <Typography>{content}</Typography>}

      {attachments?.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);

          return (
            <Box key={index}>
              <a
                href={url}// Fix: Provide the URL for downloading
                target="_blank"
                download
                style={{
                  color: "black",
                }}
              >
                <Render file={file} url={url} /> {/* Pass file and url as props */}
              </a>
            </Box>
          );
        })}

      <Typography variant="caption" color={"text.secondary"}>
        {timeAgo}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);
