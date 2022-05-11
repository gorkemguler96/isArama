import React from 'react';
import {View,Text,TouchableOpacity} from "react-native";
import styles from './RemoveBtn.style'
import { removeItem } from '../../redux/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

function RemoveBtn({item}) {

    const dispatch = useDispatch();
    const favoriler = useSelector((state) => state.counter.value)
    const silinecekItem = favoriler.filter((x)=>x.id !== item.id)


    const removeItems = () => {
        dispatch(removeItem(silinecekItem))
    }

    return (
        <View>
            <TouchableOpacity onPress={removeItems} style={styles.container}>
                <Text style={styles.text}>
                    Remove
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default RemoveBtn;
