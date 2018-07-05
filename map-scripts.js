(function(){ 
  
// let checkCoords = document.getElementById("show-coords");
let checkClusters = document.getElementById("show-clusters");
// let checkLabels = document.getElementById("show-labels");
// let checkLines = document.getElementById("show-lines");
// let checkOldLines = document.getElementById("show-oldlines");
let checkAppendices = document.getElementById("show-appendices");
// let checkExchanges = document.getElementById("show-exchanges");

// let coords = document.getElementById("coordinates");
// let exchanges = document.getElementById("exchanges");
let appendices = document.getElementById("appendices");
// let lines = document.getElementById("lines");
// let labels = document.getElementById("labels");
let clusters = document.getElementById("clusters");

let check1 = document.getElementById("show-1");
let check2 = document.getElementById("show-2");
let check3 = document.getElementById("show-3");
let check4 = document.getElementById("show-4");
let check5 = document.getElementById("show-5");
let check6 = document.getElementById("show-6");
let check7 = document.getElementById("show-7");
let check8 = document.getElementById("show-8");
let check9 = document.getElementById("show-9");
let check10 = document.getElementById("show-10");
let check11 = document.getElementById("show-11");
let check12 = document.getElementById("show-12");
let check13 = document.getElementById("show-13");
let check14 = document.getElementById("show-14");

// HIDE AND SHOW INDIVIDUAL LINES
let linesOnly = document.querySelectorAll("[id$='line-group']");
// console.log(linesOnly);
let labelsOnly = document.querySelectorAll("[id$='labels-group']");
let connectors = document.getElementById("exchange-connectors");
// console.log(labelsOnly);
let toggleIL = [false,false,false,false,false,false,false,false,false,false,false,false,false,false];
for (let i=1; i<=14; i++) {
  let item = eval(`check${i}`);
  item.addEventListener("change", function(){
    let num = i - 1;
    let lineID = linesOnly[num].id;
    let labelsID = labelsOnly[num].id;
    let line = document.getElementById(lineID);
    let labels = document.getElementById(labelsID);
    let consID = `connect-${i}`;
    console.log(consID);
    let connections = document.getElementsByClassName(consID);
    console.log(connections, connections.length);
    // console.log(line, labels);
    if (toggleIL[num]) { // currently hidden
      line.classList.remove("hide");
      labels.classList.remove("hide");
      for (c=0; c<connections.length; c++){
        console.log(`show c: ${connections[c]}`);
        connections[c].classList.remove("hide");
      }
      toggleIL[num] = false;
    } else { // currently shown
      line.classList.add("hide");
      labels.classList.add("hide");
      for (c=0; c<connections.length; c++){
        console.log(`hide c: ${connections[c]}`);
        connections[c].classList.add("hide");
      }
      toggleIL[num] = true;
    }
  });
}

// hover lines and labels
for (let i=1; i<=14; i++) {
  let num = i - 1;
  let lineID = linesOnly[num].id;
  let labelsID = labelsOnly[num].id;
  let line = document.getElementById(lineID);
  let labels = document.getElementById(labelsID);
  // console.log(`loop ${i}: ${lineID} ${labelsID}`);
  line.addEventListener("mouseover", function(){
    // console.log(`mouseover ${lineID} ${i}`);
    for (let k=1; k<=14; k++) {
      let numk = k - 1;
      // console.log(`${k} add dim to ${linesOnly[numk].id} and ${labelsOnly[numk].id}`);
      linesOnly[numk].classList.add("dim");
      labelsOnly[numk].classList.add("dim");
      appendices.classList.add("dim");
      clusters.classList.add("dim");
    }
    // console.log(`remove dim from ${lineID} and ${labelsID}`);
    line.classList.remove("dim");
    labels.classList.remove("dim");
    connectors.classList.add("dim");
  });
  line.addEventListener("mouseout", function(){
    // console.log(`mouseout ${lineID} ${num}`);
    for (let k=1; k<=14; k++) {
      let numk = k - 1;
      // console.log(`${k} remove dim to ${linesOnly[numk].id}`);
      linesOnly[numk].classList.remove("dim");
      labelsOnly[numk].classList.remove("dim");
      connectors.classList.remove("dim");
      appendices.classList.remove("dim");
      clusters.classList.remove("dim");
    }
  });
}




// let toggleCoords = false; // unhidden
let toggleClusters = false; // unhidden
// let toggleExchanges = true; // hidden
let toggleAppendices = false; // unhidden
// let toggleLines = false; // unhidden
// let toggleLabels = false; // unhidden
// let toggleOldLines = false; // unhidden

// checkCoords.addEventListener("change", function(){
//   if (toggleCoords) {
//     coords.classList.remove("hide");
//     toggleCoords = false;
//   } else {
//     coords.classList.add("hide");
//     toggleCoords = true;
//   }
// });


// HIDE AND SHOW OLD LINES
// let oldLines = document.querySelectorAll(".old-line");
// let toggleOL = [false,false,false,false,false,false,false,false,false,false,false,false,false,false];
// checkOldLines.addEventListener("change", function(){
//   for (i=0; i<oldLines.length; i++) {
//     if (toggleOL[i]) {
//       oldLines[i].classList.remove("hide");
//       toggleOL[i] = false;
//     } else {
//       oldLines[i].classList.add("hide");
//       toggleOL[i] = true;
//     }
//   }
// });

// checkExchanges.addEventListener("change", function(){
//   if (toggleExchanges) {
//     exchanges.classList.remove("hide");
//     toggleExchanges = false;
//   } else {
//     exchanges.classList.add("hide");
//     toggleExchanges = true;
//   }
// });

checkClusters.addEventListener("change", function(){
  if (toggleClusters) {
    clusters.classList.remove("hide");
    toggleClusters = false;
  } else {
    clusters.classList.add("hide");
    toggleClusters = true;
  }
});

checkAppendices.addEventListener("change", function(){
  if (toggleAppendices) {
    appendices.classList.remove("hide");
    toggleAppendices = false;
  } else {
    appendices.classList.add("hide");
    toggleAppendices = true;
  }
});

// checkLines.addEventListener("change", function(){
//   if (toggleLines) {
//     lines.classList.remove("hide");
//     toggleLines = false;
//   } else {
//     lines.classList.add("hide");
//     toggleLines = true;
//   }
// });

// checkLabels.addEventListener("change", function(){
//   if (toggleLabels) {
//     labels.classList.remove("hide");
//     toggleLabels = false;
//   } else {
//     labels.classList.add("hide");
//     toggleLabels = true;
//   }
// });






  
})();