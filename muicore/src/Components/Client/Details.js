import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useState,useEffect } from 'react';
import {curl} from '../Donarurl'


export default function Details() {

  const [display, setdisplay] = useState([])
  const nav = useNavigate();

  const sendata=async()=>{
    const dat=await axios.get(curl)
    setdisplay(dat.data)
  }

  useEffect(()=>{
    sendata();
  })

//----------Edit-----------//
 
//----------Delete-----------//
const Delete=async(id)=>{
    await axios.delete(`https://655f3a0a879575426b44df60.mockapi.io/Client/${id}`)

  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead sx= {{bgcolor:'black'}}>
          <TableRow>
            <TableCell align="center"  sx={{ color: 'white' }}>Name</TableCell>
            <TableCell align="center"  sx={{ color: 'white' }}>Phone Number</TableCell>
            <TableCell align="center"  sx={{ color: 'white' }}>Blood Group</TableCell>
            <TableCell align="center"  sx={{ color: 'white' }}>Address</TableCell>
            <TableCell align="center"  sx={{ color: 'white' }}>Edit</TableCell>
            <TableCell align="center"  sx={{ color: 'white' }}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {display.map(data=> (
            <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="center">{data.Name}</TableCell>
              <TableCell align="center">{data.Phone}</TableCell>
              <TableCell align="center">{data.BloodGroup}</TableCell>
              <TableCell align="center">{data.Address}</TableCell>
              {/* <TableCell align="center"><ModeEditOutlineIcon onClick={()=>Edit(data)}/></TableCell> */}
              <TableCell align="center"><DeleteForeverIcon onClick={()=>Delete(data.id)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
