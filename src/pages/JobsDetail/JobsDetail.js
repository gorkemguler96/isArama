import React from 'react';
import {View,ScrollView,Text,TouchableOpacity} from "react-native";
// import HTMLView from 'react-native-htmlview';
import styler from './JobDetail.style'
import {StyleSheet} from 'react-native';
import SubmitBtn from "../../components/SubmitButton/SubmitBtn";
import FavoriteBtn from "../../components/FavoriteJobButton/FavoriteBtn";

function JobsDetail({route,navigation}) {

    const {item} = route.params
    const jobDetails = item.contents
    const locations = item.locations.map(x=>x.name)
    const levels = item.levels.map(x=>x.name)

    return (
        <View  style={styler.container}>
            <ScrollView>
                <View style={styler.header_container}>
                    <Text  style={styler.job}>{item.name}</Text>
                    <Text  style={styler.locations}>Locations : {locations}</Text>
                    <Text  style={styler.levels}>Job Level : {levels}</Text>
                    <Text  style={styler.Detail}>Job Detail</Text>
                </View>

                {/*<HTMLView*/}
                {/*    value={jobDetails}*/}
                {/*    stylesheet={styles}*/}
                {/*/>*/}

                <View style={styler.btns}>
                    <SubmitBtn/>
                    <FavoriteBtn navigation={navigation} item={item}/>
                </View>


            </ScrollView>
        </View>

    );
}
// const styles = StyleSheet.create({
//     p: {
//         fontWeight: 'bold',
//         backgroundColor:"white",
//     },
//     h1:{
//         display:"none"
//     },
// });

export default JobsDetail;


