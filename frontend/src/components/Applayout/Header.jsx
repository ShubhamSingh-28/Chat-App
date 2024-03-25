import { Suspense, lazy, useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Tooltip, Backdrop } from '@mui/material';
import {Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationsIcon} from '@mui/icons-material';
const Search = lazy(() => import('../specific/Search'));
const Notifications = lazy(() => import('../specific/Notifications'));
const NewGroup  = lazy(() => import('../specific/NewGroup'));
import {useNavigate} from  'react-router-dom';

const Header = () => {
 const[isMobile,setIsMobile] = useState(false);
 const[isSearch,setIsSearch] = useState(false);
 const[isNewGroup,setIsNewGroup] = useState(false);
 const[isNotification,setIsNotification] = useState(false);

  const navigate= useNavigate();

  const handleMobile = () => {
    setIsMobile(prev=>!prev);
  };
  const openSearch =()=>{
    setIsSearch(prev=>!prev);
  };
  const openNewGoup =()=>{
    setIsNewGroup(prev=>!prev);
  };

  const openNotification =()=>{
    setIsNotification(prev=>!prev);
  };


  const navigateGroup =()=>navigate( "/groups");
  const logoutHandler =()=>{};
  return (
    <>
    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
      <AppBar position='static' sx={{ bgcolor: "#ea7070" }}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ 
            display:{xs:'none', sm:"block"}, 
           }}>
            ChattU
          </Typography>

          <Box sx={{
            display:{xs:'block', sm:"none"}, 
          }}>
            <IconButton  color='inherit' onClick={handleMobile}>
              <MenuIcon/>
            </IconButton>
          </Box>


          <Box
          sx={{
            flexGrow: 1
          }}
          />
          <Box>

            <IconBtn
            title={"Search"}
            onClick={openSearch}
            icon={<SearchIcon />}
            />
            
            <IconBtn
            title={"New Group"}
            onClick={openNewGoup}
            icon={<AddIcon />}
            />

            <IconBtn
            title={"Manage Groups"}
            onClick={navigateGroup}
            icon={<GroupIcon />}
            />

            <IconBtn
            title={"Notifications"}
            onClick={openNotification}
            icon={<NotificationsIcon />}
            />

           <IconBtn
            title={"LogOut"}
            onClick={logoutHandler}
            icon={<LogoutIcon />}
            />

          </Box>
        </Toolbar>
      </AppBar>
    </Box>

    {
      isSearch && (
      <Suspense fallback={<Backdrop open/>}>
        <Search />
        </Suspense>
    )}

    {
      isNotification && (
        <Suspense fallback={<Backdrop open/>}>
        <Notifications />
        </Suspense>
    )}

    {
      isNewGroup && (
        <Suspense fallback={<Backdrop open/>}>
        <NewGroup />
        </Suspense>
    )}


    </>
  );
};

const IconBtn =({title, icon,onClick})=>{
  return(
    <Tooltip title={title}>
          <IconButton  color='inherit' size='large' onClick={onClick}>
              {icon}
            </IconButton>
            </Tooltip>
  )
}

export default Header;
