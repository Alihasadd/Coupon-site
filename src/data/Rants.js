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

const rants = [
    {
      id: 1,
      title: "I hate the cinema",
      author: "Me",
      excerpt: "Not sure why people enjoy going to the Cinema.",
      body: "The cinema makes no sense to me... I find it to be a uncomfortable experience. First I have to schedule out my day to see a movie. Then I have to go to the movies and wait in a line and hopefully there is space for me. Then if I want snacks they are airport prices. Then I have to wait through a bunch of advertisements for the actual movie I wanted to see and if I don't do this I end up with horrible seats! If you go with friends, good luck sitting together. The seats are gross and sticky and so is the floor because people spill their snacks and soda. The arm rests are also disgusting because they are rarely cleaned. Then you are in the movie and there are a bunch of people around you making noise. During the movie people might talk or disrupt and the chairs are worse than any I have at home. After the film I walk out and my eyes have to adjust to the light which hurts. If I want to talk about the film I need to only do it with friends who saw it otherwise they will say don't ruin it for me... I hate the movies and don't understand why others enjoy this experience. It would be much more comfortable to watch from my home and my awesome couch and be able to stop the film to go to the bathroom or have snacks that are normal prices!",
    },
    {
      id: 2,
      title: "I hate engagement rings",
      author: "Me",
      excerpt:
        "Diamonds are NOT rare and shouldn't be expensive.",
      body: "Diamonds are not rare and help exploit people in other countries. When you get engaged people always ask to see your ring which is a ridiculous response to finding out someone is going to get married. Then people always have opinions about your ring and might make you feel bad if the diamond isn't big enough because they might think your partner cheaped out on the ring. A smaller ring is much more practical so it doesn't get stuck on your clothing or in your hair if you run your hands through it. People have been tricked into buying these rings. They also serve the purpose of letting others know your marital status which used to be seen as a status symbol. Rings are dumb.",
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
      title: "Cloud Computing: Trends and Innovations",
      author: "Sarah Miller",
      excerpt:
        "An analysis of recent trends and innovations in cloud computing technology.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ante eu massa molestie, sed aliquet risus rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut non est lectus. In vel eros nec turpis consequat cursus. Duis vestibulum vestibulum turpis, non lobortis nulla. Suspendisse potenti. Nulla facilisi. Fusce maximus justo eget nulla faucibus congue. Ut id magna sed nisl vehicula laoreet non a metus. Sed vulputate, mauris sit amet tincidunt laoreet, mauris justo volutpat ante, a posuere dolor nulla vel lorem. Duis ac posuere nulla, a semper sapien. Sed vestibulum sodales felis ut placerat. Quisque et libero bibendum, feugiat lectus et, efficitur lorem.",
    },
    {
      id: 7,
      title: "Big Data Analytics: Challenges and Opportunities",
      author: "Daniel Brown",
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