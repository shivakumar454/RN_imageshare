##   Image Sharing App (React Native + Expo)

This is a simple React Native app built with Expo that allows users to **download an image from a URL** and **share it using native sharing options** like WhatsApp, Email, etc.

###   Features

- Downloads an image file from the web using Expo FileSystem
- Shares the downloaded file using Expo Sharing
- Uses `react-native-paper` for clean and modern UI
- Ensures compatibility with safe areas using `react-native-safe-area-context`

###   Tech Stack

- **React Native**
- **Expo FileSystem**
- **Expo Sharing**
- **React Native Paper**
- **Safe Area Context**

###   How It Works

1. User clicks the **"Share"** button.
2. App downloads the image from the provided URL to the device's cache directory.
3. Checks if file sharing is supported on the device.
4. If supported, the system’s native sharing options will appear.
5. If not supported, a permission alert is displayed.

###   Installation & Run

```bash
git clone https://github.com/your-username/ImageShareApp.git
cd ImageShareApp
npm install
npx expo start
