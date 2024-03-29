/* eslint-disable import/no-anonymous-default-export */
// In sanity/schemas/hero.js
export default {
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "welcomeSentence",
      title: "Welcome Sentence",
      type: "string",
      initialValue: "Hello World! My name is",
    },
    {
      name: "welcomeFullName",
      title: "Welcome Full Name",
      type: "string",
      initialValue: "Nadav Daniel",
    },
    {
      name: "welcomeSlogan",
      title: "Welcome Slogan",
      type: "text",
      marks: {
        // Allow for formatting marks like "strong", "em", and "code"
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        // Allow for line breaks
        annotations: [
          { title: "Line Break", name: "lineBreak", type: "object" },
        ],
      },
      initialValue: "I love making new things on the web!",
    },
    {
      name: "welcomeBody",
      title: "Welcome Body",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "welcomeCTA",
      title: "Welcome CTA Button",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Link Title" },
        { name: "url", type: "url", title: "Link URL" },
      ],
    },
  ],
};
