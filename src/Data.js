import React, { useEffect } from 'react'
import "./css/data.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import { storage,db } from './firebase';
import firebase from "firebase";


const Data = () => {
     const [files, setfiles] = useState([]);

useEffect(() => {
     db.collection("myfiles").onSbnapshot(snapshot =>(
          setFiles(snapshot.docd.map(doc =>((
               id:doc.id,
               data:doc.data
          ))))
     ) )
}, [])

  return (
    <div className="data">
     <div className="data__header">
          <div className="data__headerLeft">
               <p>My Drive</p>
               <ArrowDropDownIcon/>
          </div>
          <div className="data__headerRight">
               <FormatListBulletedIcon/>
               <InfoOutlinedIcon/>
          </div>
     </div>
     <div className="data__content">
          <div className="data_grid">
               <div className="data__file">
                    <InsertDriveFileOutlinedIcon/>
                    <p>File Name </p>
               </div>
               {/* <div className="data__file">
                    <InsertDriveFileOutlinedIcon/>
                    <p>File Name </p>
               </div>
               <div className="data__file">
                    <InsertDriveFileOutlinedIcon/>
                    <p>File Name </p>
               </div> */}
          </div>
          <div className="data_list">
               <div className="detailsRow">
               <p><b>Name < ArrowDownwardOutlinedIcon/></b></p>
               <p><b>Owner</b></p>
               <p><b>Last Modified</b></p>
               <p><b>File Size</b></p>
              </div>          

               <div className="detailsRow">
               <p>Name <InsertDriveFileOutlinedIcon/></p>
               <p>Me</p>
               <p>Yesterday</p>
               <p>1GB</p>
              </div>                
                    
            </div>
     </div>
    </div>
  )
}

export default Data