export interface Option {
   text: string;
   value: string;
 }
 
 export interface Question {
   question: string;
   options: Option[];
 }
 
 export const quizData: Question[] = [
   {
     question: "What would you do on a day off?",
     options: [
       { text: "read", value: "bsh" },
       { text: "nap", value: "ragdoll" },
       { text: "work out", value: "calico" },
       { text: "hang with friends", value: "bombay" },
     ],
   },
  {
    question: "You have a big test coming up how do you prepare?",
    options: [
      { text: "study a bit then nap", value: "ragdoll" },
      { text: "study with friends", value: "bombay" },
      { text: "create a study plan", value: "bsh" },
      { text: "cram the night before", value: "calico" },
    ],
  },
  {
    question: "You're at a party what do you do?",
    options: [
      { text: "dance with friends", value: "bombay" },
      { text: "stay for a bit to be polite then leave", value: "bsh" },
      { text: "PARTY!", value: "calico" },
      { text: "not going im in bed by 8", value: "ragdoll" },
    ],
  },
  {
    question: "pick one",
    options: [
      { text: "≽ܫ≼", value: "calico" },
      { text: "₊˚⊹♡ ᓚ₍ ^. .^₎", value: "bombay" },
      { text: "₍˄·͈༝·͈˄₎◞ ̑̑", value: "bsh" },
      { text: "ᓚᘏᗢ", value: "ragdoll" },
    ],
  },
  {
    question: "Meow?",
    options: [
      { text: "meow", value: "bsh" },
      { text: "MEOW", value: "calico" },
      { text: "mew", value: "ragdoll" },
      { text: "meoooow", value: "bombay" },
    ],
  },
  {
    question: "Do you get annoyed easily?",
    options: [
      { text: "ehhhhh sometimes", value: "bsh" },
      { text: "nah", value: "ragdoll" },
      { text: "duh.", value: "calico" },
      { text: "mmmmmh", value: "bombay" },
    ],
  }
 ];
 