import React from 'react';

// If you get the error "Unrecognized font family" when run it on iOS,
// read this link: https://www.seishin.me/react-unrecognized-font-family/
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

const Menu = ({ translateY }) => {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
            })
        }}>
            <Code>
                <QRCode value="https://github.com/felipesantanadev"
                        size={80}
                        backgroundColor="#FFF"
                        color="#8B10AE" />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar cartao</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText>Configuracoes do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>Sair do app</SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}

export default Menu;