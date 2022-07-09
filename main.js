var delayInMilliseconds = 1000; //1 second

setTimeout(function() {
    //your code to be executed after 1 second
}, delayInMilliseconds);

function main() {
    var current = 1
    if(current === 1){
        document.getElementById("first_img").src = "images/indiagate.jpg"
        document.getElementById("first_p").innerText = "At the centre of New Delhi stands the 42 m high India Gate, an \"Arc-de-Triomphe\" like archway in the middle of a crossroad. Almost similar to its French counterpart, it commemorates the 70,000 Indian soldiers who lost their lives fighting for the British Army during the World War I. The memorial bears the names of more than 13,516 British and Indian soldiers killed in the Northwestern Frontier in the Afghan war of 1919.\n" +
            "\n" +
            "The foundation stone of India Gate was laid by His Royal Highness, the Duke of Connaught in 1921 and it was designed by Edwin Lutyens. The monument was dedicated to the nation 10 years later by the then Viceroy, Lord Irwin. Another memorial, Amar Jawan Jyoti was added much later, after India got its independence. The eternal flame burns day and night under the arch to remind the nation of soldiers who laid down their lives in the Indo-Pakistan War of December 1971.\n" +
            "\n" +
            "The entire arch stands on a low base of red Bharatpur stone and rises in stages to a huge moulding. The cornice is inscribed with the Imperial suns while both sides of the arch have INDIA, flanked by the dates MCMXIV (1914 left) and MCMXIX (1919 right). The shallow domed bowl at the top was intended to be filled with burning oil on anniversaries but this is rarely done.\n" +
            "\n" +
            "During nightfall, India Gate is dramatically floodlit while the fountains nearby make a lovely display with coloured lights. India Gate stands at one end of Rajpath, and the area surrounding it is generally referred to as 'India Gate'.\n" +
            "\n" +
            "Surrounding the imposing structure is a large expanse of lush green lawns, which is a popular picnic spot. One can see hoards of people moving about the brightly lit area and on the lawns on summer evenings."

    }
    current ++;
    if (current === 2) {
        document.getElementById("first_img").src = "images/goldentemple.jpg"
        document.getElementById("first_p").innerText = "This dazzling temple is the holy seat of the Sikhs all over the world. It is popularly known as the Golden Temple or the Durbar Sahib. The Holy Granth Sahib is kept here and the gold-plated temple has stunning copper domes and a body of pristine white marble. The motifs have Islamic influence and the floral patterns are intricate and exquisite. The place is very calm and serene and although the daily footfall is very high, everyone maintains discipline and offers their prayers with utmost serenity. If you are in search of inner peace, this is perhaps one of the few places in the world where you may end up finding it. The temple complex is very clean and visitors are requested to maintain the hygiene of the place. Everyone should enter the temple complex with their head covered. The langar of the temple feeds about a million people every single day and is run entirely by volunteers. Within the temple complex, you must also visit the Hari Mandir, Amrit Sarovar, and the Central Sikh Museum."
        console.log(current);

    }
    console.log(current);


}

