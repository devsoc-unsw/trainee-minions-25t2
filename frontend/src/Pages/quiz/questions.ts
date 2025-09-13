// TODO: data should be moved to backend / shared folder
// Merged open and scale question types
export interface Question {
  id: number;
  text: string;
  type: "open" | "scale";
  scaleLabels?: {
    left: string;
    right: string;
  };
  traits?: string[]; // Which personality traits this question affects
}

// Open-ended questions bank (need 15+ for variety)
export const openQuestions: Question[] = [
  {
    id: 1,
    text: "If you were stranded on an island, what 3 items would you bring?",
    type: "open",
  },
  {
    id: 2,
    text: "Before making a telephone call do you ever rehearse to yourself? Why?",
    type: "open",
  },
  {
    id: 3,
    text: "If you could have dinner with anyone, dead or alive, who would it be?",
    type: "open",
  },
  {
    id: 4,
    text: "What superpower would you choose and what would you do with it?",
    type: "open",
  },
  {
    id: 5,
    text: "What's the most important lesson life has taught you?",
    type: "open",
  },
  { id: 6, text: "What's your ideal way to spend a weekend?", type: "open" },
  {
    id: 7,
    text: "If you could change one thing about the world, what would it be?",
    type: "open",
  },
  {
    id: 8,
    text: "What's something you've always wanted to learn but haven't yet?",
    type: "open",
  },
  {
    id: 9,
    text: "Describe your perfect day from start to finish.",
    type: "open",
  },
  { id: 10, text: "Would you like to be famous? In what way?", type: "open" },
  {
    id: 11,
    text: "What's the most spontaneous thing you've ever done?",
    type: "open",
  },
  {
    id: 12,
    text: "If you could live anywhere in the world, where would it be and why?",
    type: "open",
  },
  { id: 13, text: "What's a skill you wish you had but don't?", type: "open" },
  {
    id: 14,
    text: "When did you last sing to yourself? To someone else?",
    type: "open",
  },
  {
    id: 15,
    text: "If you could relive one day of your life, which would it be?",
    type: "open",
  },
];

// Scale questions bank (need 20+ for variety)
export const scaleQuestions: Question[] = [
  {
    id: 16,
    text: "How much do you enjoy meeting new people?",
    type: "scale",
    scaleLabels: { left: "Avoid it", right: "Love it" },
    traits: ["extraversion"],
  },
  {
    id: 17,
    text: "How do you prefer to handle conflict in relationships?",
    type: "scale",
    scaleLabels: { left: "Avoid it", right: "Address it directly" },
    traits: ["cautious"],
  },
  {
    id: 18,
    text: "How do you approach planning dates?",
    type: "scale",
    scaleLabels: { left: "Detailed planning", right: "Go with the flow" },
    traits: ["organized"],
  },
  {
    id: 19,
    text: "How do you recharge after a long day?",
    type: "scale",
    scaleLabels: { left: "Alone time", right: "Social activities" },
    traits: ["introversion"],
  },
  {
    id: 20,
    text: "How do you approach trying new experiences together?",
    type: "scale",
    scaleLabels: { left: "Cautious", right: "Jump right in" },
    traits: ["riskTaker"],
  },
  {
    id: 21,
    text: "How do you like to spend quality time with a partner?",
    type: "scale",
    scaleLabels: { left: "Quiet nights in", right: "Adventures out" },
    traits: ["introversion"],
  },
  {
    id: 22,
    text: "How do you make relationship decisions?",
    type: "scale",
    scaleLabels: { left: "Think it through", right: "Follow your heart" },
    traits: ["cautious"],
  },
  {
    id: 23,
    text: "How do you feel about taking risks in love?",
    type: "scale",
    scaleLabels: { left: "Play it safe", right: "Love is worth the risk" },
    traits: ["riskTaker"],
  },
  {
    id: 24,
    text: "How do you prefer to communicate with a partner?",
    type: "scale",
    scaleLabels: { left: "Text/calls", right: "Face-to-face" },
    traits: ["introversion"],
  },
  {
    id: 25,
    text: "What kind of conversations do you enjoy most?",
    type: "scale",
    scaleLabels: { left: "Light and playful", right: "Deep and meaningful" },
    traits: ["introversion"],
  },
  {
    id: 26,
    text: "How do you handle relationship stress?",
    type: "scale",
    scaleLabels: { left: "Need support", right: "Work through it alone" },
    traits: ["introversion"],
  },
  {
    id: 27,
    text: "How do you like to learn about your partner?",
    type: "scale",
    scaleLabels: { left: "Gradually over time", right: "Dive deep quickly" },
    traits: ["cautious"],
  },
  {
    id: 28,
    text: "How important is having routines together?",
    type: "scale",
    scaleLabels: {
      left: "Love predictable routines",
      right: "Keep things spontaneous",
    },
    traits: ["organized"],
  },
  {
    id: 29,
    text: "How do you prefer to spend date nights?",
    type: "scale",
    scaleLabels: { left: "Cozy at home", right: "Out exploring" },
    traits: ["extraversion"],
  },
  {
    id: 30,
    text: "How do you approach relationship milestones?",
    type: "scale",
    scaleLabels: {
      left: "Plan them carefully",
      right: "Let them happen naturally",
    },
    traits: ["organized"],
  },
  {
    id: 31,
    text: "How comfortable are you with public displays of affection?",
    type: "scale",
    scaleLabels: { left: "Keep it private", right: "Love showing affection" },
    traits: ["extraversion"],
  },
  {
    id: 32,
    text: "How do you prefer to resolve disagreements?",
    type: "scale",
    scaleLabels: {
      left: "Talk it out together",
      right: "Take time to think first",
    },
    traits: ["extraversion"],
  },
  {
    id: 33,
    text: "How do you handle unexpected changes in plans?",
    type: "scale",
    scaleLabels: { left: "Stress me out", right: "New adventure!" },
    traits: ["spontaneous"],
  },
  {
    id: 34,
    text: "How much alone time do you need in a relationship?",
    type: "scale",
    scaleLabels: { left: "Rarely need it", right: "Essential for me" },
    traits: ["introversion"],
  },
  {
    id: 35,
    text: "How do you like to show affection?",
    type: "scale",
    scaleLabels: { left: "Private gestures", right: "Grand romantic gestures" },
    traits: ["extraversion"],
  },
];
