import type { NextPage } from 'next'
import axios from "axios";
import React, { useState } from "react";
import charDetailed from "../models/interfaces";
import CharCard from "../components/CharCard";
import listOfChars from "../components/CharList";
import { Grid, IconButton, Autocomplete, TextField, Box, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const Home: NextPage = () => {
  const [charName, setCharName] = useState<String | null>(null)
  const [charInfo, setCharInfo] = useState<charDetailed | undefined>(undefined)
  const [charImg, setCharImg] = useState("")
  const GENSHIN_URL = "https://api.genshin.dev/"

  function searchChar() {
    if (charName != null) {
      const temp = charName.replace(/\s+/g, '-').toLowerCase();
      axios.get(GENSHIN_URL + "characters/" + temp).then((response => {
        setCharInfo(JSON.parse(JSON.stringify(response.data)))
        console.log(JSON.parse(JSON.stringify(response.data)))
      })).catch(() => {
        setCharInfo(undefined)
      })
      setCharImg(GENSHIN_URL + "characters/" + temp.toLowerCase() + "/gacha-card")
    }
  }

  return (
    <React.Fragment>

      <Grid container sx={{ display: 'flex', flexDirection: 'row', marginY: 'auto', minHeight: '100vh' }}>
        <Grid item md={4} sx={{ marginY: '200px', height: '100%', textAlign: 'center' }}>
          <Typography component="div">
            <h1>Genshin Impact</h1>
          </Typography>


          <Box sx={{ display: 'flex', flexDirection: 'row' }}>

            <Autocomplete
              onInputChange={(event, value) => {
                setCharName(value)
              }}
              freeSolo
              clearOnBlur={false}
              id="search"
              options={listOfChars}
              sx={{ width: 300, marginLeft: 'auto' }}
              renderInput={(params) => <TextField {...params} label="Input Character Name" />}
            />
            <IconButton onClick={searchChar} sx={{ marginRight: 'auto' }}>
              <SearchIcon></SearchIcon>
            </IconButton>
          </Box>

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
