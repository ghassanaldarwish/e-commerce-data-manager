import React from 'react';
import './CollapseModal.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { Type } from '../../containers/Navbar/Navbar.enum';

declare module 'csstype' {
    interface Properties {
        '--tree-view-color'?: string;
        '--tree-view-bg-color'?: string;
    }
}

type StyledTreeItemProps = TreeItemProps & {
    bgColor?: string;
    color?: string;
    labelIcon: React.ElementType<SvgIconProps>;
    labelInfo?: string;
    labelText: string;
    to?: string;
    type?: string;
};

const useTreeItemStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            color: theme.palette.text.secondary,
            '&:focus > $content': {
                backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
                color: 'var(--tree-view-color)',
            },
        },
        content: {
            color: theme.palette.text.secondary,
            borderTopRightRadius: theme.spacing(2),
            borderBottomRightRadius: theme.spacing(2),
            paddingRight: theme.spacing(1),
            fontWeight: theme.typography.fontWeightMedium,
            '$expanded > &': {
                fontWeight: theme.typography.fontWeightRegular,
            },
        },
        group: {
            marginLeft: 0,
            '& $content': {
                paddingLeft: theme.spacing(2),
            },
        },
        expanded: {},
        label: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
        labelRoot: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0.5, 0),
        },
        labelIcon: {
            marginRight: theme.spacing(1),
        },
        labelText: {
            fontWeight: 'inherit',
            flexGrow: 1,
        },
    }),
);

const renderLink = (classes: any, LabelIcon: any, labelText: any, labelInfo: any, to: any) => {
    return (
        <Link to={to} className={classes.labelRoot}>
            <LabelIcon color="inherit" className={classes.labelIcon} />
            <Typography variant="body2" className={classes.labelText}>
                {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
                {labelInfo}
            </Typography>
        </Link>
    );
};

const renderDiv = (classes: any, LabelIcon: any, labelText: any, labelInfo: any) => {
    return (
        <div className={classes.labelRoot}>
            <LabelIcon color="inherit" className={classes.labelIcon} />
            <Typography variant="body2" className={classes.labelText}>
                {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
                {labelInfo}
            </Typography>
        </div>
    );
};

function StyledTreeItem(props: any) {
    const classes = useTreeItemStyles();
    const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, to, type, ...other } = props;
    let element;
    console.log(type);

    return (
        <TreeItem
            label={
                type === Type.Link
                    ? renderLink(classes, LabelIcon, labelText, labelInfo, to)
                    : renderDiv(classes, LabelIcon, labelText, labelInfo)
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            classes={{
                root: classes.root,
                content: classes.content,
                expanded: classes.expanded,
                group: classes.group,
                label: classes.label,
            }}
            {...other}
        />
    );
}

const useStyles = makeStyles(
    createStyles({
        root: {
            height: 264,
            flexGrow: 1,
            maxWidth: 400,
        },
    }),
);

const CollapseModal = (props: any) => {
    const classes = useStyles();
    const { navItems } = props;
    console.log('CollapseModal==>', props);
    return (
        <TreeView
            className={classes.root}
            defaultExpanded={['3']}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
        >
            {navItems &&
                navItems.map((item: any, idx: any) => (
                    <StyledTreeItem
                        to={navItems.to}
                        type={navItems.type}
                        nodeId={idx}
                        key={idx}
                        labelText={item.title}
                        labelIcon={item.icon || Label}
                    >
                        {item.options &&
                            item.options.map((option: any, oIdx: any) => (
                                <StyledTreeItem
                                    key={oIdx}
                                    nodeId={oIdx}
                                    to={option.to}
                                    type={option.type}
                                    labelText={option.title}
                                    labelIcon={option.icon || SupervisorAccountIcon}
                                    color="#1a73e8"
                                    bgColor="#e8f0fe"
                                >
                                    {option.options &&
                                        option.options.map((subOption: any, sOIdx: any) => (
                                            <StyledTreeItem
                                                key={sOIdx}
                                                to={subOption.to}
                                                type={subOption.type}
                                                nodeId={sOIdx}
                                                labelText={subOption.title}
                                                labelIcon={subOption.icon || SupervisorAccountIcon}
                                                color="#1a73e8"
                                                bgColor="#e8f0fe"
                                            ></StyledTreeItem>
                                        ))}
                                </StyledTreeItem>
                            ))}
                    </StyledTreeItem>
                ))}
        </TreeView>
    );
};

export default CollapseModal;
