import ViewDayIcon from '@mui/icons-material/ViewDay';
import StyleIcon from '@mui/icons-material/Style';
import HelpIcon from '@mui/icons-material/Help';
export const nav_data = [
  {
    name:'Cards',
    link:"#",
    icon: <ViewDayIcon  sx={{color:'#fff'}}/>,
    drowpDown:[
      {
        title:"My Cards",
        link:"/my-cards",
      }
    ]
  },
  {
    name:'Templates',
    link:"#",
    icon: <StyleIcon  sx={{color:'#fff'}}/>,
    drowpDown:[
      {
        title:"QR Codes",
        link:"/qrcodes"
      },
      {
        title:"Wallet passes",
        link:"/wallet"
      }
    ]
  },
   {
    name:'Helps',
    icon: <HelpIcon  sx={{color:'#fff'}}/>,
    link:"/help",
    drowpDown:[]
  }
]