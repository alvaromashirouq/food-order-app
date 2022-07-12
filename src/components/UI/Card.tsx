import clsx from 'clsx';
import { Children, FC, PropsWithChildren } from 'react';

interface CardI {
  className?: string;
}

export const Card: FC<PropsWithChildren & CardI> = ({
  children,
  className
}) => {
  return (
    <div className={clsx('px-4 shadow rounded-2xl bg-white', className)}>
      {children}
    </div>
  );
};
