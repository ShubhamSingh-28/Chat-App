import {  Backdrop, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon, Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material";
import { bgGradient, metBlack } from '../constants/color';
import { useNavigate , useSearchParams} from 'react-router-dom'
import AvatarCard from "../components/shared/AvatarCard";
import {Menu as MenuIcon} from '@mui/icons-material'
import { Suspense, memo, useEffect, useState } from 'react';
import {sampleUsers, samplechats  } from "../constants/sampleData";
import {Link} from '../assets/StyledComponents'
import { lazy } from 'react';
import UserItem from '../components/shared/UserItem';
const ConfirmDeleteDialog = lazy(()=>import("../components/dialogs/ConfirmDeleteDialog"))
const AddMemberDialog = lazy(()=>import("../components/dialogs/AddMemberDialog"))

const isAddMember =false;

function Groups() {
  const chatId = useSearchParams()[0].get("group");

  const navigate =useNavigate();
  const navigateBack =() =>{
    navigate("/")
  };
  const [isMobileOpen, setIsMobileOpen]=useState(false)
  const [isEdit,setIsEdit] =  useState(false)

  const [confirmDelete, setConfirmDelete] = useState()

  const [groupName, setGroupName] =useState("")
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] =useState("")

  const updateGroupName =()=>{
    setIsEdit(false)
    console.log(groupNameUpdatedValue);
  }

  const openConfirmDeletehandler= ()=>{
    setConfirmDelete(true)
    console.log("Delete Group");
  }
  const closeConfirmDeleteHandler =()=>{
    setConfirmDelete(false)
  }
  const openAddmemberHandler= ()=>{
    console.log("Add Member");
  }

  const deleteHandler =()=>{
    console.log("Delete Handler");
    closeConfirmDeleteHandler()
  }

  const removeHandler =(id)=>{
    console.log("remove",id);
  }
  useEffect(()=>{
    if (chatId) {
      setGroupName(`Group Name${chatId}`)
    setGroupNameUpdatedValue(`Group Name${chatId}`)
    }

    return ()=>{
      setGroupName('')
      setGroupNameUpdatedValue('')
      setIsEdit(false)
    }
  },[chatId])
  const handleMobile= ()=>{
    setIsMobileOpen(prev =>  !prev)
  };
  const handleMobileClose=() =>setIsMobileOpen(false);
  const IconBtn= <>

    <IconButton sx={{
      display:{
        xs:"block",
        sm:"none",
        position:"fixed",
        right:"1rem",
        top:"1rem"
      }
    }}
    onClick={handleMobile}>
      <MenuIcon/>
    </IconButton>

  <Tooltip title="back">
    <IconButton  sx={{
      position:"absolute",
      top:"2rem",
      left:"2rem",
      color:"white",
      bgcolor: metBlack,
      "&:hover":{
        color: "black"
    }
    }}
    onClick={navigateBack}
    >
      <KeyboardBackspaceIcon/>
    </IconButton>
  </Tooltip>
  </>

  const GroupName =( <Stack direction={'row'} alignItems={'center'} justifyContent={"center"} spacing={"1rem"}>
    {
      isEdit? (<>
      <TextField value={groupNameUpdatedValue} onChange={(e)=> setGroupNameUpdatedValue(e.target.value)}/>
      <IconButton onClick={updateGroupName}><DoneIcon/></IconButton>
      </>) :( <>
      <Typography variant="h4">{groupName}</Typography>
      <IconButton onClick={()=> setIsEdit(true)}><EditIcon/></IconButton>
      </>)
    }
  </Stack>
  );

  const ButtonGroups = (
  <Stack
  direction={{
    xs: 'column-reverse',
    sm: 'row'
  }}
  spacing={"1rem"}
  p={{
    xs: "0",
    sm:"1rem",
    md: "1rem 4rem"
  }}
  >
    <Button size='large' color='error' startIcon={<DeleteIcon/>}  onClick={openConfirmDeletehandler}>Delete Group</Button>
    <Button size='large' variant="contained" startIcon={<AddIcon/>} onClick={openAddmemberHandler}>Add Member</Button>
  </Stack>)
  return (
    <Grid container height={"100vh"} >
      <Grid
  item
  xs={12}
  sm={4}
  sx={{
    display: {
      xs: 'none',
      sm: 'block'
    },
    overflow: 'auto',
      }}
>
  <GroupList myGroups={samplechats} chatId={chatId} />
</Grid>


      <Grid item xs={12} sm={8}
      sx={{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        position: "relative",
        padding:"1rem 3rem"
      }}
      >
        {IconBtn}

        {
          groupName && <>
          {GroupName}

          <Typography margin={"2rem"} alignSelf={"flex-start"} variant='body1'>Members</Typography>

          <Stack
          spacing={"2rem"}
          maxWidth={"45rem"}
          width={"100%"}
          boxSizing={"border-box"}
          padding={{
            sm:"1rem", 
            xs:"0",
            md:"1rem 4rem"
          }}
          height={"50vh"}
          overflow={"auto"}
          >
            {/* members */}

            {
  sampleUsers.map((user) => (
    <UserItem
      user={user}
      key={user._id}
      isAdded
      styling={{
        boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.2)",
        padding: "1rem 2rem",
        borderRadius: "1rem"
      }}
      handler={removeHandler}
    />
  ))
}


          </Stack>

          {ButtonGroups}
          </>
        }
      </Grid>


      {
        isAddMember && <Suspense fallback={<Backdrop open/>}>
          <AddMemberDialog/>
        </Suspense>
      }
      {
        confirmDelete && (<Suspense fallback={<Backdrop open/>}>
          <ConfirmDeleteDialog open={confirmDelete} handleClose={closeConfirmDeleteHandler} deleteHandler={deleteHandler}/>
        </Suspense>
      )}

      <Drawer open={isMobileOpen} onClose={handleMobileClose}
      sx={{
        display:{
          xs:"block",
          sm:"none",
        },}}
      >
        <GroupList w={"50vw"} myGroups={samplechats} chatId={chatId}/>
      </Drawer>
    </Grid>
  )
}


const GroupList = ({w = "100%", myGroups=[], chatId}) =>(
  <Stack width={w} sx={{
    backgroundImage:bgGradient,
    height:"100vh",
    overflow:"auto",
    gap:3,
  }}>
    {
      myGroups.length > 0 ? ( 
        myGroups.map((group) => <GroupListItem group={group} chatId={chatId} key={group._id} />)
      ) :(
        <Typography textAlign={"center"} padding="1rem">
          No Groups
        </Typography>
      )
    }
  </Stack>
);

const GroupListItem =memo(({group, chatId}) =>{
  const { name, avatar, _id} =group;

  return( 
  <Link to={`?group=${_id}`} onClick={e=>{
    if (chatId ===_id) {
      e.preventDefault(e);
    }
  }}>
  <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
    <AvatarCard avatar={avatar}/>
    <Typography>{name}</Typography>
  </Stack>
  </Link>
  )
});

export default Groups