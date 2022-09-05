import React from 'react'
import charDetailed from '../models/interfaces'
import { Box, Grid, Rating } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CakeIcon from '@mui/icons-material/Cake';
import Divider from '@mui/material/Divider';

export default function charCard(char: charDetailed) {
    const colour = switchColour(char.vision)
    const vision = switchVision(char.vision)
    return (
        <React.Fragment>

            <Card sx={{
                display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, border: 5, borderColor: colour, marginRight: '10px',
                backgroundImage: {
                    xs: `linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 80%, ${colour} 100%);`,
                    md: `linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 40%, ${colour} 90%);`
                }
            }}>
                <Box sx={{ display: 'flex' }}>
                    {char.name === undefined || char.image === "" ? (
                        ""
                    ) : (
                        <CardMedia
                            component='img'
                            height="800rem"
                            src={char.image}>
                        </CardMedia>
                    )}

                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={10} sm={10} md={8}>
                                <Typography variant='h3'>
                                    {char.name}
                                    <img src={vision} alt={char.vision} style={{ height: "30px", marginLeft: '10px' }} />
                                </Typography>
                                <Typography component='div'>
                                    {char.rarity === 5 || char.rarity === 4 ? (
                                        <React.Fragment>
                                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Rating name="read-only" value={char.rarity} readOnly /> ▴ {char.weapon}
                                            </Typography>
                                        </React.Fragment>

                                    ) : (
                                        ""
                                    )}
                                </Typography>

                                <Typography variant='subtitle1' color='text.secondary' component='div'>
                                    {char.affiliation} <br />
                                    {char.nation}
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sm={2} md={4} sx={{ margin: 'auto auto 0 auto' }}>
                                <Typography component='div' variant='subtitle1'>
                                    <CakeIcon></CakeIcon>
                                    <Typography variant='subtitle1' color='text.secondary'>
                                        {char.birthday} <br />
                                        {char.constellation}
                                    </Typography>

                                </Typography>

                            </Grid>
                        </Grid>


                        <Typography variant='body1' component='div'>
                            <Divider sx={{ width: { xs: '100%', sm: '100%', md: '50vw' }, margin: '0px', bgcolor: 'black' }} />
                            <br />
                            <br />
                            {char.description}
                        </Typography>

                    </CardContent>
                </Box>

            </Card>

        </React.Fragment >

    )

    function switchColour(vision: string | undefined) {
        switch (vision) {
            case 'Anemo':
                return '#acfce6'
            case 'Hydro':
                return '#89c3f0'
            case 'Electro':
                return '#cda9fc'
            case 'Pyro':
                return '#ff6363'
            case 'Geo':
                return '#fac878'
            case 'Cryo':
                return '#7cbbeb'
        }
    }

    function switchVision(vision: string | undefined) {
        switch (vision) {
            case 'Anemo':
                return "/Element_Anemo.png";
            case 'Hydro':
                return "/Element_Hydro.png";
            case 'Electro':
                return "/Element_Electro.png";
            case 'Pyro':
                return "/Element_Pyro.png";
            case 'Geo':
                return "/Element_Geo.png";
            case 'Cryo':
                return "/Element_Cryo.png";
        }
    }


}
