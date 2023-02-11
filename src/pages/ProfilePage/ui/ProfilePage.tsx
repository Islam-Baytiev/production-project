import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DinamycModuleLoader, ReducerList }
  from 'shared/lib/components/DinamycModuleLoader/DinamycModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducerList = {
  profile: profileReducer,
};
interface ProfilePageProps {
    className?: string;
}
const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  return (
    <DinamycModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        {t('hello')}
      </div>
    </DinamycModuleLoader>

  );
};

export default ProfilePage;
