import React from 'react'
import logo from './logo.svg';
import './App.css';

// Component imports
import { Button, ButtonGroup} from '@material-ui/core'
import { FormControlLabel, Checkbox, TextField } from '@material-ui/core'


// Icons
import SaveIcon from '@material-ui/icons/Save'
import PauseIcon from '@material-ui/icons/Pause'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import SkipNextIcon from '@material-ui/icons/SkipNext'


// for adding our own style
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, purple } from '@material-ui/core/colors'


// changing the typograpy
import 'fontsource-roboto'
// importing typography
import { Typography } from '@material-ui/core'


// import phase 2 components
import { Container, Paper, Grid} from '@material-ui/core'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


// for custom styling a component
const customStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
})
const StyledButton = () => {
  const classes = customStyles()
  return <Button className={classes.root}>Styled Button</Button>
}


// for changing the theme
const theme = createMuiTheme({
  typography: {
    h3: {
      fontSize: 36,
    },
    subtitle1: {
      marginBottom: 0,
    }
  },
  // palette: {
  //   primary: {
  //     main: purple[500],
  //   },
  //   secondary: {
  //     main: green[500],
  //   }
  // }
})


const App = () => {
  const [checked, setChecked] = React.useState(true)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <Container> */}
          <header className="App-header" style={{padding:20}}>

            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography style={{textShadow:"3px 3px #000"}} variant="strong" component="h4">
                  MUI Themeing
                </Typography>
                <Button style={{marginLeft:"auto", backgroundColor:"white",boxShadow:"5px 5px #000"}}>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            
            <Typography variant="h3" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Complete Introduction to Material UI
            </Typography>

            <img src={logo} className="App-logo" alt="logo" />

            <h3>Button Component</h3>
            {/* Normal Buttons */}
            <Button
              startIcon={<SaveIcon />}
              endIcon={<SaveIcon />}
              variant="contained" 
              size="small"
              color="primary"
              style={{boxShadow:"4px 4px #fff"}}
            >
              Hello World
            </Button>
            
            <br/>

            {/* Button Groups */}
            <ButtonGroup variant="contained">
              <Button
                color="secondary"
                startIcon={<PauseIcon />}
              >Pause</Button>

              <Button
                color="secondary"
                startIcon={<PlayArrowIcon />}
              >Play</Button>

              <Button
                color="secondary" 
                startIcon={<SkipNextIcon />} 
              >Next</Button>
            </ButtonGroup>

            <br/>

            <StyledButton />

            <br/>
            <br/>

            <h3>FormLabel Component</h3>
            <TextField 
              variant="filled"
              color="primary"
              type="email"
              label="Email"
              placeholder="test@company.com"
              id="textinput"
            />
            <FormControlLabel 
              control={
                <Checkbox
                checked={checked} // To check if checked or not
                // icon={<PlayArrowIcon />}
                checkedIcon={<PlayArrowIcon />}
                onChange={(e) => {setChecked(e.target.checked)}}
                inputProps={{
                  'aria-label':'secondary checkbox'
                }}
                />
              }
              label="Done"
            />

            <br/>
            <br/>

            <h3>Grid Component</h3>
            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{height:75, width:"100%",}} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:75, width:"100%",}} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:75, width:"100%",}} />
              </Grid>
            </Grid>

          </header>
        {/* </Container> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
