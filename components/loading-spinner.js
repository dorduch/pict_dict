//@flow
import React, {Component} from 'react';
import { Container, Content, Spinner } from 'native-base';

export default class LoadingSpinner extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Spinner />
                </Content>
            </Container>
        );
    }
}