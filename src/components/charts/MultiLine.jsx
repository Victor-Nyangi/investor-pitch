import { Card, AreaChart, Title, Text } from "@tremor/react";

const data = [
  {
    Month: "Jan 21",
    Income: 77890,
    Expenses: 26400,
  },
  {
    Month: "Feb 21",
    Income: 48900,
    Expenses: 5398,
  },
  // ...
  {
    Month: "Jan 22",
    Income: 38900,
    Expenses: 15980,
  },
];

export default function MultiLine() {
  return (
    <Card>
      <Title>Performance</Title>
      <Text>Comparison between Income and Expenses</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={["Income", "Expenses"]}
        index="Month"
        colors={["indigo", "fuchsia"]}
        yAxisWidth={60}
        valueFormatter={(number) =>
          `$ ${Intl.NumberFormat("us").format(number).toString()}`
        }
      />
    </Card>
  );
}