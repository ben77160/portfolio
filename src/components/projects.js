import React, { Component } from 'react';
import { Tabs, Tab, Grid , Cell, Card, CardTitle, CardText,CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }
  
  toogleCategories(){
    if( this.state.activeTab === 0)
    {
      {/* Project 1*/}
       return(
         <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>React Project #1</CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardText>
                <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>CodeOpen</Button>
                  <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff'}}>
                  <IconButton name="share"/>
                </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>React Project #2</CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardText>
                <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>CodeOpen</Button>
                  <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff'}}>
                  <IconButton name="share"/>
                </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>React Project #3</CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardText>
                <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>CodeOpen</Button>
                  <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff'}}>
                  <IconButton name="share"/>
                </CardMenu>
            </Card>
         </div>
       )
    } else if (this.state.activeTab === 1)
    {
       return(
         <div><h1>This is Angular</h1></div>
       )
    } else if(this.state.activeTab === 2)
    {
      return(
        <div><h1>This is VueJS</h1></div>
      )
    }
    else if(this.state.activeTab === 3)
    {
      return(
        <div><h1>This is MongoDB</h1></div>
      )
    }
  }

    render() {
      return(
        <div className="category-tabs">
           <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
              <Tab>React</Tab>
              <Tab>Angular</Tab>
              <Tab>VueJS</Tab>
              <Tab>MongoDB</Tab>
           </Tabs>
            <Grid>
                <Cell col={12}>
                  <div className="content"> {this.toogleCategories()}</div>
                </Cell>
            </Grid>
        </div>
      )
    }
}

export default Projects;