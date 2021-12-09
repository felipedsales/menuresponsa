import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useLocalStorage from 'react-use-localstorage';
import Tema from "../../../models/Tema";
import { busca } from '../../../services/Service';
import "./ListaTema.css";
import { Button, Box, Typography, Grid } from '@material-ui/core';

function ListaTema() {
    const [temas, setTemas] = useState<Tema[]>([]);
    const [token, setToken] = useLocalStorage('token')
    let history = useHistory();


    async function getTemas() {
        await busca("/tema", setTemas, {
            headers: {
                "Authorization": token
            }
        })
    }

    useEffect(() => {
        getTemas()
    }, [temas])

    return (
       <Grid container>
           
               { 
                   temas.map(tema => (
                       <Box  border={1} marginY={5 } marginX={2} padding={2}
                       className="card">
                           <Box>
                               <img src="https://pbs.twimg.com/profile_images/651915043131535360/w-dXx3AV_400x400.png" width="100%" alt="" />
                               </Box>
                            <Typography variant="h3" color="initial">Tema </Typography>
                            <Typography variant="h5" color="initial">Id {tema.id}</Typography>
                           <Typography variant="h5" color="initial">Descricao {tema.descricao}</Typography>
                       </Box>
                   ))
                    }

       </Grid>
         


      ); 
}

export default ListaTema
