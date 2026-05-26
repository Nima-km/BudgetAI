import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { type CategoryStat } from "./CategoryBreakdownList";

interface CategoryLegendGridProps {
    data: CategoryStat[];
    total?: number;
    currencySymbol?: string;
}

interface LegendItemProps {
    item: CategoryStat;
    pct: number;
    currencySymbol: string;
}

const LegendItem = ({ item, pct, currencySymbol }: LegendItemProps) => (
    <View style={styles.item}>
        <View style={styles.header}>
            <View style={[styles.dot, { backgroundColor: item.color }]} />
            <Text style={styles.name}>{item.label}</Text>
        </View>
        <Text style={styles.value}>
            {currencySymbol}
            {item.amount.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            })}
            {" · "}
            {pct.toFixed(0)}%
        </Text>
    </View>
);

export const CategoryLegendGrid = ({
    data,
    total,
    currencySymbol = "$",
}: CategoryLegendGridProps) => {
    const resolvedTotal = total ?? data.reduce((sum, d) => sum + d.amount, 0);

    return (
        <View style={styles.grid}>
            {data.map((item) => {
                const pct =
                    resolvedTotal > 0 ? (item.amount / resolvedTotal) * 100 : 0;
                return (
                    <LegendItem
                        key={item.key}
                        item={item}
                        pct={pct}
                        currencySymbol={currencySymbol}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        //   paddingHorizontal: 20,
        rowGap: 16,
    },
    item: {
        width: "50%",
        gap: 3,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    dot: {
        width: 9,
        height: 9,
        borderRadius: 3,
    },
    name: {
        fontSize: 12,
        color: "#8B949E",
    },
    value: {
        fontSize: 14,
        fontWeight: "500",
        color: "#E6EDF3",
        paddingLeft: 15, // aligns under the label, past the dot
    },
});
