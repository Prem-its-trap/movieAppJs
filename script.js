function search() {
  const title = document.getElementById("title").value;
  const row = document.getElementById("row");
  const apikey = document.getElementById("API_Key").value;
  if (apikey.trim() === "") {
    row.innerHTML = "";
    const heading = document.createElement("h1");
    heading.innerHTML = "Enter API Key";
    heading.style.color = "white";
    row.appendChild(heading);
    return;
  } else {
    row.innerHTML = "";
  }
  if (title.trim() === "") {
    row.innerHTML = "";
    const heading = document.createElement("h1");
    heading.innerHTML = "Enter Title";
    heading.style.color = "white";
    row.appendChild(heading);
    return;
  } else {
    row.innerHTML = "";
  }

  //   const apikey = "";
  const api = `https://www.omdbapi.com/?s=${title}&apikey=${apikey}`;

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      if (data === "") {
        row.innerHTML = `<img src="assets/loading-gif.gif">`;
      } else {
        // row.innerHTML = "";
      }
      const { Search } = data;
      console.log(Search);
      Search.map((value) => {
        console.log(value);
        const crd = document.createElement("div");
        crd.setAttribute("class", "col-sm-3");
        crd.innerHTML = `<div>
        <div class="card">
          <div class="img">
            <img src=${value.Poster} class="img-fluid" alt="" />
          </div>
          <div class="title">
            <span>${value.Year}</span>
            <h3>${value.Title}</h3>
          </div>
          <span><a>More</a></span>
        </div>
      </div>`;
        row.append(crd);
      });
    })
    .catch((err) => {
      console.log(err.message);
      //   const errMsg = document.createElement("h1");
      //   errMsg.innerText = err;
      //   errMsg.style.color = "white";
      row.innerHTML =
        "Something went wrong, Please type correct api key or title";
      row.style.color = "red";
    });
}
