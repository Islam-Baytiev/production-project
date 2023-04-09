import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesDetailsPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <p>Details</p>
    </div>
  );
};

export default memo(ArticlesDetailsPage);
