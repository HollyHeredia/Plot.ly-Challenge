function optionChanged(selectedID){
    // Check if value is selected
    console.log(selectedID);
    // Read json file
    d3.json("data/samples.json").then(data)
    d3.select(#selDataset).html("");
    // Select value from dropdown menu
    data.metadata.forEach(item => {
    d3.select(#selDataset).append('option').attr('value', item.id).text(item.id);
    });
    // Filter Metadata for selected ID from dropdown
    const idMetadata = data.metadata.filter(item=> (item.id == selectedID));
    // Check the metadata loaded for the selected ID
    console.log(idMetadata);
    
    // Clear dropdown
    d3.select("#selDataset").html("");   
    
    // Select the metadata array and for each item append the item ID and adds ID to dropdown
    data.metadata.forEach(item =>
         {
          // console.log(item.id);
         d3.select ("#selDataset").append('option').attr('value', item.id).text(item.id);
         });
    // Selected value is passed
    d3.select("#selDataset").node().value = selectedID;
    // Filter Metadata for selected ID from dropdown
    const idMetadata = data.metadata.filter(item=> (item.id == selectedID));
     
    // Check the metadata loaded for the selected ID
    console.log(idMetadata);
    
    const panelDisplay = d3.select("#sample-metadata");
    panelDisplay.html("");
    Object.entries(idMetadata[0]).forEach(item=> 
       {
          // console.log(item);
          panelDisplay.append("p").text(`${item[0]}: ${item[1]}`)
       });