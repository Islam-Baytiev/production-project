import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}
export const ArticleList = memo((props: ArticleListProps) => {
  const { t } = useTranslation();
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [cls[view]])}>
        {new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) => (
          <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
        ))}
      </div>
    );
  }
  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} className={cls.card} key={article.id} />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [cls[view]])}>
      {articles.length > 0 ? (articles.map(renderArticle)) : null}
    </div>
  );
});
