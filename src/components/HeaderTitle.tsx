import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';

interface Props {
  title: string
}

const HeaderTitle = ({title}:Props) => {
    const { theme:{colors} } = useContext(ThemeContext);
    const { top } = useSafeAreaInsets();

    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
        <Text style={{
          ...styles.title,
          color: colors.text
        }}>{ title }</Text>
      </View>
    )
}

export default HeaderTitle;
