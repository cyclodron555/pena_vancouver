/**
 * Peña Madridista Vancouver - Content Configuration
 * Non-developers can easily update these values
 */

export const site = {
  name: "Peña Madridista Vancouver",
  description: "Vancouver's official Real Madrid supporters' club and Canada's first officially registered Real Madrid fan club",
  tagline: "Peña Madridista Vancouver",
  url: "https://penamadridista-vancouver.com", // Update on deployment
};

export const contact = {
  phone: "+1 (778) 985-7196",
  email: "madridistavancouver@gmail.com",
  location: "1180 Howe Street, Vancouver, BC, Canada",
  mapUrl: "https://maps.google.com/maps?q=1180+Howe+Street,+Vancouver", // Update with actual Maps link
};

export const membership = {
  price: "$30/month", // PLACEHOLDER - Update with actual price
  currency: "CAD",
  paypalSubscriptionUrl: "https://www.paypal.com/subscribe/", // PLACEHOLDER - Replace with actual PayPal subscription URL
  description: "Full access to Peña Madridista Vancouver community, match-day gatherings, events, and exclusive updates",
};

export const social = {
  instagram: "https://instagram.com/penamadridista.vancouver", // PLACEHOLDER - Update with actual URLs
  facebook: "https://facebook.com/penamadridistravancouver", // PLACEHOLDER
  twitter: "https://twitter.com/penamadridistav", // PLACEHOLDER
  whatsapp: "https://wa.me/1234567890", // PLACEHOLDER - Update with group link
  youtube: "https://youtube.com/@penamadridistav", // PLACEHOLDER
};

export const about = {
  title: "Welcome to Peña Madridista Vancouver",
  description: `We are Vancouver's official community for Real Madrid supporters and Canada's first officially registered Real Madrid fan club. 
  
  Peña Madridista Vancouver brings together passionate supporters to celebrate our shared love for Real Madrid. From match-day gatherings in local venues to special events and celebrations, we create unforgettable moments.
  
  Whether you're a lifelong madridista or new to supporting the greatest club in the world, you belong here.`,
};

export const benefits = [
  {
    id: "community",
    title: "Join Vancouver's Madridista Community",
    description: "Connect with fellow Real Madrid supporters in your city",
    icon: "Users",
  },
  {
    id: "matchday",
    title: "Attend Match-Day Gatherings",
    description: "Watch Real Madrid matches together at official venues",
    icon: "Tv",
  },
  {
    id: "events",
    title: "Participate in Special Events",
    description: "Exclusive events, celebrations, and supporter activities",
    icon: "Calendar",
  },
  {
    id: "connection",
    title: "Connect with Fellow Supporters",
    description: "Build lasting friendships with people who share your passion",
    icon: "Heart",
  },
  {
    id: "updates",
    title: "Receive Club News & Updates",
    description: "Stay informed about upcoming events and Peña news",
    icon: "Bell",
  },
  {
    id: "exclusive",
    title: "Exclusive Member Benefits",
    description: "Special discounts and priority access to events",
    icon: "Star",
  },
];

export const faqItems = [
  {
    question: "How long is a membership valid?",
    answer: "Memberships are monthly subscriptions that renew automatically every month until you cancel. You can cancel anytime without penalties.",
  },
  {
    question: "What happens when my membership renews?",
    answer: "Your membership will automatically renew each month on the same date. Your PayPal payment method will be charged according to the subscription price.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all payment methods supported by PayPal, including credit cards, debit cards, and PayPal balances. Payments are secure and encrypted.",
  },
  {
    question: "How do I access upcoming events?",
    answer: "Once you become a member, you'll receive all event updates via email and through our social media channels. Event details include location, time, and how to RSVP.",
  },
  {
    question: "How do I cancel my membership?",
    answer: "You can cancel your subscription directly through your PayPal account at any time. If you need help, contact us at " + contact.email,
  },
];

export const disclaimer =
  "Peña Madridista Vancouver is an official supporters' club. Real Madrid names and marks belong to their respective owners.";
