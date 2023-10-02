function card(name, description, image){
    this.name = name;
    this.description = description;
    this.image = image;
}
// Display the initial greeting message
document.getElementById("display").innerHTML = '<p style="font-size: 28px;">Welcome! Click the "Draw" button to get your daily tarot reading.</p>';

const deck = [
    new card('Wheel of Fortune', 'The same forces that govern the changing of the seasons, or the rising and setting of the sun is also the master of luck and the fate of individuals.', 'WheelOfFortune'),
    new card('The Hanged Man', 'The Hanged Man card reflects a particular need to suspend certain action. As a result, this might indicate a certain period of indecision.', 'hangedMan'),
    new card('The Chariot', 'The Chariot shows that you should pursue the plan with a structured and ordered approach.', 'chariot'),
    new card('Death', 'The Death card signals that one major phase in your life is ending, and a new one is going to start.', 'death'),
    new card('The Lovers', 'The trust and the unity that the lovers have gives each of them confidence and strength, empowering the other.', 'lovers'),
    new card('Strength', 'Your resilience will greatly aid you, and your fearlessness means that you should have no issues speaking your mind.', 'strength'),
    new card('Temperance', 'The Temperance tarot card suggests moderation and balance, coupled with a lot of patience.', 'temperance'),
    new card('The Devil', 'Addiction to substances or material pleasures can also be the reason for your feelings of powerlessness and entrapment.', 'devil'),
    new card('The World', 'To encounter the World in your cards is to encounter a great unity and wholeness.', 'world'),
    new card('The Tower', 'The old ways are no longer useful, and you must find another set of beliefs, values and processes to take their place.', 'tower'),
    new card('The Sun', 'The card shows that you have a significant sense of deserved confidence right now.', 'sun'),
    new card('The Star', 'To see this card is a message to have faith, for the universe will bless you and bring forth all that you need.', 'star'),
    new card('The Moon', 'The moons light can bring you clarity and understanding and you should allow your intuition to guide you through this darkness.', 'moon'),
    new card('The Hermit', 'He walks through the dark night of his unconscious, guided only by the low light of the northern star, with his destination being his home, his self.', 'hermit'),
    new card('Justice', 'If you have been wronged, this card appearance may bring you relief. On the other hand, if your actions caused pain to others, this card serves as a warning.', 'justice'),
    new card('Judgement', 'To see this card can also indicate that you are in a period of awakening, brought on by the act of self-reflection.', 'judgement')
];
function getRandom(num){
    const randomNumber = Math.floor(Math.random() * num);
    return randomNumber
}
document.getElementById("draw").onclick = function(){
    const index = getRandom(16);
    const currentCard = deck[index]; 
    
    // Check if the user has already drawn a card today
    const lastDrawn = localStorage.getItem("lastDrawn");

    if (lastDrawn) {
        const today = new Date().toLocaleDateString();

        if (lastDrawn === today) {
            // User has already drawn a card today
            document.getElementById("display").innerHTML = '<p style="font-size: 28px;">You already got your reading today, come back tomorrow.</p>';
            return;
        }
    }



    document.getElementById("display").innerHTML = '<img src="img/' + currentCard.image + '.png"><h3>' + currentCard.name + '</h3><p>' + currentCard.description + '</p>';

     // Store today's date in local storage to track the last draw
    localStorage.setItem("lastDrawn", new Date().toLocaleDateString());
};
