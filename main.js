const timeslot = document.getElementById("optimal-availabilities");
const addBtn = document.getElementById("add-timeslot");

const timeslotSub = document.getElementById("suboptimal-availabilities");
const addBtnSub = document.getElementById("add-subopt-timeslot");

addBtn.addEventListener("click", function() {
  const weekdays = document.createElement("div");
  weekdays.classList.add("timeslot");
  weekdays.innerHTML = `
          <button class="sub" id="deleteBtn">-</button>
          <div class="time-range">
            <input
              class="small"
              type="text"
              id="start-time"
              name="start-time"
              value="10:00"
            />
            -
            <input
              class="small"
              type="text"
              id="end-time"
              name="end-time"
              value="4:00"
            />
          </div>
          <div class="weekdays">
            <input type="checkbox" class="weekday" />
            <input type="checkbox" class="weekday" />
            <input type="checkbox" class="weekday" checked />
            <input type="checkbox" class="weekday" />
            <input type="checkbox" class="weekday" checked />
            <input type="checkbox" class="weekday" />
            <input type="checkbox" class="weekday" />
            <span class="label">s</span>
            <span class="label">m</span>
            <span class="label">t</span>
            <span class="label">w</span>
            <span class="label">t</span>
            <span class="label">f</span>
            <span class="label">s</span>
          </div>
        </div>
    `;
  timeslot.appendChild(weekdays);

  const deleteBtn = weekdays.querySelector("#deleteBtn");
  deleteBtn.addEventListener("click",
                             function() { timeslot.removeChild(weekdays); });
});

addBtnSub.addEventListener("click", function() {
  const weekdays = document.createElement("div");
  weekdays.classList.add("timeslot");
  weekdays.innerHTML = `
            <button class="sub" id="deleteBtn">-</button>
            <div class="time-range">
              <input
                class="small"
                type="text"
                id="start-time"
                name="start-time"
                value="10:00"
              />
              -
              <input
                class="small"
                type="text"
                id="end-time"
                name="end-time"
                value="4:00"
              />
            </div>
            <div class="weekdays">
              <input type="checkbox" class="weekday" />
              <input type="checkbox" class="weekday" />
              <input type="checkbox" class="weekday" checked />
              <input type="checkbox" class="weekday" />
              <input type="checkbox" class="weekday" checked />
              <input type="checkbox" class="weekday" />
              <input type="checkbox" class="weekday" />
              <span class="label">s</span>
              <span class="label">m</span>
              <span class="label">t</span>
              <span class="label">w</span>
              <span class="label">t</span>
              <span class="label">f</span>
              <span class="label">s</span>
            </div>
        </div>
    `;
  timeslotSub.appendChild(weekdays);

  const deleteBtn = weekdays.querySelector("#deleteBtn");
  deleteBtn.addEventListener("click",
                             function() { timeslotSub.removeChild(weekdays); });
});

function findMeeting() {
    var meetingLength = document.getElementById("meeting-length").value;
    var emails = document.getElementById("participant-emails").value;
    alert("Length: " + meetingLength + " minutes and emails are " + emails);
}

function saveSettings() {
    // gets the value for timezone
    var timezone = document.getElementById("time-zone").value;
    alert("timezone = " + timezone);
    
    // gets the value for special calendars
    var special_calendars = document.querySelectorAll('input[name="special-calendar"]');
    var special_calendars_checked = [];
    for (var i = 0; i < special_calendars.length; i++) {
        if (special_calendars[i].checked) {
          special_calendars_checked.push(special_calendars[i].value);
        }
      }

      if (special_calendars_checked.length > 0) {
        alert("You selected: " + special_calendars_checked.join(", "));
      } else {
        alert("You selected no calendar.");
      }

    //gets the optimal time values
    

}