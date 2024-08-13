import { useModel } from '@umijs/max';
import styles from './index.less';
import { Button } from 'antd-mobile'

const HomePage: React.FC = () => {
  const { name} = useModel('global');
  return (
      <div className={`${styles.container} mt-4 flex justify-center items-center`}>
        <Button className='mt-[10px]' color='primary'>{ name }</Button>
      </div>
  );
};

export default HomePage;
