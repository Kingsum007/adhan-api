
# 🕌 Adhan Prayer Times API

This is a simple REST API built with **Node.js**, **Express**, and **Axios** that returns Islamic prayer times (Adhan) for a given location and date using the [AlAdhan API](https://aladhan.com/prayer-times-api).

---

## 🚀 Features

- Get **daily prayer times** dynamically based on:
  - User's **latitude and longitude**
  - System **current date**
- Clean JSON response with **Gregorian & Hijri date**, **timings**, and **location metadata**
- Lightweight and easy to deploy

---

## 📦 Installation

1. Clone or download the repository:
   ```bash
   git clone https://github.com/Kingsum007/adhan-api.git
   cd adhan-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

---

## 🌐 API Endpoint

### `GET /prayer-times`

**Description:** Returns today's prayer times based on the provided coordinates.

#### 🔧 Query Parameters:
| Parameter | Type   | Required | Description                     |
|-----------|--------|----------|---------------------------------|
| `lat`     | float  | ✅ Yes    | Latitude of the location        |
| `lon`     | float  | ✅ Yes    | Longitude of the location       |

#### ✅ Example Request:

```
GET /prayer-times?lat=34.5553&lon=69.2075
```

#### 📥 Sample Response:

```json
{
  "date": {
    "gregorian": {
      "date": "2025-07-04",
      "weekday": { "en": "Friday" },
      "month": { "en": "July", "number": 7 },
      "year": "2025"
    },
    "hijri": {
      "date": "27-12-1446",
      "weekday": { "en": "Al-Jumua" },
      "month": { "en": "Dhu al-Hijjah" },
      "year": "1446"
    }
  },
  "timings": {
    "Fajr": "03:24 (GMT)",
    "Sunrise": "04:58 (GMT)",
    "Dhuhr": "11:57 (GMT)",
    "Asr": "15:43 (GMT)",
    "Maghrib": "18:55 (GMT)",
    "Isha": "20:24 (GMT)"
  },
  "meta": {
    "latitude": 34.5553,
    "longitude": 69.2075,
    "timezone": "Asia/Kabul",
    "method": {
      "name": "Islamic Society of North America (ISNA)",
      "params": { "Fajr": 15, "Isha": 15 }
    }
  }
}
```

---

## 📍 Root Endpoint

```
GET /
```
**Response:**
```text
🕌 Welcome to the Adhan Prayer Times API. Use /prayer-times?lat=...&lon=...
```

---

## 📱 Use in Mobile Apps

To use this in your Android or Web app:
- Get user’s current latitude & longitude
- Call this API like:
```
https://yourdomain.com/prayer-times?lat=34.5553&lon=69.2075
```

---

## 📜 License

MIT License – Free to use and modify.
