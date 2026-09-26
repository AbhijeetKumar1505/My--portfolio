"use client";

import { Button, Column, Flex, Heading, Tag, Text } from "@once-ui-system/core";
import { research } from "@/resources";

export function ResearchList() {
  return (
    <Column fillWidth gap="32">
      {research.items.map((item) => (
        <Column
          key={item.id}
          fillWidth
          gap="16"
          padding="24"
          border="neutral-alpha-weak"
          radius="l"
          background="surface"
        >
          <Flex fillWidth horizontal="space-between" vertical="start" gap="12" wrap>
            <Heading as="h2" variant="heading-strong-l">
              {item.title}
            </Heading>
            <Tag size="l">{item.status}</Tag>
          </Flex>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {item.summary}
          </Text>
          {item.keyTakeaways?.length > 0 && (
            <Column as="ul" gap="8" fillWidth>
              {item.keyTakeaways.map((takeaway) => (
                <Text as="li" key={takeaway} variant="body-default-s" onBackground="neutral-weak">
                  {takeaway}
                </Text>
              ))}
            </Column>
          )}
          {item.topics.length > 0 && (
            <Flex gap="8" wrap>
              {item.topics.map((topic) => (
                <Tag key={topic} size="m">
                  {topic}
                </Tag>
              ))}
            </Flex>
          )}
          <Flex gap="12" vertical="center" wrap>
            <Button
              href={item.notebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="s"
              prefixIcon="openLink"
            >
              Open NotebookLM
            </Button>
            {item.blogHref && (
              <Button href={item.blogHref} variant="tertiary" size="s" prefixIcon="book">
                Read essay
              </Button>
            )}
            <Text variant="label-default-s" onBackground="neutral-weak">
              Updated {item.updated}
            </Text>
          </Flex>
        </Column>
      ))}
    </Column>
  );
}
