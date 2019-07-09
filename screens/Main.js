import React, {Component} from 'react';
import {Container, View, Header, Left, Body,  Right, Button, Title, Text, Textarea} from 'native-base';

export default class Main extends Component{
    

    render(){
        const {navigate} = this.props.navigation;
        return(
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>メイン</Title>
                    </Body>
                    <Right/>
                </Header>
                <View>
                    <Button small iconRight transparent primary onPress={()=>navigate('Push')}>
                        <Text>プッシュ表示</Text>
                    </Button>
                </View>
                <View>
                    <Button small iconRight transparent primary onPress={()=>navigate('Modal')}>
                        <Text>モーダル表示</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}