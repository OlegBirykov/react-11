import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, editService, addService, addServiceFinish } from '../actions/actionCreators';

function ServiceAdd(props) {
  const { history, match } = props;
  const { item, loading, loadingError, adding, addingError, finish } = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  useEffect(() => {
    editService(dispatch, match.params.id);
  }, [dispatch, match.params.id]);

  useEffect(() => {
    if (finish) {
      dispatch(addServiceFinish());
      history.push(process.env.PUBLIC_URL + '/services');      
    };
  // eslint-disable-next-line
  }, [finish]);

  const handleError = () => {
    editService(dispatch, match.params.id);
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleCancel = () => {
    history.push(process.env.PUBLIC_URL + '/services');
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    addService(dispatch, item);
  }

  if (loadingError) {
    return (
      <>
        <p className="error">{loadingError}</p>
        <button className="error-button" onClick={handleError}>Попробовать ещё раз</button>
      </>
    )
  }

  if (loading) {
    return (
      <svg className="spinner ServiceAdd-spinner" viewBox="0 0 50 50">
        <circle className="spinner-circle ServiceAdd-spinner-circle" cx="25" cy="25" r="20" fill="none"></circle>
      </svg>
    )
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
        <input name='content' onChange={handleChange} value={item.content} />
      </label>
      <div className="ServiceAdd-buttons">
        <button className="ServiceAdd-button-cancel" disabled={adding} onClick={handleCancel}>Отмена</button>
        <button className="ServiceAdd-button-save" type='submit' disabled={adding}>Сохранить</button>
      </div>
      {addingError && <p className="ServiceAdd-error">{addingError}</p>}
    </form>
  );
}

export default ServiceAdd;
