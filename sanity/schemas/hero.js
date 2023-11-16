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
      type: "string",
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
