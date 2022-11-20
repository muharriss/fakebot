const question = document.getElementById("question")
const answer = document.getElementById("answer")
const button = document.getElementById("button")
const button2 = document.getElementById("button2")
const overlay = document.getElementById("overlay")

let init = 0

const botSay = () => {
    return [
        "Hallo my name's Xbot, what's your name? "
    ]
}

question.innerHTML = botSay()[0]

const botStart = () => {

    if (answer.value === "") {
        console.log('tombal tidak berfungsi')
        answer.classList.add("answer2")
        console.log("value=", answer.value)
        keyDelay()

    } else {
        init++
        answer.classList.remove("answer2")
        if (init === 1) {
            console.log({ name: answer.value });
            btnDelay()
            botDelay(answer.value)
            answer.value = ""
        } else if (init === 2) {
            console.log({ usia: answer.value });
            btnDelay()
            botDelay2(answer.value)
            answer.value = ""
        } else if (init === 3) {
            console.log({ hoby: answer.value });
            btnDelay()
            botDelay3(answer.value)
            answer.value = ""
        } else if (init === 4) {
            console.log({ pacar: answer.value });
            btnDelay()
            botDelay4(answer.value)

        } else if (init === 5) {
            botDelay5()
        }

    }

    console.log('init =', init);
}

const botDelay = (answer) => {
    setTimeout(() => {
        question.innerHTML = `Hallo ${answer}, how old are you? `
        button.style.color = "white"
    }, [1000])
}

const botDelay2 = (answer) => {
    setTimeout(() => {
        question.innerHTML = `Mmm ${answer}, i see. What thing do you like?`
        button.style.color = "white"
    }, [1000])
}

const botDelay3 = (answer) => {
    setTimeout(() => {
        question.innerHTML = `Wahh ${answer}, i like too. Btw do you have a crush?`
        button.style.color = "white"
    }, [1000])
}

const botDelay4 = () => {
    setTimeout(() => {
        question.innerHTML = `Ok, thanks for vitsiting Xbot`
        answer.style.display = "none"
        button.innerHTML = "reset"
        button.style.color = "white"
    }, [1000])
}

const botDelay5 = () => {
    setTimeout(() => {
        location.reload()
    }, [1000])
}

const keyDelay = () => {
    setTimeout(() => {
        button.style.color = "white"
    }, 1000);
}

const btnDelay = () => {
    button.disabled = true;
    keyDelay()
    setTimeout(() => {
        button.disabled = false;
    }, [1000])
}

document.onkeydown = keyboard;

// function keyboard(e) {
//     if (e.keyCode == '13' && init != 4) {
//         button.style.color = "#6d6ddf"
//         botStart()

//         console.log("button none")
//     } else if (e.keyCode == '13' && init === 4) {

//         button.style.color = "#6d6ddf"
//         botDelay5()
//     }

// }

function keyboard(e) {
    if (e.keyCode == '13' && init === 4) {

        button.style.color = "#6d6ddf"
        botDelay5()
    }

}

// const submitButton = document.getElementById("submit");
// const input = document.getElementById("username");

// answer.addEventListener("keyup", (e) => {
//     // botStart()
//     console.log(e.currentTarget.value);
//     const value = e.currentTarget.value;
//     button.disabled = false;

//     if (value === "") {
//       button.disabled = true;
//     }
// });

answer.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("button").click();
        button.style.color = "#6d6ddf"
        btnDelay()
        console.log("input value", answer.value)
    }
});

