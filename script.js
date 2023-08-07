let a = [
    "Connecting to instagram...",
    "chars = string.printable.strip()",
    'password = password.strip()',
    "seeking for the server...",
    "Connecting to server 1...",
    "id has been fatched successfully!",
    "chars = string.printable.strip()",
    'def bruteCracking(username,error):',
    'password',
    "**************",
    "Connection failed. Retrying...",
    'try:',
    '95135 attempts. The password is pass',    "chars = string.printable.strip()",
    "Connecting to server 2",
    'password',
    "**************",
    'try:',
    "Connected Successfully...",
    "Username **********...", 
    "Trying Brute Force...",
    'def bruteCracking(username,error):',
    "**************",
    "**************",
    "200K passwords tried...",
    "Match not found",
    "Another 100K passwords tried...",
    'def bruteCracking(username,error):',
    "**************",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match not found...",
    "**************",
    "Username **********...",   
    "**************",
    "**************",
    'except:',
    'def bruteCracking(username,url,error):',
    "Accessing Account...",
    "got the username and password!",
    "Hack Successful...",
    "operating system is crashed",
    "your Instagram id and password is hacked",
    "your Instagram id and password is hacked",
    "your Instagram id and password is hacked",
    "your Instagram id and password is hacked",
]

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(true) }, seconds * 280)
    })
}

const showHack = async (message) => {
    await sleep(2)
    // console.log(message)
    text.innerHTML = text.innerHTML + message + "<br>"
}

(async () => {
    for (let i = 0; i < a.length; i++) {
            await showHack(a[i])
    }
})()