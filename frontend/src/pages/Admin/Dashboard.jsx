import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { AdminLayout } from "../../components/Applayout/AdminLayout";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Group as GroupIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import moment from "moment";
import { CurveButton, SearchField } from "../../assets/StyledComponents";
import { DoughnutChart, LineChart } from "../../components/specific/Chart";

const Dashboard = () => {
  const Appbar = (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        marginY:"2rem",
        borderRadius: "1rem",
      }}
    >
      <Stack direction="row" alignItems="center" spacing="1rem">
        <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
        <SearchField placeholder="Search..." />
        <CurveButton>Search</CurveButton>
        <Box flexGrow={1} />
        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
          color="rgba(0,0,0,.7)"
          textAlign="center"
        >
          {moment().format("MMM Do YYYY")}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  );

  const Widgets = <Stack direction={{
    xs:"column",
    sm:"row",
  }}
  justifyContent={"space-between"}
  alignItems={"center"}
  margin={"2rem 0"}
  >
    <Widget title={"Users"} value={34} Icon={<PersonIcon/>}/>
    <Widget title={"Chats"} value={3} Icon={<GroupIcon/>}/>
    <Widget title={"Messages"} value={458} Icon={<MessageIcon/>}/>

  </Stack>; // Placeholder for your widgets, you can fill this with actual content

  return (
    <AdminLayout>
      <Container component="main">
        {Appbar}
        <Stack direction={{xs:"column",lg:"row"}} flexWrap="wrap" justifyContent={"center"}
        alignItems={{
          xs:"center",
          lg:"stretch"
        }}
        sx={{
          gap:"2rem"
        }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3.5rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "45rem",
              height:"25rem"
            }}
          >
            <Typography>Last Messages</Typography>


            <LineChart value={[23,34,78,98,4]}/>


          </Paper>

          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "56%" }, // Corrected syntax error here
              position: "relative",
              maxWidth: "25rem",
              height:"25rem"
            }}
          >
           <DoughnutChart labels={["Single Chats", "Group Chats"]} value={[18, 68]}/>

           <Stack 
           position={"absolute"} 
           direction={"row"}
           justifyContent={"center"}
           alignItems={"center"}
           spacing={"0.5rem"}
           width={"100%"}
           height={"100%"}
           >
            <GroupIcon/>  <Typography>Vs</Typography>

            <PersonIcon/>
           </Stack>
          </Paper>
        </Stack>

        {Widgets}
      </Container>
    </AdminLayout>
  );
};


const Widget =({title, value, Icon}) => (
<Paper sx={{
  padding:"2rem",
  margin:"2rem 0",
  borderRadius:"1rem",
  width:"20rem"
}}>
<Stack alignItems={"center"} spacing={"1rem"}>
  <Typography sx={{
    color:"rgba(0,0,0,0.7)",
    borderRadius:"50%",
    border:"5px solid rgba(0,0,0,0.9)",
    width:"5rem",
    height:"5rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }}
  >
    {value}
    </Typography>
  <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
    {Icon}
  <Typography>{title}</Typography>
  </Stack>

</Stack>
</Paper>
)
export default Dashboard;
