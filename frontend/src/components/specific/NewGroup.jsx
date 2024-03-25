import { Dialog, DialogTitle, Stack, Typography, TextField, Button,} from "@mui/material"
import {sampleUsers} from '../../constants/sampleData';
import UserItem from "../shared/UserItem";
import {useInputValidation} from '6pp';
import { useState } from "react";
const NewGroup = () => {
  const groupName = useInputValidation("")

 const [members, setMembers] =useState(sampleUsers)
 const [selectedMembers, setselectedMembers] =useState([])
  const selectMemberHandler=(id)=>{
    setselectedMembers((prev)=>(prev.includes(id) ? prev.filter((currElement)=> currElement !== id) : [...prev,id]))
    console.log(selectedMembers);
  }
  const submitHandler=()=>{}
  return (
    <Dialog open>
    <Stack p={{ xs:"1rem",sm:"3rem"}} width={"25rem"} spacing={"2rem"}>
      <DialogTitle textAlign={"center"} variant="h4">New Group</DialogTitle>
      <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler}/>
      <Typography variant="body1">
        Members
      </Typography>
      <Stack>
      {members.map((i) =>(
            <UserItem user={i} key={i._id} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)} />
          ))}
      </Stack>

      <Stack direction={"row"} justifyContent={"space-between"} >
        <Button color="error" variant="text" size="large">Cancel</Button>
        <Button variant="contained" size="large" onClick={submitHandler}>Create</Button>
      </Stack>
    </Stack>
  </Dialog>
  )
}

export default NewGroup