// Use the D3 library to read in `samples.json`.

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

//     * Use `sample_values` as the values for the bar chart.

//     * Use `otu_ids` as the labels for the bar chart.

//     * Use `otu_labels` as the hovertext for the chart.


var trace1 = {
  x: [sample_values],
  y: [otu_ids],
  type: "bar",
  orientation: 'h',
  text: [otu_labels]
};

var data = [trace1];

var layout = {
  title: "don't care",
  xaxis: { title: "samples"},
  yaxis: { title: "id's"}
};

Plotly.newPlot("plot", data, layout);
