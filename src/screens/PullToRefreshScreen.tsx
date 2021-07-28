import React, { useState } from "react";
import { ScrollView, View, RefreshControl, Text } from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import { styles } from "../theme/appTheme";

const PullToRefreshScreen = () => {
    const [refresh, setRefresh] = useState(false);
    const [data, setData] = useState('');

    const onRefresh = () => {
        setRefresh(true);
        setTimeout(() => {
            setData('hola mundo')
            setRefresh(false)
        }, 1500);
    }
  return (
    <ScrollView
        refreshControl={
            <RefreshControl 
                refreshing={refresh}
                onRefresh={onRefresh}
            />
        }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />

        <Text>{data}</Text>
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
