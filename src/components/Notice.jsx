import React from "react";

window.addEventListener("load", () => {
  const notice = document.getElementById("devNotice");
  notice.style.display = "block";

  setTimeout(() => {
    notice.style.display = "none";
  }, 4000); // visible for 4 seconds
});



export default function Notice(param) {return(
    <div id="devNotice" class="notice">
        <p>
          <strong>Currently in Dev Mode</strong>
          <br />
          Ongoing fine-tuning...
          <br />
          Feel free to take a look.
        </p>
      </div>
)  }