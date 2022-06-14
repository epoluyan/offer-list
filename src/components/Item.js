import PropTypes from 'prop-types';

function Item({item}) {
  if (item?.title && item.title.length > 50) {
    item.title = item.title.substr(0, 49) + '...';
  }

  if (!item?.title) {
    item.title = 'Error';
  }

  if (item.currency_code === 'USD') {
    item.level = 'level-low';
  } else if ( item.currency_code === '$') {
    item.level = 'level-medium';
  } else if ( item.currency_code ===  '€') {
    item.level = 'level-high';
  } else {
    return
  }

  if (item.quantity < 10) {
    item.level = 'level-low';
  } else if (item.quantity > 20) {
    item.level = 'level-medium';
  } else {
    item.level = 'level-high';
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img alt='Product' src={item.MainImage?.url_570xN && item.MainImage.url_570xN}></img>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{item.title}</p>
        <p className="item-price">{item.currency_code || 'Error'} {item.price || 'Error'}</p>
        <p className={item.level + ' item-quantity'}>{item.quantity || 'Error'} left</p>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Item;
