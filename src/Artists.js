import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import getArtistsTracks from './getArtistTracks.js'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class ArtistsClass extends Component{
  constructor(props){
   super(props);
   this.state = {
     artists: []
   }
 }
 componentDidMount(){
    console.log(this.state.artists);
 }


}

function Artists (props) {
  console.log(props.location.state.dataArtists);
  let artists = props.location.state.dataArtists;
  getArtistsTracks(artists);
  return(
    <div>
      <List
        component="nav"
        subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
      >
        {/* {artists.map((artist) => {

        })}<NestedList  dataArtists={artists}/> */}
      </List>
    </div>
  )
}

export default Artists;

class NestedList extends React.Component {
  state = {
    open: true,
  };
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemText inset primary={this.props.artists.name} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {/* Colapse para cada track do artista */}
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};
