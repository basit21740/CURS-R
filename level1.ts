/*
* This program is curs>r game
*
* @author  Abdul Basit
* @version 1.0
* @since   2022-02-02
*/

import promptSync from "prompt-sync"
const prompt = promptSync()

console.log("Curs>r, Sometimes curse can be a gift")
console.log("\n              Level 1")
console.log("\nProve yourself a worthy player!")

try {
const choice = prompt("\nCake or Coffee: ")
console.log()
  if (choice == ""){
    console.log("CHOOSE OR DIE !")
  } else if (choice == "coffee"){
    console.log("Pours Coffee")
    console.log("")
    console.log("No Terror for now, Come back again tommorow")
  } else if (choice == "cake"){
    console.log("WAITRESS KILLS HERSELF ")
    console.log("\nCome Back Tommorrow same time for more terror")
    console.log("\nA Worthy Player")
    console.log("\nLevel  1 Complete")
  } else {
      console.log("DIEEEEEEE")
    }
} catch (err) {
  console.log("DIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
}
