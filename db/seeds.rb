# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.create([
    {
        title: "Les Misérables",
        year: 1862,
        author: "Victor Hugo",
        description: "This is a French historical novel by Victor Hugo, first published in 1862, that is considered one of the greatest novels of the 19th century. Les Misérables has been popularized through numerous adaptations for film, television and the stage, including a musical.Les Misérables presents a vast panorama of Parisian society and its underworld, and it contains many famous episodes and passages, among them a chapter on the Battle of Waterloo and the description of Valjean’s rescue of Marius by means of a flight through the sewers of Paris. A popular musical stage adaptation was produced in 1980.",
        poster_url: "https://m.media-amazon.com/images/I/41gUIgTQgdL._SX303_BO1,204,203,200_.jpg",
        category: "Historical Fiction"
    },
    {
        title: "Where Rainbows End",
        year: 2004,
        author: "Cecelia Ahern",
        description: "Where Rainbows End is a story told through letters, emails and instant messaging about the ever-changing relationship between the two main characters Rosie Dunne and Alex Stewart. Rosie and Alex are close friends from childhood but one day they are suddenly separated when Alex and his family move from Dublin to Boston. The book guides us through their relationship as it continues to change due to distance, new relationships and circumstances which seem determined to keep them apart. One question remains throughout the book, were they always meant to be more than friends and will they risk everything including their friendship on love?",
        poster_url: "https://m.media-amazon.com/images/I/9129QieMcFL._AC_UF1000,1000_QL80_.jpg",
        category: "Romance"
    },
    {
        title: "The Freedom Writers Dairy",
        year: 1999,
        author: "Freedom Writers",
        description: "The Freedom Writers Diary was made up of journals that Erin Gruwell told her students to write in about the troubles of their past, present and future. The Freedom Writers name pays homage to the name of the 1960s civil rights group Freedom Riders. After intercepting a racist drawing from one of her students, Gruwell compared the drawings to Nazi propaganda techniques. She drew blank stares; only one of them had heard of the Holocaust. As a result, she assigned them to read and write about the posthumously published 1947 book The Diary of Anne Frank (written between 1942 and 1944) and the 1992–93 non-fiction book by Zlata Filipović, Zlata's Diary: A Child's Life in Sarajevo.",
        poster_url: "https://m.media-amazon.com/images/I/41IlXXfBzHL._SX322_BO1,204,203,200_.jpg",
        category: "Non-Fiction"
    },
    {
        title: "Anne of Green Gables",
        year: 1908,
        author: "Lucy Maud Montgomery",
        description: "Anne of Green Gables is a 1908 novel by Canadian author Lucy Maud Montgomery (published as L. M. Montgomery). Written for all ages, it has been considered a classic children's novel since the mid-20th century. Set in the late 19th century, the novel recounts the adventures of 11 year old orphan girl Anne Shirley sent by mistake to two middle-aged siblings, Matthew and Marilla Cuthbert, who had originally intended to adopt a boy to help them on their farm in the fictional town of Avonlea in Prince Edward Island, Canada. The novel recounts how Anne makes her way through life with the Cuthberts, in school, and within the town.",
        poster_url: "https://m.media-amazon.com/images/I/51QmhihxkZL._SX299_BO1,204,203,200_.jpg",
        category: "Fiction"
    },
    {
        title: "House of Sky and Breath",
        year: 2022,
        author: "Sarah J. Maas",
        description: "Bryce Quinlan and Hunt Athalar are trying to get back to normal―they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds. The Asteri have kept their word so far, leaving Bryce and Hunt alone. But with the rebels chipping away at the Asteri’s power, the threat the rulers pose is growing. As Bryce, Hunt, and their friends get pulled into the rebels’ plans, the choice becomes clear: stay silent while others are oppressed, or fight for what’s right. And they’ve never been very good at staying silent.",
        poster_url: "https://m.media-amazon.com/images/I/81Q2s-TyfuL._AC_UF1000,1000_QL80_.jpg",
        category: "Fiction"
    },
    {
        title: "War and Peace",
        year: 1812,
        author: "Leo Tolstoy",
        description: "War and Peace is a literary work by Russian author Leo Tolstoy. Set during the Napoleonic Wars, the work mixes fictional narrative with chapters on history and philosophy. First published serially beginning in 1865, the work was rewritten and published in its entirety in 1869. It is regarded as Tolstoy's finest literary achievement and remains an internationally praised classic of world literature.

        The novel chronicles the French invasion of Russia and the impact of the Napoleonic era on Tsarist society through the stories of five Russian aristocratic families. Portions of an earlier version, titled The Year 1805, were serialized in The Russian Messenger from 1865 to 1867 before the novel was published in its entirety in 1869.
        
        Tolstoy said that the best Russian literature does not conform to standards and hence hesitated to classify War and Peace, saying it is not a novel, even less is it a poem, and still less a historical chronicle.",
        poster_url: "https://m.media-amazon.com/images/I/A1aDb5U5myL._AC_UF1000,1000_QL80_.jpg",
        category: "Historical Fiction"
    },
    {
        title: "The Rooster Bar",
        year: 2017,
        author: "John Grisham",
        description: "John Grisham’s newest legal thriller takes you inside a law firm that’s on shaky ground.

        Mark, Todd, and Zola came to law school to change the world, to make it a better place. But now, as third-year students, these close friends realize they have been duped. They all borrowed heavily to attend a third-tier, for-profit law school so mediocre that its graduates rarely pass the bar exam, let alone get good jobs. And when they learn that their school is one of a chain owned by a shady New York hedge-fund operator who also happens to own a bank specializing in student loans, the three know they have been caught up in The Great Law School Scam.
        
        But maybe there’s a way out. Maybe there’s a way to escape their crushing debt, expose the bank and the scam, and make a few bucks in the process. But to do so, they would first have to quit school. And leaving law school a few short months before graduation would be completely crazy, right?  Well, yes and no …",
        poster_url: "https://m.media-amazon.com/images/I/81i2bVUvEmL._AC_UF1000,1000_QL80_.jpg",
        category: "Novel"
    }
])

Review.create([
    {
        subject: "Great Book",
        review: "This such an amazingly wonderful book which made laugh out loud and cry my eyes out, but it was so worth it! I definitely recommend people to read or else you're gonna miss out on a lot! Alex's and Rosie's life is truly a Rollercoaster of fate, love, friendship and destiny",
        rating: 5,
        user_id: 3,
        book_id: 3
    },
    {
        subject: "Nice story but not quite satisfied",
        review: "A good-humoured epistolary novel about two people who were meant to be together from the very beginning, but it took them quite long to realise that.",
        rating: 3,
        user_id: 4,
        book_id: 3
    },
    {
        subject: "Classic is always great",
        review: "Wow! What an amazing  book. Modern literature doesn't compare. It reflects an interesting time in history; has a moral story to it that highlights integrity and honesty and a bit of philosophy thrown in, which makes it a must read despite its length.",
        rating: 5,
        user_id: 7,
        book_id: 2
    },
    {
        subject: "Loved it but I actually loved the movie version more",
        review: "It was fantastic. Although, Hugo's writing does get bland quite often when he talks of sewers for 40 pages, for example. Overall, the book is fantastic.",
        rating: 4,
        user_id: 6,
        book_id: 2
    },
    {
        subject: "Great real story",
        review: "This is what I always believe education is about. Teachers shouldn't expect to have an easy job with all A+ students in the class. Sometimes we consider good kids or bad kids base on how smart they are. Every children is deserved to be taught with love.",
        rating: 5,
        user_id: 3,
        book_id: 4
    },
    {
        subject: "Not for me...",
        review: "i was so eager to start the book as I heard rave reviews.  Now I'm struggling to finish the book.  I'm only 30 pages in and the bashing of Donald Trump, I feel, is taking away from what I thought the book was about and what I had hoped to gain from it.",
        rating: 1,
        user_id: 5,
        book_id: 7
    },
    {
        subject: "You won't regret. Trust Me!!!",
        review: "Don't hesitate to read this fine work.  Tolstoy writes with authority and deep sympathy.  There are many great character portraits and even less prominent characters are brought vividly to life. These people belong to a time remote from ours and yet their concerns and fears, their joys and sorrows are very much our own.",
        rating: 5,
        user_id: 3,
        book_id: 18
    },
    {
        subject: "Read it so many time",
        review: "While not my absolute favorite book, I think that this is the ultimate novel. It's length, scope, characters, and history all come together in a surprisingly cohesive narrative. My favorite parts were the fact that this gives the reader an on the ground account of the battles of Austerlitz and Borodino. The character development in this book is insane, and probably the best part of it. ",
        rating: 5,
        user_id: 6,
        book_id: 18
    },
    {
        subject: "Big disappointment",
        review: "I just love John Grisham books, however, not this one. Such a disappointment…kept waiting for it to become interesting. I had to actually push myself to finish it. Characters are just not likable and the plot is simply not that interesting, to say the least.",
        rating: 2,
        user_id: 4,
        book_id: 19
    },
    {
        subject: "Awful literacy work",
        review: "Awful.  Gave up half way through
        Grisham has been past his sell by date a long time now.",
        rating: 1,
        user_id: 7,
        book_id: 19
    }
])
