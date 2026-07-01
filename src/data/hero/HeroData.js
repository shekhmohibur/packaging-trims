// Import your images here
const Hero1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuC4tu11nUHslFTTdHi7hwkYDK2H5fQGEHoha0mx1gPMSq-rUnKjId1ANJ2tZMxoxe02iidxwcerX2MoEfEiAidSxq7MhnRmud1fAIHHsGFqAW5FMREynyYYM550b559-E18KcXx4mpZorXXie8va4Uk7yorwI5z2Eq77mRSBY1TZ0M1WI0ZxF4q06ovjtxwWvkv1jL0FdaOAFZTMrH5KyaTI3UTZkRqIhAsh9m6RvyK4gGJ01wZcNKmtIb8Up8WWwTIJoYRts7cRFfJ";
const Hero2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuC4tu11nUHslFTTdHi7hwkYDK2H5fQGEHoha0mx1gPMSq-rUnKjId1ANJ2tZMxoxe02iidxwcerX2MoEfEiAidSxq7MhnRmud1fAIHHsGFqAW5FMREynyYYM550b559-E18KcXx4mpZorXXie8va4Uk7yorwI5z2Eq77mRSBY1TZ0M1WI0ZxF4q06ovjtxwWvkv1jL0FdaOAFZTMrH5KyaTI3UTZkRqIhAsh9m6RvyK4gGJ01wZcNKmtIb8Up8WWwTIJoYRts7cRFfJ";
const Hero3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuC4tu11nUHslFTTdHi7hwkYDK2H5fQGEHoha0mx1gPMSq-rUnKjId1ANJ2tZMxoxe02iidxwcerX2MoEfEiAidSxq7MhnRmud1fAIHHsGFqAW5FMREynyYYM550b559-E18KcXx4mpZorXXie8va4Uk7yorwI5z2Eq77mRSBY1TZ0M1WI0ZxF4q06ovjtxwWvkv1jL0FdaOAFZTMrH5KyaTI3UTZkRqIhAsh9m6RvyK4gGJ01wZcNKmtIb8Up8WWwTIJoYRts7cRFfJ";


const heroData = [
  {
    id: 1,
    image: Hero1,
    title: "Rooted in Nature,\nCrafted for Industry",
    description:
      "Premium, sustainable packaging and trims that honor the earth without compromising precision, durability, or performance.",
    primaryButton: {
      text: "Explore Our Collection",
      link: "/products",
    },
    secondaryButton: {
      text: "Sustainability Report",
      link: "/sustainability",
    },
  },

  {
    id: 2,
    image: Hero2,
    title: "Innovation Inspired\nby Nature",
    description:
      "Discover eco-conscious materials engineered to elevate your brand while reducing environmental impact.",

    primaryButton: {
      text: "Browse Products",
      link: "/products",
    },

    secondaryButton: {
      text: "Learn More",
      link: "/about",
    },
  },

  {
    id: 3,
    image: Hero3,
    title: "Luxury Packaging\nfor Modern Brands",

    description:
      "Elegant, durable, and sustainable packaging solutions tailored for premium businesses worldwide.",

    primaryButton: {
      text: "Start Your Project",
      link: "/contact",
    },

    secondaryButton: {
      text: "View Portfolio",
      link: "/portfolio",
    },
  },
];

export default heroData;