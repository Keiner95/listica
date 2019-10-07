import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Block from './Block';
import { theme } from '../constants';

export default class Card extends Component {
  render() {
    const { color, style, children, ...props } = this.props;
    const cardStyles = [
      styles.card,
      style,
    ];

    return (
      <Block color={color || theme.colors.white} style={cardStyles} {...props}>
        {children}
      
      </Block>
    )
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.radius,
    padding: 4,
    marginBottom: theme.sizes.base,
<<<<<<< HEAD
    backgroundColor:'rgba(0,0,0,0.2)',
  
    
=======
    backgroundColor:'rgba(154,151,151,0.2)',
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
  },
})
