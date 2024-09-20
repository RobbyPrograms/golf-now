# Golf Tee Times App

This project consists of a backend server and separate projects for iOS, Android, and web applications. Each platform interacts with the backend server to fetch and display golf tee times.

## File Structure

### Backend Server

```plaintext
golf-tee-times-backend/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── teeTimesController.js
│   ├── routes/
│   │   └── teeTimesRoutes.js
│   ├── services/
│   │   └── teeTimesService.js
│   ├── utils/
│   │   └── scraper.js
│   ├── app.js
│   └── server.js
├── .gitignore
├── package.json
└── README.md

iOS App (Swift)

golf-tee-times-ios/
├── GolfTeeTimes/
│   ├── AppDelegate.swift
│   ├── SceneDelegate.swift
│   ├── ViewController.swift
│   ├── Models/
│   │   └── TeeTime.swift
│   ├── Services/
│   │   └── TeeTimeService.swift
│   ├── Views/
│   │   └── TeeTimeView.swift
│   └── Info.plist
├── GolfTeeTimes.xcodeproj/
├── .gitignore
└── README.md

Android App (Kotlin)

golf-tee-times-android/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/golfteetimes/
│   │   │   │   ├── MainActivity.kt
│   │   │   │   ├── models/
│   │   │   │   │   └── TeeTime.kt
│   │   │   │   ├── services/
│   │   │   │   │   └── TeeTimeService.kt
│   │   │   │   ├── views/
│   │   │   │   │   └── TeeTimeView.kt
│   │   │   ├── res/
│   │   │   │   ├── layout/
│   │   │   │   │   └── activity_main.xml
│   │   │   │   ├── values/
│   │   │   │   │   └── strings.xml
│   │   │   └── AndroidManifest.xml
├── build.gradle
├── .gitignore
└── README.md

Web App (React)

golf-tee-times-web/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── TeeTimeList.js
│   ├── services/
│   │   └── TeeTimeService.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── .gitignore
├── package.json
└── README.md