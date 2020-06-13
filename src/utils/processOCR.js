// import RNMlKit from 'react-native-firebase-mlkit'

// const treatUnibetTicket = text => {
//   const array = []

//   text.forEach(item => {
//     const game = item.replace('O ', '').replace(' -', '-').replace('- ', '-')

//     // GAME DETECTION
//     if (item.includes('-'))
//       if (!item.includes('/') && !item.includes(':'))
//         // filter all texts including '-' but with '/' or ':' (in mostly case a date)

//         array.push({
//           sport: 'football',
//           localTeam: game.split('-')[0],
//           visitorTeam: game.split('-')[1],
//           status: 'won',
//           specialBet: false,
//         }) // add text to game key object && replace '0 ' detected sometimes by MLKit to empty character

//     // BET DETECTION
//     if (item.includes('Mon pari') || item.includes('Résultat'))
//       if (array[array.length - 1] && !array[array.length - 1].name)
//         array[array.length - 1] = {
//           ...array[array.length - 1],
//           name: item.replace('Mon pari:', '').replace('Mon pari : ', '').replace('Résultat du match ', ''),
//         }

//     // ODD DETECTION
//     if (
//       (item.includes(',') || item.includes('.')) &&
//       !item.includes('€') &&
//       !item.includes('Cote') &&
//       !item.includes(' ') // detect odd by filtering some characters
//     ) {
//       // detect if odd already exist on game to avoid
//       if (array[array.length - 1] && !array[array.length - 1].odd)
//         array[array.length - 1] = {...array[array.length - 1], odd: parseFloat(item, 1)}
//     }
//   })

//   return array
// }

// const takePicture = async url => {
//   const screenshot = await RNMlKit.deviceTextRecognition(url)

//   console.log('screenshot', screenshot)

//   const ocrText = screenshot.filter(element => element.lineText !== undefined).map(text => text.lineText)
//   console.log(' treatUnibetTicket(ocrText)', treatUnibetTicket(ocrText))
//   return treatUnibetTicket(ocrText)
// }

// export default takePicture
