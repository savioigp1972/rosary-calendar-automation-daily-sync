function addDailyRosaryToCalendar() {
  // Replace with your target Calendar ID, or use 'primary'
  var calendarId = 'primary'; 
  var calendar = CalendarApp.getCalendarById(calendarId);
  
  var today = new Date();
  var dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
  
  var mysteryData = getRosaryMystery(dayOfWeek);
  var title = "Rosary: " + mysteryData.name;
  
  // Set date boundaries for full 24-hour duplicate check today
  var dayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
  var dayEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
  
  // Check if today's Rosary event already exists to prevent duplicates
  var existingEvents = calendar.getEvents(dayStart, dayEnd, { search: "Rosary:" });
  if (existingEvents.length > 0) {
    Logger.log("Rosary event already exists for today.");
    return;
  }
  
  // Format the 5 mysteries with descriptions for the calendar notes
  var description = "Today's Rosary: " + mysteryData.name + "\n\n" +
                    "1. " + mysteryData.mysteries[0] + "\n\n" +
                    "2. " + mysteryData.mysteries[1] + "\n\n" +
                    "3. " + mysteryData.mysteries[2] + "\n\n" +
                    "4. " + mysteryData.mysteries[3] + "\n\n" +
                    "5. " + mysteryData.mysteries[4];
  
  // Create as an All-Day event
  var event = calendar.createAllDayEvent(title, today, {
    description: description
  });
  
  // Optional: Add a popup notification (e.g., 60 minutes before the day starts or custom time)
  event.addPopupReminder(60);
  
  Logger.log("Created All-Day Rosary event: " + title);
}

function getRosaryMystery(day) {
  switch (day) {
    case 1: // Monday
    case 6: // Saturday
      return {
        name: "Joyful Mysteries",
        mysteries: [
          "The Annunciation – Angel Gabriel announces to Mary that she will bear the Son of God",
          "The Visitation – Mary visits Elizabeth, who recognizes her blessedness",
          "The Nativity – Jesus is born in Bethlehem",
          "The Presentation – Mary and Joseph present Jesus in the Temple",
          "The Finding of Jesus in the Temple – Mary and Joseph find the young Jesus teaching in the Temple"
        ]
      };
    case 2: // Tuesday
    case 5: // Friday
      return {
        name: "Sorrowful Mysteries",
        mysteries: [
          "The Agony in the Garden – Jesus prays in Gethsemane",
          "The Scourging at the Pillar – Jesus is cruelly whipped",
          "The Crowning with Thorns – Jesus is mocked and crowned with thorns",
          "The Carrying of the Cross – Jesus bears the cross to Calvary",
          "The Crucifixion – Jesus is nailed to the cross and dies"
        ]
      };
    case 3: // Wednesday
    case 0: // Sunday
      return {
        name: "Glorious Mysteries",
        mysteries: [
          "The Resurrection – Jesus rises from the dead",
          "The Ascension – Jesus ascends into Heaven",
          "The Descent of the Holy Spirit – The Holy Spirit comes upon Mary and the Apostles",
          "The Assumption – Mary is taken into Heaven",
          "The Coronation – Mary is crowned Queen of Heaven and Earth"
        ]
      };
    case 4: // Thursday
      return {
        name: "Luminous Mysteries",
        mysteries: [
          "The Baptism of Jesus in the Jordan – Christ is baptized by John",
          "The Wedding at Cana – Jesus performs His first miracle",
          "The Proclamation of the Kingdom – Jesus calls to conversion and faith",
          "The Transfiguration – Christ reveals His divine glory",
          "The Institution of the Eucharist – Jesus offers His Body and Blood at the Last Supper"
        ]
      };
  }
}
