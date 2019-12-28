import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import './Breadcrumbs.css';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        link: {
            display: 'flex',
        },
        icon: {
            marginRight: theme.spacing(0.5),
            width: 20,
            height: 20,
        },
    }),
);

export default function BreadcrumbsNav(props: any) {
    const classes = useStyles();

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {props.items().map((item: any, index: any) => (
                <Typography key={index} color="textPrimary" className={classes.link}>
                    <HomeIcon className={classes.icon} />
                    {item}
                </Typography>
            ))}
        </Breadcrumbs>
    );
}
