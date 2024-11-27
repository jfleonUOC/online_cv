// funtion to send navigation data over POST request to Tinybird
function sendNavigationData(eventType, details) {
  const analyticsData = {
    event: eventType,
    details: details,
    timestamp: new Date().toISOString(),
    pageUrl: window.location.href,
    userAgent: navigator.userAgent,
  };

  fetch("https://api.tinybird.co/v0/events?name=events_example", {
    method: "POST",
    body: JSON.stringify(analyticsData),
    headers: {
      Authorization:
        "Bearer p.eyJ1IjogImVkOWY2ZTQ1LWMxYmMtNGJlNy1hMjU1LWVlNjA2ZWY5Njk4MSIsICJpZCI6ICIxNjliYTE3Yy1lYjEyLTRhZGYtOWViYi05M2JhYTRjNzU2MzIiLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.FCUpMEl4o9YPp-1MkpNWDx-dGeor8mBAfhJcM04Z664",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error sending navigation data:", error);
    });
}

// Track internal link clicks
document.querySelectorAll(".int_link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const sectionId = event.target.getAttribute("href").substring(1);
    sendNavigationData("internal_link_click", { sectionId: sectionId });
  });
});

// Track external link clicks
document.querySelectorAll(".ext_link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const sectionId = event.target.getAttribute("href").substring(1);
    sendNavigationData("external_link_click", { sectionId: sectionId });
  });
});
