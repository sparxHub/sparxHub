/* eslint-disable import/no-anonymous-default-export */
// In sanity/schemas/now.js
export default {
  name: "now",
  title: "Now",
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
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "Content.0.children.0.text",
    },
  },
};
