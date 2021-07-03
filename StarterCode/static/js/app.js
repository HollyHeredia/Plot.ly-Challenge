// Function for dropdown menu

function optionChanged(selectedID){
    // Check if value is selected
    console.log(selectedID);
    // Read json file
    d3.json("samples.json").then(data)
    d3.select(#selDataset).html("");

    // Select value from dropdown menu
    data.metadata.forEach(item => {
    d3.select(#selDataset).append('option').attr('value', item.id).text(item.id);
    });
    // Filter Metadata for selected ID from dropdown
    const idMetadata = data.metadata.filter(item=> (item.id == selectedID));
    // Check the metadata loaded for the selected ID
    console.log(idMetadata);
        
    
}