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
     question: "You have a massive exam coming up. How are you feeling?",
     options: [
       { text: "Stressed but i'll work hard!", value: "bsh" },
       { text: "Sleepyyy", value: "ragdoll" },
       { text: "AHHH", value: "bombay" },
       { text: "Theres an exam?", value: "calico" },
     ],
   },
  {
    question: "You have one week to prep. How are you planning?",
    options: [
      { text: "Following the study guide", value: "ragdoll" },
      { text: "Studying with friends", value: "bombay" },
      { text: "Create a color coded study plan", value: "bsh" },
      { text: "Cramming the night before", value: "calico" },
    ],
  },
  {
    question: "It's the night before. What are you doing?",
    options: [
      { text: "Texing my friends", value: "bombay" },
      { text: "Looking over notes", value: "bsh" },
      { text: "Cramming", value: "calico" },
      { text: "Getting a good nights sleep", value: "ragdoll" },
    ],
  },
  {
    question: "5 mins before the test. How do you feel?",
    options: [
      { text: "Prepared", value: "bsh" },
      { text: "Tired", value: "ragdoll" },
      { text: "It is what it is", value: "calico" },
      { text: "Freaking out", value: "bombay" },
    ],
  },
  {
    question: "The test has begun! What do you do first?",
    options: [
      { text: "Start with question one", value: "ragdoll" },
      { text: "Look around to see what everyone else does", value: "bombay" },
      { text: "Read through the questions", value: "bsh" },
      { text: "Start on the back", value: "calico" },
    ],
  },
  {
    question: "You get a question you didn't plan for. What do you do?",
    options: [
      { text: "Eeny, meeny, miny, moe", value: "calico" },
      { text: "Try an educated guess", value: "bsh" },
      { text: "Pray", value: "bombay" },
      { text: "Skip it and come back", value: "ragdoll" },
    ],
  },
  {
    question: "You finished your exam! How do you feel?",
    options: [
      { text: "Awful", value: "calico" },
      { text: "I totally aced it", value: "bsh" },
      { text: "Ready to nap", value: "ragdoll" },
      { text: "Relived it's over", value: "bombay" },
    ],
  },
  {
    question: "You get your grades back and you passed! How do you celebrate?",
    options: [
      { text: "Relax at a cafe", value: "bsh" },
      { text: "Sleep", value: "ragdoll" },
      { text: "Party!", value: "calico" },
      { text: "Hanging out with friends", value: "bombay" },
    ],
  },
  {
    question: "Pick one!",
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
  }
 ];
 