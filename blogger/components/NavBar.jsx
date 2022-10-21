import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Link from 'next/link';
import { getCategories } from '../services';

export default function ButtonAppBar() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories().then((newCategories) => {
        setCategories(newCategories);
      });
    }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'black', marginBottom: '30px' }}>
        <Toolbar sx={{height: '10px'}}>
 <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-none py-8">
        <div className="md:float-left block">
          <Link href="/">
            <div className="cursor-pointer font-bold text-4xl text-pink-600" style={{paddingTop: "20px"}}>BlogSpace</div>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-pink-600 ml-4 font-semibold cursor-pointer"  style={{paddingTop: "30px"}}>{category.name}</span></Link>
          ))}
        </div>
      </div>
      
    </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}