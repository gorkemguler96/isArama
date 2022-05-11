import React from 'react';
import {View,Text,ActivityIndicator} from "react-native";
import styles from './Loading.style'

function Loading(props) {
    return (
        <View style={styles.loading}>
            <ActivityIndicator size="large" color="red" />
        </View>
    );
}

export default Loading;
