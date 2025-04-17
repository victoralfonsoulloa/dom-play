// alert("Hi");

/*

With a single click, highlight (bold or otherwise) all lines for a specific actor in a play

Un-highlight (normal or otherwise) all lines from all other actors in the play
The function(s) created to do the work must accommodate any number of actors, and any number of additional lines added to the page

HTML "hooks" may be added to the page, meaning you can edit the HTML to enable your scripts to perform properly

*/

// document.querySelector(".hamlet").style.backgroundColor = "yellow";

const spans = document.querySelectorAll('div#play span');

console.log(spans);

for (const mySpan of spans) {
  mySpan.addEventListener('click', function (evt) {
    let myActor = mySpan.dataset.actor;
    highlightActor(myActor);
    //alert(myActor);
  });
}

function highlightActor(myActor) {
  for (const mySpan of spans) {
    if (myActor == mySpan.dataset.actor) {
        mySpan.style.backgroundColor = 'orange';
    } else {
        mySpan.style.backgroundColor = 'white';
    }
  }
}

function highlight(el) {
  if (el.style.backgroundColor == 'orange') {
    el.style.backgroundColor = 'white';
  } else {
    el.style.backgroundColor = 'orange';
  }
}