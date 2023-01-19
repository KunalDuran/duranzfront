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
import Autocomplete from '@mui/material/Autocomplete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Divider } from '@mui/material';


export default function OutlinedCard(props) {

    const [teamName, setteamName] = React.useState('')
    const [imageUrl, setimageUrl] = React.useState('')


    React.useEffect(() => {
        if (teamName == "" || !teamName) {
            return
        }
        let url = `https://cdn.kunalduran.com/static/${teamName}.svg`
        fetch(url).then(d => {
            if (d.status != 404 && d.status != 0) {
                setimageUrl(`https://cdn.kunalduran.com/static/${teamName}.svg`)
            } else {
                setimageUrl(`https://cdn.kunalduran.com/static/${teamName}.png`)
            }
        }).catch(err=> {
            setimageUrl(`https://cdn.kunalduran.com/${teamName}.png`)
            console.log(err)
        })
    }, [teamName])


    const [responseData, setresponseData] = React.useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(
            'form submit'
        )
        let url = `https://api.kunalduran.com/team-stats/${teamName}`
        console.log(url)
        fetch(url)
            .then(r => r.json())
            .then(d => {
                if (Object.keys(d.content).length) {
                    setresponseData(d.content)
                    console.log(d)
                }
            })
            .catch(e => console.error(e))
            .finally(() => {
                // setteamName('')
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
                                component={'img'}
                                sx={{ height: '30vh', width:'100%' }}
                                image={imageUrl}
                            />
                            <CardContent>
                                <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                                    {teamName}
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
                                onChange={(e, newVal) => setteamName(newVal)}
                                options={props.teamList.content}
                                renderInput={(params) => <TextField {...params} label="Team Name" />}
                            />
                        </Grid>
                        <Grid item xs={12} textAlign='center'>
                            <Button type='submit' size='large' variant='outlined'>Done</Button>
                        </Grid>
                    </Grid>
                </form>
                <Divider sx={{ my: 2 }} />

                {
                    responseData ?
                        <Grid container>
                            <Grid item xs={12}>
                                <Box sx={{ overflow: "auto" }}>
                                    <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                                        {/* <SimpleStats title={'Batting'} data={responseData[0].batting} /> */}
                                        <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                                            Team Stats
                                        </Typography>
                                        <TableContainer >
                                            <Table aria-label="simple table">
                                                <TableBody>
                                                    {Object.keys(responseData).map((key, idx) => (
                                                        <TableRow key={idx}>
                                                            <TableCell component="th" scope="row">
                                                                {key.toUpperCase().replace('_', ' ')}
                                                            </TableCell>
                                                            <TableCell align='right' component="th" scope="row">
                                                                {responseData[key]}
                                                            </TableCell>

                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

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
    const res = await fetch(`https://api.kunalduran.com/team-list/`)
    const teamList = await res.json()
    return { props: { teamList } }
}
