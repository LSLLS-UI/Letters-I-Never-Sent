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
    title: "The Plot Twist",
    recipient: "The girl who didn't follow the plan",
    date: "October 10, 2025",
    content: `I’ll be honest: when I reached out, I never expected anything out of it. I thought we would just update each other on our lives during the absences of each other and go back to our life like nothing happened.

But I was wrong, and I’m glad I was. I’ve missed talking to you—our conversations.

We kept talking until it felt normal again to have you as a part of my life, and now, I can't really imagine my day without you in it.`
  },
  {
    id: "2",
    title: "The Stage Fright",
    recipient: "The girl who got way too bright",
    date: "November 15, 2025",
    content: `I’m not sure if you noticed the shift—going from being "always available" to suddenly saying "I’m sorry, I was busy."

Nothing really changed, but I’ve started seeing the bigger picture. I thought I knew who you were back then, but I was mistaken. I’ve started seeing you in a different light, and you're much brighter now than I remembered.

To not overcomplicate it, I just became self-aware around you, and I got shy.`
  },
  {
    id: "3",
    title: "The Critic",
    recipient: "The professional plot-hole finder",
    date: "January 20, 2026",
    content: `I've been thinking about how you view things.

You listen to music like it's a story, read books like you are one of the characters, and look for plot holes when you watch a movie. I can't help but get pulled in when you talk about something that interests you.

The way you notice the smallest details draws me in and before I know it, I'm grinning by myself.`
  },
  {
    id: "4",
    title: "Subtlety",
    recipient: "The girl I’m always happy to hear from",
    date: "February 14, 2026",
    content: `I realize I still have so many things to learn about you. Every day is something new; there's never a dull moment with you.

But lately, I've spent a lot of time wondering if I'm taking up your time or if I'm a seamless part of your day. I know how much you value your time and your hobbies. 

I don't want to be another notification you have to check; I want to be a safe space—the person you’re comfortable telling how your day went, no matter how it looked. I'm just happy to be a part of it.`
  },
  {
    id: "5",
    title: "This is Me",
    recipient: "The one who makes my brain go quiet",
    date: "March 15, 2026",
    content: `
All of the previous letters were a bit more polished—maybe even a little performative. I wanted this one to be different.

Do you remember when I used to say how much I loved making letters? It’s been a while. This is actually my first time doing this again in six years.

So this one’s a little more straightforward.

I didn’t expect that when we reconnected. I genuinely just wanted to be friends again—you’re a great person, and I’ve always liked how you see things differently. Your positivity is kind of contagious.

I’ve liked you even before—honestly, that part was easy. You’re beautiful.

But this feels different now. I’ve come to love you for who you are.

The way you talk about things you care about, the little details you notice, the way you share your stories—I like all of it. I could listen to you for hours and not get tired of it.

We don’t get to see each other often, but I always enjoy the time we do. It never feels dull, and it always feels a little too short.

I overthink a lot, but with you, it’s quiet. I can just be there and enjoy the moment, and that means more than I probably say out loud.

I won’t drag this out any longer.

Somewhere along the way, I realized I love you. I really do.

I don’t know what this means for you, and I’m not asking for anything right away. I just wanted to be honest with how I feel.
`
  }
];