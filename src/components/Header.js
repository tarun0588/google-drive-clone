import React from "react"
import "../css/header.css"
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = ({photoURl}) => {
  return (
     <div class = "header">
          <div className="header__logo">
               <img src="https://logowik.com/content/uploads/images/google-drive-new1266.jpg" alt="Google Drive" />
               <span>Drive</span>
           </div>
          <div className="header__search">
               <SearchIcon/>
               <input type="text" placeholder="Search in Drive"/>
               <FormatAlignCenterIcon/>
          </div>
          <div className="header__icons">
               <span>
                    <HelpOutlineIcon/>
                    <SettingsIcon/>
               </span>
               <span>
                    <AppsIcon/>
                    <AccountCircleIcon src={photoURL}/>
               </span>

          </div>     

     </div>
  
  
  )
}

export default Header