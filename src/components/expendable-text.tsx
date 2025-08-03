import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

type PropsT = {
  children: string;
};

const ExpendableText = ({ children }: PropsT) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  const summary = expanded ? children : children.substring(0, limit) + "...";

  if (!children) return null;

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  return (
    <Text>
      {summary + " "}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {" "}
        {expanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpendableText;
