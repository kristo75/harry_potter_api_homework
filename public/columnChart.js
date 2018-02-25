const ColumnChart = function (title_text, name, data, categories) {
  const container = document.querySelector("#column-chart");
  const chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: container
    },
    title: {
      text: title_text
    },
    series: [{
      name: name,
      data: data
    }],
    xAxis: {
      categories: categories
    }
  });

}
