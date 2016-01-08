var config = {
  entry: "./app/components/App.js",
  output: {
    filename: "./public/js/bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      exlude:/(node_modules|bower_components)/,
      loader: 'babel', // The module to load. "babel" is short for "babel-loader"
      query:{
      	presets:['react','es2015']
      }
  	    
    }]
  }
};

module.exports = config;