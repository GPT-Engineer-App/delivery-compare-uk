import React from "react";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Image, Flex, Text, Tooltip } from "@chakra-ui/react";
import { FaTrophy } from "react-icons/fa";

const Index = () => {
  const data = [
    {
      level: "Best in the market",
      icon: <FaTrophy color="gold" />,
      price: "Free",
      leadtime: "1-3 days",
      timeslot: "3-hour slot",
      express: true,
      evening: true,
      weekend: true,
    },
    {
      level: "Average",
      icon: "https://images.unsplash.com/photo-1608889453710-95a45def16f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaWd1cmVzJTIwaWNvbnxlbnwwfHx8fDE3MTA5NTA5Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080",
      price: "Free",
      leadtime: "2-5 days",
      timeslot: "Morning/Afternoon slots",
      express: false,
      evening: false,
      weekend: false,
    },
    {
      level: "We are ...",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Electrolux_logo.svg/2560px-Electrolux_logo.svg.png",
      price: "Free",
      leadtime: "2-5 days",
      timeslot: "No",
      express: false,
      evening: false,
      weekend: false,
    },
  ];

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Delivery Services - Major Appliances UK
      </Heading>
      <Table variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Price</Th>
            <Th>Leadtime</Th>
            <Th>Pick timeslot</Th>
            <Th>Express</Th>
            <Th>Evening</Th>
            <Th>Weekend</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index} bg={index === 2 ? "brand.100" : ""}>
              <Td>
                <Flex align="center">
                  {typeof item.icon === "string" ? <Image src={item.icon} alt={item.level} boxSize="24px" mr={2} /> : item.icon}
                  <Text>{item.level}</Text>
                </Flex>
              </Td>
              <Td>{item.price}</Td>
              <Td>{item.leadtime}</Td>
              <Td>{item.timeslot}</Td>
              <Td>
                <Tooltip label={item.express ? "Available" : "Not Available"}>
                  <Box bg={item.express ? "green.500" : "red.500"} borderRadius="full" w={4} h={4} />
                </Tooltip>
              </Td>
              <Td>
                <Tooltip label={item.evening ? "Available" : "Not Available"}>
                  <Box bg={item.evening ? "green.500" : "red.500"} borderRadius="full" w={4} h={4} />
                </Tooltip>
              </Td>
              <Td>
                <Tooltip label={item.weekend ? "Available" : "Not Available"}>
                  <Box bg={item.weekend ? "green.500" : "red.500"} borderRadius="full" w={4} h={4} />
                </Tooltip>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Text fontSize="sm" textAlign="right" mt={4}>
        Last updated: 2/29/2024
      </Text>
    </Box>
  );
};

export default Index;
