// convert 12 hr to 24 hrs format

//01:02 PM

const timeConevert = (time12h) => {
    const [time, modifier] = time12h.split(" ")
    let [hours, minutes] = time.split(":")
    if(hours === "12")  hours = "00";
    if(modifier === "PM") {hours = parseInt(hours) + 12};
    return `${hours}: ${minutes}`
}

console.log(timeConevert("01:02 PM"))
console.log(timeConevert("02:02 PM"))