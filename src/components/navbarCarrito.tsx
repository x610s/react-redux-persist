import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useAppSelector } from '../hooks/redux';



export default function SimpleListMenu() {
  const {carrito} = useAppSelector((state)=> state);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    if(carrito.carroItem.length>0){
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="Ver Carrito"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="Ver carrito"
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {carrito.carroItem.map((option, index) => (
          <MenuItem
            key={option.product.id}
            onClick={()=>{
                console.log('');
            }}
          >
            {option.product.title} - Cantidad: <span className='text-primary fw-bold'>
            {option.cantidad}
            </span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}