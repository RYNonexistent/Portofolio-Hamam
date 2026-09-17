/**
 * Profile Data Configuration
 * Arrayan Hamam Al Mubarok - Personal Portfolio
 */

const PROFILE_DATA = {
  name: "Arrayan Hamam Al Mubarok",
  school: "SMK N Tembarak",
  brand: "ARRAYAN",
  headline: "Student, gamer, reader, and cyclist.",
  quote: "I'm tired of pretending that i'm okay when all i want is someone to truly see how broken i am.",
  status: "ONLINE // READY TO EXPLORE",
  bio: "A student from SMK N Tembarak passionate about technology, gaming universes, immersive books, and endurance cycling. Crafting a futuristic personal trajectory blending curiosity, creative exploration, and tech-driven discipline.",
  hobbies: [
    {
      id: "01",
      title: "GAMING",
      description: "Playing games and exploring different virtual worlds.",
      tag: "Virtual Worlds & Strategy",
      icon: "gamepad-2"
    },
    {
      id: "02",
      title: "READING",
      description: "Reading to discover new ideas, stories, and perspectives.",
      tag: "Knowledge & Perspectives",
      icon: "book-open"
    },
    {
      id: "03",
      title: "CYCLING",
      description: "Enjoying cycling and spending time outdoors.",
      tag: "Endurance & Nature",
      icon: "bike"
    }
  ],
  socials: [
    {
      platform: "YouTube",
      handle: "@srslynonexistent",
      url: "https://www.youtube.com/@srslynonexistent",
      description: "Watch video logs, gameplay highlights, and creative edits.",
      icon: "youtube",
      accent: "#ff0033",
      badge: "Video Content"
    },
    {
      platform: "TikTok",
      handle: "@srslynonexistent",
      url: "https://www.tiktok.com/@srslynonexistent",
      description: "Short clips, game moments, and daily aesthetic vibe check.",
      icon: "tiktok",
      accent: "#64d7ff",
      badge: "Short Clips"
    },
    {
      platform: "Twitter / X",
      handle: "@NONEXISTENT620",
      url: "https://x.com/NONEXISTENT620",
      description: "Thoughts, gaming updates, and everyday reflections.",
      icon: "twitter",
      accent: "#eef0ff",
      badge: "Microblog"
    },
    {
      platform: "Discord",
      handle: "NONEXISTENT",
      url: "https://discordapp.com/users/11576201171750518847",
      description: "Connect directly for gaming sessions, chats, and collaborations.",
      icon: "discord",
      accent: "#5865F2",
      badge: "Direct Connect"
    }
  ],
  stats: [
    { label: "EDUCATION", value: "SMK N Tembarak" },
    { label: "INTERESTS", value: "Gaming & Tech" },
    { label: "DISCIPLINE", value: "Active Cyclist" },
    { label: "MINDSET", value: "Avid Reader" }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROFILE_DATA;
}
