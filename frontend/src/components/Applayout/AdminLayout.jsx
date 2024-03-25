import { Box, Drawer, Grid, IconButton, Stack, Typography, styled } from "@mui/material";
import { Close as CloseIcon, ExitToApp as ExitToAppIcon, Group as GroupIcon, ManageAccounts as  ManageAccountsIcon, Menu as MenuIcon, Message  as MessageIcon } from "@mui/icons-material";
import { useState } from "react";
import { Link as LinkComponent, useLocation, Navigate } from "react-router-dom";
import { Dashboard as DashboardIcon } from "@mui/icons-material";
import { metBlack } from "../../constants/color";

const Link = styled(LinkComponent)`
    display: flex; /* Ensure icon and text are in the same line */
    align-items: center; /* Center items vertically */
    text-decoration: none;
    border-radius: 2rem;
    padding: 1rem 2rem;
    color: black;
    &:hover {
        color: rgba(0, 0, 0, 0.54);
    }
`;

const adminTabs = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: <DashboardIcon />,
    },
    {
        name: "Users",
        path: "/admin/users",
        icon: <ManageAccountsIcon />,
    },
    {
        name: "Chats",
        path: "/admin/chats",
        icon: <GroupIcon />,
    },
    {
        name: "Messages",
        path: "/admin/messages",
        icon: <MessageIcon />,
    }
];

const Sidebar = ({ w }) => {
    const location = useLocation();

    const logoutHandler = () => {
        console.log('logOut');
    };

    return (
        <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
            <Typography variant="h5" textTransform={"uppercase"}>Chat App</Typography>
            <Stack spacing={"1rem"}>
                {adminTabs.map((tab) => (
                    <Link
                        key={tab.name}
                        to={tab.path}
                        sx={
                            location.pathname === tab.path && {
                                bgcolor: metBlack,
                                color: "white",
                                ":hover": { color: "white" }
                            }
                        }
                    >
                        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                            {tab.icon}
                            <Typography fontSize={"1.2rem"}>{tab.name}</Typography>
                        </Stack>
                    </Link>
                ))}

                
                <Link onClick={logoutHandler}>
                    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                        <ExitToAppIcon />
                        <Typography fontSize={"1.2rem"}>Logout</Typography>
                    </Stack>
                </Link>
            </Stack>
        </Stack>
    );
};

const isAdmin = true;

export const AdminLayout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    const handleMobile = () => setIsMobile(!isMobile);
    const handleClose = () => setIsMobile(false);

    if (!isAdmin) return <Navigate to="/admin" />;

    return (
        <Grid container minHeight={"100vh"} >
            <Box sx={{
                display: { xs: "block", md: "none" },
                position: "fixed",
                right: "1rem",
                top: "1rem"
            }}>
                <IconButton onClick={handleMobile}>
                    {isMobile ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            </Box>
            <Grid
                item
                md={4}
                lg={3}
                sx={{
                    display: { xs: "none", md: "block" },
                }}
            >
                <Sidebar w="100%" />
            </Grid>
            <Grid
                item
                xs={12} md={8} lg={9}
                sx={{
                    bgcolor: "#e0d8d8"
                }}
            >
                {children}
            </Grid>
            <Drawer open={isMobile} onClose={handleClose} >
                <Sidebar w="50vw" />
            </Drawer>
        </Grid>
    );
};
