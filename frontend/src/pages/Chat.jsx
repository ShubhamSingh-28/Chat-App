/* eslint-disable react-refresh/only-export-components */
import { IconButton, Stack } from "@mui/material";
import AppLayout from "../components/Applayout/AppLayOut"; // Assuming correct path to AppLayout
import { Fragment, useRef } from "react";
import { grayColor, orange } from "../constants/color";
import { AttachFile as AttachFileIcon, Send as SendIcon} from "@mui/icons-material";
import { InputBox } from "../assets/StyledComponents";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessage } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";


const user ={
  _id:"ffjhgjh",
  name:"Shubham"
}
const  Chat = () => {
  const containerRef =useRef(null);

  return (
    <Fragment>
    <Stack ref={containerRef}
    boxSizing={"border-box"}
    padding={"1rem"}
    spacing={"1rem"}
    bgcolor={grayColor}
    height={"90%"}
    sx={{
      overflowX:"hidden",
      overflowY: "auto",
    }}>
      {
        sampleMessage.map(i=>(
          <MessageComponent message={i} key={i._id}  user={user}/>
        ))
      }
    </Stack>
    <form
    style={{
      height:"10%"
    }}>

      <Stack direction={"row"} height={"100%"} padding={"1rem"} alignItems={"center"} position={"relative"}>
        <IconButton sx={{
          position:"absolute",
          left:"1.5rem",
          rotate:"30deg"
        }}
        >
          <AttachFileIcon/>
        </IconButton>
        <InputBox placeholder="Type Message here..."/>

        <IconButton type="submit"
        sx={{
          rotate:"-30deg",
          backgroundColor:orange,
          color:"white",
          marginLeft:"1rem",
          padding:"0.5rem",
          "&:hover":{
            bgcolor:"error.dark"
          }
        }}>
          <SendIcon/>
        </IconButton>
      </Stack>
    </form>

    <FileMenu/>
    </Fragment>
  )
}


export default AppLayout()(Chat);