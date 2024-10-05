import React, { useEffect, useState } from "react";
// import apple from "../json/apple.json";
import "./Cases.css";
import ProductListCase from "../../../../../ProductShowcase/ProductListCase";
import img1 from "../../../../../../../images/mobiles/apple/apple15/apple1.webp";
import img2 from "../../../../../../../images/mobiles/apple/apple15/apple2.webp";
import img3 from "../../../../../../../images/mobiles/apple/apple15/apple3.webp";
import img8 from "../../../../../../../images/mobiles/apple/apple15/apple4.webp";
import img4 from "../../../../../../../images/mobiles/apple/apple14/apple14-1.webp";
import img5 from "../../../../../../../images/mobiles/apple/apple14/apple14-2.webp";
import img6 from "../../../../../../../images/mobiles/apple/apple14/apple14-3.webp";
import img7 from "../../../../../../../images/mobiles/apple/apple14/apple14-4.webp";
import img9 from "../../../../../../../images/mobiles/apple/apple13/apple13-1.webp";
import img10 from "../../../../../../../images/mobiles/apple/apple13/apple13-2.webp";
import img11 from "../../../../../../../images/mobiles/apple/apple13/apple13-3.webp";
import img12 from "../../../../../../../images/mobiles/apple/apple13/apple13-4.webp";
import img13 from "../../../../../../../images/mobiles/apple/apple12/apple12-1.webp";
import img14 from "../../../../../../../images/mobiles/apple/apple12/apple12-2.webp";
import img15 from "../../../../../../../images/mobiles/apple/apple12/apple12-3.webp";
import img16 from "../../../../../../../images/mobiles/apple/apple12/apple12-4.webp";
import img17 from "../../../../../../../images/mobiles/apple/apple12/apple12-5.webp";
import img18 from "../../../../../../../images/mobiles/apple/applepro/applepro1.webp";
import img19 from "../../../../../../../images/mobiles/apple/applepro/applepro2.webp";
import img20 from "../../../../../../../images/mobiles/apple/applepro/applepro3.webp";
import img21 from "../../../../../../../images/mobiles/apple/applepro/applepro4.webp";
// import img6 from "../../../../../../../images/mobiles/apple14-3.webp";

const AppleDatas = () => {
  const [dealcardData, setDealcardData] = useState([]);
  const apple = [
    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 (Black, 128 GB)",
      highlights:
        "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
      pic: img1,
      price: "66,999",
      mrp: "79,900",
      offer: "17% off",
      emi: "emi starting from ₹2,356/month",
      description:
        "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MTP03HN/A",
            modelname: "iPhone 15",
            Color: "Black",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2556 x 1179 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "5 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A16 Bionic Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "10X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 (Blue, 128 GB)",
      highlights:
        "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
      pic: img2,
      price: "72,999",
      mrp: "79,900",
      offer: "8% off",
      emi: "No cost EMI starting from ₹12,167/month",
      description:
        "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MTP03HN/A",
            modelname: "iPhone 15",
            Color: "Blue",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2556 x 1179 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "5 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A16 Bionic Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "10X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 (Green, 128 GB)",
      highlights:
        "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
      pic: img3,
      price: "72,999",
      mrp: "79,900",
      offer: "8% off",
      emi: "No cost EMI starting from ₹12,167/month",
      description:
        "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MTP03HN/A",
            modelname: "iPhone 15",
            Color: "Green",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2556 x 1179 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "5 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A16 Bionic Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "10X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 14 (Blue, 128 GB)",
      highlights:
        "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 12MP + 12MP | 12MP Front Camera A15 Bionic Chip, 6 Core Processor Processor",
      pic: img4,
      price: "58,999",
      mrp: "69,900",
      offer: "15% off",
      emi: "emi starting from ₹2,075/month",
      description:
        "Stay productive and improve your performance with the Super Retina XDR display that is comfortable for the eyes. Powered with a 12 MP main camera, enjoy taking pictures with friends and family. With a built-in rechargeable lithium-ion battery and equipped with the MagSafe wireless charging, you can charge your phone quickly up to 50 % in just half an hour by using a 20 W adapter. This phone is loaded with a horde of exciting features such as Siri, face ID, barometer, ambient light sensors etc., and is also resistant to dust and water as it is IP68 rated.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB-C to Lightning Cable, Documentation",
            modelnumber: "MPVN3HN/A",
            modelname: "iPhone 14",
            Color: "Blue",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2532 x 1170 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "5 Core",
            displaytype: "Super Retina XDR Display",
            others:
              "HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 20,00,000:1, Max Brightness: 800 nits, Peak Brightness: 1,200 nits, Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 16",
            processorbrand: "Apple",
            processortype: "A15 Bionic Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "12MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "5X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            // wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3279 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 14 (Starlight, 128 GB)",
      highlights:
        "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 12MP + 12MP | 12MP Front Camera A15 Bionic Chip, 6 Core Processor Processor",
      pic: img5,
      price: "58,999",
      mrp: "69,900",
      offer: "15% off",
      emi: "emi starting from ₹2,075/month",
      description:
        "Stay productive and improve your performance with the Super Retina XDR display that is comfortable for the eyes. Powered with a 12 MP main camera, enjoy taking pictures with friends and family. With a built-in rechargeable lithium-ion battery and equipped with the MagSafe wireless charging, you can charge your phone quickly up to 50 % in just half an hour by using a 20 W adapter. This phone is loaded with a horde of exciting features such as Siri, face ID, barometer, ambient light sensors etc., and is also resistant to dust and water as it is IP68 rated.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB-C to Lightning Cable, Documentation",
            modelnumber: "MPVN3HN/A",
            modelname: "iPhone 14",
            Color: "Starlight",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2532 x 1170 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "5 Core",
            displaytype: "Super Retina XDR Display",
            others:
              "HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 20,00,000:1, Max Brightness: 800 nits, Peak Brightness: 1,200 nits, Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 16",
            processorbrand: "Apple",
            processortype: "A15 Bionic Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "12MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "5X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            // wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3279 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 14 (Midnight, 128 GB)",
      highlights:
        "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 12MP + 12MP | 12MP Front Camera A15 Bionic Chip, 6 Core Processor Processor",
      pic: img6,
      price: "58,999",
      mrp: "69,900",
      offer: "15% off",
      emi: "emi starting from ₹2,075/month",
      description:
        "Stay productive and improve your performance with the Super Retina XDR display that is comfortable for the eyes. Powered with a 12 MP main camera, enjoy taking pictures with friends and family. With a built-in rechargeable lithium-ion battery and equipped with the MagSafe wireless charging, you can charge your phone quickly up to 50 % in just half an hour by using a 20 W adapter. This phone is loaded with a horde of exciting features such as Siri, face ID, barometer, ambient light sensors etc., and is also resistant to dust and water as it is IP68 rated.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB-C to Lightning Cable, Documentation",
            modelnumber: "MPVN3HN/A",
            modelname: "iPhone 14",
            Color: "Midnight",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2532 x 1170 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "5 Core",
            displaytype: "Super Retina XDR Display",
            others:
              "HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 20,00,000:1, Max Brightness: 800 nits, Peak Brightness: 1,200 nits, Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 16",
            processorbrand: "Apple",
            processortype: "A15 Bionic Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "12MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "5X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            // wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3279 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 14 (Purple, 128 GB)",
      highlights:
        "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 12MP + 12MP | 12MP Front Camera A15 Bionic Chip, 6 Core Processor Processor",
      pic: img7,
      price: "58,999",
      mrp: "69,900",
      offer: "15% off",
      emi: "emi starting from ₹2,075/month",
      description:
        "Stay productive and improve your performance with the Super Retina XDR display that is comfortable for the eyes. Powered with a 12 MP main camera, enjoy taking pictures with friends and family. With a built-in rechargeable lithium-ion battery and equipped with the MagSafe wireless charging, you can charge your phone quickly up to 50 % in just half an hour by using a 20 W adapter. This phone is loaded with a horde of exciting features such as Siri, face ID, barometer, ambient light sensors etc., and is also resistant to dust and water as it is IP68 rated.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB-C to Lightning Cable, Documentation",
            modelnumber: "MPVN3HN/A",
            modelname: "iPhone 14",
            Color: "Purple",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2532 x 1170 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "5 Core",
            displaytype: "Super Retina XDR Display",
            others:
              "HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 20,00,000:1, Max Brightness: 800 nits, Peak Brightness: 1,200 nits, Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 16",
            processorbrand: "Apple",
            processortype: "A15 Bionic Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "12MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "5X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            // wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3279 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 (Yellow, 128 GB)",
      highlights:
        "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
      pic: img8,
      price: "72,999",
      mrp: "79,900",
      offer: "8% off",
      emi: "No cost EMI starting from ₹12,167/month",
      description:
        "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MTP03HN/A",
            modelname: "iPhone 15",
            Color: "Yellow",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2556 x 1179 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "5 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A16 Bionic Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "10X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 13 (Starlight, 128 GB)",
      highlights:
        "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 12MP + 12MP | 12MP Front Camera A15 Bionic Chip Processor",
      pic: img9,
      price: "52,999",
      mrp: "59,900",
      offer: "11% off",
      emi: "No cost EMI starting from ₹8,834/month",
      description:
        "iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.",
      specifications: [
        {
          general: {
            inbox: "iPhone, USB-C to Lightning Cable, Documentation",
            modelnumber: "MLPG3HN/A",
            modelname: "iPhone 13",
            Color: "Starlight",
            browsetype: "Smartphones",
            sim: "Dual Sim",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound:
              "Dolby Digital (AC‑3), Dolby Digital Plus (E‑AC‑3), Dolby Atmos and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Spatial Audio Playback",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2532 x 1170 Pixels",
            resolutiontype: "Super Retina XDR Display",
            // GPU: "5 Core",
            displaytype: "Super Retina XDR Display",
            others:
              "Super Retina XDR Display, 6.1‑inch (Diagonal) All‑screen OLED Display, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, 20,00,000:1 Contrast Ratio (Typical), 800 nits max Brightness (Typical), 1,200 nits max Brightness (HDR), Fingerprint-resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 15",
            processorbrand: "Apple",
            processortype: "A15 Bionic Chip",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "12MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "4K Video Recording (at 24 fps, 25 fps, 30 fps or 60 fps), 1080p HD Video Recording (at 25 fps, 30 fps or 60 fps), 720p HD Video Recording (at 30 fps), Slow‑motion Video Support: Rear Camera (1080p at 120 fps or 240 fps), Front Camera (1080p at 120 fps)",
            digitalzoom:
              "Photo: Digital Zoom Upto 5x, Video: Digital Zoom Upto 3x",
            framerate: "24 fps, 25 fps, 30 fps, 60 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
            CallWaitHold: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            PreinstalledBrowser: "Safari",
            bluetooth: "Yes",
            bluetoothver: "v5.0",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax) with 2x2 MIMO",
            hotspot: "Yes",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, Three‑axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
            GPSType: "Built-in GPS, GLONASS, Galileo, QZSS and BeiDou",
          },
          battery: {
            batterycap: "3240 mAh",
          },
          warranty: {
            warranty: "Brand Warranty for 1 Year",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 13 (Pink, 128 GB)",
      highlights:
        "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 12MP + 12MP | 12MP Front Camera A15 Bionic Chip Processor",
      pic: img10,
      price: "52,999",
      mrp: "59,900",
      offer: "11% off",
      emi: "No cost EMI starting from ₹8,834/month",
      description:
        "iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.",
      specifications: [
        {
          general: {
            inbox: "iPhone, USB-C to Lightning Cable, Documentation",
            modelnumber: "MLPG3HN/A",
            modelname: "iPhone 13",
            Color: "Pink",
            browsetype: "Smartphones",
            sim: "Dual Sim",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound:
              "Dolby Digital (AC‑3), Dolby Digital Plus (E‑AC‑3), Dolby Atmos and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Spatial Audio Playback",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2532 x 1170 Pixels",
            resolutiontype: "Super Retina XDR Display",
            // GPU: "5 Core",
            displaytype: "Super Retina XDR Display",
            others:
              "Super Retina XDR Display, 6.1‑inch (Diagonal) All‑screen OLED Display, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, 20,00,000:1 Contrast Ratio (Typical), 800 nits max Brightness (Typical), 1,200 nits max Brightness (HDR), Fingerprint-resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 15",
            processorbrand: "Apple",
            processortype: "A15 Bionic Chip",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "12MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "4K Video Recording (at 24 fps, 25 fps, 30 fps or 60 fps), 1080p HD Video Recording (at 25 fps, 30 fps or 60 fps), 720p HD Video Recording (at 30 fps), Slow‑motion Video Support: Rear Camera (1080p at 120 fps or 240 fps), Front Camera (1080p at 120 fps)",
            digitalzoom:
              "Photo: Digital Zoom Upto 5x, Video: Digital Zoom Upto 3x",
            framerate: "24 fps, 25 fps, 30 fps, 60 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
            CallWaitHold: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            PreinstalledBrowser: "Safari",
            bluetooth: "Yes",
            bluetoothver: "v5.0",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax) with 2x2 MIMO",
            hotspot: "Yes",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, Three‑axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
            GPSType: "Built-in GPS, GLONASS, Galileo, QZSS and BeiDou",
          },
          battery: {
            batterycap: "3240 mAh",
          },
          warranty: {
            warranty: "Brand Warranty for 1 Year",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 13 (Midnight, 128 GB)",
      highlights:
        "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 12MP + 12MP | 12MP Front Camera A15 Bionic Chip Processor",
      pic: img11,
      price: "52,999",
      mrp: "59,900",
      offer: "11% off",
      emi: "No cost EMI starting from ₹8,834/month",
      description:
        "iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.",
      specifications: [
        {
          general: {
            inbox: "iPhone, USB-C to Lightning Cable, Documentation",
            modelnumber: "MLPG3HN/A",
            modelname: "iPhone 13",
            Color: "Midnight",
            browsetype: "Smartphones",
            sim: "Dual Sim",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound:
              "Dolby Digital (AC‑3), Dolby Digital Plus (E‑AC‑3), Dolby Atmos and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Spatial Audio Playback",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2532 x 1170 Pixels",
            resolutiontype: "Super Retina XDR Display",
            // GPU: "5 Core",
            displaytype: "Super Retina XDR Display",
            others:
              "Super Retina XDR Display, 6.1‑inch (Diagonal) All‑screen OLED Display, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, 20,00,000:1 Contrast Ratio (Typical), 800 nits max Brightness (Typical), 1,200 nits max Brightness (HDR), Fingerprint-resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 15",
            processorbrand: "Apple",
            processortype: "A15 Bionic Chip",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "12MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "4K Video Recording (at 24 fps, 25 fps, 30 fps or 60 fps), 1080p HD Video Recording (at 25 fps, 30 fps or 60 fps), 720p HD Video Recording (at 30 fps), Slow‑motion Video Support: Rear Camera (1080p at 120 fps or 240 fps), Front Camera (1080p at 120 fps)",
            digitalzoom:
              "Photo: Digital Zoom Upto 5x, Video: Digital Zoom Upto 3x",
            framerate: "24 fps, 25 fps, 30 fps, 60 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
            CallWaitHold: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            PreinstalledBrowser: "Safari",
            bluetooth: "Yes",
            bluetoothver: "v5.0",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax) with 2x2 MIMO",
            hotspot: "Yes",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, Three‑axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
            GPSType: "Built-in GPS, GLONASS, Galileo, QZSS and BeiDou",
          },
          battery: {
            batterycap: "3240 mAh",
          },
          warranty: {
            warranty: "Brand Warranty for 1 Year",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 13 (Green, 128 GB)",
      highlights:
        "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 12MP + 12MP | 12MP Front Camera A15 Bionic Chip Processor",
      pic: img12,
      price: "52,999",
      mrp: "59,900",
      offer: "11% off",
      emi: "No cost EMI starting from ₹8,834/month",
      description:
        "iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.",
      specifications: [
        {
          general: {
            inbox: "iPhone, USB-C to Lightning Cable, Documentation",
            modelnumber: "MLPG3HN/A",
            modelname: "iPhone 13",
            Color: "Green",
            browsetype: "Smartphones",
            sim: "Dual Sim",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound:
              "Dolby Digital (AC‑3), Dolby Digital Plus (E‑AC‑3), Dolby Atmos and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Spatial Audio Playback",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2532 x 1170 Pixels",
            resolutiontype: "Super Retina XDR Display",
            // GPU: "5 Core",
            displaytype: "Super Retina XDR Display",
            others:
              "Super Retina XDR Display, 6.1‑inch (Diagonal) All‑screen OLED Display, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, 20,00,000:1 Contrast Ratio (Typical), 800 nits max Brightness (Typical), 1,200 nits max Brightness (HDR), Fingerprint-resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 15",
            processorbrand: "Apple",
            processortype: "A15 Bionic Chip",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "12MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "4K Video Recording (at 24 fps, 25 fps, 30 fps or 60 fps), 1080p HD Video Recording (at 25 fps, 30 fps or 60 fps), 720p HD Video Recording (at 30 fps), Slow‑motion Video Support: Rear Camera (1080p at 120 fps or 240 fps), Front Camera (1080p at 120 fps)",
            digitalzoom:
              "Photo: Digital Zoom Upto 5x, Video: Digital Zoom Upto 3x",
            framerate: "24 fps, 25 fps, 30 fps, 60 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
            CallWaitHold: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            PreinstalledBrowser: "Safari",
            bluetooth: "Yes",
            bluetoothver: "v5.0",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax) with 2x2 MIMO",
            hotspot: "Yes",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, Three‑axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
            GPSType: "Built-in GPS, GLONASS, Galileo, QZSS and BeiDou",
          },
          battery: {
            batterycap: "3240 mAh",
          },
          warranty: {
            warranty: "Brand Warranty for 1 Year",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 Plus (Black, 128 GB)",
      highlights:
        "128 GB ROM 17.02 cm | (6.7 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
      pic: img1,
      price: "82,999",
      mrp: "89,900",
      offer: "7% off",
      emi: "No cost EMI starting from ₹13,834/month",
      description:
        "Experience the iPhone 15 Plus– your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 Plus– innovation at your fingertips. Goodbye cable clutter, hello convenience.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MU0Y3HN/A",
            modelname: "iPhone 15 Plus",
            Color: "Black",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "17.02 cm (6.7 inch)",
            resolution: "2796 x 1290 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "5 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A16 Bionic Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "10X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 Plus (Blue, 128 GB)",
      highlights:
        "128 GB ROM 17.02 cm | (6.7 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
      pic: img4,
      price: "82,999",
      mrp: "89,900",
      offer: "7% off",
      emi: "No cost EMI starting from ₹13,834/month",
      description:
        "Experience the iPhone 15 Plus– your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 Plus– innovation at your fingertips. Goodbye cable clutter, hello convenience.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MU0Y3HN/A",
            modelname: "iPhone 15 Plus",
            Color: "Blue",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "17.02 cm (6.7 inch)",
            resolution: "2796 x 1290 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "5 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A16 Bionic Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "10X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 Plus (Green, 128 GB)",
      highlights:
        "128 GB ROM 17.02 cm | (6.7 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
      pic: img3,
      price: "82,999",
      mrp: "89,900",
      offer: "7% off",
      emi: "No cost EMI starting from ₹13,834/month",
      description:
        "Experience the iPhone 15 Plus– your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 Plus– innovation at your fingertips. Goodbye cable clutter, hello convenience.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MU0Y3HN/A",
            modelname: "iPhone 15 Plus",
            Color: "Green",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "17.02 cm (6.7 inch)",
            resolution: "2796 x 1290 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "5 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A16 Bionic Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "10X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 Plus (Pink, 128 GB)",
      highlights:
        "128 GB ROM 17.02 cm | (6.7 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
      pic: img10,
      price: "82,999",
      mrp: "89,900",
      offer: "7% off",
      emi: "No cost EMI starting from ₹13,834/month",
      description:
        "Experience the iPhone 15 Plus– your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 Plus– innovation at your fingertips. Goodbye cable clutter, hello convenience.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MU0Y3HN/A",
            modelname: "iPhone 15 Plus",
            Color: "Pink",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "17.02 cm (6.7 inch)",
            resolution: "2796 x 1290 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "5 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A16 Bionic Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "10X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 Plus (Yellow, 128 GB)",
      highlights:
        "128 GB ROM 17.02 cm | (6.7 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
      pic: img8,
      price: "82,999",
      mrp: "89,900",
      offer: "7% off",
      emi: "No cost EMI starting from ₹13,834/month",
      description:
        "Experience the iPhone 15 Plus– your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 Plus– innovation at your fingertips. Goodbye cable clutter, hello convenience.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MU0Y3HN/A",
            modelname: "iPhone 15 Plus",
            Color: "Yellow",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "17.02 cm (6.7 inch)",
            resolution: "2796 x 1290 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "5 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A16 Bionic Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "10X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 12 (Black, 64 GB)",
      highlights:
        "64 GB ROM | 15.49 cm (6.1 inch) Super Retina XDR Display 12MP + 12MP | 12MP Front Camera | A14 Bionic Chip with Next Generation Neural Engine Processor",
      pic: img13,
      price: "44,999",
      mrp: "49,900",
      offer: "9% off",
      emi: "EMI starting from ₹1,583/month",
      description:
        "Dive into a world of crystal-clear visuals with the Super Retina XDR Display of this Apple iPhone 12. This beast of a smartphone packs the A14 Bionic chip to make for blazing-fast performance speeds. On top of that, its Dual-camera System, along with Night Mode, helps you click amazing pictures and selfies even when the lighting isn’t as good as you’d want it to be.",
      specifications: [
        {
          general: {
            inbox: "iPhone, USB-C to Lightning Cable, Documentation",
            modelnumber: "MGJ53HN/A",
            modelname: "iPhone 12",
            Color: "Black",
            browsetype: "Smartphones",
            sim: "Dual Sim",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2532 x 1170 Pixels",
            resolutiontype: "Super Retina XDR Display",
            // GPU: "5 Core",
            displaytype: "Super Retina XDR Display",
            others:
              "Super Retina XDR Display, 6.1 inch (Diagonal) All Screen OLED Display, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, 2000000:1 Contrast Ratio (Typical), 625 nits Max Brightness (Typical); 1200 nits Max Brightness (HDR), Fingerprint-resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "64 GB",
          },
          osprocessor: {
            os: "iOS 14",
            processorbrand: "Apple",
            processortype: "A14 Bionic Chip with Next Generation Neural Engine",
            // processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "12MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "4K, 1080P, HDR Video Recording with Dolby Vision Upto 30 fps",
            digitalzoom:
              "Photo: Digital Zoom Upto 5x, Video: Digital Zoom Upto 3x",
            framerate: "24 fps, 30 fps, 60 fps, 120 fps, 240 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
            callwaithold: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G, 3G, 2G",
            networks: "5G, 4G LTE, WCDMA, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.0",
            wifi: "Yes",
            wifiver: "Wi‑Fi 6 (802.11ax) with 2x2 MIMO",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, Three‑axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
            GPSType: "Built-in GPS, GLONASS, Galileo, QZSS and BeiDou",
          },
          battery: {
            batterycap: "2815 mAh",
          },
          warranty: {
            warranty: "Brand Warranty for 1 Year",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 12 (Purple, 64 GB)",
      highlights:
        "64 GB ROM | 15.49 cm (6.1 inch) Super Retina XDR Display 12MP + 12MP | 12MP Front Camera | A14 Bionic Chip with Next Generation Neural Engine Processor",
      pic: img16,
      price: "44,999",
      mrp: "49,900",
      offer: "9% off",
      emi: "EMI starting from ₹1,583/month",
      description:
        "Dive into a world of crystal-clear visuals with the Super Retina XDR Display of this Apple iPhone 12. This beast of a smartphone packs the A14 Bionic chip to make for blazing-fast performance speeds. On top of that, its Dual-camera System, along with Night Mode, helps you click amazing pictures and selfies even when the lighting isn’t as good as you’d want it to be.",
      specifications: [
        {
          general: {
            inbox: "iPhone, USB-C to Lightning Cable, Documentation",
            modelnumber: "MGJ53HN/A",
            modelname: "iPhone 12",
            Color: "Purple",
            browsetype: "Smartphones",
            sim: "Dual Sim",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2532 x 1170 Pixels",
            resolutiontype: "Super Retina XDR Display",
            // GPU: "5 Core",
            displaytype: "Super Retina XDR Display",
            others:
              "Super Retina XDR Display, 6.1 inch (Diagonal) All Screen OLED Display, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, 2000000:1 Contrast Ratio (Typical), 625 nits Max Brightness (Typical); 1200 nits Max Brightness (HDR), Fingerprint-resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "64 GB",
          },
          osprocessor: {
            os: "iOS 14",
            processorbrand: "Apple",
            processortype: "A14 Bionic Chip with Next Generation Neural Engine",
            // processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "12MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "4K, 1080P, HDR Video Recording with Dolby Vision Upto 30 fps",
            digitalzoom:
              "Photo: Digital Zoom Upto 5x, Video: Digital Zoom Upto 3x",
            framerate: "24 fps, 30 fps, 60 fps, 120 fps, 240 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
            callwaithold: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G, 3G, 2G",
            networks: "5G, 4G LTE, WCDMA, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.0",
            wifi: "Yes",
            wifiver: "Wi‑Fi 6 (802.11ax) with 2x2 MIMO",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, Three‑axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
            GPSType: "Built-in GPS, GLONASS, Galileo, QZSS and BeiDou",
          },
          battery: {
            batterycap: "2815 mAh",
          },
          warranty: {
            warranty: "Brand Warranty for 1 Year",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 12 (Green, 64 GB)",
      highlights:
        "64 GB ROM | 15.49 cm (6.1 inch) Super Retina XDR Display 12MP + 12MP | 12MP Front Camera | A14 Bionic Chip with Next Generation Neural Engine Processor",
      pic: img15,
      price: "44,999",
      mrp: "49,900",
      offer: "9% off",
      emi: "EMI starting from ₹1,583/month",
      description:
        "Dive into a world of crystal-clear visuals with the Super Retina XDR Display of this Apple iPhone 12. This beast of a smartphone packs the A14 Bionic chip to make for blazing-fast performance speeds. On top of that, its Dual-camera System, along with Night Mode, helps you click amazing pictures and selfies even when the lighting isn’t as good as you’d want it to be.",
      specifications: [
        {
          general: {
            inbox: "iPhone, USB-C to Lightning Cable, Documentation",
            modelnumber: "MGJ53HN/A",
            modelname: "iPhone 12",
            Color: "Green",
            browsetype: "Smartphones",
            sim: "Dual Sim",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2532 x 1170 Pixels",
            resolutiontype: "Super Retina XDR Display",
            // GPU: "5 Core",
            displaytype: "Super Retina XDR Display",
            others:
              "Super Retina XDR Display, 6.1 inch (Diagonal) All Screen OLED Display, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, 2000000:1 Contrast Ratio (Typical), 625 nits Max Brightness (Typical); 1200 nits Max Brightness (HDR), Fingerprint-resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "64 GB",
          },
          osprocessor: {
            os: "iOS 14",
            processorbrand: "Apple",
            processortype: "A14 Bionic Chip with Next Generation Neural Engine",
            // processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "12MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "4K, 1080P, HDR Video Recording with Dolby Vision Upto 30 fps",
            digitalzoom:
              "Photo: Digital Zoom Upto 5x, Video: Digital Zoom Upto 3x",
            framerate: "24 fps, 30 fps, 60 fps, 120 fps, 240 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
            callwaithold: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G, 3G, 2G",
            networks: "5G, 4G LTE, WCDMA, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.0",
            wifi: "Yes",
            wifiver: "Wi‑Fi 6 (802.11ax) with 2x2 MIMO",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, Three‑axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
            GPSType: "Built-in GPS, GLONASS, Galileo, QZSS and BeiDou",
          },
          battery: {
            batterycap: "2815 mAh",
          },
          warranty: {
            warranty: "Brand Warranty for 1 Year",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 12 (Blue, 64 GB)",
      highlights:
        "64 GB ROM | 15.49 cm (6.1 inch) Super Retina XDR Display 12MP + 12MP | 12MP Front Camera | A14 Bionic Chip with Next Generation Neural Engine Processor",
      pic: img14,
      price: "44,999",
      mrp: "49,900",
      offer: "9% off",
      emi: "EMI starting from ₹1,583/month",
      description:
        "Dive into a world of crystal-clear visuals with the Super Retina XDR Display of this Apple iPhone 12. This beast of a smartphone packs the A14 Bionic chip to make for blazing-fast performance speeds. On top of that, its Dual-camera System, along with Night Mode, helps you click amazing pictures and selfies even when the lighting isn’t as good as you’d want it to be.",
      specifications: [
        {
          general: {
            inbox: "iPhone, USB-C to Lightning Cable, Documentation",
            modelnumber: "MGJ53HN/A",
            modelname: "iPhone 12",
            Color: "Blue",
            browsetype: "Smartphones",
            sim: "Dual Sim",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2532 x 1170 Pixels",
            resolutiontype: "Super Retina XDR Display",
            // GPU: "5 Core",
            displaytype: "Super Retina XDR Display",
            others:
              "Super Retina XDR Display, 6.1 inch (Diagonal) All Screen OLED Display, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, 2000000:1 Contrast Ratio (Typical), 625 nits Max Brightness (Typical); 1200 nits Max Brightness (HDR), Fingerprint-resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "64 GB",
          },
          osprocessor: {
            os: "iOS 14",
            processorbrand: "Apple",
            processortype: "A14 Bionic Chip with Next Generation Neural Engine",
            // processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "12MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "4K, 1080P, HDR Video Recording with Dolby Vision Upto 30 fps",
            digitalzoom:
              "Photo: Digital Zoom Upto 5x, Video: Digital Zoom Upto 3x",
            framerate: "24 fps, 30 fps, 60 fps, 120 fps, 240 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
            callwaithold: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G, 3G, 2G",
            networks: "5G, 4G LTE, WCDMA, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.0",
            wifi: "Yes",
            wifiver: "Wi‑Fi 6 (802.11ax) with 2x2 MIMO",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, Three‑axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
            GPSType: "Built-in GPS, GLONASS, Galileo, QZSS and BeiDou",
          },
          battery: {
            batterycap: "2815 mAh",
          },
          warranty: {
            warranty: "Brand Warranty for 1 Year",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 12 (White, 64 GB)",
      highlights:
        "64 GB ROM | 15.49 cm (6.1 inch) Super Retina XDR Display 12MP + 12MP | 12MP Front Camera | A14 Bionic Chip with Next Generation Neural Engine Processor",
      pic: img17,
      price: "44,999",
      mrp: "49,900",
      offer: "9% off",
      emi: "EMI starting from ₹1,583/month",
      description:
        "Dive into a world of crystal-clear visuals with the Super Retina XDR Display of this Apple iPhone 12. This beast of a smartphone packs the A14 Bionic chip to make for blazing-fast performance speeds. On top of that, its Dual-camera System, along with Night Mode, helps you click amazing pictures and selfies even when the lighting isn’t as good as you’d want it to be.",
      specifications: [
        {
          general: {
            inbox: "iPhone, USB-C to Lightning Cable, Documentation",
            modelnumber: "MGJ53HN/A",
            modelname: "iPhone 12",
            Color: "White",
            browsetype: "Smartphones",
            sim: "Dual Sim",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2532 x 1170 Pixels",
            resolutiontype: "Super Retina XDR Display",
            // GPU: "5 Core",
            displaytype: "Super Retina XDR Display",
            others:
              "Super Retina XDR Display, 6.1 inch (Diagonal) All Screen OLED Display, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, 2000000:1 Contrast Ratio (Typical), 625 nits Max Brightness (Typical); 1200 nits Max Brightness (HDR), Fingerprint-resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "64 GB",
          },
          osprocessor: {
            os: "iOS 14",
            processorbrand: "Apple",
            processortype: "A14 Bionic Chip with Next Generation Neural Engine",
            // processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "12MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "4K, 1080P, HDR Video Recording with Dolby Vision Upto 30 fps",
            digitalzoom:
              "Photo: Digital Zoom Upto 5x, Video: Digital Zoom Upto 3x",
            framerate: "24 fps, 30 fps, 60 fps, 120 fps, 240 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
            callwaithold: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G, 3G, 2G",
            networks: "5G, 4G LTE, WCDMA, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.0",
            wifi: "Yes",
            wifiver: "Wi‑Fi 6 (802.11ax) with 2x2 MIMO",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, Three‑axis Gyro, Accelerometer, Proximity Sensor, Ambient Light Sensor",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
            GPSType: "Built-in GPS, GLONASS, Galileo, QZSS and BeiDou",
          },
          battery: {
            batterycap: "2815 mAh",
          },
          warranty: {
            warranty: "Brand Warranty for 1 Year",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 Pro (Natural Titanium, 128 GB)",
      highlights:
        "128 GB ROM | 15.49 cm (6.1 inch) Super Retina XDR Display | 48MP + 12MP + 12MP | 12MP Front Camera | A17 Pro Chip, 6 Core Processor Processor",
      pic: img18,
      price: "1,27,990",
      mrp: "1,34,900",
      offer: "5% off",
      emi: "No cost EMI starting from ₹21,332/month",
      description:
        "iPhone 15 Pro, a titanium marvel, boasts an aerospace-grade build, making it the lightest Pro model ever. The A17 Pro Chip marks a historic leap in Apple GPUs, delivering unparalleled graphics performance and immersive gaming experiences. The camera system shines with a 48MP Main camera, offering remarkable detail and automatic portrait enhancements. Convenience is key with the Action button for quick tasks and Focus filters. Plus, it's USB 3 compatible, revolutionizing data transfer speeds. This iPhone even shares its charging cable with your Mac or iPad. Embrace innovation, cut cable clutter, and elevate your mobile experience with the iPhone 15 Pro.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MTUX3HN/A",
            modelname: "iPhone 15 Pro",
            Color: "Natural Titanium",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2556 x 1179 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "6 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, Always-On Display, ProMotion Technology with Adaptive Refresh Rates Upto 120Hz, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical); 1,600 nits Peak Brightness (HDR); 2,000 nits Peak Brightness (Outdoor), Fingerprint-Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A17 pro Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "15X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, LiDAR Scanner, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 Pro (Black Titanium, 128 GB)",
      highlights:
        "128 GB ROM | 15.49 cm (6.1 inch) Super Retina XDR Display | 48MP + 12MP + 12MP | 12MP Front Camera | A17 Pro Chip, 6 Core Processor Processor",
      pic: img19,
      price: "1,27,990",
      mrp: "1,34,900",
      offer: "5% off",
      emi: "No cost EMI starting from ₹21,332/month",
      description:
        "iPhone 15 Pro, a titanium marvel, boasts an aerospace-grade build, making it the lightest Pro model ever. The A17 Pro Chip marks a historic leap in Apple GPUs, delivering unparalleled graphics performance and immersive gaming experiences. The camera system shines with a 48MP Main camera, offering remarkable detail and automatic portrait enhancements. Convenience is key with the Action button for quick tasks and Focus filters. Plus, it's USB 3 compatible, revolutionizing data transfer speeds. This iPhone even shares its charging cable with your Mac or iPad. Embrace innovation, cut cable clutter, and elevate your mobile experience with the iPhone 15 Pro.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MTUX3HN/A",
            modelname: "iPhone 15 Pro",
            Color: "Black Titanium",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2556 x 1179 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "6 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, Always-On Display, ProMotion Technology with Adaptive Refresh Rates Upto 120Hz, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical); 1,600 nits Peak Brightness (HDR); 2,000 nits Peak Brightness (Outdoor), Fingerprint-Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A17 pro Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "15X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, LiDAR Scanner, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 Pro (Blue Titanium, 128 GB)",
      highlights:
        "128 GB ROM | 15.49 cm (6.1 inch) Super Retina XDR Display | 48MP + 12MP + 12MP | 12MP Front Camera | A17 Pro Chip, 6 Core Processor Processor",
      pic: img20,
      price: "1,27,990",
      mrp: "1,34,900",
      offer: "5% off",
      emi: "No cost EMI starting from ₹21,332/month",
      description:
        "iPhone 15 Pro, a titanium marvel, boasts an aerospace-grade build, making it the lightest Pro model ever. The A17 Pro Chip marks a historic leap in Apple GPUs, delivering unparalleled graphics performance and immersive gaming experiences. The camera system shines with a 48MP Main camera, offering remarkable detail and automatic portrait enhancements. Convenience is key with the Action button for quick tasks and Focus filters. Plus, it's USB 3 compatible, revolutionizing data transfer speeds. This iPhone even shares its charging cable with your Mac or iPad. Embrace innovation, cut cable clutter, and elevate your mobile experience with the iPhone 15 Pro.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MTUX3HN/A",
            modelname: "iPhone 15 Pro",
            Color: "Blue Titanium",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2556 x 1179 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "6 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, Always-On Display, ProMotion Technology with Adaptive Refresh Rates Upto 120Hz, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical); 1,600 nits Peak Brightness (HDR); 2,000 nits Peak Brightness (Outdoor), Fingerprint-Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A17 pro Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "15X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, LiDAR Scanner, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 Pro (White Titanium, 128 GB)",
      highlights:
        "128 GB ROM | 15.49 cm (6.1 inch) Super Retina XDR Display | 48MP + 12MP + 12MP | 12MP Front Camera | A17 Pro Chip, 6 Core Processor Processor",
      pic: img21,
      price: "1,27,990",
      mrp: "1,34,900",
      offer: "5% off",
      emi: "No cost EMI starting from ₹21,332/month",
      description:
        "iPhone 15 Pro, a titanium marvel, boasts an aerospace-grade build, making it the lightest Pro model ever. The A17 Pro Chip marks a historic leap in Apple GPUs, delivering unparalleled graphics performance and immersive gaming experiences. The camera system shines with a 48MP Main camera, offering remarkable detail and automatic portrait enhancements. Convenience is key with the Action button for quick tasks and Focus filters. Plus, it's USB 3 compatible, revolutionizing data transfer speeds. This iPhone even shares its charging cable with your Mac or iPad. Embrace innovation, cut cable clutter, and elevate your mobile experience with the iPhone 15 Pro.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MTUX3HN/A",
            modelname: "iPhone 15 Pro",
            Color: "white Titanium",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2556 x 1179 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "6 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, Always-On Display, ProMotion Technology with Adaptive Refresh Rates Upto 120Hz, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical); 1,600 nits Peak Brightness (HDR); 2,000 nits Peak Brightness (Outdoor), Fingerprint-Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A17 pro Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "15X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, LiDAR Scanner, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 Pro (Natural Titanium, 256 GB)",
      highlights:
        "128 GB ROM | 15.49 cm (6.1 inch) Super Retina XDR Display | 48MP + 12MP + 12MP | 12MP Front Camera | A17 Pro Chip, 6 Core Processor Processor",
      pic: img18,
      price: "1,37,990",
      mrp: "1,44,900",
      offer: "4% off",
      emi: "No cost EMI starting from ₹21,332/month",
      description:
        "iPhone 15 Pro, a titanium marvel, boasts an aerospace-grade build, making it the lightest Pro model ever. The A17 Pro Chip marks a historic leap in Apple GPUs, delivering unparalleled graphics performance and immersive gaming experiences. The camera system shines with a 48MP Main camera, offering remarkable detail and automatic portrait enhancements. Convenience is key with the Action button for quick tasks and Focus filters. Plus, it's USB 3 compatible, revolutionizing data transfer speeds. This iPhone even shares its charging cable with your Mac or iPad. Embrace innovation, cut cable clutter, and elevate your mobile experience with the iPhone 15 Pro.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MTUX3HN/A",
            modelname: "iPhone 15 Pro",
            Color: "Natural Titanium",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2556 x 1179 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "6 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, Always-On Display, ProMotion Technology with Adaptive Refresh Rates Upto 120Hz, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical); 1,600 nits Peak Brightness (HDR); 2,000 nits Peak Brightness (Outdoor), Fingerprint-Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "256 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A17 pro Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "15X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, LiDAR Scanner, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },

    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 Pro (White Titanium, 512 GB)",
      highlights:
        "128 GB ROM | 15.49 cm (6.1 inch) Super Retina XDR Display | 48MP + 12MP + 12MP | 12MP Front Camera | A17 Pro Chip, 6 Core Processor Processor",
      pic: img21,
      price: "1,58,990",
      mrp: "1,64,900",
      offer: "3% off",
      emi: "No cost EMI starting from ₹21,332/month",
      description:
        "iPhone 15 Pro, a titanium marvel, boasts an aerospace-grade build, making it the lightest Pro model ever. The A17 Pro Chip marks a historic leap in Apple GPUs, delivering unparalleled graphics performance and immersive gaming experiences. The camera system shines with a 48MP Main camera, offering remarkable detail and automatic portrait enhancements. Convenience is key with the Action button for quick tasks and Focus filters. Plus, it's USB 3 compatible, revolutionizing data transfer speeds. This iPhone even shares its charging cable with your Mac or iPad. Embrace innovation, cut cable clutter, and elevate your mobile experience with the iPhone 15 Pro.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MTUX3HN/A",
            modelname: "iPhone 15 Pro",
            Color: "Natural Titanium",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2556 x 1179 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "6 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, Always-On Display, ProMotion Technology with Adaptive Refresh Rates Upto 120Hz, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical); 1,600 nits Peak Brightness (HDR); 2,000 nits Peak Brightness (Outdoor), Fingerprint-Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "512 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A17 pro Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "15X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, LiDAR Scanner, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },
    {
      category: "smartphone",
      brand: "apple",
      model: "Apple iPhone 15 (Black, 128 GB)",
      highlights:
        "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
      pic: img1,
      price: "66,999",
      mrp: "79,900",
      offer: "17% off",
      emi: "emi starting from ₹2,356/month",
      description:
        "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
      specifications: [
        {
          general: {
            inbox: "Handset, USB C Charge Cable (1m), Documentation",
            modelnumber: "MTP03HN/A",
            modelname: "iPhone 15",
            Color: "Black",
            browsetype: "Smartphones",
            sim: "Dual Sim(Nano + eSIM)",
            hybridsimslot: "No",
            touchscreen: "Yes",
            otg: "No",
            sound: "Built-in Stereo Speaker",
          },
          display: {
            displaysize: "15.49 cm (6.1 inch)",
            resolution: "2556 x 1179 Pixels",
            resolutiontype: "Super Retina XDR Display",
            GPU: "5 Core",
            displaytype: "All Screen OLED Display",
            others:
              "Dynamic Island, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 2,000,000:1 (Typical), 1,000 nits Max Brightness (Typical), 1,600 nits Peak Brightness (HDR), 2,000 nits Peak Brightness (Outdoor), Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
          },
          memory: {
            internal: "128 GB",
          },
          osprocessor: {
            os: "iOS 17",
            processorbrand: "Apple",
            processortype: "A16 Bionic Chip, 6 Core Processor",
            processorcore: "Hexa Core",
          },
          camera: {
            isprimarycamera: "Yes",
            primarycamera: "48MP + 12MP",
            OpticalZoom: " Yes",
            issecondarycamera: "Yes",
            secondarycamera: "12MP Front Camera",
            flash: "Rear: True Tone Flash | Front: Retina Flash",
            hdrec: "Yes",
            fullhdrec: "Yes",
            videorec: "Yes",
            videorecoresolution:
              "Rear Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps), 720P (at 30 fps) | Front Camera: 4K (at 24 fps/ 25 fps/ 30 fps/ 60 fps), 1080P (at 120 fps/60 fps/30 fps/ 25 fps)",
            digitalzoom: "10X",
            framerate: "240 fps, 120 fps, 60 fps, 30 fps, 25 fps, 24 fps",
            dualcamera: "Primary Camera",
          },
          call: {
            videocall: "Yes",
            speakerphone: "Yes",
          },
          connectivity: {
            networktype: "5G, 4G VOLTE, 4G, 3G, 2G",
            networks: "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
            internet: "5G, 4G, 3G, Wi-Fi, EDGE",
            bluetooth: "Yes",
            bluetoothver: "v5.3",
            wifi: "Yes",
            wifiver: "Wi-Fi 6 (802.11ax)",
            nfc: "Yes",
            map: "Google Maps",
            gps: "Yes",
          },
          other: {
            smartphone: "Yes",
            simsize: "Nano Sim + eSIM",
            ppi: "460 PPI",
            sensors:
              "Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors",
            languages:
              "English (Australia, UK, US), Chinese (Simplified, Traditional, Traditional - Hong Kong), French (Canada, France), German, Italian, Japanese, Korean, Spanish (Latin America, Spain), Arabic, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Kazakh, Malay, Norwegian, Polish, Portuguese (Brazil, Portugal), Romanian, Russian, Slovak, Swedish, Thai, Turkish, Ukrainian, Vietnamese",
            browser: "Safari",
          },
          battery: {
            batterycap: "3349 mAh",
          },
          warranty: {
            warranty:
              " 1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            domesticwarranty: "1 Year",
          },
        },
      ],
      url: "/Apple",
    },
  ];

  const models = [
    {
      model: "Apple iphone 15",
    },
    {
      model: "Apple iphone 14",
    },
    {
      model: "Apple iphone 13",
    },
    {
      model: "Apple iphone 12",
    },
  ];

  useEffect(() => {
    return setDealcardData(apple);
  }, []);

  return <ProductListCase ShowcaseData={dealcardData} models={models} />;
};

export default AppleDatas;
