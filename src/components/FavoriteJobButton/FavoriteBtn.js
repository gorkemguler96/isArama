import React, {useEffect} from 'react';
import {View,TouchableOpacity,Text} from "react-native";
import styles from './FavoriteBtn.style'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { favoryAdd } from '../../redux/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

function FavoriteBtn({navigation,item}) {

    const distpatch = useDispatch();
    const favoryeklendi = useSelector((state) => state.counter.value)
    const iceriyorsa =item.id
    const eklenendeiceriyorsa= favoryeklendi.map(x=>x.id)
    const aynisiVarsa = eklenendeiceriyorsa.includes(iceriyorsa)



    const addFavory = () => {
        if(!aynisiVarsa){
            distpatch(favoryAdd( [...favoryeklendi,item]))
        }
        navigation.navigate('FavoryJobs')
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={addFavory} style={styles.innercontainer}>
                    <Icon
                        name="heart"
                        color="white"
                        size={30}
                    />
                    <Text style={styles.text}>
                        Favorite Job
                    </Text>
            </TouchableOpacity>
        </View>
    );
}

export default FavoriteBtn;
