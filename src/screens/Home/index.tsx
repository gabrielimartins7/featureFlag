import { Image, Text, View } from "react-native";

import { useFeatureFlag } from "configcat-react";

import Icon from "../../../assets/finance.png";

import { styles } from "./styles";

export function Home(){
    const { value: showEventFeatureBanner, loading } = useFeatureFlag('event_feature_banner', false);

    if(loading){
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Meus objetivos</Text>
                </View>
                
                {
                    showEventFeatureBanner && <View style={styles.banner}>
                        <Image source={Icon} style={styles.icon} />
                        <Text style={styles.title}>Meus objetivos</Text>
                    </View>
                }
            </View>
        </View>
    );
}