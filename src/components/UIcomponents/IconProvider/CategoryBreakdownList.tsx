import React from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	View,
	type ListRenderItem,
} from "react-native";
import { CategoryIcon, CategoryNames } from "./CategoryIcon";

export interface CategoryStat {
	key: CategoryNames;
	label: string;
	amount: number;
	color: string;
}

interface CategoryBreakdownListProps {
	data: CategoryStat[];

	total?: number;
	currencySymbol?: string;
}

interface ItemProps {
	item: CategoryStat;
	pct: number;
	currencySymbol: string;
}

const CategoryRow = ({ item, pct, currencySymbol }: ItemProps) => (
	<View style={styles.row}>
		{/* Left: icon + name */}
		<View style={styles.left}>
			<CategoryIcon category={item.key} />
			<View style={styles.labelWrap}>
				<Text style={styles.name}>{item.label}</Text>
				<View style={styles.barTrack}>
					<View
						style={[
							styles.barFill,
							{ width: `${pct}%`, backgroundColor: item.color },
						]}
					/>
				</View>
			</View>
		</View>

		<View style={styles.right}>
			<Text style={styles.amount}>
				{currencySymbol}
				{item.amount.toLocaleString("en-US", {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				})}
			</Text>
			<Text style={styles.pct}>{pct.toFixed(0)}%</Text>
		</View>
	</View>
);

export const CategoryBreakdownList = ({
	data,
	total,
	currencySymbol = "$",
}: CategoryBreakdownListProps) => {
	const resolvedTotal = total ?? data.reduce((sum, d) => sum + d.amount, 0);

	const renderItem: ListRenderItem<CategoryStat> = ({ item }) => {
		const pct = resolvedTotal > 0 ? (item.amount / resolvedTotal) * 100 : 0;
		return (
			<CategoryRow
				item={item}
				pct={pct}
				currencySymbol={currencySymbol}
			/>
		);
	};

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.key}
			renderItem={renderItem}
			scrollEnabled={false}
			ItemSeparatorComponent={() => <View style={styles.separator} />}
			contentContainerStyle={styles.list}
		/>
	);
};

const styles = StyleSheet.create({
	list: {
		//   paddingHorizontal: 20,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 10,
	},
	separator: {
		height: 0.5,
		backgroundColor: "#21262D",
	},
	left: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		flex: 1,
		marginRight: 12,
	},
	labelWrap: {
		flex: 1,
		gap: 6,
	},
	name: {
		fontSize: 13,
		color: "#E6EDF3",
		fontWeight: "500",
	},
	barTrack: {
		height: 3,
		backgroundColor: "#21262D",
		borderRadius: 2,
		overflow: "hidden",
	},
	barFill: {
		height: "100%",
		borderRadius: 2,
	},
	right: {
		alignItems: "flex-end",
		gap: 2,
	},
	amount: {
		fontSize: 13,
		fontWeight: "500",
		color: "#E6EDF3",
	},
	pct: {
		fontSize: 11,
		color: "#8B949E",
	},
});
