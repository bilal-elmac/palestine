import React, { Component } from 'react';
import * as MUI from '@mui/material';
import * as MaterialIcons from '@mui/icons-material';
import { motion } from 'framer-motion';

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <MUI.Box
                    sx={{
                        borderRadius: 10,
                        backgroundColor: 'primary.main',
                        margin: [3, 3, 'auto', 3],
                        padding: 3,
                        color: 'white',
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    <MUI.Typography sx={{fontWeight: 'bold'}}>Israel Boycotting</MUI.Typography>
                </MUI.Box>
            </>
        )
    }
}

export default Header;