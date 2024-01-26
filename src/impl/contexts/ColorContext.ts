import { createContext } from 'react';

type ContextType = Readonly<{
	color: string;
	setColor: React.Dispatch<React.SetStateAction<string>>;
}>;

export default createContext<ContextType>({
	color: '#2e3134',
	setColor: () => {},
});
