function addNew(){
    quotes=[
        {
            quote: "If you dont have time to read, you dont have the time (or the tools) to write. Simple as that.",
            author: "Stephen King"
        },
        {
            quote: "I always kept two books in my pocket, one to read, one to write in.",
            author: "Louis Stevenson"
        },
        {
            quote: "A word after a word after a word is power.",
            author: "Margaret Atwood"
        },
        {
            quote: "The most valuable of all talents is that of never using two words when one will do.",
            author: "Thomas Jefferson"
        },
        {
            quote: "Writing is its own reward.",
            author: "Henry Miller"
        },
    ];
    let num=Math.floor(Math.random() * 6);
    document.getElementById("quote-text").innerHTML=quotes[num].quote;
    document.getElementById("author").innerHTML=quotes[num].author;
}