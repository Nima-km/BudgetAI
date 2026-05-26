import KeyboardAware from "@/components/KeyboardAware/KeyboardAware";
import { PrimaryButton } from "@/components/UIcomponents/Buttons/Button";
import { CategoryGrid } from "@/components/UIcomponents/Buttons/CategoryGrid";
import StyledRadioButton from "@/components/UIcomponents/Buttons/RadioButton";
import DropdownCore from "@/components/UIcomponents/DropDown/DropDownCore";
import { H1, H3, H6 } from "@/components/UIcomponents/Typography";
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES } from "@/constants/Categories";
import { RecurrenceType } from "@/db/schema";
import { colors, typography } from "@/theme";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const log = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selcetedType, setSelcetedType] = useState("Expense");
    const [selectedRecurring, setSelectedRecurring] =
        useState<RecurrenceType>("one-time");
    const [amount, setAmount] = useState("2000");
    const [description, setDescription] = useState("Whole Foods Market");
    return (
        <KeyboardAware>
            <View style={{ flex: 1, padding: 20, marginTop: 50, gap: 12 }}>
                <H3>Log entry</H3>
                <H6 style={{ color: colors.secondary_text }}>
                    Add expenses or income
                </H6>
                <StyledRadioButton
                    options={[
                        {
                            label: "Expense",
                            value: "Expense",
                        },
                        {
                            label: "Income",
                            value: "Income",
                        },
                    ]}
                    onSelect={setSelcetedType}
                />
                <H6 style={{ color: colors.secondary_text }}>Amount</H6>
                <View
                    style={{
                        padding: 12,
                        borderRadius: 10,
                        height: 100,
                        backgroundColor: colors.primary,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                    }}
                >
                    <H1>$</H1>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={[
                            typography.h1,
                            {
                                color: colors.white,
                                textAlignVertical: "center",
                                textAlign: "center",
                            },
                        ]}
                    />
                </View>
                <H6 style={{ color: colors.secondary_text }}>Description</H6>
                <TextInput
                    value={description}
                    onChangeText={setDescription}
                    style={[
                        typography.h5,

                        {
                            padding: 12,
                            borderRadius: 10,

                            backgroundColor: colors.primary,
                            color: colors.white,
                        },
                    ]}
                />
                <H6 style={{ color: colors.secondary_text }}>Date</H6>
                <TextInput
                    value={"May 16"}
                    onChangeText={() => {}}
                    style={[
                        typography.h5,

                        {
                            padding: 12,
                            borderRadius: 10,

                            backgroundColor: colors.primary,
                            color: colors.white,
                        },
                    ]}
                />
                <H6 style={{ color: colors.secondary_text }}>Category</H6>
                <CategoryGrid
                    type={"expense"}
                    selected={selectedCategory}
                    categories={
                        selcetedType == "Expense"
                            ? EXPENSE_CATEGORIES
                            : INCOME_CATEGORIES
                    }
                    onSelect={setSelectedCategory}
                />
                <DropdownCore
                    options={[
                        {
                            label: "One Time",
                            value: "one-time",
                        },
                        {
                            label: "weekly",
                            value: "weekly",
                        },
                        {
                            label: "Bi weekly",
                            value: "bi-weekly",
                        },
                        {
                            label: "Monthly",
                            value: "monthly",
                        },
                        {
                            label: "Yearly",
                            value: "yearly",
                        },
                    ]}
                    onSelect={(item) => setSelectedRecurring(item.value)}
                />
                <PrimaryButton>
                    {selcetedType == "Expense" ? "Save expense" : "Save income"}
                </PrimaryButton>
            </View>
        </KeyboardAware>
    );
};

export default log;

const styles = StyleSheet.create({});
