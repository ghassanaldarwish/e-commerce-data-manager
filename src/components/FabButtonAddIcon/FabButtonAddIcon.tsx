import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const FabButtonAddIcon = (props: any) => (
    <Tooltip title="Add New Item" aria-label="add">
        <Fab onClick={props.clickedHandler} color="primary">
            <AddIcon />
        </Fab>
    </Tooltip>
);

export default FabButtonAddIcon;
