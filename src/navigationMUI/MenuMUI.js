import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import innovateam11 from './innovateam11.png';

function MenuMUI () {
  const [anchorMenu, setMenuOpen] = useState(null);

  const handleMenu = (event) => { setMenuOpen(event.currentTarget); }
  const handleClose = () => { setMenuOpen(null); }

  return (
    <div>
    <AppBar position='static'>
      <Toolbar>
         <IconButton onClick={ handleMenu } color='inherit'><MenuIcon /></IconButton>
         <Typography variant='h5' style={ {width: 100, flexGrow: 1, textAlign: 'center'} }>Elävän arkiston hakusovellus</Typography>
         <img src={innovateam11} alt="Logo"/>
      </Toolbar>
    </AppBar>

    <MenuList>
      <Menu
        anchorEl={ anchorMenu }
        open={ Boolean(anchorMenu) }
        anchorOrigin={ {vertical: 'bottom', horizontal: 'left'} }
        getContentAnchorEl={ null }
        onClose={ handleClose}>
          
        {/*<MenuItem onClick={ handleClose } component={ Link } to='/'> */}
        {  /* <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText primary='Etusivu' /> */}
       
        <MenuItem onClick={ handleClose } component={ Link } to='/hakukone'>
          <ListItemIcon><SearchIcon /></ListItemIcon>
          <ListItemText primary='Hae' />
        </MenuItem>
      </Menu>
    </MenuList>
  </div>
  )
}

export default MenuMUI;