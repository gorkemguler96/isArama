import React from 'react';
import {View,Text,TouchableWithoutFeedback} from "react-native";
import styles from './flatListJob.style'

function FlatListJob({item,navigation}) {

    const jobDeatilPage = () => {
        navigation.navigate('JobsDetail',{item})
    }

    return (
        <TouchableWithoutFeedback onPress={jobDeatilPage}>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.position}>
                        {item.name}
                    </Text>
                    <Text style={styles.y}>
                        Sprinklr
                    </Text>
                    <View style={styles.countryView}>
                        <Text style={styles.country}>
                            {item.locations.map(x=>x.name)}
                        </Text>
                    </View>
                </View>
                <View style={styles.level}>
                    <Text style={styles.color}>
                        {item.levels.map(x=>x.name)}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default FlatListJob;
