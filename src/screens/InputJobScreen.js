import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Left, Right, Body, Title, Button, Icon, CheckBox, ListItem, Text } from 'native-base';
import {connect} from 'react-redux';
import {
    JOB_ADD,
    JOB_UPDATE,

} from '../services/redux/constants/ActionTypes';
class InputJobScreen extends Component{

    constructor(props) {
        super(props);
        this.state = {
          id:  0,
          finished: false,
          title: '',
          body: '',
        };
      }
      componentDidMount(){
          let data = this.props.dataJob.filter(x => x.id == this.props.navigation.state.params.id)
        //   console.warn(data)
          if (data.length > 0){
              this.setState({
                  id: data[0].id,
                  finished: data[0].flag,
                  title: data[0].title,
                  body: data[0].body,
              })
          }
        //   console.warn(this.state)
      }
      SubmitAddJob(){
        let data = {
            id: this.state.id === 0 ? (this.props.dataJob ? this.props.dataJob[this.props.dataJob.length - 1].id : 1) : this.state.id,
            title: this.state.title,
            body: this.state.body,
            flag: this.state.finished,

        };
        // console.warn("data sebelum dispatch",data)
        if(this.state.id === 0){
            this.props.dispatch({
                type: JOB_ADD,
                data,
            });
        }else{
            this.props.dispatch({
                type: JOB_UPDATE,
                data,
            });
        }
        this.props.navigation.goBack();
      }

    render(){
        const {finished, title, body, id} = this.state;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button onPress={() => this.props.navigation.goBack()} transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{id === 0 ? 'Add Job' : 'Update Job'}</Title>
                    </Body>
                    <Right>
                        <Button onPress={ () => this.SubmitAddJob()} transparent>
                            <Icon name='md-checkmark' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Name</Label>
                        <Input value={title} onChangeText={(value) => this.setState({title: value})} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Description</Label>
                        <Input value={body} onChangeText={(value) => this.setState({body: value})} />
                    </Item>
                    <ListItem onPress={() => {this.setState({finished: !finished})}}>
                        <CheckBox onPress={() => {this.setState({finished: !finished})}} checked={finished} />
                        <Body>
                            <Text>Finished</Text>
                        </Body>
                    </ListItem>
                </Form>
                </Content>
            </Container>
        );
    }
}

let mapStateToProps = ({ jobReducer }) => {
    let {
        loader,
        error,
        errormsg,
        dataJob,
    } = jobReducer;
    return {
        loader,
        error,
        errormsg,
        dataJob,
    };
  };

export default connect(mapStateToProps)(InputJobScreen);
