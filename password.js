let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let num = "1234567890"
let specChar = "~`!@#$%^&*()|}{[]<>?"
let funn = ["🐱", "pc", "lvd", "BSDK", "RukJa", "Sabar", "chMayla", "asambhav", "RukkoJara", "devmanus!", "abhibatata"]

class password {
    constructor(length) {
        this.length = length
    }
    weak() {
        let password = ""
        for (let i = 0; i < this.length; i++) {
            let parr = [char]
            let tp = parr[Math.floor(Math.random() * parr.length)]
            password += char[Math.floor(Math.random() * tp.length)]
        }
        let showpassword = document.getElementById("pass")
        showpassword.value = password
    }
    strong() {
        let password = ""

        for (let i = 0; i < this.length; i++) {
            let parr = [char, num]
            let tp = parr[Math.floor(Math.random() * parr.length)]
            password += tp[Math.floor(Math.random() * tp.length)]
        }
        let showpassword = document.getElementById("pass")
        showpassword.value = password
    }
    superstrong() {
        let password = ""

        for (let i = 0; i < this.length; i++) {
            let parr = [char, num, specChar]
            let tp = parr[Math.floor(Math.random() * parr.length)]
            password += tp[Math.floor(Math.random() * tp.length)]
        }
        let showpassword = document.getElementById("pass")
        showpassword.value = password
    }
    funny() {
        let showpassword = document.getElementById("pass")
        let password = ""
        if (this.length == 1) {
            password = funn[0]
            showpassword.value = password
        }
        else if (this.length == 2) {
            password = funn[1]
            showpassword.value = password
        }
        else if (this.length == 3) {
            password = funn[2]
            showpassword.value = password
        }
        else if (this.length == 4) {
            password = funn[3]
            showpassword.value = password
        }
        else if (this.length == 5) {
            password = funn[4]
            showpassword.value = password
        }
        else if (this.length == 6) {
            password = funn[5]
            showpassword.value = password
        }
        else if (this.length == 7) {
            password = funn[6]
            showpassword.value = password
        }
        else if (this.length == 8) {
            password = funn[7]
            showpassword.value = password
        }
        else if (this.length == 9) {
            password = funn[8]
            showpassword.value = password
        }
        else if (this.length == 10) {
            password = funn[9]
            showpassword.value = password
        }
        else {
            let err = document.getElementById("error")
            err.innerHTML = "[For Funny Password] : Length must be Less Than 10🫡"
            err.style.display = "block";
            setTimeout(() => {
                err.style.display = "none";
            }, 4000);
        }
    }
}

let ssp = document.getElementById("ssp")
ssp.addEventListener("click", (e) => {
    e.preventDefault()
    let length = document.getElementById("len").value
    if (length <= 0) {
        test()
    }
    else {
        let ss = new password(length)
        ss.superstrong()
    }
})

let sp = document.getElementById("sp")
sp.addEventListener("click", (e) => {
    e.preventDefault()
    let length = document.getElementById("len").value
    if (length <= 0) {
        test()
    }
    else {
        let ss = new password(length)
        ss.strong()
    }
})

let wk = document.getElementById("wk")
wk.addEventListener("click", (e) => {
    e.preventDefault()
    let length = document.getElementById("len").value
    if (length <= 0) {
        test()
    }
    else {
        let ss = new password(length)
        ss.weak()
    }
})

let fun = document.getElementById("fun")
fun.addEventListener("click", (e) => {
    e.preventDefault()
    let length = document.getElementById("len").value
    if (length <= 0) {
        test()
    }
    else {
        let ss = new password(length)
        ss.funny()
    }
})

function test() {
    let err = document.getElementById("error1")
    err.innerHTML = "Enter Valid Length😒"
    err.style.display = "block";
    setTimeout(() => {
        err.style.display = "none";
    }, 4000);
}