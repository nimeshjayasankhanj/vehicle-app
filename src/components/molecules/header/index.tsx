import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import CarRentalIcon from "@mui/icons-material/CarRental";

import { Link } from "react-router-dom";

const pages = ["biddings"];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" style={{ backgroundColor: "#8b26b2" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page}`} style={{ textDecoration: "none" }}>
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link
            to="/"
            className="text-white"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              VehicleApp
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }}>
            <Link
              to="/"
              className="text-white"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <CarRentalIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                />
                VehicleApp
              </Typography>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Link to="/biddings" className="text-white">
              <IconButton size="large" aria-label="Go to home" color="inherit">
                <Typography color="white">Biddings </Typography>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
