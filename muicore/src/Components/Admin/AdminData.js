import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useState,useEffect } from 'react';
import {DisplayURL,DeleteURL} from '../URL'
// import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function AdminData() {

  const nav = useNavigate();
  const [display, setdisplay] = useState([])

  const sendata=async()=>{
    const dat=await axios.get(DisplayURL)
    setdisplay(dat.data.got)
  }
  useEffect(()=>{
    sendata();
  },[])

  // const UpDate=async({id,Fname,Lname,Email,Password,check})=>{
  //   localStorage.setItem('id',id)
  //   localStorage.setItem('Fname',Fname)
  //   localStorage.setItem('Lname',Lname)
  //   localStorage.setItem('Email',Email)
  //   localStorage.setItem('Password',Password)
  //   localStorage.setItem('check',check)
  //   nav('/Aedit')
  // }
  
  const Deleting=async(id)=>{
    await axios.delete(`http://localhost:5000/ADMIN/AdminDelete/${id}`) 
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead sx= {{bgcolor:'black'}}>
          <TableRow>
            <StyledTableCell align="center"  sx={{ color: 'white' }}>FIRST NAME</StyledTableCell>
            <StyledTableCell align="center"  sx={{ color: 'white' }}>LAST NAME</StyledTableCell>
            <StyledTableCell align="center"  sx={{ color: 'white' }}>EMAIL</StyledTableCell>
            <StyledTableCell align="center"  sx={{ color: 'white' }}>PASSWORD</StyledTableCell>
            <StyledTableCell align="center"  sx={{ color: 'white' }}>AUTHENTICATION</StyledTableCell>
            <StyledTableCell align="center"  sx={{ color: 'white' }}>EDIT</StyledTableCell>
            <StyledTableCell align="center"  sx={{ color: 'white' }}>DELETE</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          
  {display.map((data, id) => (
    <StyledTableRow key={id}>
      <StyledTableCell align="center">{data.Fname}</StyledTableCell>
      <StyledTableCell align="center">{data.Lname}</StyledTableCell>
      <StyledTableCell align="center">{data.Email}</StyledTableCell>
      <StyledTableCell align="center">{data.Password}</StyledTableCell>
      <StyledTableCell align="center">{data.check ? 'Activate' : 'Deactivate'}</StyledTableCell>
      {/* <StyledTableCell align="center">
        <EditIcon onClick={() => UpDate(data)} />
      </StyledTableCell> */}
      <StyledTableCell align="center">
        <DeleteIcon onClick={() => Deleting(data._id)} />
      </StyledTableCell>
    </StyledTableRow>
  ))}
</TableBody>

      </Table>
    </TableContainer>
  );
}


//   const Deleting = async (id) => {
//     console.log('Deleting item with ID:', id);
//     const DeleteURL = `http://localhost:5000/ADMIN/AdminDelete/${id}`;

//     try {
//         const response = await axios.delete(DeleteURL,id);
//         console.log('Delete response:', response.data);
//     } catch (err) {
//         console.error(err);
//     }
// };