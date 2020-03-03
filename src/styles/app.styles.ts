import {createStyles, Theme} from '@material-ui/core';

const AppStyles = ({spacing, palette} : Theme)  => createStyles({
  app: {
    display: 'flex',
    padding: spacing(2),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#KM4422'
  },
  header: {

  },
  main: {

  },
  footer: {

  }
});

export default AppStyles;