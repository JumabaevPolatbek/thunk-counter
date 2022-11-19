import { CardContent } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { selectCuount } from './store/select';
import { store } from './store';
import { decreaseCount, increaseCount } from './store/actions';

function App() {
  const state = useSelector(selectCuount)
  return (
    <div className='container'>
        <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
        <Typography sx={{textAlign:'center'  }} variant='h3'>Counter</Typography>
        <CardContent className='card' sx={{height:'224px',display:'flex',justifyContent:'space-between',flexDirection:'column',alignItems:'center'}}>
          <Typography variant='h4'>
              {state}
          </Typography>
          <div className='btns'>
              <Button variant='contained' color='primary' onClick={()=>store.dispatch(decreaseCount())}>-</Button>
              <Button variant='contained' color='error' onClick={()=>store.dispatch(increaseCount())}>+</Button>
          </div>
        </CardContent>
        </CardContent>
    </div>
  )
}

export default App;
