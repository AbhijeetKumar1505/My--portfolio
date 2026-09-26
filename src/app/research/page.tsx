import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { ResearchList } from "@/components/research/ResearchList";
import { baseURL, person, research, about } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: research.title,
    description: research.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(research.title)}`,
    path: research.path,
  });
}

export default function Research() {
  return (
    <Column maxWidth="m" as="section" gap="40" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={research.path}
        title={research.title}
        description={research.description}
        image={`/api/og/generate?title=${encodeURIComponent(research.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column gap="16" fillWidth>
        <Heading as="h1" variant="display-strong-s">
          {research.label}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Working notes and briefings from ongoing investigations. Open a NotebookLM
          workspace for sources and live notes, or read the companion essays on the blog.
        </Text>
      </Column>
      <ResearchList />
    </Column>
  );
}
