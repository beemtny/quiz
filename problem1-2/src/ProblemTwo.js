import { useEffect, useState } from 'react';
import './ProblemTwo.css';

const ProblemTwo = () => {
  var [loading, setLoading] = useState(true);
  var [initialData, setInitialData] = useState([]);
  var [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch('https://api.publicapis.org/categories')
      .then((res) => res.json())
      .then((result) => {
        setInitialData(result);
        setFilterData(result);
        setLoading(false);
      });
  }, []);

  const onChangeInput = (e) => {
    var input = e.target.value;
    var newFilterData = [];
    initialData.forEach((data) => {
      if (data.toLowerCase().includes(input.toLowerCase())) {
        newFilterData.push(data);
      }
    });
    setFilterData(newFilterData);
  };

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <input type='text' onChange={onChangeInput} />
          <br />
          <br />
          <table className='tableStyle'>
            <tbody>
              {filterData.map((element, index) => (
                <tr key={index}>
                  <td className='tableStyle'>{element}</td>{' '}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default ProblemTwo;
