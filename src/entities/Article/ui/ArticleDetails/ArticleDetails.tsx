import React, { memo, useEffect } from 'react';
import { DinamycModuleLoader, ReducerList }
  from 'shared/lib/components/DinamycModuleLoader/DinamycModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};
interface ArticleDetailsProps {
    id: string;
}
export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { id } = props;
  const dispatch = useAppDispatch();
  /*  const isLoading = useSelector(getArticleDetailsIsLoading); */
  const isLoading = true;
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);
  const { t } = useTranslation('article-details');

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;
  if (isLoading) {
    content = (
      <div>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={24} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </div>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке')}
      />
    );
  } else {
    content = (
      <div>
        <p>1</p>
      </div>
    );
  }
  return (
    <DinamycModuleLoader reducers={reducers} removeAfterUnmount>
      {content}
    </DinamycModuleLoader>
  );
});
