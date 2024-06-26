/* eslint-disable react/jsx-key */
'use client'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { useState } from 'react'
import { useEffect } from 'react'
import * as React from 'react';

function ContentDecla() {


    const [data, setData] = useState(null)
    useEffect(() => {
        //:TODO: cARGAMOS EL jSON
        fetch('/json/DeclaracionDeFe.json')
            // .then(response => response.json())
            // .then(jsonData => setData(jsonData))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(jsonData => setData(jsonData))
            .catch(error => console.error('Error fetching the JSON:', error));
    }, [])
    return (

        <article className="father-decla">
            <div className="container">
                <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>

                    <div className="container">
                        <div>
                            <p className='decla-p animate animate__backInDown' >{data?.idec}</p>
                        </div>
                        <Divider variant="inset" component="li" />
                        <div>
                            <p className='decla-p animate animate__backInUp' >{data?.criterio}</p>
                        </div>
                    </div>
                </List>
            </div>

            <div className="container">
                {data &&
                    data.items.map((item, index)  => (
                        <List key={index} sx={{ width: '100%', maxWidth: 660, bgcolor: 'background.paper' }} className='animate animate__fadeInUp'>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    {item.id}
                                </ListItemAvatar>
                                <ListItemText
                                    primary={data.title}
                                    secondary={
                                        <React.Fragment>
                                            {item.pasaje && item.pasaje.map((pasaje, index) => (
                                                <Typography
                                                    key={index}
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {pasaje}
                                                </Typography>
                                            ))}
                                            -- {item.content}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />

                        </List>

                    ))}
            </div>


        </article>
    )
}

export default ContentDecla;