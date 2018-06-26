import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import '../App.css';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class EurekaModal extends React.Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.props.onClickModal();
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.onCloseModal();
    this.setState({ open: false });
  };

  render() {
    const { classes, firstWord, secondWord } = this.props;
    // shareボタン
    const shareUrl = 'http://github.com';
    var title = 'Vivitでアイデアを思いつきました⚡️\n'
                + `「 ` + firstWord + ` ✖️ ` + secondWord + ' 」\n';
    const hashtags = ['Vivit','アイデア','思いついた','起業しろ'];

    return (
      <div>
        <Button onClick={this.handleOpen}  variant="contained" color="primary">
          <span role="img" aria-label="idea">💡</span>思いついた！<span role="img" aria-label="idea">💡</span>
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}>
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" align="center">
              アイデアの卵が誕生しました<span role="img" aria-label="good">👍</span>
            </Typography>
            <div className="Eureka-Words">
                {firstWord}　<span role="img" aria-label="cross">✖️</span>　{secondWord}
            </div>
            <div className="Eureka-Tweet">
              <TwitterShareButton
                url={shareUrl}
                title={title}
                hashtags={hashtags} align="center">
                <TwitterIcon
                align="center"
                  size={32}
                  round
                />
              </TwitterShareButton>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

EurekaModal.propTypes = {
  classes: PropTypes.object.isRequired,
  firstWord: PropTypes.string,
  secondWord: PropTypes.string,
  onClickModal: PropTypes.func,
  onCloseModal: PropTypes.func,
};

// We need an intermediary variable for handling the recursive nesting.
const EurekaModalWrapped = withStyles(styles)(EurekaModal);

export default EurekaModalWrapped;
