import './App.css'
import React, { useState } from 'react';
import WifiIcon from '@mui/icons-material/Wifi';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Battery3BarIcon from '@mui/icons-material/Battery3Bar';
import EditIcon from '@mui/icons-material/Edit';
import {Typography, Card, List, ListItem, ListItemIcon, 
  Button, Select, MenuItem, FormControl, styled, createTheme, ThemeProvider, CssBaseline} from '@mui/material';
import pennLogo from "./assets/penn-logo.png";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const StyledSelect = styled(Select)({
  borderRadius: '12px',       
  backgroundColor: '#00237C',
  color: 'white',
  '& .MuiSelect-icon': {      
    color: 'white',
  },
  '& .MuiSelect-select': {
    padding: '8px 12px',
  },
  '&:before, &:after': { 
    borderBottom: 'none !important',
  },
  fontSize: '14px'
});

const theme = createTheme({ typography: {fontFamily: "'Libre Caslon Display', serif", },});

function App() {
  const mathLecSections = ["001", "002", "003"];
  const mathRecSections = ["212", "214"];
  const [status, setStatus] = useState('Seat Opens');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <div className="phone-screen">
        <div className="notch"></div>
        <div id="status-bar">
          <span id="time" style={{ color: 'white', fontSize: '14px' }}>9:42</span>
          <div id="status-icons">
            <SignalCellularAltIcon style={{ color: 'white', fontSize: '16px' }} />
            <WifiIcon style={{ color: 'white', fontSize: '16px', marginLeft: '4px' }} />
            <Battery3BarIcon style={{ color: 'white', fontSize: '16px', marginLeft: '4px' }} />
          </div>
        </div>
        <div id="logo">
          <img src={pennLogo} alt="Penn Logo" id="penn-logo" />
          <Typography variant="h5" style={{ color: 'white' }}>Path@Penn</Typography>
        </div>
        <Typography variant="h4" id="title" style={{ color: 'white', marginBottom: '16px' }}> Course Wish List</Typography>
        <Card id="page-description">
            <Typography className="description" variant="body2" sx={{fontSize: '10px'}}>
              Use the Lecture and Recitation menus to rank sections in order of priority. When swapped, the course with the highest ranking with availiability and permissions will be added to cart. Click the
              <EditIcon style={{ fontSize: '12px', verticalAlign: 'middle' }}/> to edit swapping options. 
            </Typography>
        </Card>

        {/* Courses */}
        <Card className="courseCard" id="math">
          <div className="card-row">
            <div className='course-title'>
              <Typography variant="h3" fontSize="36px" color="black" align="left">
                MATH 1400
              </Typography>
              <Typography variant="subtitle1" color="black">
                Calculus, Pt. I
              </Typography>
            </div>
            <div className='course-sections'>
              {/* Lecture Ranking  */}
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '8px'}}>
                <Typography variant="body1"color="black"> Lec: </Typography>
                <List dense sx={{ width: '65px' }}>
                  {mathLecSections.map((section) => (
                    <ListItem
                      key={section}
                      className='priority-rank'
                      sx={{ paddingLeft: .5 }}
                    >
                      <ListItemIcon style={{ minWidth: '20px'}}>
                        <MenuIcon style={{ color: "white", fontSize: '14px'}} />
                      </ListItemIcon>
                      {section}
                    </ListItem>
                  ))}
                </List>
              </div>
              <Typography className='swap-text' sx={{fontSize:'10px'}}>SWAPPING FOR MATH-1400-004 </Typography>
               {/* Recitation Ranking */}
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '8px'}}>
                <Typography variant="body1"color="black"> Rec: </Typography>
                <List dense sx={{ width: '65px' }}>
                  {mathRecSections.map((section) => (
                    <ListItem key={section} className='priority-rank'sx={{ paddingLeft: .5 }}>
                      <ListItemIcon style={{ minWidth: '20px' }}>
                        <MenuIcon style={{ color: "white", fontSize: "14px"}} />
                      </ListItemIcon>
                      {section}
                    </ListItem>
                  ))}
                </List>
              </div>
              <Typography className='swap-text' sx={{fontSize:'10px'}}>SWAPPING FOR MATH-1400-211 </Typography>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px'}}>
                <Typography variant="body1"color="black" style={{fontSize: '12px'}}> Swap if: </Typography>
                <FormControl variant="filled" style={{ minWidth: 120}} size="small">
                  <StyledSelect value={status} onChange={handleChange} label="Status">
                    <MenuItem value="Seat Opens">Seat Opens</MenuItem>
                    <MenuItem value="Permission Granted">Permission Granted</MenuItem>
                  </StyledSelect>
                </FormControl>
              </div> 
            </div>

            {/* Swap button */}
            <div className='swap-button'>
              <Button variant="contained" color="error">
                Swap
              </Button>
            </div>
          </div>

          {/* Edit Icon */}
          <div style={{ display: "flex", justifyContent: "flex-end"}}>
            <EditIcon style={{ cursor: "pointer", color: "gray" }} />
          </div>
        </Card>

        <Card className="courseCard" id="hci">
          <div className="card-row">
            <div className='course-title'>
              <Typography variant="h3" fontSize="34px" color="black" align="left">
                CIS 4120
              </Typography>
              <Typography variant="subtitle1" color="black">
                HCI
              </Typography>
            </div>
            <div className='course-sections'>
              {/* Lecture Ranking  */}
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Typography variant="body1"color="black"> Lec: </Typography>
                <List dense sx={{ width: '65px' }}>
                    <ListItem className='priority-rank' sx={{ paddingLeft: .5 }}>
                      <ListItemIcon style={{ minWidth: '20px'}}>
                        <MenuIcon style={{ color: "white", fontSize: '14px'}} />
                      </ListItemIcon>
                      401
                    </ListItem>
                </List>
              </div>
              <Typography className='swap-text' sx={{fontSize:'10px'}}>SWAPPING FOR CIS-2400-201 </Typography>
               
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px'}}>
                <Typography variant="body1"color="black" style={{fontSize: '14px'}}> Swap if: </Typography>
                <FormControl variant="filled" style={{ minWidth: 120}} size="small">
                  <StyledSelect value={status} onChange={handleChange} label="Status">
                    <MenuItem value="Seat Opens">Permission Granted</MenuItem>
                    <MenuItem value="Permission Granted">Seat Opens</MenuItem>
                  </StyledSelect>
                </FormControl>
              </div> 
            </div>

            {/* Swap button */}
            <div className='swap-button'>
              <Button variant="contained" color="error">
                Swap
              </Button>
            </div>
          </div>

          {/* Edit Icon */}
          <div style={{ display: "flex", justifyContent: "flex-end"}}>
            <EditIcon style={{ cursor: "pointer", color: "gray" }} />
          </div>
        </Card>
        
        {/* Bottom Bar */}
        <div id="bottom-bar">
          <AddCircleOutlineIcon id="add-swap-icon" style={{fontSize: "45px", color: 'white'}}/>
          <hr id="bottom-line"/>
          <div id="bottom-icons-container">
            <FormatListBulletedOutlinedIcon style={{fontSize: "24px", color: 'white'}}/>
            <PersonIcon style={{fontSize: "24px", color: 'white'}}/>
            <ShoppingCartOutlinedIcon style={{fontSize: "24px", color: 'white'}}/>
          </div>
        </div>
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
