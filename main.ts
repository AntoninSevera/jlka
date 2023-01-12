radio.setFrequencyBand(7)
radio.setTransmitSerialNumber(true)
console.logValue("name", control.deviceName())

radio.onReceivedNumber(function (receivedNumber) {
    const serialRemote = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    console.logValue(serialRemote+": ", receivedNumber)
})
radio.onReceivedValue(function (name, value) {
    basic.showNumber(value)
    basic.showString(name)
    if (name == "grp") {
        radio.setGroup(value)
    } else {
        if (name == "code") {
            input.onButtonPressed(Button.A, function () {
                radio.sendNumber(value)
            })
        }
    }
})
