const questions = [
    {
      id: 1,
      questionText: "The cat ___ on the chair.",
      options: [
        { id: 'A', text: 'is' },
        { id: 'B', text: 'are' },
        { id: 'C', text: 'am' },
        { id: 'D', text: 'be' },
      ],
      correctOptionId: 'A',
      cefrLevel: 'A1',
    },
    {
      id: 2,
      questionText: "What is the opposite of 'happy'?",
      options: [
        { id: 'A', text: 'Sad' },
        { id: 'B', text: 'Angry' },
        { id: 'C', text: 'Tired' },
        { id: 'D', text: 'Excited' },
      ],
      correctOptionId: 'A',
      cefrLevel: 'A1',
    },
    {
      id: 3,
      questionText: "Which sentence is correct?",
      options: [
        { id: 'A', text: 'She have a cat.' },
        { id: 'B', text: 'He has a cat.' },
        { id: 'C', text: 'I has a cat.' },
        { id: 'D', text: 'We has a cat.' },
      ],
      correctOptionId: 'B',
      cefrLevel: 'A1',
    },
    {
      id: 4,
      questionText: "Choose the correct spelling: ",
      options: [
        { id: 'A', text: 'aplle' },
        { id: 'B', text: 'appel' },
        { id: 'C', text: 'apple' },
        { id: 'D', text: 'apel' },
      ],
      correctOptionId: 'C',
      cefrLevel: 'A1',
    },
    {
      id: 5,
      questionText: "I ___ a student.",
      options: [
        { id: 'A', text: 'is' },
        { id: 'B', text: 'am' },
        { id: 'C', text: 'are' },
        { id: 'D', text: 'be' },
      ],
      correctOptionId: 'B',
      cefrLevel: 'A1',
    },
    {
      id: 6,
      questionText: "One, two, three, ___.",
      options: [
        { id: 'A', text: 'five' },
        { id: 'B', text: 'four' },
        { id: 'C', text: 'six' },
        { id: 'D', text: 'seven' },
      ],
      correctOptionId: 'B',
      cefrLevel: 'A1',
    },
    {
      id: 7,
      questionText: "___ apple is red.",
      options: [
        { id: 'A', text: 'Seven' },
        { id: 'B', text: 'The' },
        { id: 'C', text: 'Those' },
        { id: 'D', text: 'Some' },
      ],
      correctOptionId: 'B',
      cefrLevel: 'A1',
    },
    {
      id: 8,
      questionText: "Which word is a color?",
      options: [
        { id: 'A', text: 'Tree' },
        { id: 'B', text: 'Blue' },
        { id: 'C', text: 'Run' },
        { id: 'D', text: 'Happy' },
      ],
      correctOptionId: 'B',
      cefrLevel: 'A1',
    },
    {
      id: 9,
      questionText: "I ___ to school every day.",
      options: [
        { id: 'A', text: 'is going' },
        { id: 'B', text: 'goes' },
        { id: 'C', text: 'go' },
        { id: 'D', text: 'were going' },
      ],
      correctOptionId: 'C',
      cefrLevel: 'A1',
    },
    {
      id: 10,
      questionText: "What is the opposite of 'big'?",
      options: [
        { id: 'A', text: 'Small' },
        { id: 'B', text: 'Tall' },
        { id: 'C', text: 'Wide' },
        { id: 'D', text: 'Short' },
      ],
      correctOptionId: 'A',
      cefrLevel: 'A1',
    },
    {
      id: 11,
      questionText: "Choose the correct PAST TENSE form of 'read' : She ___ a book yesterday.",
      options: [
        { id: 'A', text: 'read' },
        { id: 'B', text: 'reads' },
        { id: 'C', text: 'reading' },
        { id: 'D', text: 'have read' },
      ],
      correctOptionId: 'A',
      cefrLevel: 'A2',
    },
    {
      id: 12,
      questionText: "I have ___ brother and two sisters.",
      options: [
        { id: 'A', text: 'a' },
        { id: 'B', text: 'an' },
        { id: 'C', text: 'the' },
        { id: 'D', text: 'some' },
      ],
      correctOptionId: 'A',
      cefrLevel: 'A2',
    },
    {
      id: 13,
      questionText: "This book is _________ than that one.",
      options: [
        { id: 'A', text: 'more interesting' },
        { id: 'B', text: 'interestinger' },
        { id: 'C', text: 'interestful' },
        { id: 'D', text: 'interesting' },
      ],
      correctOptionId: 'A',
      cefrLevel: 'A2',
    },
    {
      id: 14,
      questionText: "Which sentence is correct?",
      options: [
        { id: 'A', text: "She don't like coffee." },
        { id: 'B', text: "She doesn't likes coffee." },
        { id: 'C', text: "She doesn't like coffee." },
        { id: 'D', text: "She don't likes coffee." },
      ],
      correctOptionId: 'C',
      cefrLevel: 'A2',
    },
    {
      id: 15,
      questionText: "Which sentence is correct?",
      options: [
        { id: 'A', text: 'You to the party going?' },
        { id: 'B', text: 'To the party you going?' },
        { id: 'C', text: 'Are you going to the party?' },
        { id: 'D', text: 'Going you are to the party?' },
      ],
      correctOptionId: 'C',
      cefrLevel: 'A2',
    },
    {
      id: 16,
      questionText: "It belongs to Sam.  This is ___ book.",
      options: [
        { id: 'A', text: "Sam's" },
        { id: 'B', text: "Sams'" },
        { id: 'C', text: "Sams's" },
        { id: 'D', text: "Sam'" },
      ],
      correctOptionId: 'A',
      cefrLevel: 'A2',
    },
    {
      id: 17,
      questionText: "Where is the school?  I ___ find it.",
      options: [
        { id: 'A', text: 'Were' },
        { id: 'B', text: "Can't" },
        { id: 'C', text: "Shouldn't" },
        { id: 'D', text: "Did" },
      ],
      correctOptionId: 'B',
      cefrLevel: 'A2',
    },
    {
      id: 18,
      questionText: "Which sentence is correct?",
      options: [
        { id: 'A', text: 'Like not I coffee.' },
        { id: 'B', text: 'I do not like coffee.' },
        { id: 'C', text: 'I like not coffee.' },
        { id: 'D', text: 'I like coffee not.' },
      ],
      correctOptionId: 'B',
      cefrLevel: 'A2',
    },
    {
      id: 19,
      questionText: "The students ___ for the test.",
      options: [
        { id: 'A', text: 'studed' },
        { id: 'B', text: 'studying' },
        { id: 'C', text: 'studied' },
        { id: 'D', text: 'studies' },
      ],
      correctOptionId: 'C',
      cefrLevel: 'A2',
    },
    {
      id: 20,
      questionText: "She has two _______.",
      options: [
        { id: 'A', text: 'Childrens' },
        { id: 'B', text: 'Childs' },
        { id: 'C', text: 'Children' },
        { id: 'D', text: 'Child' },
      ],
      correctOptionId: 'C',
      cefrLevel: 'A2',
    },
    // Add more questions here
  ];

export default questions ;