import imageMeal from '../../assets/meals.jpeg';
import { HeaderCartButton } from './HeaderCartButton';

interface HeaderI {
  onShowCart: VoidFunction;
}

export const Header = ({ onShowCart }: HeaderI) => {
  return (
    <>
      <header className="bg-orange-400 flex px-10 py-6 items-center">
        <h1 className="text-white text-2xl font-bold">Meals</h1>

        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className="w-full">
        <img src={imageMeal} className="block w-full" alt="" />
      </div>
    </>
  );
};
