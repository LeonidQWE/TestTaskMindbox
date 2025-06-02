import { Title } from 'components';
import s from './Main.module.css';

export const Main = () => {
  return (
    <div className={s.main} data-testid="main">
      <Title level={1} text={'Todos'}/>
    </div>
  )
}
