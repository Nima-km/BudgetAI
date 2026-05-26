import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

interface IconProps {
    name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    color: string;
    bg: string;
}
export type CategoryNames =
    | "Groceries"
    | "Restaurant"
    | "Entertainment"
    | "Bills"
    | "Transport"
    | "Health"
    | "Shopping"
    | "Education"
    | "Salary"
    | "Freelance"
    | "Investment"
    | "Rental"
    | "Bonus"
    | "Gift"
    | "Refund"
    | "Pension"
    | "Side Hustle"
    | "Business"
    | "Dividend"
    | "Other";

export const CATEGORY_ICONS: Record<CategoryNames, IconProps> = {
    // Expenses
    Groceries: { name: "cart-outline", color: "#1D9E75", bg: "#0A1F17" },
    Restaurant: { name: "food-fork-drink", color: "#EF9F27", bg: "#1E1208" },
    Entertainment: { name: "television-play", color: "#7F77DD", bg: "#1A1A2E" },
    Bills: { name: "file-document-outline", color: "#378ADD", bg: "#0D1A2E" },
    Transport: { name: "car-outline", color: "#D4537E", bg: "#1C0E10" },
    Health: { name: "heart-pulse", color: "#E24B4A", bg: "#1A0A0A" },
    Shopping: { name: "shopping-outline", color: "#639922", bg: "#0F1A0A" },
    Education: { name: "school-outline", color: "#7638e8", bg: "#201708" },

    // Income
    Salary: { name: "briefcase-outline", color: "#2DBD8F", bg: "#0C2419" },
    Freelance: { name: "laptop", color: "#A78BDD", bg: "#160F2E" },
    Investment: { name: "trending-up", color: "#F4C842", bg: "#1F1A06" },
    Rental: { name: "home-outline", color: "#4DA6E8", bg: "#0A1720" },
    Bonus: { name: "star-outline", color: "#F07D3A", bg: "#201008" },
    Gift: { name: "gift-outline", color: "#D B6ECC", bg: "#1E0D1C" },
    Refund: { name: "cash-refund", color: "#7EC456", bg: "#111A0B" },
    Pension: { name: "bank-outline", color: "#5B9BD5", bg: "#0C1520" },
    "Side Hustle": {
        name: "lightning-bolt-outline",
        color: "#E24B4A",
        bg: "#1A0A0A",
    },
    Business: { name: "store-outline", color: "#1D9E75", bg: "#0A1F17" },
    Dividend: { name: "chart-pie", color: "#7F77DD", bg: "#1A1A2E" },
    Other: { name: "dots-horizontal", color: "#8B949E", bg: "#161B22" },
};

// Usage
interface Props {
    category: CategoryNames;
}
export const CategoryIcon = ({ category }: Props) => {
    const icon = CATEGORY_ICONS[category];
    return (
        <View
            style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: icon.bg,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <MaterialCommunityIcons
                name={icon.name}
                size={20}
                color={icon.color}
            />
        </View>
    );
};
