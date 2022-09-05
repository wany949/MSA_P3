import type { NextPage } from 'next'
import axios from "axios";
import React, { useState } from "react";
import charDetailed from "../models/interfaces";
import CharCard from "../components/CharCard";
import listOfChars from "../components/CharList";
import Search from "../components/Search";
import { Grid, IconButton, Autocomplete, TextField, Box, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const Home: NextPage = () => {
  const [charName, setCharName] = useState<String | null>(null)
  const [charInfo, setCharInfo] = useState<charDetailed | undefined>(undefined)
  const [charImg, setCharImg] = useState("")


  return (
    <React.Fragment>

      <Grid container sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, marginY: 'auto', minHeight: '100vh' }}>
        <Grid item md={4} sx={{ marginY: '200px', height: '100%', textAlign: 'center' }}>
          <Typography component="div">
            <h1>Genshin Impact</h1>
          </Typography>

          <Search charName={charName} setCharName={setCharName} setCharInfo={setCharInfo} setCharImg={setCharImg}></Search>

        </Grid>

        <Grid item md={8} sx={{ margin: 'auto', height: '100%' }}>
          {charInfo === undefined || charInfo === null ? (
            null
          ) : (
            <CharCard {...charInfo} image={charImg} />
          )}

        </Grid>

      </Grid>

    </React.Fragment>
  )


}

export default Home
