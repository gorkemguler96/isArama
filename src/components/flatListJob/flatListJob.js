import React from 'react';
import {View,Text} from "react-native";
import styles from './flatListJob.style'

function FlatListJob({item}) {
    return (
        <View style={styles.container}>
            <Text style={styles.color}>
                {item.name}
            </Text>
            <Text style={styles.color}>
                sprinklr
            </Text>
            <Text style={styles.color}>
                {item.locations.map(x=>x.name)}
            </Text>
            <Text style={styles.color}>
                {item.levels.map(x=>x.name)}
            </Text>
        </View>
    );
}

export default FlatListJob;
