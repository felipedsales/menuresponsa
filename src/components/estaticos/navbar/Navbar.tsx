import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import MenuComponent from "../menu/MenuComponent"
import './Navbar.css'
function Navbar() {
    let history = useHistory(); // para redireccionar
    const [token, setToken] = useLocalStorage('token'); // para guardar el token en el localstorage
    function logout() {
        setToken(''); // para apagar el token del localstorage
        history.push('/login'); // para redireccionar a la pagina de login
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start"
                        sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <Link to='/home' className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    home
                                </Typography>

                            </Box>
                        </Link>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Link to='/listaTema' className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    temas
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor'>
                            {/* botão de logout com evento de click */}
                            <Typography variant="h6" color="inherit" onClick={() => logout()}>
                                logout
                            </Typography>
                            {/* botão de logout com evento de click */}
                        </Box>
                      

                    </Box>
                    <Box display="flex" justifyContent="start"
                    marginLeft="auto"
                       sx={{ display: { xs: 'flex', sm: 'none' } }}>
                            <MenuComponent/>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;