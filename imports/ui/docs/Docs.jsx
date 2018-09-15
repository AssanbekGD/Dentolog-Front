import React, { Component } from 'react';
import { Item,Form, Image,Header,Button,Segment,Table,Menu,Grid } from 'semantic-ui-react';
import { Route, Link, Switch } from 'react-router-dom';


import  Materials from '/imports/ui/docs/Materials.jsx';
import  Personal from '/imports/ui/docs/Personal.jsx';
import  Diagnosis from '/imports/ui/docs/Diagnosis.jsx';
import  MKB10 from '/imports/ui/docs/MKB10.jsx';
import  Service from '/imports/ui/docs/Service.jsx';



export default class Docs extends Component {
  state = { activeItem: 'home' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderMenuItem(name, displayName) {
    const url = '/' + name;
    return (
      <Menu.Item
        as={Link}
        to={url}
        name={name}
        active={this.state.activeItem === name}
        onClick={this.handleItemClick}
      >
        {displayName}
      </Menu.Item>
    );
  }

  render() {
    return <div>
      <Grid>
        <Grid.Column width={3}>
          <Menu vertical>
            {this.renderMenuItem('materials', 'Материалы')}
            {this.renderMenuItem('personal', 'Персонал')}
            {this.renderMenuItem('service', 'Услуги')}
            {this.renderMenuItem('mkb10', 'МКБ-10')}
            {this.renderMenuItem('diagnosis', 'Диагнозы')}
        </Menu>
        </Grid.Column>
        <Grid.Column width={13}>

            <Switch>
              <Route path="/docs/Materials.jsx" component={Materials} />
              <Route path="/docs/Personal.jsx" component={Personal} />
              <Route path="/docs/Service.jsx" component={Service} />
              <Route path="/docs/MKB10.jsx" component={MKB10} />
              <Route path="/docs/Diagnosis.jsx" component={Diagnosis} />
            </Switch>

        </Grid.Column>
   </Grid>

    </div>
   }
  }
