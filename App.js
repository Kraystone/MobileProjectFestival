import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


export default function App() {
    let img = "C:\\Users\\leote\\OneDrive\\Documents\\MobileProjectFestival\\MobileProjectFestival\\assets\\";
    return (
        <View style={styles.backView}>
            <View style={styles.topBack}>

                <View style={styles.topViewContainer}>
                    <Image style={styles.logoApp} source={require(img + 'Logo.png')}/>
                    <View style={styles.viewUser}>
                        <Image style={styles.account} source={require(img + 'account.png')}/>
                        <View>
                            <Text style={styles.topTextUser}>User</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.topTextTitle}>Discover Amazing Events</Text>
                </View>

                <View>
                    <Text style={styles.topTextEvent}>Popular Events 🔥</Text>
                </View>

            </View>

            <View style={styles.cardContainerEvent}>
                <ScrollView style={styles.cardScrollViewEvent} horizontal={true}>

                    <View style={styles.cardViewContainer}>
                        <Image style={styles.imgCard} source={require(img + 'Kikesa.jpg')}/>
                        <Text style={styles.cardTextNom}>😎 Nom Artiste Concert</Text>
                        <Text style={styles.cardTextDate}>📅 Date D-D Month Year</Text>
                        <Text style={styles.cardTextLieuxPrix}>📍 Lieux | 💲 ???€</Text>
                    </View>
                    <View style={styles.cardViewContainer}>
                        <Image style={styles.imgCard} source={require(img + 'Rammstein.jpg')}/>
                        <Text style={styles.cardTextNom}>😎 Nom Artiste Concert</Text>
                        <Text style={styles.cardTextDate}>📅 Date D-D Month Year</Text>
                        <Text style={styles.cardTextLieuxPrix}>📍 Lieux | 💲 ???€</Text>
                    </View>
                    <View style={styles.cardViewContainer}>
                        <Image style={styles.imgCard} source={require(img + 'Stromae.jpg')}/>
                        <Text style={styles.cardTextNom}>😎 Nom Artiste Concert</Text>
                        <Text style={styles.cardTextDate}>📅 Date D-D Month Year</Text>
                        <Text style={styles.cardTextLieuxPrix}>📍 Lieux | 💲 ???€</Text>
                    </View>
                    <View style={styles.cardViewContainer}>
                        <Image style={styles.imgCard} source={require(img + 'VladimirCauchemar.jpg')}/>
                        <Text style={styles.cardTextNom}>😎 Nom Artiste Concert</Text>
                        <Text style={styles.cardTextDate}>📅 Date D-D Month Year</Text>
                        <Text style={styles.cardTextLieuxPrix}>📍 Lieux | 💲 ???€</Text>
                    </View>

                </ScrollView>
            </View>
            <View>
                <Text style={styles.topTextCategorie}>Categorie Events 🔥</Text>
            </View>
            <View style={styles.cardContainerCategorie}>
                <ScrollView style={styles.cardScrollViewCategorie} horizontal={true}>

                    <View style={styles.cardViewContainer}>
                        <Image style={styles.imgCard} source={require(img + 'Kikesa.jpg')}/>
                        <Text style={styles.cardTextNom}>😎 Nom Artiste Concert</Text>
                        <Text style={styles.cardTextDate}>📅 Date D-D Month Year</Text>
                        <Text style={styles.cardTextLieuxPrix}>📍 Lieux | 💲 ???€</Text>
                    </View>
                    <View style={styles.cardViewContainer}>
                        <Image style={styles.imgCard} source={require(img + 'Rammstein.jpg')}/>
                        <Text style={styles.cardTextNom}>😎 Nom Artiste Concert</Text>
                        <Text style={styles.cardTextDate}>📅 Date D-D Month Year</Text>
                        <Text style={styles.cardTextLieuxPrix}>📍 Lieux | 💲 ???€</Text>
                    </View>
                    <View style={styles.cardViewContainer}>
                        <Image style={styles.imgCard} source={require(img + 'Stromae.jpg')}/>
                        <Text style={styles.cardTextNom}>😎 Nom Artiste Concert</Text>
                        <Text style={styles.cardTextDate}>📅 Date D-D Month Year</Text>
                        <Text style={styles.cardTextLieuxPrix}>📍 Lieux | 💲 ???€</Text>
                    </View>
                    <View style={styles.cardViewContainer}>
                        <Image style={styles.imgCard} source={require(img + 'VladimirCauchemar.jpg')}/>
                        <Text style={styles.cardTextNom}>😎 Nom Artiste Concert</Text>
                        <Text style={styles.cardTextDate}>📅 Date D-D Month Year</Text>
                        <Text style={styles.cardTextLieuxPrix}>📍 Lieux | 💲 ???€</Text>
                    </View>

                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topTextNameApp: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: "stretch",
        paddingTop: 10,
        color: "white"
    },
    topTextUser: {
        flexDirection: "row",
        paddingTop: 10,
        paddingRight: 10,
        color: "white",
        alignSelf: "flex-end"

    },
    topTextTitle: {
        flexDirection: "row",
        paddingTop: 20,
        fontWeight: "bold",
        fontSize: 20,
        shadowColor: "blue",
        paddingLeft: 20,
        color: "white",
        alignSelf: "center",
        paddingBottom: 30
    },
    topTextEvent: {
        flexDirection: "row",
        paddingTop: 10,
        paddingLeft: 20,
        color: "white",
        fontWeight: "bold",

    },
    topTextCategorie: {
        flexDirection: "row",
        paddingTop: 10,
        paddingLeft: 20,
        color: "black",
        fontWeight: "bold",
        margin: 10
    },
    topBack: {
        backgroundColor: "#282727",
        paddingTop: 50,
    },
    cardScrollViewEvent: {},
    cardScrollViewCategorie: undefined,
    cardTextNom: {
        fontWeight: "bold",
        paddingBottom: 5
    },
    cardTextDate: undefined,
    cardTextLieuxPrix: undefined,
    account: {
        height: 50,
        width: 50,
        marginLeft: 250,
    },
    topViewContainer: {
        flexDirection: "row",
        alignSelf: "center"
    },
    cardViewContainer: {
        padding: 20,
        height: 200,
        width: 230,
        alignItems: "center",
        color: "white"

    },
    imgCard: {
        height: 100,
        width: 200,
        borderRadius: 20
    },
    backView: {
        backgroundColor: "#eeeeee"
    },
    cardContainerEvent: {},
    cardContainerCategorie: undefined,
    logoApp: {
      height: 60,
      width: 100
    },
    viewUser: {
        marginRight: 5
    }

});
