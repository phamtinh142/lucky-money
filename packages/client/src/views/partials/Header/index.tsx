import React from 'react';
import './style.scss';
import Logo from '../../../assets/images/icons/logo.png';

import {Button, Avatar, Menu, MenuItem} from '@mui/material';
import {KeyboardArrowDown} from '@mui/icons-material';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header">
      <div className="logo-wrapper">
        <img className="logo-branch" src={Logo} alt="Logo" />
      </div>

      <div className="header-profile">
        <Avatar id="avatar" />
        <Button
          id="btn-profile"
          aria-controls={open ? 'menu-profile' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDown fontSize="small"/>}
        >
          phamtinh142
        </Button>
        <Menu
          id="menu-profile"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'btn-profile',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <span>lv1</span>
      </div>

      <div className="btn-action-wrapper">
        <Button id="btn-login" size="small" variant="contained">
          Đăng nhập
        </Button>
        <Button id="btn-register" size="small" variant="contained">
          Đăng kí
        </Button>
      </div>
    </header>
  );
};

export default Header;
