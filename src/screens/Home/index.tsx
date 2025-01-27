import { Image, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

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
                        <Text style={styles.textBanner}>Monte sua carteira de investimento</Text>
                    </View>
                }
                <Text style={styles.securite}>Cuide da segurança do seu futuro</Text>

                <View style={styles.section}>
                    <MaterialIcons name="account-balance-wallet" size={28} color="#FF6015" />
                    <View style={styles.subSection}>
                        <Text style={styles.titleBold}>Reserva de emergência</Text>
                        <Text style={styles.subtitle}>Esteja preparado se tiver improvisto</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}