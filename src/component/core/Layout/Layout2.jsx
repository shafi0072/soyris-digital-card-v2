import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from '../Shared/Navbar';
import Sidebar from '../Shared/Sidebar';
import { nav_data } from '@/src/constant/Navigation';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { useRouter } from 'next/router';
import RightSidebar from '../Shared/RightSidebar';
import SubNavbar from '../Shared/SubNavbar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import QrCodeCard from '../../app/Root/QrCodes/QrCodeCard';
// google analytics
import { Analytics } from '@vercel/analytics/react';



const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Layout2 = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [expand, setExpand] = React.useState(-1)
  const router = useRouter();
  const styles = {
    paper: {
      background: "blue"
    }
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const hnadleLogout= ()=>{
    localStorage.clear();
    window.location.reload();
  }
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton> */}
          <Navbar />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader >
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon  style={{color: 'white'}}/> : <ChevronLeftIcon  style={{color: 'white'}}/>}
          </IconButton> */}
        </DrawerHeader>
        <Divider />
        <List>
          {nav_data.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }} onClick={() => setExpand(index)}>
              <ListItemButton 
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                style={{ textAlign: 'left' , color: 'white' }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item?.icon}
                </ListItemIcon>
                <ListItemText primary={item?.name} sx={{ opacity: open ? 1 : 0 }} />
                {item?.drowpDown?.length > 0 && <ExpandMoreRoundedIcon />}
              </ListItemButton>
              {expand === index && <List>

                {item?.drowpDown?.map((subItem) => <ListItem onClick={() => router.push(subItem?.link)}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
style={{color: 'white'}}
                  >

                    <ListItemText primary={subItem?.title} sx={{ opacity: open ? 1 : 0 }} style={{color: 'white'}} />

                  </ListItemButton>
                </ListItem>)
                }
              </List>}
            </ListItem>
          ))}
          {/* <Sidebar/> */}
        </List>
        <div className='fixed  bottom-3'>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
            style={{ textAlign: 'left' }}
            onClick={hnadleLogout} 
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <ExitToAppIcon style={{color: 'white'}} />
            </ListItemIcon>
            <ListItemText primary='Sign Out' sx={{ opacity: open ? 1 : 0 }}  style={{color: 'white'}}/>

          </ListItemButton>
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0}}>

        <div className="col-span-11  mt-[5%] ...">
          <SubNavbar />
          <div className='grid grid-cols-12 ps-8 pt-[6%] gap-8'>
            <div className="col-span-8">
              {children}
            </div>
            <div className={`bg-[#F7FAFC]  fixed w-[500px] flex justify-center z-50 ${router.pathname === '/' ? "right-0" : "right-[0%] "} `}>
              {
                (router.pathname === '/profileInfo' || router.pathname === "/design" || router.pathname === "/fields") && <RightSidebar />
              }
              {
                router.pathname === '/qrcodes' && <QrCodeCard />
              }

            </div>
          </div>
        </div>
      </Box>
      <Analytics/>
    </Box>
  );

};

export default Layout2;