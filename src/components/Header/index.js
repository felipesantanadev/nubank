import React from 'react';

// If you get the error "Unrecognized font family" when run it on iOS,
// read this link: https://www.seishin.me/react-unrecognized-font-family/
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Top, Logo, Title } from './styles';

import logo from '../../assets/Nubank_Logo.png';

const Header = () => {
    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Felipe</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
        </Container>
    )
}

export default Header;