import Header from "./Header";
import Title from "../shared/Title";
import { Grid  } from "@mui/material";
import ChatList from "../specific/ChatList";
import {samplechats} from "../../constants/sampleData"
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";
const AppLayOut = () =>(WrappedComponent )=> {
  // eslint-disable-next-line react/display-name
  return (props) => {

    const params = useParams();
    const  chatId = params.chatId;

    const handleDeleteChat =(e, _id, groupChat) =>{
      e.preventDefault();
      console.log("Deletechat",_id,groupChat);
    }
    return (
      <>
        <Title />
        <Header />
        <Grid container sx={{ height: "calc(100vh - 4rem)" }}>
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <ChatList chats={samplechats} chatId={chatId}
           handleDeleteChat= {handleDeleteChat}/>
          </Grid>

          <Grid item xs={12} sm={8} md={5} lg={6}>
            <WrappedComponent {...props} />
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.87)",
            }}
          >
            <Profile/>
          </Grid>
        </Grid>
      </>
    );
  };
};

export  default AppLayOut;
