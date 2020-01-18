import React, { Component } from 'react';
import {
View,
StyleSheet,
Text,
ActivityIndicator,
} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Fab, Icon, Button, Spinner } from 'native-base';
import { FlatList, RectButton } from 'react-native-gesture-handler';

import SwipeableRowComp from '../components/SwipeableRowComp';
import DATA from '../constants/DataDummy';
import { connect } from 'react-redux';
import {
    getDataAllJob,
} from '../services/redux/actions/jobAction';
const Row = ({ item, navigation }) => (
    <RectButton style={style.rectButton} onPress={() => navigation.navigate('InputJobScreen',{id: item.id, title: item.title, body: item.body, flag: item.flag})}>
      <Text style={style.fromText}>{item.title} {item.flag ? '[FINISHED]' : ''}</Text>
      <Text numberOfLines={2} style={[style.messageText,{textDecorationLine: item.flag ? 'line-through' : 'none', textDecorationStyle:item.flag ? 'solid' : null}]} >
        {item.body}
      </Text>
    </RectButton>
  );

const SwipeableRow = ({ item, index, navigation, isLast }) => {

    return (
    <SwipeableRowComp dataForDelete={item} isLast={isLast} >
        <Row item={item} navigation={navigation} />
    </SwipeableRowComp>
    );

};

class TodoLanding extends Component{
    constructor(props) {
        super(props);
        this.state = {
          active: false,
        };
      }

      componentDidMount(){
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this.forceUpdate()
          });
        this.props.getDataAllJob();
      }
    render(){
        return (
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>To Do</Title>
                    </Body>
                    <Right />
                </Header>
                <View style={{flex: 1}}>
                    {/* {console.warn("test",this.props.dataJob)} */}
                {
                    this.props.loader ? 
                    <Spinner color='blue'/> :
                    
                    <FlatList
                    data={this.props.dataJob}
                    ItemSeparatorComponent={() => <View style={style.separator} />}
                    renderItem={({ item, index }) => (
                        
                    <SwipeableRow item={item} index={index} isLast={index === this.props.dataJob.length - 1} navigation={this.props.navigation} />
                    )}
                    keyExtractor={(item, index) => `message ${index}`}
                />
                }
                
                <Fab
                active={this.state.active}
                direction="up"
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => 
                this.props.navigation.navigate('InputJobScreen',{id: 0, title: '', body: '', flag: false})
                // console.log(JSON.stringify(this.props.dataJob))
                }>
                    <Icon name="ios-add" />
                </Fab>
                </View>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: '#fff',
    },
    rectButton: {
        flex: 1,
        height: 80,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'white',
      },
      separator: {
        backgroundColor: 'rgb(200, 199, 204)',
        height: StyleSheet.hairlineWidth,
      },
      fromText: {
        fontWeight: 'bold',
        backgroundColor: 'transparent',
      },
      messageText: {
        color: '#999',
        backgroundColor: 'transparent',
      },
      dateText: {
        backgroundColor: 'transparent',
        position: 'absolute',
        right: 20,
        top: 10,
        color: '#999',
        fontWeight: 'bold',
      },
});

let mapStateToProps = ({ jobReducer }) => {
    let {
        loader,
        error,
        errormsg,
        dataJob,

        getDataAllJob,
    } = jobReducer;
    return {
        loader,
        error,
        errormsg,
        dataJob,

        getDataAllJob,
    };
  };

  export default connect(mapStateToProps, {
    getDataAllJob,
  })(TodoLanding);
