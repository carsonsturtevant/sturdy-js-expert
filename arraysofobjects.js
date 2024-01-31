// Arrays of objects

const tweets = [
    {
        id: 1080777336298049537,
        message: "Hello Twitter 👋",
        created_at: "2020-01-03 11:46:00",
        author: {
            id: 109215315,
            firstName: "Jad",
            lastName: "Joubran",
            handle: "JoubranJad"
        }
    },
    {
        id: 1080777336298195435,
        message: "How do you keep track of your notes?",
        created_at: "2021-02-19 15:32:00",
        author: {
            id: 109216891,
            firstName: "Sam",
            lastName: "Green",
            handle: "SamGreen"
        }
    }
];

// iterate over tweets array
tweets.forEach(tweet => {
    console.log(tweet);
});

// map all tweets to a new array of just messages
const messages = tweets.map(tweet => tweet.message);


// convert specfic object's string property into csv
const csv = tweets.map(tweet => tweet.message).join(", ");

// reduce an array of objects
const grades = [{ grade: 10 }, { grade: 15 }, { grade: 5 }];
const sum = grades.reduce((total, curr) => total + curr.grade, 0);