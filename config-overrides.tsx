const { alias } = require("react-app-rewire-alias");

function override(config) {
  alias({
    "@components": "src/components",
    "@redux" : "redux",
    "@views": "src/views",
  })(config)
  return config
}

export default override