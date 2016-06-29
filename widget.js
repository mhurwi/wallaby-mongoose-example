const mongoose = require('mongoose');

const widgetSchema = mongoose.Schema({
  color: String
});

widgetSchema.methods = {
  foo() {
	  return 'bar'
  }
}

module.exports = mongoose.model('Widget', widgetSchema);
