import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { fontSize, gutter } from '../theme/constants';

type Props = {
  title?: string;
};

const BookListHeader: FC<Props> = ({ title }) => (
  <Text style={styles.title}>{title}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: fontSize.title,
    textAlign: 'center',
    marginVertical: gutter * 3,
  },
});

export default BookListHeader;
