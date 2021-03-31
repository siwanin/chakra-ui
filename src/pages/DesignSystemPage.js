import { Box, Heading, Button } from "@chakra-ui/react";

function DesignSystemPage() {
  return (
    <Box>
      <Box bg="primary.200" color="white" p="10" fontSize="4xl">
        App's Design System
      </Box>
      <Box bg="mute.300" p="5" borderRadius="xl">
        <Heading>Buttons</Heading>
        <Button colorScheme="blue" size="sm">
          Size sm
        </Button>
        <Button colorScheme="green" size="md">
          Size md
        </Button>
        <Button size="lg">Size lg</Button>
      </Box>

      <Box bg="mute.300" p="5" borderRadius="xl">
        <Heading>Variant Buttons</Heading>
        <Button colorScheme="blue" variant="primary" size="sm">
          Variant primary
        </Button>
      </Box>
    </Box>
  );
}

export default DesignSystemPage;
