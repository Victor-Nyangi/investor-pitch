import { Card, BarChart, Title, Text } from "@tremor/react";

const data = [
  {
    Month: "Jan 21",
    Income: 72890,
    Expenses: 32400,
  },
  {
    Month: "Feb 21",
    Income: 85890,
    Expenses: 45398,
  },
  // ...
  {
    Month: "Jan 22",
    Income: 73890,
    Expenses: 32980,
  },
];

export default function TremorBarChart() {
  return (
    <Card>
      <Title>Performance</Title>
      <Text>Comparison between Income and Expenses</Text>
      <BarChart
        className="mt-4 h-80"
        data={data}
        index="Month"
        categories={["Income", "Expenses"]}
        colors={["indigo", "fuchsia"]}
        stack={false}
        yAxisWidth={60}
        valueFormatter={(number) =>
          `$ ${Intl.NumberFormat("us").format(number).toString()}`
        }
      />
    </Card>
  );
}