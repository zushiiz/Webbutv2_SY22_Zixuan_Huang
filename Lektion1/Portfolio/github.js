function createSvgWithPath(d) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", "16");
  svg.setAttribute("width", "16");
  svg.setAttribute("viewBox", "0 0 16 16");

  svg.appendChild(path);

  return svg;
}


function createCard(element){
  const repoName = element.getAttribute("github-repository");

  fetch("https://api.github.com/repos/" + repoName, {
    method: "GET",
    headers: {
      "Accept": "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28"
    }
  }).then(response => {
    if (response.status !== 200){
      console.log("GET Request Failed");
      return;
    }

  response.json().then(data => {
    element.appendChild((() => { // name
      const e = document.createElement("div");
      e.classList.add("user");

      e.appendChild((() => { // profile img
        const f = document.createElement("img");
        f.src = data.owner.avatar_url;

        return f;
      })());

      e.appendChild((() => { // title link
        const f = document.createElement("a");
        f.href = data.owner.html_url;
        f.target = "_blank";

        f.appendChild((() => { // title text
          const g = document.createElement("h3");
          g.innerHTML = data.name;

          return g;
        })());
        
        return f;
      })());

      e.appendChild((() => { 
        const f = document.createElement("a");
        f.href = data.owner.html_url;
        f.target = "_blank";

        f.appendChild((() => {
          const g = document.createElement("p");
          g.innerHTML = "@" + data.owner.login;

          return g;
        })());
        
        return f;
      })());

      return e;
    })());

    element.appendChild((() => { // popularity
      const e = document.createElement("div");
      e.classList.add("popularity");

      e.appendChild(createSvgWithPath("M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"));

      e.appendChild((() => {
        const f = document.createElement("p");
        f.innerHTML = data.subscribers_count;
        return f;
      })());

      e.appendChild(createSvgWithPath("M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"));

      e.appendChild((() => {
        const f = document.createElement("p");
        f.innerHTML = data.stargazers_count;
        return f;
      })());

      return e;
    })());

    element.appendChild((() => { // description
      const e = document.createElement("p");
      e.classList.add("description");
      e.innerHTML = data.description;

      return e;
    })());

    element.appendChild((() => { // information
      const e = document.createElement("div");
      e.classList.add("information");

      e.appendChild((() => {
        const f = document.createElement("p");
        f.innerHTML = data.language;
        return f;
      })());

      e.appendChild(createSvgWithPath("M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"));

      let license = null;

      if (data.license == null) {
        license = "None";
      }
      else if (data.license.spdx_id == "NOASSERTION") {
        license = "Other";
      }
      else {
        license = data.license.spdx_id;
      }

      e.appendChild((() => {
        const f = document.createElement("p");
        f.innerHTML = license;
        return f;
      })());

      return e;
    })());

    });
  });
  return;
}

const elements = document.getElementsByClassName("github");

for (let i = 0; i < elements.length; i++) {
  createCard(elements[i]);
}

// notes: why so many parantheses?, what does => do?, what does .innerHTML do? How can I see data?, .target?, why const and not let?, 