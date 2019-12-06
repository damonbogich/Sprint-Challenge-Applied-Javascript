// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const entryPoint1 = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log(response);
    console.log(response.data);
    console.log(response.data.topics);
    response.data.topics.forEach(topic => {
        const newTab = createTab(topic);
        entryPoint1.appendChild(newTab);
    })
    
    
    
}).catch(error =>{
    console.log(error);
})

function createTab(tabs){
    const tabDiv = document.createElement('div');
    //class
    tabDiv.classList.add('tab');
    //content
    tabDiv.textContent = tabs;
    // console.log(tabs.topics);
    //not sure if line above is correct.  maybe should be tabDiv.src???
    console.log(tabs);
    
    


return tabDiv
}