import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService } from '../actions/actionCreators';

function ServiceAdd(props) {
  const { history } = props;
  const {item, loading, error} = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleCancel = () => {
    history.push(process.env.PUBLIC_URL + '/services');
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    addService(dispatch, item.name, item.price);
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <form className="ServiceAdd" onSubmit={handleSubmit}>
      <label>
        Название
        <input name='name' onChange={handleChange} value={item.name} />
      </label>
      <label>
        Стоимость
        <input name='price' onChange={handleChange} value={item.price} />
      </label>
      <label>
        Описание
        <input name='content' value={item.content} />
      </label>
      <div className="ServiceAdd-buttons">
        <button className="ServiceAdd-button-cancel" type='button' disabled={loading} onClick={handleCancel}>Отмена</button>
        <button className="ServiceAdd-button-save" type='submit' disabled={loading}>Сохранить</button>
      </div>
    </form>
  );
}

export default ServiceAdd;
