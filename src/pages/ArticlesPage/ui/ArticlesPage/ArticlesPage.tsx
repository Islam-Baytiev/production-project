import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <p>ArticlePage</p>
    </div>
  );
};

export default memo(ArticlesPage);
