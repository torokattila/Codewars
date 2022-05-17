/*No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

Tests:
Test.assertSimilar(testit("Xp Zn, Dgfbl ugjr nvs! Fufqz ohhgu jm lz eqfznr"),"Yo Yo, Check this out! Every night in my dreams", "")
Test.assertSimilar(testit("Ni zdbg! J tdf znv, H efdm znv"),                 "Oh yeah! I see you, I feel you", "")
Test.assertSimilar(testit("Ovs xpts izoct vo! Ugbs ht inx J lmpv xpt fp pm"),"Put your hands up! That is how I know you go on", "")
Test.assertSimilar(testit("Bplf pm dwdsxcnex! Gzs bbsntr sid cjruzobf"),     "Come on everybody! Far across the distance", "")
Test.assertSimilar(testit("Kjrudo vo! Bme tobbfr afsxdfm tt"),               "Listen up! And spaces between us", "")
Test.assertSimilar(testit("Obqux sjlf! Xpt gbuf dnnd sp tgpv xpt fp pm"),    "Party time! You have come to show you go on", "")
*/

function testit(s) {
    const letterPattern = /[a-zA-Z]/;
    let flag = false;

    return [...s]
        .map((char) => {
            flag = !flag;
            if (letterPattern.test(char)) {
                if (!flag) {
                    char = String.fromCharCode(char.charCodeAt() - 1);
                } else {
                    if (char === 'z') {
                        char = 'a';
                    } else if (char === 'Z') {
                        char = 'A';
                    } else {
                        char = String.fromCharCode(char.charCodeAt() + 1);
                    }
                }
            } else {
                char = char;
            }

            return char;
        })
        .join('');
}

console.log(testit('Bme nx gfzss vjkm hn no bme pm '));
