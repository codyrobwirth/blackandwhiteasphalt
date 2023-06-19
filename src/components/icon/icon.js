import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import FacebookRounded from "@mui/icons-material/FacebookRounded";

let Icon = () => {

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <a href="https://www.facebook.com/BlackandWhiteAsphaltManagement" target="_blank" rel="noopener noreferrer">
                    <FacebookRounded sx={{ color: '#FFFFFF', width: '2.5em', height: '2em' }} />
                </a>
            </Tooltip>
        </Box>
    );
}

export default Icon;