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
