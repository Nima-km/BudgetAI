import { colors } from "@/theme";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { CategoryIcon, CategoryNames } from "../IconProvider/CategoryIcon";
import { H3 } from "../Typography";
type EntryType = "expense" | "income";

interface CategoryGridProps {
    type: EntryType;
    selected: string;
    categories: { key: CategoryNames }[];
    onSelect: (key: string) => void;
}

export const CategoryGrid = ({
    type,
    selected,
    onSelect,
    categories,
}: CategoryGridProps) => {
    return (
        <View style={styles.catGrid}>
            {categories.map(({ key }) => {
                const isSelected = selected === key;
                return (
                    <TouchableOpacity
                        key={key}
                        style={[
                            styles.catBtn,
                            isSelected && styles.catBtnSelected,
                        ]}
                        onPress={() => onSelect(key)}
                        accessibilityRole="button"
                        accessibilityState={{ selected: isSelected }}
                        accessibilityLabel={key}
                    >
                        <View
                            style={[
                                styles.catIcon,
                                { backgroundColor: colors.medium_gray },
                            ]}
                        >
                            <CategoryIcon category={key} />
                        </View>
                        <H3
                            style={[
                                styles.catLabel,
                                isSelected && styles.catLabelSelected,
                            ]}
                        >
                            {key}
                        </H3>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    catGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 16,
        gap: 8,
        paddingBottom: 16,
    },
    catBtn: {
        width: "22%",
        flexGrow: 1,
        alignItems: "center",
        backgroundColor: "#161B22",
        borderWidth: 1,
        borderColor: "#21262D",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 4,
        gap: 5,
    },
    catBtnSelected: {
        borderColor: "#1D9E75",
        backgroundColor: "#0A1F17",
    },
    catBtnSelectedIncome: {
        borderColor: "#7F77DD",
        backgroundColor: "#1A1A2E",
    },
    catIcon: {
        width: 28,
        height: 28,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    catLabel: {
        fontSize: 10,
        color: "#8B949E",
        textAlign: "center",
    },
    catLabelSelected: {
        color: "#1D9E75",
    },
});
