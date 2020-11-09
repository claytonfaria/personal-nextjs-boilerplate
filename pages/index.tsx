import Typography from '@material-ui/core/Typography';
import type { Dispatch, SetStateAction } from 'react';

type HomeProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

export default function Home({ darkMode, setDarkMode }: HomeProps) {
  return (
    <>
      <Typography>Boilerplate Nextjs</Typography>
    </>
  );
}
