/*<body> You never have to ask me what I want to eat, it's always going to be the same answer.</body>
      <div>I always want the same foods in the same order.</div>

      <div>
      <ol>
        <li>Sushi</li>
        <li>Mexican</li>
        <li>Thai</li>
        <li>Sandwiches</li>
        <li>Pizza</li>
        <li>Burgers</li>
      </ol>
      </div>
*/

const Offers = [
    {
      id: 1,
      Offer: "Target",
      location: "Target",
      expiration: "12/31/2024",
      value: "$20",
      conditions: "In store and online",
      type: "digital",
      scan: "In store and online",
    },
    {
        id: 2,
        Offer: "Bar taco",
        location: "Bar taco",
        expiration: "never",
        value: "$10",
        conditions: "In store only",
        type: "Physical",
        scan: "In store and online",
      },
    {
      id: 3,
      title: "I hate entitled people with animals",
      author: "Me",
      excerpt:
        "No one will love your animal the way you do.",
      body: "The type of person who loves their dog and thinks everyone else feels the same way. They have a complete disregard for boundaries with their animal including with other animals. They are the type of person to see you walking your dog, look at theirs and go do you want to say hi? Then when I pull mine away they go it's okay, he's friendly. While i rely, it's okay, mine needs space. This person will hear you having a party and bring their dog without asking. They will just show up. They will talk at length about how everyone loves their dog, but as someone who walked dogs for years, people who love dogs will approach you to pet a dog.",
    },
    {
      id: 4,
      title: "I hate the idea of buying a house",
      author: "Me",
      excerpt:
        "Buying a house doesn't always make financial sense.",
      body: "Buying a house used to make sense in the past when they were a good investment, but depending on where you live, buying a house might be a horrible financial decision and more of a liability than anything. You might have a lot of your time used to upkeep it, mow the lawn, fix a broken pipe, and stress. Renting might not always be an investment but it's way less stressful to maintain. Renting might make a lot of sense for someone with anxiety who doesn't want to worry about constantly fixing things.",
    },
    {
      id: 5,
      title: "I hate travel shamers",
      author: "Me",
      excerpt:
        "Travel shamers are upset that you don't have their same values.",
      body: "Why travel shame someone? Is it because you'd like to travel but can't? Is it a financial reason or do you just not want to make the effort to plan a trip so it's easier to shame others?.",
    },
    {
      id: 6,
      title: "I hate commuting",
      author: "Me",
      excerpt:
        "An analysis of recent trends and innovations in cloud computing technology.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ante eu massa molestie, sed aliquet risus rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut non est lectus. In vel eros nec turpis consequat cursus. Duis vestibulum vestibulum turpis, non lobortis nulla. Suspendisse potenti. Nulla facilisi. Fusce maximus justo eget nulla faucibus congue. Ut id magna sed nisl vehicula laoreet non a metus. Sed vulputate, mauris sit amet tincidunt laoreet, mauris justo volutpat ante, a posuere dolor nulla vel lorem. Duis ac posuere nulla, a semper sapien. Sed vestibulum sodales felis ut placerat. Quisque et libero bibendum, feugiat lectus et, efficitur lorem.",
    },
    {
      id: 7,
      title: "I hate when people call themselves job creators",
      author: "Me",
      excerpt:
        "Examining the challenges and opportunities in big data analytics.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ante eu massa molestie, sed aliquet risus rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut non est lectus. In vel eros nec turpis consequat cursus. Duis vestibulum vestibulum turpis, non lobortis nulla. Suspendisse potenti. Nulla facilisi. Fusce maximus justo eget nulla faucibus congue. Ut id magna sed nisl vehicula laoreet non a metus. Sed vulputate, mauris sit amet tincidunt laoreet, mauris justo volutpat ante, a posuere dolor nulla vel lorem. Duis ac posuere nulla, a semper sapien. Sed vestibulum sodales felis ut placerat. Quisque et libero bibendum, feugiat lectus et, efficitur lorem.",
    },
    {
      id: 8,
      title: "The Impact of IoT on Modern Industries",
      author: "Emma White",
      excerpt:
        "Analyzing the role of Internet of Things in transforming various industries.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ante eu massa molestie, sed aliquet risus rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut non est lectus. In vel eros nec turpis consequat cursus. Duis vestibulum vestibulum turpis, non lobortis nulla. Suspendisse potenti. Nulla facilisi. Fusce maximus justo eget nulla faucibus congue. Ut id magna sed nisl vehicula laoreet non a metus. Sed vulputate, mauris sit amet tincidunt laoreet, mauris justo volutpat ante, a posuere dolor nulla vel lorem. Duis ac posuere nulla, a semper sapien. Sed vestibulum sodales felis ut placerat. Quisque et libero bibendum, feugiat lectus et, efficitur lorem.",
    },
    {
      id: 9,
      title: "The Role of DevOps in Modern Software Development",
      author: "James Clark",
      excerpt:
        "Examining the principles and practices of DevOps in software development.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ante eu massa molestie, sed aliquet risus rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut non est lectus. In vel eros nec turpis consequat cursus. Duis vestibulum vestibulum turpis, non lobortis nulla. Suspendisse potenti. Nulla facilisi. Fusce maximus justo eget nulla faucibus congue. Ut id magna sed nisl vehicula laoreet non a metus. Sed vulputate, mauris sit amet tincidunt laoreet, mauris justo volutpat ante, a posuere dolor nulla vel lorem. Duis ac posuere nulla, a semper sapien. Sed vestibulum sodales felis ut placerat. Quisque et libero bibendum, feugiat lectus et, efficitur lorem.",
    },
    {
      id: 10,
      title: "Introduction to Python Programming",
      author: "Jessica Taylor",
      excerpt: "A beginner's guide to learning Python programming language.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ante eu massa molestie, sed aliquet risus rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut non est lectus. In vel eros nec turpis consequat cursus. Duis vestibulum vestibulum turpis, non lobortis nulla. Suspendisse potenti. Nulla facilisi. Fusce maximus justo eget nulla faucibus congue. Ut id magna sed nisl vehicula laoreet non a metus. Sed vulputate, mauris sit amet tincidunt laoreet, mauris justo volutpat ante, a posuere dolor nulla vel lorem. Duis ac posuere nulla, a semper sapien. Sed vestibulum sodales felis ut placerat. Quisque et libero bibendum, feugiat lectus et, efficitur lorem.",
    },
  ];
  
  export default rants;