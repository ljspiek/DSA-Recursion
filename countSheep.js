const countSheep = (number) => {
    if(number === 0) {
        console.log("All sheep have jumped over the fence")
    } else {
        let newNumber = number - 1
        console.log(number, "Another sheep jumped over the fence")
        countSheep(newNumber)
    }
}

countSheep(5);