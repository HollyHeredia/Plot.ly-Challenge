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
       });   // BAR CHART
 
    // Filter sample array data for the selected ID
    const idSample = data.samples.filter(item => parseInt(item.id) == selectedID);
    
//Check values
    console.log(typeof parseInt(item.id));
    console.log(idSample[0].sample_values);  
    console.log(idSample[0].otu_ids);  
    console.log(idSample[0].otu_labels);  
    
    // Slice top 10 sample values
    var sampleValue = idSample[0].sample_values.slice(0,10);
    sampleValue= sampleValue.reverse();
    var otuID = idSample[0].otu_ids.slice(0,10);
    otuID = otuID.reverse();
    var otuLabels = idSample[0].otu_labels
    otuLabels = otuLabels.reverse();
 
   // Slice top 10 sample values
   var sampleValue = idSample[0].sample_values.slice(0,10);
   sampleValue= sampleValue.reverse();
   var otuID = idSample[0].otu_ids.slice(0,10);
   otuID = otuID.reverse();
   var otuLabels = idSample[0].otu_labels
   otuLabels = otuLabels.reverse();

    // Check values
     console.log(sampleValue);
     console.log(otuID);
     console.log(otuLabels);
