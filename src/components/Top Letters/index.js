import './index.scss';
import { Link } from 'react-router-dom';

export default function TopLetters() {

  return (
    <Link className="top-letters" to="/">
        <div className='tb'>tb.</div>
        <div className='go-home'>go home.</div>
    </Link>
  )
}