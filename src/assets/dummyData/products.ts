const startDate = new Date('2020-01-01');
const endDate = new Date('2025-03-01');

function getRandomData(start: Date, end:Date) {
  return new Date(new Date('2020-01-01').getTime() + Math.random() * ( new Date('2025-1-31').getTime() - new Date('2020-01-01').getTime()))
}

export default
  {
    "data": [
      {
        "ProductId": 1,
        "ProductName": "Ballpoint Pen",
        "AvailablePieces": 322,
        "category": "Stationery",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 2,
        "ProductName": "Laptop Charger",
        "AvailablePieces": 363,
        "category": "Electronics & Accessories",
        "lastDate":getRandomData(startDate, endDate)
      },
      {
        "ProductId": 3,
        "ProductName": "Lab Coat",
        "AvailablePieces": 339,
        "category": "Lab Equipment",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 4,
        "ProductName": "Sketch Pad",
        "AvailablePieces": 274,
        "category": "Art Supplies",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 5,
        "ProductName": "DSLR Camera",
        "AvailablePieces": 56,
        "category": "Media & Tech",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 6,
        "ProductName": "Arduino Starter Kit",
        "AvailablePieces": 436,
        "category": "Educational Kits & Devices",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 7,
        "ProductName": "Football",
        "AvailablePieces": 349,
        "category": "Sports Equipment",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 8,
        "ProductName": "First Aid Kit",
        "AvailablePieces": 318,
        "category": "Health & Safety Supplies",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 9,
        "ProductName": "Sticky Notes",
        "AvailablePieces": 129,
        "category": "Stationery",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 10,
        "ProductName": "Microscopes",
        "AvailablePieces": 212,
        "category": "Lab Equipment",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 11,
        "ProductName": "Tripod",
        "AvailablePieces": 85,
        "category": "Media & Tech",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 12,
        "ProductName": "Paint Brushes",
        "AvailablePieces": 114,
        "category": "Art Supplies",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 13,
        "ProductName": "USB Flash Drive",
        "AvailablePieces": 217,
        "category": "Electronics & Accessories",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 14,
        "ProductName": "Badminton Rackets",
        "AvailablePieces": 156,
        "category": "Sports Equipment",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 15,
        "ProductName": "Hand Sanitizer",
        "AvailablePieces": 285,
        "category": "Health & Safety Supplies",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 16,
        "ProductName": "Resistance Bands",
        "AvailablePieces": 151,
        "category": "Sports Equipment",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 17,
        "ProductName": "Graph Paper Pad",
        "AvailablePieces": 256,
        "category": "Stationery",
        "lastDate":getRandomData(startDate, endDate)
      },
      {
        "ProductId": 18,
        "ProductName": "Raspberry Pi Kit",
        "AvailablePieces": 436,
        "category": "Educational Kits & Devices",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 19,
        "ProductName": "Face Masks",
        "AvailablePieces": 375,
        "category": "Health & Safety Supplies",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 20,
        "ProductName": "Acrylic Paint Set",
        "AvailablePieces": 400,
        "category": "Art Supplies",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 21,
        "ProductName": "Mechanical Pencil",
        "AvailablePieces": 174,
        "category": "Stationery",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 22,
        "ProductName": "Highlighter Set",
        "AvailablePieces": 405,
        "category": "Stationery",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 23,
        "ProductName": "Whiteboard Marker",
        "AvailablePieces": 429,
        "category": "Stationery",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 24,
        "ProductName": "Scientific Calculator",
        "AvailablePieces": 369,
        "category": "Electronics & Accessories",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 25,
        "ProductName": "Safety Goggles",
        "AvailablePieces": 66,
        "category": "Lab Equipment",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 26,
        "ProductName": "Beaker Set",
        "AvailablePieces": 33,
        "category": "Lab Equipment",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 27,
        "ProductName": "Canvas Boards",
        "AvailablePieces": 339,
        "category": "Art Supplies",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 28,
        "ProductName": "Charcoal Pencils",
        "AvailablePieces": 453,
        "category": "Art Supplies",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 29,
        "ProductName": "VR Headset",
        "AvailablePieces": 431,
        "category": "Media & Tech",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 30,
        "ProductName": "Microphone",
        "AvailablePieces": 140,
        "category": "Media & Tech",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 31,
        "ProductName": "Video Editing Software",
        "AvailablePieces": 450,
        "category": "Media & Tech",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 32,
        "ProductName": "Robotics Kit",
        "AvailablePieces": 289,
        "category": "Educational Kits & Devices",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 33,
        "ProductName": "Coding Books",
        "AvailablePieces": 206,
        "category": "Educational Kits & Devices",
        "lastDate": getRandomData(startDate, endDate)

      },
      {
        "ProductId": 34,
        "ProductName": "Learning Tablets",
        "AvailablePieces": 301,
        "category": "Educational Kits & Devices",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 35,
        "ProductName": "Yoga Mats",
        "AvailablePieces": 291,
        "category": "Sports Equipment",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 36,
        "ProductName": "Disinfectant Wipes",
        "AvailablePieces": 462,
        "category": "Health & Safety Supplies",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 37,
        "ProductName": "Spiral Notebook",
        "AvailablePieces": 231,
        "category": "Stationery",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 38,
        "ProductName": "Laptop Stand",
        "AvailablePieces": 47,
        "category": "Electronics & Accessories",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 39,
        "ProductName": "Headphones",
        "AvailablePieces": 340,
        "category": "Electronics & Accessories",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 40,
        "ProductName": "Mouse & Keyboard Combo",
        "AvailablePieces": 73,
        "category": "Electronics & Accessories",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 41,
        "ProductName": "Colored Pencils",
        "AvailablePieces": 146,
        "category": "Art Supplies",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 42,
        "ProductName": "Fountain Pen",
        "AvailablePieces": 323,
        "category": "Stationery",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 43,
        "ProductName": "Laptop Bag",
        "AvailablePieces": 32,
        "category": "Electronics & Accessories",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 44,
        "ProductName": "Power Bank",
        "AvailablePieces": 382,
        "category": "Electronics & Accessories",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 45,
        "ProductName": "Smart Board",
        "AvailablePieces": 374,
        "category": "Media & Tech",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 46,
        "ProductName": "3D Printer",
        "AvailablePieces": 303,
        "category": "Media & Tech",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 47,
        "ProductName": "Chemistry Kit",
        "AvailablePieces": 327,
        "category": "Educational Kits & Devices",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 48,
        "ProductName": "Physics Experiment Set",
        "AvailablePieces": 191,
        "category": "Educational Kits & Devices",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 49,
        "ProductName": "Gym Gloves",
        "AvailablePieces": 234,
        "category": "Sports Equipment",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 50,
        "ProductName": "Skipping Rope",
        "AvailablePieces": 167,
        "category": "Sports Equipment",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 51,
        "ProductName": "Fire Extinguisher",
        "AvailablePieces": 211,
        "category": "Health & Safety Supplies",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 52,
        "ProductName": "Protective Gloves",
        "AvailablePieces": 270,
        "category": "Health & Safety Supplies",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 53,
        "ProductName": "Poster Colors",
        "AvailablePieces": 463,
        "category": "Art Supplies",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 54,
        "ProductName": "Drawing Tablet",
        "AvailablePieces": 440,
        "category": "Media & Tech",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 55,
        "ProductName": "Bluetooth Speaker",
        "AvailablePieces": 84,
        "category": "Electronics & Accessories",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 56,
        "ProductName": "LED Desk Lamp",
        "AvailablePieces": 277,
        "category": "Electronics & Accessories",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 57,
        "ProductName": "Laser Pointer",
        "AvailablePieces": 327,
        "category": "Electronics & Accessories",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 58,
        "ProductName": "Adjustable Dumbbells",
        "AvailablePieces": 140,
        "category": "Sports Equipment",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 59,
        "ProductName": "Face Shields",
        "AvailablePieces": 472,
        "category": "Health & Safety Supplies",
        "lastDate": getRandomData(startDate, endDate)
      },
      {
        "ProductId": 60,
        "ProductName": "UV Sterilizer",
        "AvailablePieces": 272,
        "category": "Health & Safety Supplies",
        "lastDate": getRandomData(startDate, endDate)
      }
    ]
  }