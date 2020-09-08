import { networkInterfaces } from "os";

export const ip = async() => {
    let address = await require('dns').lookup(require('os').hostname(), function (err, add, fam) {
        console.log(`Local Network Address: ${add}`)
    })
    return address;
}