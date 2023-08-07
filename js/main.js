// Show the loader before making an API request
const data_load = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        //data.data.tools[0]
        //.then(data => displayData_all(data.data.tools))
        .then(data => displayData_all_1(data.data.tools.slice(0, 12)))
}

const displayData_all = data_s => {
    const dataDiv = document.getElementById("data_container");
    dataDiv.innerHTML = '';

    data_s.forEach(data => {
        const data_div = document.createElement("div");
        data_div.classList.add("col");
        //console.log(data);
        //<i class="fa-light fa-calendar"></i>
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
              <p><img src="image/icons8-baby-calendar-32.png" alt="">${data.published_in}</p>
            </div>
            <div style="margin-left: auto;">
              <button onclick="loadToolDetail(${data.id})" type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" class="btn" style="border-radius: 50%; border-color: lightblue;float: right;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg></button>
            </div>
          </div>
        </div>
      `;
        dataDiv.appendChild(data_div);

        // select the ol element inside the current div element
        const featureDiv = data_div.querySelector(".feature_container");
        //const priceDiv = document.getElementById("div_pricing");

        // iterate over the features array and create a new li element for each feature
        data.features.forEach(feature => {
            const feature_li = document.createElement("li");
            feature_li.innerText = feature;
            featureDiv.appendChild(feature_li);
            // const price_div = document.createElement("div");
            // price_div.innerText=
            
        });
    });
};
