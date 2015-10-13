 /** In this file, we create a React component which incorporates components provided by material-ui */

import React from 'react';
import mui from 'material-ui';
let RaisedButton = mui.RaisedButton;
let AppBar = mui.AppBar;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

import Switcher from './socket/switcher';
import ChartPanel from './charts/ChartPanel'

let List = mui.List;
let ListItem = mui.ListItem;

class Main {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  }

  render() {

    this.mainContainerStyle = {
      position:'absolute',
      left:'250px'
    }

    this.appBarStyle = {
    }

    this.sideBarStyle = {
      position:'absolute',
      width:'250px',
      top:'100px',
    }

    return (

      <div>
        <List style={this.sideBarStyle} >
          <ListItem primaryText="Stock1" />
          <ListItem primaryText="Stock2" />
          <ListItem primaryText="Stock3" />
        </List>
        <Switcher/>
        <AppBar title='Statistic' onLeftIconButtonTouchTap={this.leftClick} style={this.appBarStyle} zDepth={1}/>
        <div style={this.mainContainerStyle} zDepth={100}>
          <h1>material-ui</h1>
          <h2>example project</h2>

          <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
          <ChartPanel />
        </div>

        
      </div>
    );
  }

  _handleTouchTap() {
    alert('1-2-3-4-5');
  }

}

Main.childContextTypes = {
  muiTheme: React.PropTypes.object
}


module.exports = Main;
