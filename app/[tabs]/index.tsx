import { Stack } from "expo-router";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButtons from "../../components/CategoryButtons";

const Page = () => {
    const headerHeight = useHeaderHeight();
    return (
        <>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerTitle: "",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
                            <Image
                                source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=female" }}
                                style={{ width: 40, height: 40, borderRadius: 10 }}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {}}
                            style={{
                                marginRight: 20,
                                backgroundColor: Colors.white,
                                padding: 10,
                                borderRadius: 10,
                                shadowColor: "#171717",
                                shadowOffset: { width: 2, height: 4 },
                                shadowOpacity: 0.2,
                                shadowRadius: 3,
                            }}
                        >
                            <Ionicons name="notifications" size={20} color={Colors.black} />
                        </TouchableOpacity>
                    ),
                }}
            />

            <View style={[styles.container, { paddingTop: headerHeight }]}>
                <Text style={styles.headingText}> Explore The Beautiful World!</Text>

                <View style={styles.searchSectionWrapper}>
                    <View style={styles.searchBar}>
                        <Ionicons name="search" size={18} color={Colors.black} />
                        <TextInput placeholder="Search..." />
                    </View>

                    <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
                        <Ionicons name="options" size={28} color={Colors.white} />
                    </TouchableOpacity>
                </View>

                <CategoryButtons />
            </View>
        </>
    );
};

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.bgColor,
    },
    headingText: {
        fontSize: 28,
        fontWeight: "800",
        backgroundColor: Colors.bgColor,
    },
    searchSectionWrapper: {
        flexDirection: "row",
        marginVertical: 20,
    },
    searchBar: {
        flex: 1,
        flexDirection: "row",
        gap: 5,
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 10,
    },
    filterBtn: {
        backgroundColor: Colors.primaryColor,
        padding: 12,
        borderRadius: 10,
        marginLeft: 20,
    },
});