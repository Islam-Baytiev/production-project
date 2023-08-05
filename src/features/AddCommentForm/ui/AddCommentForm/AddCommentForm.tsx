import React, { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DinamycModuleLoader, ReducerList }
  from 'shared/lib/components/DinamycModuleLoader/DinamycModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/getAddCommentForm';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};
const AddCommentForm = memo((props: AddCommentFormProps) => {
  const dispatch = useAppDispatch();
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    if (text) {
      onSendComment(text);
    }
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DinamycModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          placeholder={t('Введите комментарий')}
          value={text}
          onChange={onCommentTextChange}
          className={cls.input}
        />
        <Button onClick={onSendHandler}>{t('Отправить')}</Button>
      </div>
    </DinamycModuleLoader>

  );
});

export default AddCommentForm;
