import StyledRadioButton from "@/components/UIcomponents/Buttons/RadioButton";
import {
    CategoryBreakdownList,
    CategoryStat,
} from "@/components/UIcomponents/IconProvider/CategoryBreakdownList";
import { CATEGORY_ICONS } from "@/components/UIcomponents/IconProvider/CategoryIcon";
import { CategoryLegendGrid } from "@/components/UIcomponents/IconProvider/CategoryLegendGrid";
import { H1, H2, H3 } from "@/components/UIcomponents/Typography";
import { colors } from "@/theme";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const proccessChartData = (data: CategoryStat[]) => {
    const total = data.reduce((a, b) => a + b.amount, 0);

    return data.map((item) => ({
        value: item.amount / total,
        color: CATEGORY_ICONS[item.key].color,
    }));
};

const analytics = () => {
    const [selcetedType, setSelcetedType] = useState("Expense");
    const pieData = [
        { value: 54, color: CATEGORY_ICONS["Groceries"].color },
        { value: 40, color: CATEGORY_ICONS["Education"].color },
        { value: 20, color: CATEGORY_ICONS["Bills"].color },

        { value: 20, color: CATEGORY_ICONS["Restaurant"].color },
    ];
    const SPENDING: CategoryStat[] = [
        {
            key: "Groceries",
            label: "Groceries",
            amount: 794,
            color: CATEGORY_ICONS["Groceries"].color,
        },
        {
            key: "Bills",
            label: "Bills",
            amount: 625,
            color: CATEGORY_ICONS["Bills"].color,
        },
        {
            key: "Restaurant",
            label: "Restaurant",
            amount: 511,
            color: CATEGORY_ICONS["Restaurant"].color,
        },
        {
            key: "Entertainment",
            label: "Entertainment",
            amount: 397,
            color: CATEGORY_ICONS["Entertainment"].color,
        },
        {
            key: "Transport",
            label: "Transport",
            amount: 312,
            color: CATEGORY_ICONS["Transport"].color,
        },
        {
            key: "Health",
            label: "Health",
            amount: 202,
            color: CATEGORY_ICONS["Health"].color,
        },
    ];
    const INCOME: CategoryStat[] = [
        {
            key: "Salary",
            label: "Salary",
            amount: 794,
            color: CATEGORY_ICONS["Salary"].color,
        },
        {
            key: "Business",
            label: "Business",
            amount: 625,
            color: CATEGORY_ICONS["Business"].color,
        },
        {
            key: "Rental",
            label: "Rental",
            amount: 511,
            color: CATEGORY_ICONS["Rental"].color,
        },
        {
            key: "Side Hustle",
            label: "Side Hustle",
            amount: 397,
            color: CATEGORY_ICONS["Side Hustle"].color,
        },
        {
            key: "Freelance",
            label: "Freelance",
            amount: 312,
            color: CATEGORY_ICONS["Freelance"].color,
        },
    ];
    return (
        <ScrollView style={{ flex: 1, padding: 20, marginTop: 70, gap: 20 }}>
            <StyledRadioButton
                options={[
                    {
                        label: "Spending",
                        value: "Expense",
                    },
                    {
                        label: "Income",
                        value: "Income",
                    },
                ]}
                onSelect={setSelcetedType}
            />
            <H2>Spending</H2>
            <View
                style={{
                    alignItems: "center",
                }}
            >
                <PieChart
                    donut
                    textColor="black"
                    innerRadius={100}
                    innerCircleColor={colors.background}
                    radius={150}
                    textSize={20}
                    strokeWidth={3}
                    strokeColor={colors.background}
                    // showTextBackground
                    textBackgroundRadius={26}
                    data={proccessChartData(
                        selcetedType == "Expense" ? SPENDING : INCOME,
                    )}
                    centerLabelComponent={() => {
                        return (
                            <View
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <H1
                                    style={{
                                        fontSize: 22,
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                >
                                    $2,421
                                </H1>
                                <H3
                                    style={{
                                        fontSize: 14,
                                        color: colors.secondary_text,
                                    }}
                                >
                                    total spent
                                </H3>
                            </View>
                        );
                    }}
                />
            </View>
            <CategoryLegendGrid
                data={selcetedType == "Expense" ? SPENDING : INCOME}
                total={2841}
            />
            <CategoryBreakdownList
                data={selcetedType == "Expense" ? SPENDING : INCOME}
            />
        </ScrollView>
    );
};

export default analytics;

const styles = StyleSheet.create({});
