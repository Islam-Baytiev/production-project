import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DinamycModuleLoader, ReducerList }
  from 'shared/lib/components/DinamycModuleLoader/DinamycModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';

const reducers: ReducerList = {
  profile: profileReducer,
};
interface ProfilePageProps {
    className?: string;
}
const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);
  return (
    <DinamycModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DinamycModuleLoader>

  );
};

export default ProfilePage;
