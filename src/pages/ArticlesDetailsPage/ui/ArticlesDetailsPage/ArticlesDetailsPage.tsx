import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DinamycModuleLoader, ReducerList }
  from 'shared/lib/components/DinamycModuleLoader/DinamycModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  fetchCommentsByArticleId,
} from 'pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { articleDetailsCommentsReducer, getArticeComments } from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
  classname?: string;
}

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};
const ArticlesDetailsPage = (props: ArticlesDetailsPageProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string;}>();
  const { classname } = props;
  const comments = useSelector(getArticeComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <DinamycModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [classname])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('Комментарии')} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </DinamycModuleLoader>

  );
};

export default memo(ArticlesDetailsPage);
