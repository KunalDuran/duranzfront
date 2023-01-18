import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SimpleStats from '../../components/SimpleStats'
import { Divider } from '@mui/material';

const availableSeasons = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
const availableFormats = ['ODI', 'T20', 'TEST', 'IPL', 'BIG BASH'];


export default function OutlinedCard(props) {

    const [playerName, setplayerName] = React.useState('')
    const [season, setseason] = React.useState('')
    const [format, setformat] = React.useState('')

    const [responseData, setresponseData] = React.useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        let url = `http://api.kunalduran.com/player-stats/${playerName}?format=${format}&season=${season}`

        fetch(url)
            .then(r => r.json())
            .then(d => {
                if (d.content.length) {
                    setresponseData(d.content)
                }
            })
            .catch(e => console.error(e))
            .finally(() => {
                // setplayerName('')
                // setseason([])
                // setformat([])
            })
    }


    return (

        <>
            <Container>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <Card raised sx={{ borderRadius: 5 }}>
                            <CardMedia
                                sx={{ height: '30vh' }}
                                image={`https://avatars.dicebear.com/api/pixel-art/${playerName}.svg`}
                            title="green iguana"
                            />
                            <CardContent>
                                <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                                    {playerName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>
                <form action="" onSubmit={handleSubmit}>
                    <Grid container marginTop={2} alignItems="center" justifyContent="center" spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                                fullWidth
                                id="free-solo-demo"
                                // freeSolo
                                onChange={(e, newVal) => setplayerName(newVal)}
                                options={props.playerList.content}
                                renderInput={(params) => <TextField {...params} label="Player Name" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <FormControl fullWidth>
                                <InputLabel id="demo-multiple-chip-label">Season</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={season}
                                    label="Season"
                                    onChange={(e) => setseason(e.target.value)}
                                >
                                    {availableSeasons.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <FormControl fullWidth>
                                <InputLabel id="demo-multiple-chip-label">Format</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={format}
                                    label="Format"
                                    onChange={(e) => setformat(e.target.value)}
                                >
                                    {availableFormats.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} textAlign='center'>
                            <Button type='submit' size='large' variant='outlined'>Done</Button>
                        </Grid>
                    </Grid>
                </form>
                <Divider sx={{ my: 2 }} />

                {
                    responseData.length ?
                        <Grid container>
                            <Grid item xs={12}>
                                <Box sx={{ overflow: "auto" }}>
                                    <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                                        <SimpleStats title={'Batting'} data={responseData[0].batting} />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ overflow: "auto" }}>
                                    <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                                        <SimpleStats title={'Bowling'} data={responseData[0].bowling} />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>

                                <Box sx={{ overflow: "auto" }}>
                                    <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                                        <SimpleStats title={'Fielding'} data={responseData[0].fielding} />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        : null
                }


            </Container>
        </>

    );
}

export async function getServerSideProps() {
    const res = await fetch(`http://api.kunalduran.com/player-list/`)
    const playerList = await res.json()
    return { props: { playerList } }
}
