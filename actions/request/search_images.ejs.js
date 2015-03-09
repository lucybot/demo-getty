<%
  var pathSuffix = '';
  var type = Lucy.answer('creativeOrEditorial');
  if (type && type !== 'both') {
    pathSuffix = '/' + type;
  }
-%>
<%-
  Lucy.request({
    method: 'get',
    returns: 'json',
    protocol: 'https',
    domain: 'api.gettyimages.com',
    path: 'v3/search/images' + pathSuffix,
    headers: {
      'Api-Key': Lucy.answer('apiKey'),
    },
    query: {
      'phrase': {answer: 'query'},
      'specific_people': {answer: 'specific_people'},
      'number_of_people': {join: {answer: 'number_of_people'}, on: ','},
      'age_of_people': {join: {answer: 'age_of_people'}, on: ','},
      'ethnicity': {join: {answer: 'ethnicity'}, on: ','},
      'exclude_nudity': {answer: 'exclude_nudity'},
      'file_types': {join: {answer: 'file_types'}, on: ','},
      'graphical_styles': {join: {answer: 'graphical_styles'}, on: ','},
      'orientations': {join: {answer: 'orientations'}, on: ','},
      'prestige_content_only': {answer: 'prestige_content_only'},
      'page_size': 10,
    }
  })
%>
