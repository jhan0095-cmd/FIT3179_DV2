var chart = "state_chart.vg.json";

vegaEmbed("#state-chart", chart, {
  actions: false
})
  .then(function (result) {
    console.log("State chart loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading state chart:", error);
  });

vegaEmbed("#disaster-map", "disaster_map.vg.json", {
  actions: false
})
  .then(function (result) {
    console.log("Disaster map loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading disaster map:", error);
  });

vegaEmbed("#calendar-heatmap", "calendar_heatmap.vg.json", {
  actions: false
})
  .then(function (result) {
    console.log("Calendar heatmap loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading calendar heatmap:", error);
  });

vegaEmbed("#yearly-trend", "yearly_trend.vg.json", {
  actions: false
})
  .then(function (result) {
    console.log("Yearly trend chart loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading yearly trend chart:", error);
  });