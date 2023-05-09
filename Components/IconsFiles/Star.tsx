import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';
import { colors } from '../colors';

export const StarIcon = (): IconElement => (
  <Icon
    style={styles.icon}
    fill={colors.white}
    name='award-outline'
  />
);

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
  },
});