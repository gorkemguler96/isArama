import React from 'react';
import {View,Text} from "react-native";
import RemoveBtn from "../../components/RemoveBtn/RemoveBtn";
import styles from './FavoryJobs.style'
import {useSelector} from "react-redux";

function FavoryJobs() {

    const favoryeklendi = useSelector((state) => state.counter.value)

    return (
        <View >
            {favoryeklendi.map((item)=>(
                <View key={item.name} style={styles.container}>
                    <Text style={styles.nameText}>
                        {item.name}
                    </Text>
                    <Text style={styles.sprink}>
                        Sprinklr
                    </Text>
                    <Text style={styles.locationText}>
                        {item.locations.map(x=>x.name)}
                    </Text>
                    <Text style={styles.levelText}>
                       {item.levels.map(x=>x.name)}
                    </Text>
                    <RemoveBtn item={item}/>
                </View>
            ))}
        </View>
    );
}

export default FavoryJobs;
