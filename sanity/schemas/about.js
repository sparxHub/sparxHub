/* eslint-disable import/no-anonymous-default-export */
// In sanity/schemas/about.js
export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          name: "paragraph",
          title: "Paragraph",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [{ title: "Strong", value: "strong" }],
          },
        },
      ],
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "Content.0.children.0.text",
      subtitle: "Skills",
    },
  },
};
