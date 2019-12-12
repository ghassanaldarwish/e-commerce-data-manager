import React from 'react';
import './Spinner.css';

import CircularProgress from '@material-ui/core/CircularProgress';

export default function Spinner() {
    return <CircularProgress size={60} className="Spinner" />;
}
