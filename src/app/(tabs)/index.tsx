import HeaderSimple from "@/components/navComponents/HeaderSimple";
import {
	CategoryIcon,
	CategoryNames,
} from "@/components/UIcomponents/IconProvider/CategoryIcon";
import { H1, H4, H5, H6 } from "@/components/UIcomponents/Typography";
import { colors } from "@/theme";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
	const categories: { name: CategoryNames; amount: number }[] = [
		{
			name: "Groceries",
			amount: 794,
		},
		{
			name: "Entertainment",
			amount: 394,
		},
		{
			name: "Restaurant",
			amount: 511,
		},
		{
			name: "Bills",
			amount: 625,
		},
	];
	const recent: { name: string; category: CategoryNames; amount: number }[] =
		[
			{
				name: "Whole Foods Market",
				category: "Groceries",
				amount: -84,
			},
			{
				name: "Cineplex",
				category: "Entertainment",
				amount: -23,
			},
			{
				name: "Chipotle",
				category: "Restaurant",
				amount: -27,
			},
			{
				name: "Phone Bill",
				category: "Bills",
				amount: -55,
			},
		];
	return (
		<View style={styles.container}>
			<HeaderSimple title="Home" />
			<View style={{ padding: 20, gap: 12 }}>
				<H6 style={{ color: colors.secondary_text }}>Total balance</H6>
				<H1 style={{ fontSize: 42 }}>$4524</H1>
				<View
					style={{
						borderRadius: 15,
						backgroundColor: colors.primary,
						padding: 20,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<View style={{ gap: 8 }}>
							<H6 style={{ color: colors.secondary_text }}>
								Spent this month
							</H6>
							<H5>$2,800</H5>
						</View>
						<View
							style={{
								gap: 8,
								justifyContent: "flex-end",
								// backgroundColor: colors.error,
							}}
						>
							<H6 style={{ color: colors.secondary_text }}>
								Spent this month
							</H6>
							<H5 style={{ textAlign: "right" }}>$2,800</H5>
						</View>
					</View>
				</View>
				<View style={{ gap: 12 }}>
					<H5>Categories</H5>
					<FlatList
						data={categories}
						renderItem={({ item, index }) => (
							<View
								style={{
									width: 90,
									height: 120,
									borderRadius: 20,
									gap: 12,
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: colors.primary,
								}}
							>
								<CategoryIcon category={item.name} />
								<H6
									numberOfLines={1}
									style={{
										color: colors.secondary_text,
									}}
								>
									{item.name}
								</H6>
								<H6>${item.amount}</H6>
							</View>
						)}
						horizontal
						showsHorizontalScrollIndicator={false}
						ItemSeparatorComponent={<View style={{ width: 10 }} />}
					/>
				</View>
				<View style={{ gap: 12 }}>
					<H5>Recent transactions</H5>
					<FlatList
						data={recent}
						renderItem={({ item, index }) => (
							<View
								style={{
									gap: 12,
									flexDirection: "row",
									//  height: 40,
									justifyContent: "space-between",
									paddingVertical: 8,
								}}
							>
								<View style={{ flexDirection: "row", gap: 8 }}>
									<CategoryIcon category={item.category} />
									<View>
										<H4>{item.name}</H4>
										<H5
											style={{
												color: colors.secondary_text,
											}}
										>
											{item.category}
										</H5>
									</View>
								</View>
								<H5
									style={{
										color:
											item.amount < 0
												? colors.red
												: colors.green,
									}}
								>
									{item.amount < 0 ? "-" : ""}$
									{Math.abs(item.amount)}
								</H5>
							</View>
						)}
						showsHorizontalScrollIndicator={false}
						ItemSeparatorComponent={
							<View
								style={{
									height: 1,
									backgroundColor: colors.primary,
								}}
							/>
						}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
