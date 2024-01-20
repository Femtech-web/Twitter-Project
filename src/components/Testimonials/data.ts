export const testimonialData = [
  {
    name: "Hakim Abam",
    testimony:
      "Absolutely love this ride-sharing service! The app is user-friendly, the drivers are punctual, and the cars are clean and comfortable. It's made my daily commute a breeze. Thank you for the reliability.",
    imageUrl: "./testimonial1.png",
  },
  {
    name: "John Martins",
    testimony:
      "I can't express enough how convenient this ride-sharing company has made my life. Whether it's a quick ride to work or a late-night journey home, the drivers are consistently friendly and professional. A game-changer!",
    imageUrl: "./testimonial4.png",
  },
  {
    name: "Lola Akanni",
    testimony:
      "As a frequent traveler, this ride-sharing platform has been a godsend. The airport pickups are always prompt, and the drivers are courteous. The real-time tracking feature is a lifesaver, especially when you're on a tight schedule.",
    imageUrl: "./testimonial3.png",
  },
  {
    name: "Juliet Nduka",
    testimony:
      "Safety is my top concern, and this ride-sharing service has exceeded my expectations. The thorough driver screening process and the ability to share my trip details with friends make me feel secure on every ride. Kudos!",
    imageUrl: "./testimonial2.png",
  },
  {
    name: "Emma Jones",
    testimony:
      "I've tried several ride-sharing apps, and this one stands out. The pricing is transparent, no surprises. Plus, the customer support is responsive and helpful. I appreciate the commitment to providing a reliable and affordable service.",
    imageUrl: "./testimonial1.png",
  },
];


export const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  speed: 4000,
  arrows: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};