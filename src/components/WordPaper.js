import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
const styles = theme => ({
  root: theme.mixins.gutters({
    width: `40%`,
    height: `auto`,
    margin: `0 auto`,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 20,
    marginBottom: 20,
  }),
});

function PaperSheet(props) {
  const { classes, word } = props;
  return (
    <div>
      <Zoom in={true} timeout={{ enter: 2000, exit: 0,}}>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            {word}
          </Typography>
        </Paper>
      </Zoom>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  word: PropTypes.string,
};

const PaperSheetWrapped = withStyles(styles)(PaperSheet);

export default PaperSheetWrapped;
