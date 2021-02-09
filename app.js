
document.addEventListener("DOMContentLoaded", function () {
    var friends = ["Michael", "Kasandra", "Justin", "Jordan", "Rachel"];
    var locations = ["cafeteria room", "navigation room", "electrical room", "admin room", "hallway room", "storage room", "medbay room", "speciman room", "security room", "O2 room"];
    var objects = ["a knife", "a gun", "a candelstick", "a shoestring", "their thumb", "a carrot", "a pipe", "a wrench", "popeyes chicken", "the worlds smallest violen", "a lolipop", "an empty can of redbull", "a coconut", "a telescope", "blue eyes white dragon", "dark magician girl", "their friend Elmo", "a shovel", "a hose", "a poptart"];
    var q = 0;
    var w = 0;
    var e = 0;

    for (i = 1; i < 101; i++) {
        if (i % 21 == 0) {
            q++;
        }
        if (i % 11 == 0) {
            w = 0;
        }
        if (i % 21 == 0) {
            e = 0;
        }

        function createH3() {
            var h3 = document.createElement("h3");
            h3.textContent = "Accusation " + i + ": I accuse " + friends[q] + ", with " + objects[e] + " in the " + locations[w] + "!";
            document.body.appendChild(h3);
            w++;
            e++;
            h3.addEventListener("click", function () {
                alert(h3.textContent);
            })
        }
        createH3();
    }
})