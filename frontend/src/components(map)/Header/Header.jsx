import React,{ useState} from 'react'

import { AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core'

import useStyles from './Styles.js'

function Header({setCoordinates}) {
    const classes= useStyles();
    const [autocomplete, setAutocomplete] = useState(null) 
   

    return (
        <AppBar position="static">
            {/* <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    
                </Typography>
                
            </Toolbar> */}

        </AppBar>
    );
}

export default Header