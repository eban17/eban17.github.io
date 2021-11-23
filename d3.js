	
d3.selectAll('button').on('click', function (e) {
    console.log(e, this);
    importCSV(d3.select(this).attr('id') + '.csv');
  });
      
  var margin = {top: 20, right: 180, bottom: 80, left: 180},
      width = 600
      height = 399 
  
  var svg = d3.select("body").append("svg")
      .attr("width", 900)
      .attr("height", 700 )
      .attr("class", "color")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  d3.csv("world_dataset.csv", function(error, data){
  
      // Since there were 150 countries I filtered to 50
      var data = data.filter(function(d){return d.rank <34 });
      // Get every column value
      var elements = Object.keys(data[0])
          .filter(function(d){
              return ((d != "Rank") & (d != "Country"));
          });
      var selection = elements[0];
    
  
      var y = d3.scale.linear()
              .domain([0, d3.max(data, function(d){
                  return +d[selection];
              })])
              .range([height, 0]);
  
      var x = d3.scale.ordinal()
              .domain(data.map(function(d){ return d.Country;}))
              .rangeBands([0, width]);
  
  
      var xAxis = d3.svg.axis()
          .scale(x)
        .orient("bottom");
  
      var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left")
  
          svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
          .selectAll("text")
          .style("font-size", "15px")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", "-.55em")
            .attr("transform", "rotate(-90)" )
          .style('fill','white' );
       
      
      svg.selectAll("text")	
      
  
       svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
  
      svg.selectAll("rectangle")
          .data(data)
          .enter()
          .append("rect")
          .attr("class","rectangle")
          .attr("width", width/data.length)
          .attr("height", function(d){
              return height - y(+d[selection]);
          })
          .attr("x", function(d, i){
              return (width / data.length) * i ;
          })
          .attr("y", function(d){
              return y(+d[selection]);
          })
          .append("title")
          .text(function(d){
              return d.Country + " : " + d[selection];
          });
              
  
      var selector = d3.select("#drop")
          .append("select")
          .attr("id","dropdown")
      
          .on("change", function(d){
              selection = document.getElementById("dropdown");
  
              y.domain([0, d3.max(data, function(d){
  
                  return +d[selection.value];})]);
  
              yAxis.scale(y);
  
              d3.selectAll(".rectangle")
                     .transition()
                  .attr("height", function(d){
                      return height - y(+d[selection.value]);
                      
                  })
                  
                  .attr("x", function(d, i){
                      return (width / data.length) * i ;
                  })
                  .attr("y", function(d){
                      return y(+d[selection.value]);
                  })
                     .ease("linear")
                     .select("title")
                     .text(function(d){
                         return d.rank + " : " + d[selection.value];
  
                     });
                     
                     
        
                 d3.selectAll("g.y.axis")
                     .transition()
                     .call(yAxis);
                     
              
  
           });
           
      
          
      
    svg.append('text')
        .attr('x', 350)
      .attr('y', -4)
      .attr('text-anchor', 'middle')
      .text('World Happiness Report')
      .style('fill','white' )
  
  
      svg.append('text')
      .attr('x', 300)
      .attr('y', 600)
      .attr('text-anchor', 'middle')
      .text('Countries')
      .style('fill','white')

      svg.append('text')
      .attr('x', 600)
      .attr('y', 600)
      .attr('text-anchor', 'middle')
      .text('Source: Gallup World Poll')
      .style('fill','white')
  
      selector.selectAll("option")
        .data(elements)
        .enter().append("option")
        .attr("value", function(d){
          return d;
        })
        .text(function(d){
          return d;
        })
  
  
  });