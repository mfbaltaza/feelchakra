import { Stack, Box, Heading, Text } from "@chakra-ui/layout"

interface Props {
  mt?: number,
  mb?: number,
  title: string,
  desc: string,
}

const Feature: React.FC<Props> = ({title, desc, ...rest}) => {
  return (
  <Box p={5} shadow="md" m="2" borderWidth="1px" {...rest}>
    <Heading fontSize="xl">{title}</Heading>
    <Text mt={4}>{desc}</Text>
  </Box>
)}

export default Feature