import { memo } from "react"
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material"
import {Add as AddIcon, Remove as RemoveIcon} from '@mui/icons-material'
const UserItem = ({user,handler,hendlerIsLoading, isAdded=false,  styling={}}) => {
    const {name,_id,_avatar} = user
  return (
    <ListItem >
   <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} width={"100%"} {...styling}>
    <Avatar/>
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
    >{name}</Typography>
    <IconButton
      size="small"
      sx={{
        bgcolor:isAdded?"error.main" :"primary.main",
        color: "white",
        "&:hover": { // Corrected the syntax for hover pseudo-selector
          bgcolor:isAdded?"error.main": 'primary.dark',
        },
      }}
    onClick={()=>handler(_id)}  disabled={hendlerIsLoading}>

      {
        isAdded ? <RemoveIcon /> :  <AddIcon/>
      }
       
    </IconButton>
   </Stack>
  </ListItem>
  )
}
export default memo(UserItem)