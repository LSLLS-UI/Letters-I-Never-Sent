export interface Letter {
  id: string;
  title: string;
  content: string;
  date: string;
  recipient: string;
}

export const LETTERS: Letter[] = [
  {
    id: "1",
    title: "The Coffee Shop Window",
    recipient: "The stranger with the blue scarf",
    date: "October 14, 2023",
    content: "I saw you again today. You were sitting by the window, the same spot as always. I wanted to walk over and ask what you were reading, but the words got stuck somewhere between my heart and my throat. You looked so peaceful in that morning light. Maybe tomorrow I'll find the courage. Or maybe I'll just keep writing these letters to a ghost."
  },
  {
    id: "2",
    title: "Midnight Reflections",
    recipient: "E.",
    date: "January 02, 2024",
    content: "It's 2 AM and the city is quiet, but my mind is a riot of things I should have said. We spent three years building a world together, and now I'm just a tourist in the memories. I hope you're happy. I really do. But a part of me still checks the door every time I hear a car pull up, even though I know you're miles away."
  },
  {
    id: "3",
    title: "To the Version of Us That Didn't Make It",
    recipient: "Us",
    date: "February 14, 2024",
    content: "We were a beautiful tragedy. A collision of stars that burned too bright to last. I don't regret a single second, even the parts that hurt. I keep this letter here because sending it would mean admitting it's over, and I'm not quite ready for that silence yet."
  },
  {
    id: "4",
    title: "The Train Station",
    recipient: "M.",
    date: "March 12, 2024",
    content: "You were leaving, and I was staying. The simplest story in the world, yet it felt like the end of everything. I watched your train pull away until it was just a speck on the horizon. I had a whole speech prepared about why you should stay, but all I said was 'Safe travels.' I'm still waiting for the rest of the words to come back to me."
  },
  {
    id: "5",
    title: "A Quiet Tuesday",
    recipient: "You",
    date: "April 20, 2024",
    content: "There's nothing special about today. No grand gestures, no heartbreak. Just the way the sun hits the kitchen floor and reminds me of how you used to dance while making toast. It's the small things that are the hardest to forget. I miss the mundane with you more than the magic."
  }
];
