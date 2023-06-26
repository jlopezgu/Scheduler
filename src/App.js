import './App.css';
import Scheduler from "./components/Scheduler";


const data = [
    { start_date:'2023-06-27 6:00', end_date:'2023-06-27 8:00', text:'Event 1', id: 1},
    { start_date:'2023-06-26 10:00', end_date:'2023-06-26 18:00', text:'Event 2', id: 2 },
    { start_date:'2023-06-26 10:00', end_date:'2023-06-26 18:00', text:'Event 3', id: 3 },
];

function App() {
  return (
    <>
        <div className='dhx_cal_container' style={{width: '100%', height: '800px'}}>
            <Scheduler events={data}/>
        </div>
    </>
  );
}

export default App;
