import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const Details = () => {
    const { id } = useLocalSearchParams()

    return (
        <View>
            <Text>Movie details: {id}</Text>
        </View>
    );
};

export default Details

const styles = StyleSheet.create({});