import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material"
import { sampleUsers } from "../../constants/sampleData"
import UserItem from "../shared/UserItem";
import { useState } from "react";

const AddMemberDialog = ({addMember, isLoadingAddMember, chatId}) => {
    const [members, setMembers] =useState(sampleUsers)
 const [selectedMembers, setselectedMembers] =useState([])

 const selectMemberHandler=(id)=>{
    setselectedMembers((prev)=>
    prev.includes(id)
     ? prev.filter((currElement)=> currElement !== id) 
    : [...prev,id])
  }


    const closeHandler =()=> {
        setselectedMembers([])
        setMembers([])
    }
    const addMemberSubmitHandler=()=>{
        closeHandler()
    }
  return (
    <Dialog open onClose={closeHandler}>
        <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
            <DialogTitle textAlign={"center"}>Add Member</DialogTitle>

            <Stack spacing={"1rem"}>
                {
                 members.length> 0 ? (members.map((i) =>(
                        <UserItem key={i._id} user={i} handler={selectMemberHandler}
                        isAdded={
                            selectedMembers.includes(i._id)
                        }
                        />
                    ))) :(
                        <Typography textAlign={"center"}>No Friends</Typography>
                    )
                }
            </Stack>

            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
            <Button color="error" onClick={closeHandler}>Cancel</Button>
            <Button variant="contained" disabled={isLoadingAddMember} onClick={addMemberSubmitHandler}>Submit changes</Button>
            </Stack>
        </Stack>
    </Dialog>
  )
}

export default AddMemberDialog