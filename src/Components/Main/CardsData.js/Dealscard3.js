// import React, { useEffect, useState } from "react";
// // import apple from "../json/apple.json";
// // import "./Cases.css";

// import img1 from "../../../images/mobiles/apple1.webp";
// import ProductCards from "../ProductCards";

// const Dealscard3 = () => {
//   const [dealcardData, setDealcardData] = useState([]);
//   const apple = [
//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       offer: "17% off",
//       emi: "emi starting from ₹2,356/month",
//       description:
//         "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
//       specifications: [
//         {
//           general: {
//             inbox: "Handset, USB C Charge Cable (1m), Documentation",
//             modelnumber: "MTP03HN/A",
//             modelname: "iPhone 15",
//             Color: "Black",
//             browsetype: "Smartphones",
//             sim: "Dual Sim(Nano + eSIM)",
//             hybridsimslot: "No",
//             touchscreen: "Yes",
//             otg: "No",
//             sound: "Built-in Stereo Speaker",
//           },
//           display: {
//             displaysize: "15.49 cm (6.1 inch)",
//             resolution: "2556 x 1179 Pixels",
//             resolutiontype: "Super Retina XDR Display",
//             GPU: "5 Core",
//             displaytype: "All Screen OLED Display",
//             others:
//               "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//           },
//           memory: {
//             internal: "128 GB",
//           },
//           osprocessor: {
//             os: "iOS 17",
//             processorbrand: "Apple",
//             processortype: "A16 Bionic Chip, 6 Core Processor",
//             processorcore: "Hexa Core",
//           },
//           camera: {
//             isprimarycamera: "Yes",
//             primarycamera: "48MP + 12MP",
//             "Optical Zoom": " Yes",
//             issecondarycamera: "Yes",
//             secondarycamera: "12MP Front Camera",
//             flash: "Rear: True Tone Flash | Front: Retina Flash",
//             hdrec: "Yes",
//             fullhdrec: "Yes",
//             videorec: "Yes",
//             videorecoresolution:
//               "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
//             digitalzoom: "10X",
//             framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
//             dualcamera: "Primary Camera",
//           },
//           call: {
//             videocall: "Yes",
//             speakerphone: "Yes",
//           },
//           connectivity: {
//             networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
//             networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
//             internet: "5G, 4G, 3G, Wi-Fi, EDGE",
//             bluetooth: "Yes",
//             bluetoothver: "v5.3",
//             "wi-fi": "Yes",
//             "wi-fiver": "Wi-Fi 6 (802.11ax)",
//             nfc: "Yes",
//             map: "Google Maps",
//             gps: "Yes",
//           },
//           other: {
//             smartphone: "Yes",
//             simsize: "Nano Sim + eSIM",
//             ppi: "460 PPI",
//             sensors:
//               "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
//             languages:
//               "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
//             browser: "Safari",
//           },
//           battery: {
//             batterycap: "3349 mAh",
//           },
//           warranty: {
//             warranty:
//               " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//             domesticwarranty: "1 Year",
//           },
//         },
//       ],
//       url: "/Apple",
//     },
//   ];

//   useEffect(() => {
//     return setDealcardData(apple);
//   }, []);

//   return <ProductCards ShowcaseData={dealcardData} />;
// };

// export default Dealscard3;
