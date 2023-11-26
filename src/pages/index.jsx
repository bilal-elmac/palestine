import React, { Component } from 'react';
import * as MUI from '@mui/material';
import * as MaterialIcons from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '../components/header.jsx';

class Index extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <Header />
            </>
        )
    }
}

export default Index;