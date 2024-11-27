document.getElementById("sendPost").addEventListener("click", () => {
  fetch("https://api.tinybird.co/v0/events?name=web_counter", {
    method: "POST",
    body: JSON.stringify({
      event: "click_on_counter",
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    }),
    headers: {
      Authorization:
        "Bearer p.eyJ1IjogImVkOWY2ZTQ1LWMxYmMtNGJlNy1hMjU1LWVlNjA2ZWY5Njk4MSIsICJpZCI6ICIxNjliYTE3Yy1lYjEyLTRhZGYtOWViYi05M2JhYTRjNzU2MzIiLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.FCUpMEl4o9YPp-1MkpNWDx-dGeor8mBAfhJcM04Z664",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});

document.getElementById("getAPI").addEventListener("click", () => {
  fetch(
    "https://api.tinybird.co/v0/pipes/web_counter_pipe_9784.json?token=p.eyJ1IjogImVkOWY2ZTQ1LWMxYmMtNGJlNy1hMjU1LWVlNjA2ZWY5Njk4MSIsICJpZCI6ICIwODU1Nzc4OC01NmI1LTQ1NTktODBmYS01ZmMwOTRmYjBjYzYiLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.6lY-RJ3l_PDfQMMlaThWy2Sl5D42SdfqDCoer_sgTBU"
  )
    .then((response) => response.json())
    .then((data) => {
      const count = data.data[0]["count()"];
      document.getElementById("counter").textContent = count;
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
});

// funtion to send navigation data over POST request to Tinybird
// function sendNavigationData(eventType, details) {
//   const analyticsData = {
//     event: eventType,
//     details: details,
//     timestamp: new Date().toISOString(),
//     pageUrl: window.location.href,
//     userAgent: navigator.userAgent,
//   };

//   fetch("https://api.tinybird.co/v0/events?name=events_example", {
//     method: "POST",
//     body: JSON.stringify(analyticsData),
//     headers: {
//       Authorization:
//         "Bearer p.eyJ1IjogImVkOWY2ZTQ1LWMxYmMtNGJlNy1hMjU1LWVlNjA2ZWY5Njk4MSIsICJpZCI6ICIxNjliYTE3Yy1lYjEyLTRhZGYtOWViYi05M2JhYTRjNzU2MzIiLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.FCUpMEl4o9YPp-1MkpNWDx-dGeor8mBAfhJcM04Z664",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => {
//       console.error("Error sending navigation data:", error);
//     });
// }

// // Track internal link clicks
// document.querySelectorAll(".int_link").forEach((link) => {
//   link.addEventListener("click", (event) => {
//     const sectionId = event.target.getAttribute("href").substring(1);
//     sendNavigationData("internal_link_click", { sectionId: sectionId });
//   });
// });

// Track external link clicks
// document.querySelectorAll(".ext_link").forEach((link) => {
//   link.addEventListener("click", (event) => {
//     // const sectionId = event.target.getAttribute("href").substring(1);
//     const link_text = event.target.textContent;
//     sendNavigationData("external_link_click", { linkText: link_text });
//   });
// });

// document.querySelectorAll(".int_link").forEach((link) => {
//   link.addEventListener("click", (event) => {
//     event.preventDefault();
//     // const sectionId = event.target.getAttribute("href").substring(1);
//     const link_text = event.target.textContent;
//     sendNavigationData("external_link_click", { linkText: link_text })
//       .then(() => {
//         // After sending data, continue with the navigation
//         window.location.href = event.target.href;
//       })
//       .catch((error) => {
//         console.error("Error sending analytics data:", error);
//         // Navigate even if analytics fails
//         window.location.href = event.target.href;
//       });
//   });
// });

// document.querySelectorAll(".ext_link").forEach((link) => {
//   link.addEventListener("click", (event) => {
//     event.preventDefault();
//     // const sectionId = event.target.getAttribute("href").substring(1);
//     const link_text = event.target.textContent;
//     sendNavigationData("external_link_click", { linkText: link_text })
//       .then(() => {
//         // After sending data, continue with the navigation
//         window.location.href = event.target.href;
//       })
//       .catch((error) => {
//         console.error("Error sending analytics data:", error);
//         // Navigate even if analytics fails
//         window.location.href = event.target.href;
//       });
//   });
// });
