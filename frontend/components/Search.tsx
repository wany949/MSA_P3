import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from "gsap";
import axios from "axios";
import { Autocomplete, IconButton, TextField, Box } from '@mui/material'
import listOfChars from "../components/CharList";
import SearchIcon from '@mui/icons-material/Search';
import charDetailed from '../models/interfaces';

export default function search(props: {
    charName: String | null, setCharName: React.Dispatch<React.SetStateAction<String | null>>,
    setCharInfo: React.Dispatch<React.SetStateAction<charDetailed | undefined>>, setCharImg: React.Dispatch<React.SetStateAction<string>>
}) {
    const GENSHIN_URL = "https://api.genshin.dev/"

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Autocomplete
                    onInputChange={(event, value) => {
                        props.setCharName(value)
                    }}
                    freeSolo
                    clearOnBlur={false}
                    id="search"
                    options={listOfChars}
                    sx={{ width: 300, marginLeft: 'auto' }}
                    renderInput={(params) => <TextField {...params} label="Input Character Name" />}
                />
                <IconButton aria-label="search" data-testid="searchButton" onClick={searchChar} sx={{ marginRight: 'auto' }}>
                    <SearchIcon></SearchIcon>
                </IconButton>
            </Box>

        </React.Fragment>
    )

    function searchChar() {
        if (props.charName != null && props.charName != "") {
            const temp = props.charName.trim().replace(/\s+/g, '-').toLowerCase();
            axios.get(GENSHIN_URL + "characters/" + temp).then((response => {
                props.setCharInfo(JSON.parse(JSON.stringify(response.data)))
                console.log(JSON.parse(JSON.stringify(response.data)))


            })).catch(() => {
                props.setCharInfo(undefined)
            })
            props.setCharImg(GENSHIN_URL + "characters/" + temp.toLowerCase() + "/gacha-card")

        }

    }
}