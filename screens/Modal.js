import React, {Component} from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class Modal extends Component{
    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='close'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>モーダル</Title>
                    </Body>
                    <Right/>
                </Header>
            </Container>
        );
    }
}