import React from 'react';
import {View,Text,TouchableOpacity} from "react-native";
import styles from './SubmitBtn.style'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function SubmitBtn(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.innercontainer}>
                <Icon
                    name="file-edit-outline"
                    color="white"
                    size={30}
                />
                <Text style={styles.text}>
                    Submit
                </Text>

            </TouchableOpacity>
        </View>
    );
}

export default SubmitBtn;
