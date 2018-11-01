import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ButtonFunc (props){
  const { classes } = props;
  return (
    <Button variant="contained" color={props.color} className={classes.button}>
        {props.children}
    </Button>
  )
}
ButtonFunc.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonFunc);
