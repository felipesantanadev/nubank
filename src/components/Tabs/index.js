import React from 'react';

// If you get the error "Unrecognized font family" when run it on iOS,
// read this link: https://www.seishin.me/react-unrecognized-font-family/
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabText} from './styles';

const Tabs = ({ translateY }) => {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [1, 0.3],
                extrapolate: 'clamp'
            }),
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 30],
                    extrapolate: 'clamp'
                })
            }]
        }}>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={24} color="#FFF" />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color="#FFF" />
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-downward" size={24} color="#FFF" />
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-upward" size={24} color="#FFF" />
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" size={24} color="#FFF" />
                    <TabText>Bloquear cartao</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    )
}

export default Tabs;