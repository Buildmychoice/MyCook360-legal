export interface Section {
  id: string;
  title: string;
  content: ContentBlock[];
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subsection"; title: string; content: ContentBlock[] };

export const privacyData: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      {
        type: "paragraph",
        text: "We respect your privacy. This Privacy Policy explains how we handle information when you use MyCook360.",
      },
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: [
      {
        type: "paragraph",
        text: "We may collect information you provide when using the app, such as your name, email address, preferences, and information you choose to enter for your meals or nutrition goals.",
      },
      {
        type: "paragraph",
        text: "We may also collect basic app usage information to help us improve the app and provide a better experience.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: [
      {
        type: "paragraph",
        text: "We use your information to:",
      },
      {
        type: "list",
        items: [
          "Provide and personalize the app experience.",
          "Recommend recipes and content based on your preferences.",
          "Improve our features and services.",
          "Communicate with you when necessary.",
        ],
      },
      {
        type: "paragraph",
        text: "We do not sell your personal information.",
      },
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    content: [
      {
        type: "paragraph",
        text: "The app may use third-party services such as analytics, authentication, payment, or subscription providers. These services may collect information according to their own privacy policies.",
      },
    ],
  },
  {
    id: "your-choices",
    title: "Your Choices",
    content: [
      {
        type: "paragraph",
        text: "You can stop using the app at any time. If you have questions about your information or would like to request its deletion, contact us.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    content: [
      {
        type: "paragraph",
        text: "If you have any questions about this Privacy Policy, contact us at:",
      },
      {
        type: "list",
        items: ["taofeq.design@gmail.com"],
      },
    ],
  },
];
