# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Book.create([
#     {
#         title: "Gone with the Wind",
#         year: 1936,
#         author: "Margaret Mitchell",
#         description: `Gone with the Wind is a novel by American writer Margaret Mitchell, first published in 1936. The story is set in Clayton County and Atlanta, both in Georgia, during the American Civil War and Reconstruction Era. It depicts the struggles of young Scarlett O'Hara, the spoiled daughter of a well-to-do plantation owner, who must use every means at her disposal to claw her way out of poverty following Sherman's destructive "March to the Sea". This historical novel features a coming-of-age story, with the title taken from the poem "Non Sum Qualis eram Bonae Sub Regno Cynarae", written by Ernest Dowson.`,
#         poster_url: "https://m.media-amazon.com/images/I/51zbSZT002L._SX322_BO1,204,203,200_.jpg",
#         category: "Romance"
#     },
#     {
#         title: "Les Misérables",
#         year: 1862,
#         author: "Victor Hugo",
#         description: "This is a French historical novel by Victor Hugo, first published in 1862, that is considered one of the greatest novels of the 19th century. Les Misérables has been popularized through numerous adaptations for film, television and the stage, including a musical.Les Misérables presents a vast panorama of Parisian society and its underworld, and it contains many famous episodes and passages, among them a chapter on the Battle of Waterloo and the description of Valjean’s rescue of Marius by means of a flight through the sewers of Paris. A popular musical stage adaptation was produced in 1980.",
#         poster_url: "https://m.media-amazon.com/images/I/41gUIgTQgdL._SX303_BO1,204,203,200_.jpg",
#         category: "Historical Fiction"
#     },
#     {
#         title: "Where Rainbows End",
#         year: 2004,
#         author: "Cecelia Ahern",
#         description: "Where Rainbows End is a story told through letters, emails and instant messaging about the ever-changing relationship between the two main characters Rosie Dunne and Alex Stewart. Rosie and Alex are close friends from childhood but one day they are suddenly separated when Alex and his family move from Dublin to Boston. The book guides us through their relationship as it continues to change due to distance, new relationships and circumstances which seem determined to keep them apart. One question remains throughout the book, were they always meant to be more than friends and will they risk everything including their friendship on love?",
#         poster_url: "https://m.media-amazon.com/images/I/9129QieMcFL._AC_UF1000,1000_QL80_.jpg",
#         category: "Romance"
#     },
#     {
#         title: "The Freedom Writers Dairy",
#         year: 1999,
#         author: "Freedom Writers",
#         description: "The Freedom Writers Diary was made up of journals that Erin Gruwell told her students to write in about the troubles of their past, present and future. The Freedom Writers name pays homage to the name of the 1960s civil rights group Freedom Riders. After intercepting a racist drawing from one of her students, Gruwell compared the drawings to Nazi propaganda techniques. She drew blank stares; only one of them had heard of the Holocaust. As a result, she assigned them to read and write about the posthumously published 1947 book The Diary of Anne Frank (written between 1942 and 1944) and the 1992–93 non-fiction book by Zlata Filipović, Zlata's Diary: A Child's Life in Sarajevo.",
#         poster_url: "https://m.media-amazon.com/images/I/41IlXXfBzHL._SX322_BO1,204,203,200_.jpg",
#         category: "Non-Fiction"
#     },
#     {
#         title: "Anne of Green Gables",
#         year: 1908,
#         author: "Lucy Maud Montgomery",
#         description: "Anne of Green Gables is a 1908 novel by Canadian author Lucy Maud Montgomery (published as L. M. Montgomery). Written for all ages, it has been considered a classic children's novel since the mid-20th century. Set in the late 19th century, the novel recounts the adventures of 11 year old orphan girl Anne Shirley sent by mistake to two middle-aged siblings, Matthew and Marilla Cuthbert, who had originally intended to adopt a boy to help them on their farm in the fictional town of Avonlea in Prince Edward Island, Canada. The novel recounts how Anne makes her way through life with the Cuthberts, in school, and within the town.",
#         poster_url: "https://m.media-amazon.com/images/I/51QmhihxkZL._SX299_BO1,204,203,200_.jpg",
#         category: "Fiction"
#     },
#     {
#         title: "House of Sky and Breath",
#         year: 2022,
#         author: "Sarah J. Maas",
#         description: "Bryce Quinlan and Hunt Athalar are trying to get back to normal―they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds. The Asteri have kept their word so far, leaving Bryce and Hunt alone. But with the rebels chipping away at the Asteri’s power, the threat the rulers pose is growing. As Bryce, Hunt, and their friends get pulled into the rebels’ plans, the choice becomes clear: stay silent while others are oppressed, or fight for what’s right. And they’ve never been very good at staying silent.",
#         poster_url: "https://m.media-amazon.com/images/I/81Q2s-TyfuL._AC_UF1000,1000_QL80_.jpg",
#         category: "Fiction"
#     }
# ])

Review.create([
    # {
    #     subject: "Great Book",
    #     review: "This such an amazingly wonderful book which made laugh out loud and cry my eyes out, but it was so worth it! I definitely recommend people to read or else you're gonna miss out on a lot! Alex's and Rosie's life is truly a Rollercoaster of fate, love, friendship and destiny",
    #     rating: 5,
    #     user_id: 3,
    #     book_id: 3
    # },
    {
        subject: "Nice story but not quite satisfied",
        review: "A good-humoured epistolary novel about two people who were meant to be together from the very beginning, but it took them quite long to realise that.",
        rating: 3,
        user_id: 4,
        book_id: 3
    }
])

# User.create([
#     {
#         username: "JamesTH",
#         password_digest: "user1"
#     },
#     {
#         username: "KiraChen92",
#         password_digest: "user2"
#     },
#     {
#         username: "Junghox7",
#         password_digest: "user3"
#     },
#     {
#         username: "JayD",
#         password_digest: "user4"
#     }
# ])