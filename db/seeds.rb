# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.create([
    {
        title: "Gone with the Wind",
        year: 1936,
        author: "Margaret Mitchell",
        description: `Gone with the Wind is a novel by American writer Margaret Mitchell, first published in 1936. The story is set in Clayton County and Atlanta, both in Georgia, during the American Civil War and Reconstruction Era. It depicts the struggles of young Scarlett O'Hara, the spoiled daughter of a well-to-do plantation owner, who must use every means at her disposal to claw her way out of poverty following Sherman's destructive "March to the Sea". This historical novel features a coming-of-age story, with the title taken from the poem "Non Sum Qualis eram Bonae Sub Regno Cynarae", written by Ernest Dowson.`,
        poster_url: "https://m.media-amazon.com/images/I/51zbSZT002L._SX322_BO1,204,203,200_.jpg",
        category: "Romance"
    },
    {
        title: "Les Misérables",
        year: 1862,
        author: "Victor Hugo",
        description: "This is a French historical novel by Victor Hugo, first published in 1862, that is considered one of the greatest novels of the 19th century. Les Misérables has been popularized through numerous adaptations for film, television and the stage, including a musical.Les Misérables presents a vast panorama of Parisian society and its underworld, and it contains many famous episodes and passages, among them a chapter on the Battle of Waterloo and the description of Valjean’s rescue of Marius by means of a flight through the sewers of Paris. A popular musical stage adaptation was produced in 1980.",
        poster_url: "https://m.media-amazon.com/images/I/41gUIgTQgdL._SX303_BO1,204,203,200_.jpg",
        category: "Historical Fiction"
    }
])