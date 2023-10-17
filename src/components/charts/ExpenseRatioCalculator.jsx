import {
  Card,
  Text,
  Flex,
  ProgressBar,
  Grid,
  Icon,
  Title,
  Divider,
  Bold,
  Accordion,
  AccordionBody,
  AccordionHeader,
  BarList,
} from "@tremor/react";

import { ArrowsPointingOutIcon, BoltIcon } from "@heroicons/react/20/solid";


const card = [
  {
    title: "Average Expense Coverage Ratio (GCR)",
    value: 41,
    icon: ArrowsPointingOutIcon,
    color: "rose",
    date: "15.11.2022",
    info: "Single Panel GCR in %",
    data: [
      { name: "Panel 1", value: 53 },
      { name: "Panel 2", value: 24 },
      { name: "Panel 3", value: 38 },
      { name: "Panel 4", value: 33 },
      { name: "Panel 5", value: 57 },
    ],
  },
  {
    title: "Average Performance Ratio",
    value: 83,
    icon: BoltIcon,
    color: "indigo",
    date: "Today",
    info: "Single Income Performance in %",
    data: [
      { name: "Panel 1", value: 96 },
      { name: "Panel 2", value: 62 },
      { name: "Panel 3", value: 78 },
      { name: "Panel 4", value: 82 },
      { name: "Panel 5", value: 97 },
    ],
  },
];

const dataFormatter = (number) => `${Intl.NumberFormat("us").format(number).toString()}%`;

export default function ExpenseRatioCalculator() {
  return (
    <Grid numItemsSm={1} numItemsLg={2} className="gap-6">
      {card.map((item) => (
        <Card decoration="left" decorationColor={item.color} key={item.title} className="h-fit">
          <Flex justifyContent="start" className="space-x-4">
            <Icon variant="outlined" icon={item.icon} size="sm" color={item.color} />
            <Title className="truncate">{item.title}</Title>
          </Flex>
          <Flex className="space-x-3 mt-3">
            <ProgressBar className="mt-0" value={item.value} color={item.color} />
            <Title>{item.value}%</Title>
          </Flex>
          <Divider />
          <Text>
            Last Inspection: <Bold>{item.date}</Bold>
          </Text>
          <Accordion className="mt-4">
            <AccordionHeader>
              <div className="space-y-2">
                <Text>{item.info}</Text>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <BarList
                key={item.title}
                data={item.data}
                className="mt-2"
                color={item.color}
                valueFormatter={dataFormatter}
              />
            </AccordionBody>
          </Accordion>
        </Card>
      ))}
    </Grid>
  );
}