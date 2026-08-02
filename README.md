# 📿 Daily Catholic Rosary Calendar Sync 🗓️✨

An automated, lightweight **Google Apps Script** ⚙️ that determines today's Rosary mysteries, generates full descriptions for all 5 decades, and creates an **All-Day Event** in your Google Calendar 📅—keeping your prayer life organized and on track! ✝️❤️

---

## 🌟 Awesome Features 🚀

* 📿 **Smart Mystery Detection:** Automatically assigns Joyful 😇, Sorrowful ✝️, Glorious 👑, or Luminous 💡 Mysteries based on the day of the week!
* 🛑 **Anti-Duplicate Shield:** Scans your calendar across the full 24-hour day before adding an event so you never get double-booked! 🛡️
* 🌅 **All-Day Calendar Display:** Prominently displays the daily mysteries across the top of your calendar as an All-Day event for easy visibility! 🗓️
* 🔔 **Custom Popup Reminders:** Includes built-in popup notifications so you get alerted on desktop and smartphone! 📱
* 📝 **Full Meditation Notes:** Detailed summaries of all 5 decades are pasted right into the event description 📖!
* ⚡ **Zero External Dependencies:** Built natively for Google Apps Script with zero setup friction! 🎯

---

## 📅 Weekly Mystery Schedule 🗓️

| Day 📆 | Mystery Set 📿 | Key Highlights ✨ |
| :--- | :--- | :--- |
| **Mon & Sat** 💛 | **Joyful Mysteries** 😇 | Annunciation 🕊️, Nativity 👶, Finding in the Temple 🏛️ |
| **Tue & Fri** ❤️ | **Sorrowful Mysteries** ✝️ | Agony in the Garden 🌿, Carrying the Cross ☦️, Crucifixion ✝️ |
| **Wed & Sun** 💙 | **Glorious Mysteries** 👑 | Resurrection 🌅, Pentecost 🔥, Coronation of Mary 👸 |
| **Thursday** 🤍 | **Luminous Mysteries** 💡 | Baptism in the Jordan 🌊, Wedding at Cana 🍷, Eucharist 🍞 |

---

### 📸 Successful Execution Log
![Apps Script Execution Log](execution-log.png)

---

## 🚀 Quick Setup Guide 🛠️

### Step 1: Open Google Apps Script 💻
1. Go to **[script.google.com](https://script.google.com)** 🌐.
2. Click **New Project** ➕.
3. Paste the code from `Rosary.gs` into the editor 📋.

### Step 2: Choose Your Calendar 🗓️
By default, the script adds events to your primary calendar:
```javascript
var calendarId = 'primary'; // Uses your primary Google Calendar
```
*(If you want to use a dedicated secondary calendar, replace `'primary'` with your specific Calendar ID).*

### Step 3: Run & Authorize 🔑
1. Click **Run** ▶️ at the top of the Apps Script editor.
2. Follow Google's authorization prompt to grant permission for calendar management.

### Step 4: Set Up Daily Trigger ⏰
1. Click **Triggers** (⏰ clock icon) in the left sidebar.
2. Click **+ Add Trigger** in the bottom right corner.
3. Select `addDailyRosaryToCalendar` as the function to run.
4. Set event source to **Time-driven** $\rightarrow$ **Day timer** $\rightarrow$ Choose **Midnight to 1:00 AM** (or early morning).
5. Click **Save** 💾!
