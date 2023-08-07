// set initial index to 6 (since first 6 elements are already displayed)
const data_load_2 = () => {
  fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayData_all_2(data.data.tools.slice(0, 6)));
  // extract first 6 elements
}

const displayData_all_2 = data_s => {
  const dataDiv = document.getElementById("data_container");
  dataDiv.innerHTML='';

  // sort the data by published_in in ascending order
  data_s.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));

  data_s.forEach(data => {
    const data_div = document.createElement("div");
    data_div.classList.add("col");

    data_div.innerHTML = `
      <div class="card h-100">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>
          <ol class="feature_container"></ol>
        </div>
        <div class="card-footer">
          <div>
            <h5 class="card-title">${data.name}</h5>
            <p><img src="image/icons8-tear-off-calendar-24.png" alt="">${data.published_in}</p>
          </div>
          <div style="margin-left: auto;">
            <button style="background-color:#FAA0A0;border-radius:50%" onclick="loadToolDetail_1('${data.id}')" type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" class="btn" style="border-radius: 50%; border-color: lightblue;float: right;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg></button>
          </div>
        </div>
      </div>
    `;
    dataDiv.appendChild(data_div);

    const featureDiv = data_div.querySelector(".feature_container");

    data.features.forEach(feature => {
      const feature_li = document.createElement("li");
      feature_li.innerText = feature;
      featureDiv.appendChild(feature_li);
    });
  });
};

