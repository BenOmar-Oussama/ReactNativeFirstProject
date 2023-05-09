import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';
import { colors } from '../colors';


export const MenuIcon = (): IconElement => (
  <Icon
    style={styles.icon}
    fill= {colors.primary}
    name='menu-2'
    
  />
);

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 70,
    width: 32,
    height: 32,
  },
});