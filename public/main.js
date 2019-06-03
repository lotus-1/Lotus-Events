// document.getElementById('button').addEventListener('onclick', function(e) {
//   e.preventDefault();
// fetch("/add-event")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     // var events = JSON.parse(data);
//     console.log("this is our data:", data);
//     var table = document.getElementById("events-table");
//     data.forEach(function(info) {
//       var row = document.createElement("tr");
//
//       var userTd = document.createElement("td");
//       userTd.textContent = info.name;
//       row.appendChild(userTd);
//
//       var eventTd = document.createElement("td");
//       eventTd.textContent = info.events;
//       row.appendChild(eventTd);
//
//       var dateTd = document.createElement("td");
//       dateTd.textContent = info.event_date;
//       row.appendChild(dateTd);
//
//       var commentTd = document.createElement("td");
//       commentTd.textContent = info.comment;
//       row.appendChild(commentTd);
//
//       table.appendChild(row);
//     });
//   })
//
//   .catch(function(error) {
//     console.log("ERROR", error);
//   });
