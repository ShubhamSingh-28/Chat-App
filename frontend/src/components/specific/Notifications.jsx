import { Dialog, DialogTitle, Stack, ListItem, Typography, Button,Avatar } from "@mui/material"
import { sampleNotification } from "../../constants/sampleData";
import { memo } from "react";

const Notifications = () => {
  const fiendRequestHandler =({_id,accept})=>{

  }
  return (
    <Dialog open>
      <Stack p={{ xs:"1rem",sm:"2rem"}} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {
          sampleNotification.length > 0 ? (
            sampleNotification.map((i)=> <NotificationItem sender={i.sender} _id={i.id} key={i._id} handler={fiendRequestHandler}/>)
          ) : (
          <Typography textAlign={"center"}>0 notifications</Typography>    
         )}
      </Stack>
    </Dialog>
  )
};


export const NotificationItem = memo(({ sender, _id, handler }) => {
  const {name,avatar} = sender;
  return (
    <ListItem >
   <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} width={"100%"}>
    <Avatar src={avatar}/>
    <Typography
    variant="body1"
    sx={{
        flexGlow:1,
        display:"-webkit-box",
        WebkitLineClamp:1,
        WebkitBoxOrient:"vertical",
        overflow:"hidden",
        textOverflow:"ellipsis",
        width:"100%"
    }}
    >{`${name} sent you a friend request`}</Typography>


    <Stack direction={{
      xs:"column",
      sm: "row"
    }}>
      <Button onClick={()=>handler({_id, accept:true})}>Accept</Button>
      <Button color="error" onClick={()=>handler({_id, accept:false})} >Decline</Button>
      </Stack>
   </Stack>
  </ListItem>
  )
});
export default Notifications;