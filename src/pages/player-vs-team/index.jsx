import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider';
import SimpleStats from '../../components/SimpleStats'

export default function OutlinedCard(props) {

    const [teamName, setteamName] = React.useState('');
    const [playerName, setplayerName] = React.useState('');

    const [season, setseason] = React.useState(2021)
    const [format, setformat] = React.useState('ipl')

    const [responseData, setresponseData] = React.useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        let url = `https://api.kunalduran.com/player-stats/${playerName}?format=${format}&season=${season}&vsteam=${teamName}`
        console.log(url)
        fetch(url)
            .then(r => r.json())
            .then(d => {
                if (d.content.length) {
                    console.log(d)
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

        <Container>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <Card raised sx={{ display: 'flex', borderRadius: 5 }}>
                        <CardContent sx={{ width: '100%' }}>
                            <Autocomplete
                                fullWidth
                                id="free-solo-demo"
                                // freeSolo
                                onChange={(e, newVal)=> setplayerName(newVal)}
                                options={props.playerList.content}
                                renderInput={(params) => <TextField {...params} label="Player Name" />}
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography alignSelf={'center'} variant='h4' color="text.secondary">
                            VS
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card raised sx={{ display: 'flex', borderRadius: 5 }}>
                        <CardContent sx={{ width: '100%' }}>
                            <Autocomplete
                                fullWidth
                                id="free-solo-demo"
                                // freeSolo
                                onChange={(e, newVal)=> setteamName(newVal)}
                                options={props.teamList.content}
                                renderInput={(params) => <TextField {...params} label="Team Name" />}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid textAlign='center'>
                <Button onClick={handleSubmit} type='submit' size='large' variant='outlined'>Done</Button>
            </Grid>
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
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.kunalduran.com/team-list/`)
    const teamList = await res.json()

    const res2 = await fetch(`https://api.kunalduran.com/player-list/`)
    const playerList = await res2.json()

    // Pass data to the page via props
    return { props: { teamList, playerList } }
}
