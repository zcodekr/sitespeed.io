var columnsMetaData = require('../../conf/columnsMetaData.json'),
  render = require('../util/htmlRenderer');

exports.task = function(result, config, cb) {

  var renderData = {
    'pages': result.pages,
    'columnsMeta': columnsMetaData,
    'config': config,
    'ruleDictionary': result.ruleDictionary, // TODO
    'numberOfPages': result.numberOfAnalyzedPages,
    'pageMeta': {
      'title': 'All pages information',
      'description': 'All request data, for all the pages',
      'isPages': true
    }
  };

  render('pages', renderData, config.run.absResultDir, cb);
};