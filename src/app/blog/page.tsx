import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column as="section" gap="40" fillWidth>
      <Heading as="h1" variant="display-strong-s" marginBottom="24">
        {blog.title}
      </Heading>
      <Posts columns="2" thumbnail direction="row" />
      {/* Optionally, add newsletter or Mailchimp signup below */}
      {/* <Mailchimp /> */}
    </Column>
  );
}
