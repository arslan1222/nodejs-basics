// OS Module
    // The Os Module in Node.js is utilized to retrieve details about the operating system of a computer.
    // It differs methods for communication with the computer's operating system, including retrieving and the amount of memory.


    // Imporatant methods
/*
    Os.arch()
    os.freemem();
    os.totalmem();
    os.networkinterface();
    os.tmpdir();
*/

    const os = require("os");

    console.log("CPU Arcitecture: " + os.arch());
    console.log("Free memory: " + os.freemem());
    console.log("Total memory: " + os.totalmem());
    console.log("Total memory: " + JSON.stringify(os.networkInterfaces()));
    console.log("Temporary directory: " + os.tmpdir());
    console.log("LE or BE: " + os.endianness());
    console.log("My PC name: " + os.hostname());
    console.log("OS Type: " + os.type());
    console.log("When release: " + os.release());
