
import * as API from "../apis/api"

function Page1(){
    return (<div>
    <span>This is the page: Page 1<span>
    <Label0 />
        <label1 />
        <label2 />
        
    )
}


//Populate chart with data from OpenAPI Specification Operation: Fetch submitted contracts for specific TIN
function Label0() {
    return (<div>
        <span>Component: Label0</span>
        <span>Column: 0</span>
        <span>Row: 0</span>
        <span>Width: 450</span>
        <span>Height: 450</span>
        <span>Chart: Scatterplot</span>
    </div>);
}
    

//Populate chart with data from OpenAPI Specification Operation: Validate CSV file 
function label1() {
    return (<div>
        <span>Component: label1</span>
        <span>Column: 1</span>
        <span>Row: 0</span>
        <span>Width: 450</span>
        <span>Height: 450</span>
        <span>Chart: Linegraph</span>
    </div>);
}
    

//Populate chart with data from OpenAPI Specification Operation: Upload CSV file 
function label2() {
    return (<div>
        <span>Component: label2</span>
        <span>Column: 2</span>
        <span>Row: 0</span>
        <span>Width: 450</span>
        <span>Height: 450</span>
        <span>Chart: Piechart</span>
    </div>);
}
    
