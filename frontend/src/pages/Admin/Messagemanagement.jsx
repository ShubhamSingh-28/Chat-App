import { AdminLayout } from "../../components/Applayout/AdminLayout"
import Table from '../../components/shared/Table'
import { Avatar, Box, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import {dashboardData} from '../../constants/sampleData';
import {fileFormat, transformImage} from '../../lib/features';
import moment from "moment";
import {Render} from '../../components/shared/Render'
const columns = [
  {
    field:"id",
    headerName: "ID",
    headerClassName:"table-header",
    width:200,
  },
  {
    field:"attachments",
    headerName: "Attachments",
    headerClassName:"table-header",
    width:200,
    renderCell:(params)=>{

      const {attachments }=params.row;
      return attachments ?.length > 0 ? attachments.map(i=>  {

        const url = i.url;
        const file = fileFormat(url);
        return <Box>
          <a href={url} download target="_blank" style={{
            color:"black",
          }}>
            {Render(file, url)}
          </a>
        </Box>
      }
        ) :"No Attachment";
  }
  },
  {
    field:"content",
    headerName: "Content",
    headerClassName:"table-header",
    width:400,
  },
  {
    field:"sender",
    headerName: "Sent By",
    headerClassName:"table-header",
    width:200,
    renderCell:(params)=>(
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
    <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
    <span>{params.row.sender.name}</span>
      </Stack>
    )
  },
  {
    field:"chat",
    headerName: "Chat",
    headerClassName:"table-header",
    width:220,
  },
  {
    field:"groupChat",
    headerName: "group Chat",
    headerClassName:"table-header",
    width:100,
  },
  {
    field:"createdAt",
    headerName: "Time",
    headerClassName:"table-header",
    width:250,
  }
];

 const Messagemanagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(()=>{
    setRows(dashboardData.messages.map(i=> ({...i,id:i._id,
      sender:{
      name:i.sender.name,
      avatar:transformImage(i.sender.avatar),
    },
    createdAt:moment(i.createdAt).format("MMM Do YYYY, h:mm:ss a"),
  })))
  },[])

  return (
    <AdminLayout>
        <Table heading={"All Messages"} columns={columns} rows={rows} rowHeight={200}/>
    </AdminLayout>
  )
}
export default Messagemanagement