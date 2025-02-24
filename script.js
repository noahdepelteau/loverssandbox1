document.addEventListener("DOMContentLoaded", function () {
   
    function typeText(elementId, text, speed) {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Element with ID "${elementId}" not found.`);
            return;
        }

        let index = 0;
        let buffer = ""; // Holds typed characters

        function addCharacter() {
            if (index < text.length) {
                buffer += text[index]; // Append the next character
                element.innerHTML = buffer; // Update the output correctly
                index++;
                setTimeout(addCharacter, speed);
            }
        }

        addCharacter();
    }

    const contentTwo = `<p>Lovers’ Sandbox: Level 2</p>
    <p> </p>
<p>We’re at Bert’s Bed and Breakfast. Night after night</p>
<p>your cheeks are the last thing I see before I sleep.</p>
<p>Goodnight; goodnight. Our cat kisses the tails</p>
<p>of doves at the window and your radio buzzes.</p>
<p>The floor is gopherwood and today we’re thankful.</p>
<p>You put geranium on the wind like medicine, orange</p>
<p>moon rendered across our field of view. We dream</p>
<p>of parent-teacher conferences together. Hi, lover––</p>
<p>our dialogue goes something like this––how are you?</p>
<p>I turn down the radio to listen. What with stars,</p>
<p>with silver. What with you, now. Each morning</p>
<p>that we rise again is new. I brush your lips in yellow.</p>
<div class="continue">
    continue? <a href="chat.html">yes</a> / <a href="index.html">no</a>
</div>
`;

const contentOne = `<p>Lovers’ Sandbox: Level 1</p>
<p> </p>
            <p>This is a step-up from the empty mall, from that</p>
            <p>pervading smell of leaky pipes and Hollister.</p>
            <p>We collect walkie-talkies and underwear to keep</p>
            <p>in our inventory––to take care of everything.</p>
            <p>You hold my hand; you dive brave in the pool.</p>
            <p>I admit I am glad you are the one I swim with.</p>
            <p>Some days I stay home and write love letters</p>
            <p>in your YouTube comment section. Everything</p>
            <p>remains private ever since the other folks ran out</p>
            <p>of dialogue, but I find it warm that I can reach</p>
            <p>just you just anywhere. Everything you write</p>
            <p>finds me well. You often say things like that.</p>

            <div class="continue">
continue? <a href="comments.html">yes</a> / <a href="index.html">no</a>
</div>
`;

const contentThree = `<p>Lovers’ Sandbox: Level 3</p>
<p> </p>
           <p>Today you show me the way to a lighthouse you found.</p>

<p>On the walk, you stay on the outer side of the sidewalk</p>

<p>even though there aren’t any more cars to pass us by.</p>

<p>I splash my boots in the puddles to your thoughtful chatter.</p>

<p>The mud is patterns on my pants that try to describe you.</p>

<p>From the top, we can see the whole half-rendered city</p>

<p>all at once: in pieces, we can see Bert’s, and the mall,</p>

<p>and the most famous restaurant in the plains over the hill,</p>

<p>and the western-themed saloon in black and white,</p>

<p>and if we turn our heads to clip through the sky in just</p>

<p>the right way, we can see our old yellow house.</p>

<p>Next time we go, we bring our cat to show him, too.</p>

            <div class="continue">
continue? <a href="essay.html">yes</a> / <a href="index.html">no</a>
</div>
`;




    // Start the typing effect
    typeText("output1", contentOne, 30);
    typeText("output2", contentTwo, 30);
    typeText("output3", contentThree, 30);






    const chatMenu =  ` <p class="active" id="chat" >>> CHAT</p>
<p>>> BATTLE</p>
<p>>> FRIEND</p>
<p>…</p>
`;

const chatContent =  ` <p>> (CHAT) {</p>
<p>> Do you have a pet?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>> Yes, I have a dog who barks loudly.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>> Oh… No, I lost my frog in the flood…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>> Yes, I have a little brother!</p>
<p>> Who is your best friend?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>> You, of course.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>> You probably don’t know them. It’s this person named…you!</p>
<p>> Can you do a cartwheel?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>> You betcha! I can cartwheel laps around you!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>> No, but I would like to learn.</p>
<p>> Would you survive an apocalypse?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>> Totally! My emergency bunker is fully stocked with pizza.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>> No way! I–</p>
<p>}</p>

<a href="levelThree.html" class="active">proceed_to_next_level</a><p></p>
<a href="index.html" class="exit">return_home</a>
`;

const enter = document.querySelector("#enter");
console.log(enter.classList);

enter.addEventListener('click',function(event){
this.classList.remove("active");

console.log("click enter");
typeText("menu", chatMenu, 10);



});

setTimeout(1000);

const chat = document.querySelector("#chat");
console.log(chat.classList);

chat.addEventListener('click',function(event){

    this.addEventListener('click',function(event){
    this.classList.remove("active");
    chat.classList.remove("active");
    console.log("click chat");
        typeText("chatContent", chatContent, 10);
    });

   


});









});

//  // Fullscreen trigger on mouse move
//  function goFullscreen() {
//     if (!document.fullscreenElement) {
//         document.documentElement.requestFullscreen().catch(err => {
//             console.error(`Error attempting to enable fullscreen: ${err.message}`);
//         });
//     }
// }

// document.addEventListener("click", goFullscreen, { once: true });




