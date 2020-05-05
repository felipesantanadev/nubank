import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

// If you get the error "Unrecognized font family" when run it on iOS,
// read this link: https://www.seishin.me/react-unrecognized-font-family/
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

const Main = () => {
    let offset = 0;
    const translateY = new Animated.Value(0);
    const animatedEvent = Animated.event([
        {
            nativeEvent: {
                translationY: translateY
            }
        }
    ], {
        useNativeDriver: true
    });

    onHandlerStateChange = (event) => {
        if(event.nativeEvent.oldState === State.ACTIVE){
            let opened = false;
            const { translationY } = event.nativeEvent;
            offset += translationY;

            if(translationY >= 100) {
                opened = true;
            } else {
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }

            Animated.timing(translateY, { 
                    toValue: opened ? 380 : 0, 
                    duration: 200, 
                    useNativeDriver: true
                }
            ).start(() => {
                // Executed when animation ends
                offset = opened ? 380 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    }

    return (
        <Container>
            <Header />
            <Content>
                <Menu translateY={translateY} />
                <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChange}>
                    <Card style={{
                        transform: [{
                            translateY: translateY.interpolate({
                                inputRange: [-350, 0, 380],
                                outputRange: [-50, 0, 380],
                                extrapolate: 'clamp'
                            })
                        }]
                    }}>
                        <CardHeader>
                            <Icon name="attach-money" size={28} color="#666" />
                            <Icon name="visibility-off" size={28} color="#666" />
                        </CardHeader>
                        <CardContent>
                            <Title>Saldo disponivel</Title>
                            <Description>U$190,000.00</Description>
                        </CardContent>
                        <CardFooter>
                            <Annotation>
                                Tranferencia de U$20.00 recebida de Felipe Santana.
                            </Annotation>
                        </CardFooter>
                    </Card>
                </PanGestureHandler>
            </Content>
            <Tabs translateY={translateY} />
        </Container>
    )
}

export default Main;