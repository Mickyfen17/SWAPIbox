import classNames from 'classnames';

class ClassNames  {
  cardFavorite(state, props) {
    return classNames({
      'card-favorite' : state || props,
      'display-card' : true
    })
  }
  btnFavorite(state) {
    return classNames({
      'btn-favorite' : state,
      'fav-button' : true
    })
  }
  cardFavoriteFirst(state, props) {
    return classNames({
      'text-favorite' : state || props,
      'display-card-text' : true,
      'first' : true
    })
  }
  textFavorite(state, props) {
    return classNames({
      'text-favorite' : state || props,
      'display-card-text' : true
    })
  }
}

export default ClassNames;