import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

// Для тест еррорбаундри
export const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);
  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);
  return (
    <Button
      onClick={onThrow}
    >
      {t('throwError')}
    </Button>
  );
};
