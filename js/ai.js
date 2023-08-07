// Show the loader before making an API request
const data_load_1 = () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
  
    // show loader
    loader.style.display = "block";
    fetch('https://openapi.programming-hero.com/api/ai/tools')
      .then(res => res.json())
      .then(data => {
        displayData_all_1(data.data.tools.slice(0, 6));
              // hide loader and show content
              loader.style.display = "none";
              content.style.display = "block";
      
      },10000);
    // extract first 6 elements
  }
  data_load_1();
  const displayData_all_1 = data_s => {
    const dataDiv = document.getElementById("data_container");
    dataDiv.innerHTML = '';
    //console.log(data_s);
    data_s.forEach(data => {
      const data_div = document.createElement("div");
      data_div.classList.add("col");
      //console.log(data);
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
  
  
  
  
      // select the ol element inside the current div element
      const featureDiv = data_div.querySelector(".feature_container");
  
      // iterate over the features array and create a new li element for each feature
      data.features.forEach(feature => {
        const feature_li = document.createElement("li");
        feature_li.innerText = feature;
        featureDiv.appendChild(feature_li);
      });
    });
    //
    //short by btn
   
  };
  
  //----------------Modal----------------------
  const loadToolDetail_1 = idTool => {
    console.log(idTool);
    const url = (`https://openapi.programming-hero.com/api/ai/tool/${idTool}`);
    fetch(url)
      .then(res => res.json())
      .then(data => displayToolDetail_1(data.data))
    // .then(data => console.log(data.data))
    // console.log(idMeal);
    //console.log(data);
  
  }
  
  const displayToolDetail_1 = tool => {
  
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.getElementById('card-desc').innerText = tool.description;
    const pricing_div = document.getElementById('div_pricing');
    pricing_div.innerText = '';
    const create_pricing_div_1 = document.createElement('div');
    const create_pricing_div_2 = document.createElement('div');
    const create_pricing_div_3 = document.createElement('div');
    create_pricing_div_1.classList.add('pricing_div','one');
    create_pricing_div_2.classList.add('pricing_div','two');
    create_pricing_div_3.classList.add('pricing_div','three');
    create_pricing_div_1.innerHTML = `</p>${tool.pricing ? tool.pricing[0].price : "Free Of Cost"}</p> <p> ${tool.pricing ? tool.pricing[0].plan : "Basic"}</p>`;
    create_pricing_div_2.innerHTML= `<p>${tool.pricing ? tool.pricing[1].price : "Free Of Cost"}</p> <p>  ${tool.pricing ? tool.pricing[1].plan : "Pro"}</p>`;
    create_pricing_div_3.innerHTML=`<p>${tool.pricing ? tool.pricing[2].price : "Free Of Cost"}</p> <p>  ${tool.pricing ? tool.pricing[2].plan : "Enterprise"}</p>`;
    //create_pricing_div.innerHTML = `<p>${pricing1? pricing1.price : "Free of Cost" }</p> <p> ${pricing1.plan}</p>`;
    pricing_div.appendChild(create_pricing_div_1);
    pricing_div.appendChild(create_pricing_div_2);
    pricing_div.appendChild(create_pricing_div_3);
  
  
  
    //--features in modal
  
    const object_length = Object.keys(tool.features).length;
    const feature_div = document.getElementById('ul_feature');
    feature_div.innerText = '';
    for (let i = 1; i <= object_length; i++) {
      //console.log(tool.features[i].feature_name);
      const create_feature_li = document.createElement('li');
      //create_feature_li.innerText = tool.features[i].feature_name;
      create_feature_li.innerHTML =`${tool? tool.features[i].feature_name :"No Data Found"} ;`
      feature_div.appendChild(create_feature_li);
    }
  
    //Modal integrations
    ////////////////////////////////////////////////////////////////////////////////////
  
    /////////////////////////////////////////////////////////////////////////////////////
  const integration_div = document.getElementById('ul_Intregations');
  const in_object_length = tool.integrations ? tool.integrations.length : 0;
  console.log(in_object_length);
  integration_div.innerText = '';
  
  if (tool.integrations && tool.integrations.length > 0) {
    for (let i = 0; i < tool.integrations.length; i++) {
      const create_integration_li = document.createElement('li');
      create_integration_li.innerHTML = `${tool.integrations[i]}`;
      integration_div.appendChild(create_integration_li);
    }
  } else {
    const create_integration_li = document.createElement('li');
    create_integration_li.innerHTML = "No Data Found";
    integration_div.appendChild(create_integration_li);
  }
  
    // Modal Accuracy
    ///////////////////////////////////////////////////////
  
    ///////////////////////////////////////////////////////////////
    const accuracy_div = document.getElementById('accuracy');
  if (tool.accuracy && tool.accuracy.score > 0) {
    accuracy_div.style.display = 'block';
    accuracy_div.innerHTML = `${tool.accuracy.score*100}% Accuracy`;
  } else {
    accuracy_div.style.display = 'none';
  }
  
  
    //Modal Second div image
    const image1 = document.getElementById('image_1');
    image1.innerText = '';
    const m_image = document.createElement('img');
    m_image.classList.add('img-fluid')
    const tool_img = tool.image_link[0];
    m_image.setAttribute('src', `${tool_img}`)
    image1.appendChild(m_image)
  
    //Modal Descrip input
    const input_div = document.getElementById('input');
    input_div.innerText = '';
    //input_div.innerText=tool.input_output_examples[0].input;
    input_div.innerHTML=`${tool.input_output_examples?tool.input_output_examples[0].input : "Can you give any example?"}`;
     //Modal Descrip input
     const output_div = document.getElementById('output');
     output_div.innerText = '';
     //output_div.innerText=tool.input_output_examples[0].output;
     output_div.innerText=`${tool.input_output_examples?tool.input_output_examples[0].output:"No! Not Yet! Take a break!!!"}`;
  
  
  
  
  }
  
  